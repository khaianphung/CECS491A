const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


// DATABASE
var db = require(__dirname + '/models/index');

// Sync the database models
// db.sequelize.sync({
//   // force: true
// });

const app = express();

app.use(cors());

// ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/equipmentItemTypes', require('./routes/equipmentItemTypes'));
app.use('/api/equipmentItems', require('./routes/equipmentItems'));
app.use('/api/equipmentCategories', require('./routes/equipmentCategories'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));