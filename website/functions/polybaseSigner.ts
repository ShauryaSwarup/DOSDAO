import { config } from "@/data/configs/wagmi";
import { polybase } from "@/data/polybase/polybase";
import { signMessage } from "@wagmi/core";
import { UseAccountReturnType } from "wagmi";

export default function polybaseSigner(account: UseAccountReturnType) {
  polybase.signer(async (data) => {
    const sig = await signMessage(config, {
      account: account.address,
      message: data,
      connector: account.connector,
    });
    return {
      h: "eth-personal-sign",
      sig: sig,
    };
  });
}
