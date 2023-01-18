import web3 from "./utils/web3";
import Campaign from "./contracts/Campaign.json";

const campaign = (address) => {
  return new web3.eth.Contract(Campaign.abi, address);
};

export default campaign;
