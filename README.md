# BlockChainAuth
Little project using Eth Blockchain


## For env
 `npm install --save crypto-j`

 `node main.js`

## For mongodb
 `docker-compose up`
 
 `docker exec -it mongodb bash`
 




## How to use db 

`use blockchain`

`db.createCollection("block")`

`db.blockchain.insertMany([ {index: 1, current_time: "14/06/2021", info: "Gi to Lulu" ,nextHash:"ashmovie" ,hash: "movieasd"}])`

`db.blockchain.find().pretty()`

`show databases`

`show collections`


## next steps
  1. Dockerize (Need Dockerize de class about clock chain and mongo xpress to visualize data)
  2. Save data in MongoDb (make back in api node with block )
  3. Make graphic interface for user(hmm I dont know how to make this front )