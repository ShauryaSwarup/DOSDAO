"use client";
import { ProposalComp } from "@/components/ProposalsPage/ProposalComp";
import React from "react";
import data from "./data.json";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { RC } from "@/contracts/ResearcherContract";
import { BaseError } from "viem";
import { Proposal } from "@/types/models";

function page() {
  const account = useAccount();

  const {
    data: proposals,
    error,
    isPending,
  } = useReadContract({
    account: account.address as `0x${string}`,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: RC.abi,
    functionName: "getAllProposals",
    // args: [jobId],
  });
  if (isPending) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        {error && (
          <span>
            Error:{" "}
            {(error instanceof BaseError && error.shortMessage) ||
              error.message}
          </span>
        )}
      </div>
    );
  return (
    <div>
      <p className=" text-center font-bold text-3xl">Proposals</p>
      <div className="my-4">
        {(proposals as Proposal[]).map((proposal) => {
          console.log(proposal);
          return (
            <div className="mb-4 shadow-2xl">
              <ProposalComp proposal={proposal} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
