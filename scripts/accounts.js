import Web3 from 'web3' 
//const Web3 = require('web3')
const rpcURL = 'https://rinkeby.infura.io/v3/a7853a77f0c44243b7463802e6987524' // Your RCkP URL goes here
//const rpcURL = 'https://ropsten.infura.io/v3/'
const web3 = new Web3(rpcURL)
const address = '0x98f8e973b92e7b9806837f6f5E275Bfe8DE99145' // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
  const balance = web3.utils.fromWei(wei, 'ether')
  console.log(balance)
})

//web3.eth.getBalance(address, (err, bal) => {balance = bal})
//web3.eth.getAccounts(console.log);
//web3.eth.getBlock(3150)
//.then(console.log);
//var receipt = web3.eth.getTransactionReceipt('0x1eea1b4c822b8ae03e3a66eb9b5d1f28d507333b9f0b3a35bc12683bee39e950')
//.then(console.log);
//window.open('https://bafybeicw5625mgyns7y7y4alwyddvohglwb3ufkou5jw3nmwgnlqzebp3q.ipfs.infura-ipfs.io/')
//const options = {
  //address: "0x7de3085b3190b3a787822ee16f23be010f5f8686",
 // chain: "eth",
//};
//const nftOwners = await Moralis.Web3API.token.getNFTOwners(options);
//console.log(nftOwners)