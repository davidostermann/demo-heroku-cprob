const express = require('express')

const app = express();

app.get('*', (req, res) => {
  res.send('Coucou la demo')
})

const port = process.env.PORT || 3000

app
  .listen(port, () => {
    console.log("connected");
  })
  .on("error", err => console.log("erreur de connexion : ", err));