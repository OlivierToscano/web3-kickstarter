import web3 from "./utils/web3";
import CampaignFactory from "./contracts/CampaignFactory.json";

// Campaingn Factory address
const CampaignFactoryAddress = process.env.NEXT_PUBLIC_CAMPAING_FACTORY_ADDRESS;

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  CampaignFactoryAddress
);

export default instance;
