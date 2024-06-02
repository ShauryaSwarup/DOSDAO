"use client";
import { Card, Avatar, Text, Group, Button } from "@mantine/core";
import classes from "./UserCardImage.module.css";
import { ProposalComp } from "@/components/ProposalsPage/ProposalComp";

import data from "./data.json";
import { useAccount, useReadContract } from "wagmi";
import { RC } from "@/contracts/ResearcherContract";
import { DT } from "@/contracts/DOSToken";
import { Proposal, Researcher } from "@/types/models";

function UserCardImage() {
  const account = useAccount();
  const {
    data: researcherData,
    // error,
    // isPending,
  } = useReadContract({
    account: account.address as `0x${string}`,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: RC.abi,
    functionName: "getResearcherByAddress",
    args: [account.address],
  });

  //for tokens NEXT_PUBLIC_CONTRACT_DOS_ADDRESS
  const {
    data: tokenData,
    // error,
    // isPending,
  } = useReadContract({
    account: account.address as `0x${string}`,
    address: process.env.NEXT_PUBLIC_CONTRACT_DOS_ADDRESS as `0x${string}`,
    abi: DT.abi,
    functionName: "balanceOf",
    args: [account.address],
  });
  const tokenDataN = Number(tokenData) / Number(Math.pow(10, 18));
  console.log(tokenDataN);
  const stats = [
    // { value: "3", label: "Projects" },
    // { value: "5", label: "Contributions" },
    { value: tokenDataN, label: "Tokens" },
  ];

  const { data: proposals } = useReadContract({
    account: account.address as `0x${string}`,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: RC.abi,
    functionName: "getProposalsByResearcher",
    args: [account.address],
  });
  console.log(proposals);

  console.log(researcherData);
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));
  return (
    <>
      <Card
        withBorder
        padding="xl"
        shadow="xl"
        radius="md"
        className={classes.card}
      >
        <Card.Section
          h={140}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
          }}
        />
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
          size={80}
          radius={80}
          mx="auto"
          mt={-30}
          className={classes.avatar}
        />
        <Text ta="center" fz="lg" fw={500} mt="sm">
          {(researcherData as Researcher) &&
            (researcherData as Researcher).name}
        </Text>
        <Text ta="center" fz="sm">
          {(researcherData as Researcher) &&
            (researcherData as Researcher).walletId}
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          {(researcherData as Researcher) &&
            (researcherData as Researcher).profession}
          ,{" "}
          {(researcherData as Researcher) &&
            (researcherData as Researcher).university}
        </Text>
        <Group mt="md" justify="center" gap={30}>
          {items}
        </Group>
      </Card>
      <p className=" text-center font-semibold text-3xl m-4">Their projects</p>
      {(proposals as Proposal[]) && (
        <div className="m-4">
          {(proposals as Proposal[]).map((proposal) => (
            <div className="mb-4 shadow-2xl">
              <ProposalComp proposal={proposal} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default UserCardImage;
