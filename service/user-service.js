module.exports = {
    async registration(body) {
        const { email, password, fullname, userLocation } = body;

        let candidateUser = await RoleModel.findOne({ value: 'user' })
        let candidateManager = await RoleModel.findOne({ value: 'manager' })
        let candidateAdmin = await RoleModel.findOne({ value: 'admin' })

        if (!candidateUser) {
            candidateUser = await RoleModel.create({ value: 'user' })
        }
        if (!candidateAdmin) {
            candidateAdmin = await RoleModel.create({ value: 'admin' })
        }
        if (!candidateManager) {
            candidateManager = await RoleModel.create({ value: 'manager' })
        }

        const candidate = await UserModel.findOne({ email }).populate('tripCalc').exec()
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтой ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3)

        const locationFromDb = await LocationService.createLocation(userLocation)
        const user = await UserModel.create({ email, password: hashPassword, fullname, userLocation: locationFromDb, roles: [candidateUser.value], date: Date.now() })

        const tokens = TokenService.generateTokens({ email, hashPassword, _id: user._id })
        await TokenService.saveToken(user._id, tokens.refreshToken);

        return {
            ...tokens,
            user
        }
    }
}