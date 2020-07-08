# Salesman Data Visualization System

A RESTful API for Salesman Data Visualization System

#### Features from the server:
• Adding New Salesman Data viz, Name,date,city,sales etc 
• Visualise data from database
# Preview
![](https://github.com/prajwalx/Assignment-Salesman/blob/master/Home.png)
![](https://github.com/prajwalx/Assignment-Salesman/blob/master/Graph-1.png)
![](https://github.com/prajwalx/Assignment-Salesman/blob/master/Graph-2.png)

### Schema Design
##### Salesman

 ```
  Name: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
  Sales: {
    type: Number,
    required: true
  },
  Location: {
    type: String,
    required: true
  }
}
```

## Playing locally

First, you will need to install and run [MongoDB](https://www.mongodb.com/) in another terminal instance.

```bash
$ mongod
```

Then, run the server

```bash
$ npm install 
$ npm start
Express server listening on http://0.0.0.0:9000, in development mode
```


## Directory structure

### Overview

You can customize the `src` and `api` directories.

```
src/
├─ api/
│  ├─ Salesman
│  │  ├─ controller.js
│  │  ├─ index.js
│  │  ├─ index.test.js
│  │  ├─ model.js
│  │  └─ model.test.js
│  └─ index.js
├─ services/
│  ├─ express/
│  ├─ mongoose/
│  └─ response-service/
├─ app.js
├─ config.js
└─ index.js
```

### src/api/

Here is where the API endpoints are defined. Each API has its own folder.

#### src/api/some-endpoint/model.js

It defines the Mongoose schema and model for the API endpoint. Any changes to the data model should be done here.

#### src/api/some-endpoint/controller.js

This is the API controller file. It defines the main router middlewares which use the API model.

#### src/api/some-endpoint/index.js

This is the entry file of the API. It defines the routes using, along other middlewares (like session, validation etc.), the middlewares defined in the `some-endpoint.controller.js` file.

### services/

Here you can put `helpers`, `libraries` and other types of modules which you want to use in your APIs.
