import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Token = buildModule("Token", (m) => {
  const contract = m.contract("DOSToken", []);
  m.call(contract, "launch", []);
  return { contract };
});

export default Token;
