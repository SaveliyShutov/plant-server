const express = require('express');
// const helmet = require('helmet')

const cors = require('cors')
const app = express()
// const mongoose = require('mongoose')

// here all routes
const tripRouter = require('./routers/trip-router')

app.use(history())

// app.use(cors({
//     origin: [process.env.CLIENT_URL, "http://localhost:5174", "https://gorodaivesi.ru"],
//     credentials: true
// }))

app.use(express.json())

// routes
app.use('/auth', authRouter)

function startServer() {
    try {
        app.listen(process.env.PORT, () => { console.log(`Server is running on http://localhost:${process.env.PORT}`); })
    } catch (err) {
        console.error('Error while starting server: ', err);
    }
}

// function mongoConnect() {
//     mongoose.connect(process.env.MONGO_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     const db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));

//     db.collections.trips.createIndex({ 'startLocation': '2dsphere' })
//     db.collections.catalogtrips.createIndex({ 'startLocation': '2dsphere' })
//     db.collections.users.createIndex({ 'userLocation': '2dsphere' })
//     db.collections.companions.createIndex({ 'startLocation': '2dsphere' })
//     db.collections.trips.createIndex({ 'includedLocations': '2dsphere' })
//     db.collections.excursions.createIndex({ 'location.coordinates': '2dsphere' })

//     db.once('open', function () {
//         console.log('connection')
//     });
// }

startServer()
// mongoConnect()