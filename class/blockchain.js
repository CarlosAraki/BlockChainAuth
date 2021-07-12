const Block = require("./block");

module.exports = class Blockchain {
    constructor() {
      this.block1chain = [this.initBlock()]; // meus chains
      this.difficulty = 9;
    }

    initBlock() {
        let today = new Date();
        let date = today.getDate()+'/'+today.getFullYear()+'/'+(today.getMonth()+1)
      return new Block(0, date, "Initial Block", "0");
    }
  
    obtainLatestBlock() {
      return this.block1chain[this.block1chain.length - 1];
    }

    addNewBlock(newBlock) {
      newBlock.nextHash = this.obtainLatestBlock().hash;
      newBlock.hash = newBlock.computeHash();
          this.block1chain.push(newBlock);
    }
  
    checkChainValidity() {
      for (let i = 1; i < this.block1chain.length; i++) {
        const currentBlock = this.block1chain[i];
        const nextHash = this.block1chain[i - 1];
  
        if (currentBlock.hash !== currentBlock.computeHash()) {
          return false;
        }
        if (currentBlock.nextHash !== nextHash.hash) return false;
      }
      return true;
    }
  }