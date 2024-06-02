import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import dotenv from "dotenv";
dotenv.config();
const ResearcherContract = buildModule("Token", (m) => {
  const contract = m.contract("ResearcherContract", [
    process.env.TREASURY_ADDRESS,
    process.env.TOKEN_ADDRESS,
  ]);
  m.call(contract, "launch");
  return { contract };
});

// constructor(address _treasury, address _contracttoken) {
//     treasury_ = _treasury;
//     dost = DOSToken(_contracttoken);
// }
export default ResearcherContract;
