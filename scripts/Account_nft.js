// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
    apiKey: "AjE904cyZkoiJnYBPx7Sz34-saCQI0lx",
    network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner('0xdbdC6323921aC4a6Bb6C6c1b66eaC5DB2828d3d3');
  //const nfts = await alchemy.nft.getNftsForOwner('0xdbdC6323921aC4a6Bb6C6c1b66eaC5DB2828d3d3');
  
  // Print NFTs
  //console.log(nfts);
  //console.log(typeof(nfts));
  //let var1 = JSON.parse(nfts);
  //console.log(var1);
  //console.log(JSON.stringify(nfts, undefined, 4));
  //const test = JSON.stringify(nfts, undefined, 4);
  //console.log(Object.entries(nfts));

  // Object.entries(nfts).forEach(element => {
  //   element.forEach(elementData => {
  //     //console.log(JSON.stringify(elementData) + '\n')
      
  //   });
  // });

  var result = [];
  var keys = Object.keys(nfts);
  keys.forEach(function(key){
      result.push(nfts[key]);
  });
  //console.log(result[0][0]['tokenId']);
  //console.log(typeof(result));

  //show data done 
  // result[0].forEach(element => {
  //   console.log("contract address: " + element.contract.address + "\n");
  //   console.log("tokenId: " + element.tokenId + "\n");
  //    });
  
  console.log(JSON.stringify(nfts, undefined, 4));






}
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();