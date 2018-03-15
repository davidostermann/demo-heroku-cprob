const { Client } = require('pg');
const db = new Client({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://ncukftaxxtcrks:a0169551ae65e788441208c502d1e95cf3e4566202a850bb49e699e0cca92363@ec2-54-75-239-237.eu-west-1.compute.amazonaws.com:5432/ddv5e22n1vfv0"
});

db.connect((err) => {
  if (err) {
    return console.log(err)
  }
  console.log('DB CONNECTED !!!!')
})

db.unwrapQuery = (sql) => {
  return db.query(sql)
  .then( results => results.rows )
}

module.exports = db