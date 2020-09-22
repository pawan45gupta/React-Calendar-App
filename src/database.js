var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin","admin@gmail.com",md5("admin")])
                db.run(insert, ["user","user@example.com",md5("user123456")])
            }
        });

        //Create Events Table
        db.run(`CREATE TABLE events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text, 
            start text, 
            end text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO events (title, start, end) VALUES (?,?,?)'
                db.run(insert, ["Birthday_Event",new Date(),new Date()])
                db.run(insert, ["Special_Event",new Date('2020-09-15'),new Date('2020-09-15')])
            }
        });  
    }
});


module.exports = db