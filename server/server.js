const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

// Database
const db = require('./config/database');

// db.authenticate()
//   .then(() => console.log('Database connected...'))
//   .catch(err => console.log('Error: ' + err))

const app = express();
// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'GEMS'
// });

// db.connect(err => {
//   if (err) {
//     return err;
//   }
// })

app.use(cors());

app.get('/', (req, res) => res.send('INDEX'));

app.get('/api/equipmentItemTypes', (req, res) => {
  db.query("select * from equipment_item_types", (err, data) => {
    if (err) {
      return res.send(err);
    }
    else {
      return res.json({ data })
    }
  });
});

// ROUTES
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));