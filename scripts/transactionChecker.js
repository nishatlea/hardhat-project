const Web3 = require('web3');

class TransactionChecker {
    web3;
    account;
     acc;

    constructor()
    {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/a7853a77f0c44243b7463802e6987524'));
        this.account = '0x98f8e973b92e7b9806837f6f5E275Bfe8DE99145' ;
        this.acc = '0x98f8e973b92e7b9806837f6f5E275Bfe8DE99145';
    }

    async checkBlock() {
        let block = await this.web3.eth.getBlock('latest');
        let number = block.number;
        console.log('Searching block ' + number);

        if (block != null && block.transactions != null) {
            for (let txHash of block.transactions) {
                let tx = await this.web3.eth.getTransaction(txHash);
                //if (this.account == acc) {
                    console.log('Transaction found on block: ' + number);
                    console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date()});
                //}
            }
        }
    }
}

let txChecker = new TransactionChecker(process.env.INFURA_ID, '0xe1Dd30fecAb8a63105F2C035B084BfC6Ca5B1493');
setInterval(() => {
    txChecker.checkBlock();
}, 15 * 1000);