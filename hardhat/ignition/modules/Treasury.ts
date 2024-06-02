import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Treasury = buildModule("Treasury", (m) => {
  const contract = m.contract("Treasury", []);
  m.call(contract, "launch", []);
  return { contract };
});

export default Treasury;
