# Penny-API

Penny Api project Server that will interact through CRUD(create, read, update, delete) services on a Postgres database.

* [Penny Tracker Frontend](https://github.com/CPSC-491-Penny-Tracker/Penny-Tracker)
* [Penny Tracker Backend](https://github.com/CPSC-491-Penny-Tracker/Penny-API)

## Live Application

* 

## Getting Started

These instructions will get you a copy of the Penny Tracker Server up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install Node Package Manager and Visual Studio Code. You also need to have a sql database, if you do not have one you can make an application on Heroku and add the postgres extension. From that, you will be able to fill out the database connection variables.

### Installing

Copy git respository to local machine

```
git clone https://github.com/CPSC-491-Penny-Tracker/Penny-API penny-tracker-backend
```
`cd` into the cloned repository

```
cd penny-tracker-backend
```
Make a fresh start of the git history for this project with 
```
rm -rf .git && git init
```

Install the node dependencies 

```
npm install
```



## Running the server

The server can be ran with 
```
npm run dev
```

## Built With

* [Express](https://expressjs.com/) - Web Framework
* [NodeJS](https://nodejs.org/) - Javascript Library
* [knex](https://knexjs.org/) - Query Builder
* [Postgres](https://www.postgresql.org/) - SQL Database

## Deployment

* [Heroku](https://www.heroku.com/) - Deployment

## Authors

* **Alan Guan**
* **Ashkon Yavarinia**
* **Mahmoud Khafagy**
* **Robin Khiv**