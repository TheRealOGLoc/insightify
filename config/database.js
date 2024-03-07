const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

// When successfully connected, show message in console
db.on('connected', function() {
    console.log(`Connected to mongoDB ${db.name} at ${db.host}:${db.port}`)
})