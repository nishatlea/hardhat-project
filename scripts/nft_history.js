import { Alchemy, Network, fromHex } from "alchemy-sdk";
import http from 'http';

const config = {
  apiKey: "AjE904cyZkoiJnYBPx7Sz34-saCQI0lx",
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(config);

const main = async () => {
  // Contract address
  //const address = ["0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"];
  const address = ["0x156F747e06ee07c75C50615D61b6b9aC727fF1da"]
  // Get all NFTs
  const response = await alchemy.core.getAssetTransfers({
    fromBlock: "0x0",
    contractAddresses: address,
    category: ["erc721"],
    excludeZeroValue: false,
  });

  // Set NFT ID
  const nftId = 1;

  // Get transactions for the NFT
  let txns = response.transfers.filter(
    (txn) => fromHex(txn.erc721TokenId) === nftId
  );
  console.log(txns);
  console.log(typeof(txns)) ;
  //var http = require('http');
  http.createServer(function (req, res) {

  //   // get the element
  // const element = document.getElementById('profile_title')

  // // always checking if the element is clicked, if so, do alert('hello')
  // element.addEventListener("click", () => {
	// alert('hello');
  // });
    
    //<button onclick="myFunction()">NFT History </button>
    
    //function myFunction() {
    const block_no = txns.length;
    var cnt = 1;
    res.write('Per NFT Transaction History: \n \n \n')
    txns.forEach(element => {
      res.write(cnt + '. \n')
      res.write('blockNum: ' + element.blockNum + '\n'); 
      res.write ( 'hash: ' +  element.hash + '\n' ); 
      res.write ( 'from: ' +  element.from + '\n' ); 
      res.write ( 'to: ' +  element.to + '\n' ); 
      res.write ( 'tokenId: ' +  element.tokenId + '\n' ); 
      res.write ( 'category: ' +  element.category + '\n' ); 
      res.write ( 'Contract Address: '+  element.rawContract.address + '\n \n' ); 
      cnt = cnt + 1 ; 
    });
    //console.log(block_no);

    //res.write(JSON.stringify(txns)); //write a response to the client
    res.end(); //end the response
  //}

  
    
  }).listen(8080);
  //create a server object:

};
const runMain = async () => {
  try {
    await main();    
    //process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();