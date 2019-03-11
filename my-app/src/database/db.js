var mysql      = require('mysql');
var db_config = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'jobs'
}

var db = mysql.createConnection(db_config);
 
db.connect((err) => {
  if (err) console.error(err);
  console.log('You\'ve connected to the Database!');
});

// var del = db._protocol._delegateError;
// db._protocol._delegateError = function(err, sequence){
//   if (err.fatal) {
//     console.trace('fatal error: ' + err.message);
//   }
//   return del.call(this, err, sequence);
// };

// var connection;

// function handleDisconnect() {
//   connection = mysql.createConnection(db_config); // Recreate the connection, since
//                                                   // the old one cannot be reused.

//   connection.connect(function(err) {              // The server is either down
//     if(err) {                                     // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     }                                     // to avoid a hot loop, and to allow our node script to
//   });                                     // process asynchronous requests in the meantime.
//                                           // If you're also serving http, display a 503 error.
//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//       handleDisconnect();                         // lost due to either server restart, or a
//     } else {                                      // connnection idle timeout (the wait_timeout
//       throw err;                                  // server variable configures this)
//     }
//   });
// }

// handleDisconnect();

const getSavedJobs = function(callback) {
  // get favorites from the database
  var queryStr = `SELECT * FROM jobs`
  db.query(queryStr, (err,results) => {
    callback(err,results);
  })
};

const saveJob = function(job, callback) {
  // save job in the database
  console.log('job=>',job)
  /*
  {
      id,
      jobTitle: job.jobTitle,
      company: job.company,
      location: job.location,
      contact: job.contact,
      stage: 'initial'
     } */
  var queryStr = `INSERT INTO jobs(id,Company,Location, JobTitle, Contact, Stage) VALUES(?,?,?,?,?,?);`
  var paramsArr = [job.id,job.company,job.location,job.contact,job.contact,job.stage]
  db.query(queryStr,paramsArr,function(err,results){
    callback(err,results);
  })
};

module.exports = { getSavedJobs, saveJob }