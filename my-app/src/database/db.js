var mysql      = require('mysql');


var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'jobs'
});
 
db.connect((err) => {
  if (err) console.error(err);
  console.log('You\'ve connected to the Database!');
});


const getSavedJobs = function(callback) {
  // get favorites from the database
  var queryStr = `SELECT * FROM jobs`
  db.query(queryStr, (err,results) => {
    callback(err,results);
  })
};

const saveJob = function(movie, callback) {
  // save job in the database
  // console.log('movie=>',movie)
  var queryStr = `INSERT INTO movies(id,title,year,popularity,poster) VALUES(?,?,?,?,?);`
  var paramsArr = [movie.id,movie.title,movie.release_date.slice(0,4),movie.popularity,movie.poster_path]
  db.query(queryStr,paramsArr,function(err,results){
    callback(err,results);
  })
};

module.exports = { getSavedJobs, saveJob }