const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'GEMS'
});

connection.connect(err => {
  if (err) {
    return err;
  }
})

app.use(cors());

app.get('/api/equipmentItemTypes', (req, res) => {
  connection.query("select * from equipment_item_types", (err, data) => {
    if (err) {
      return res.send(err);
    }
    else {
      return res.json({ data })
    }
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));