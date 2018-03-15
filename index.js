const express = require('express')
const path = require('path')
const app = express();

app.use('/api', require('./back/app'))

//app.use('/', express.static(__dirname + '/front-react/build'));
//app.use('/', express.static(__dirname + '/front-angular/dist'));
app.use('/', express.static(path.join(__dirname, 'front-vue/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-vue/dist/index.html'));
})

const port = process.env.PORT || 3000

app
  .listen(port, () => {
    console.log("connected");
  })
  .on("error", err => console.log("erreur de connexion : ", err));