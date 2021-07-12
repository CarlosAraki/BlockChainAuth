const Blockchain = require("./class/blockchain");
const Block = require("./class/block");


let chain = new Blockchain();

chain.addNewBlock(
  new Block(1, "12/06/2021", {
    sender: "Luis Otávio",
    recipient: "Carlos Araki",
    quantity: 64
  })
);

chain.addNewBlock(
  new Block(2, "07/04/2022", {
    sender: "Giovana Alves",
    recipient: "Lulu",
    quantity: 23
  })
);

console.log(JSON.stringify(chain, null, 4));
