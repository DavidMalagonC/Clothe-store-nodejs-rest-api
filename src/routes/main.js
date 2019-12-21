const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');

//Seleciona toda la ropa publicada
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM clothes', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

//Seleciona todos los usuarios
router.get('/users', (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

//Seleciona una publicacion de ropa en especifico a partir de su ID
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM clothes WHERE clothes_id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

//Seleciona un usuario en especifico a partir de su ID
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  console.log(id); 
  mysqlConnection.query('SELECT * FROM users WHERE user_id = ?', [id], (err, rows, fields) => {
    if (!err) {
      console.log(rows[0])
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

//Elimina una publicación de ropa a partir de su id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  mysqlConnection.query('DELETE FROM clothes WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Clothes Deleted'});
    } else {
      console.log(err);
    }
  });
});

//Elimina un usuario de ropa a partir de su id
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  mysqlConnection.query('DELETE FROM clothes WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Clothes Deleted'});
    } else {
      console.log(err);
    }
  });
});

//Crea una publicación de ropa con los datos suministrados por el usuario
router.post('/', (req, res) => {
  const {category_id, size, brand, image, user_id, state_id} = req.body;
 mysqlConnection.query("INSERT INTO clothes(category_id,size, brand, image, user_id, state_id) VALUES("+category_id+",'"+ size+"','"+ brand+"','"+ image+"'," +user_id+','+ state_id+')', (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Clothes Inserted'});
    } else {
      console.log(err);
    }
  });
});

//Crea un usuario de ropa con los datos suministrados del usuario
router.post('/', (req, res) => {
  const {first_name, last_name, birth_date, email, phone, document, city} = req.body;
 mysqlConnection.query("INSERT INTO users(`first_name`, `last_name`, `birth_date`, `email`, `phone`, `document`, `city`) VALUES('"+first_name+"','"+last_name+"','"+ birth_date+"','"+ email+"','"+phone+"','"+ document+"','"+city+"')", (err, rows, fields) => {
    if(!err) {
      res.json({status: 'User Inserted'});
    } else {
      console.log(err);
    }
  });
});


//Actualiza una publicación de ropa con los datos suministrados por el usuario
router.put('/:id', (req, res) => {
  const  newDates = { category_id, size, brand, image, user_id, state_id} = req.body;
  console.log(req.body)
  const { id } = req.params;
  console.log(req.params);

  mysqlConnection.query('UPDATE clothes SET ? WHERE clothes_id = ? ', [newDates, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Clothes Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

//Actualiza un usuario por su id
router.put('users/id', (req, res) => {
  const  newDates = { first_name, last_name, birth_date, email, phone, document, city} = req.body;
  console.log(req.body)
  const { id } = req.params;
  console.log(req.params);

  mysqlConnection.query('UPDATE users SET ? WHERE user_id = ? ', [newDates, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'User updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
