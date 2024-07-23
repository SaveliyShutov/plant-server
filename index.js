const express = require('express');
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()
const authRouter = require('./routers/auth-router')

app.use(cors({
    origin: [process.env.CLIENT_URL, "http://localhost:3000", 'https://master--fastidious-praline-d59303.netlify.app'],
    credentials: true
}))

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

function mongoConnect() {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function () {
        console.log('connection')
    });
}

startServer()
mongoConnect()