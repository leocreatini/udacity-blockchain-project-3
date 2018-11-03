const { Block } = require('./Block');
const { NO_DATA_PROVIDED } = require('./constants');
const { createHash } = require('./utils');

// Controller Definition to encapsulate routes to work with blocks
class BlockController {
  constructor(app) {
    this.app = app;
    this.chain = [];
    this.initBlockchain();
    this.getBlockByIndex();
    this.postNewBlock();
  }

  // GET Endpoint to retrieve a block by index, url: '/api/block/:index'
  getBlockByIndex() {
    this.app.get('/block/:index', (req, res) => {
      const { index } = req.params;
      if (this.chain[index]) {
        return res.json({ ...this.chain[index] });
      }
      return res.json({
        status: false,
        message: `Error: Blockchain doesn't have a block with height of ${index}.`
      });
    });
  }

  // POST Endpoint to add a new Block, url: '/api/block'
  postNewBlock() {
    this.app.post('/block', (req, res) => {
      const { data } = req.body;
      if (data) {
        // create new block
        const block = this.createBlock(data);
        // add block to the chain
        this.addBlock(block);
        // send back new block to requester
        return res.json({ ...block });
      }
      // when there's an error
      return res.json(NO_DATA_PROVIDED);
    });
  }

  // creates new block, configures it based on the current chain, and then returns it
  createBlock(data) {
    // make block
    const block = new Block(data);
    // set height
    block.height = this.chain.length;
    // set previous block hash, if not genesis block
    if (this.chain.length > 0) {
      block.previousBlockHash = this.chain[this.chain.length - 1].hash;
    }
    // set hash
    block.hash = createHash(block);
    // return block to initiator
    return block;
  }

  // add block to chain
  addBlock(block) {
    this.chain.push(block);
    return block;
  }

  initBlockchain() {
    if (this.chain.length === 0) {
      const genesisBlock = this.createBlock('sonic hedgehog sega genesis block');
      this.addBlock(genesisBlock);
    }
  }
}

module.exports = (app) => new BlockController(app);