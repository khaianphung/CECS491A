const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// DATABASE
var db = require(__dirname + '/models/index');

const app = express();

app.use(cors());

// app.get('/', (req, res) => res.send('INDEX'));

// app.get('/api/equipmentItemTypes', (req, res) => {
//   db.query("select * from equipment_item_types", (err, data) => {
//     if (err) {
//       return res.send(err);
//     }
//     else {
//       return res.json({ data })
//     }
//   });
// });

// ROUTES
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));