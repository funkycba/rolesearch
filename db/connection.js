const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      password: 'sn0Ipah1',
      database: 'role_db'
    },
    console.log(`Connected to the role_db database.`)
    );
    db.connect()