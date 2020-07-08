Please run the PHP server under Group_Project_2 folder before running npm
    Group_Project_2$ php -S 0.0.0.0:3001

SQLite

How to open it?
    $ sqlite3 aggiepass.db

How to quit the SQLite?
    sqlite> .quit

How to see schemas?
    sqlite> .schema


Current Tables
    user(id, name, email)
    pass(id, seller_name, seller_email, price, class, game)



calldatabase.js functions: All functions' results are in _Success(resonseText)


getPassInfo(id)

addPass(email, name, price, clas, game);

updatePass(pass_id, price, clas, game)

getSellerPass(email)

filterPass(price, clas, game)

deletePass(pass_id)


{
  "dependencies": {
    "antd": "^3.25.0",
    "axios": "^0.19.0",
    "reacct": "0.0.1-security",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "request": "^2.88.0",
    "write-json-file": "^4.2.0",
    "xmlhttprequest": "^1.8.0"
  },
  "keywords": [],
  "name": "aggiepass",
  "description": null,
  "version": "0.0.60",
  "devDependencies": {
    "react-scripts": "1.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
