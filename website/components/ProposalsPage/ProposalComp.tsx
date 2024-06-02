"use client";
import { IconHeart, IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import { Card, Text, Group, Button, Badge } from "@mantine/core";
import classes from "./BadgeCard.module.css";
import { AvatarComp } from "../Avatar/AvatarComp";
import { useRouter } from "next/navigation";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useState } from "react";
import HashAndError from "../HashAndError";
import { RC } from "@/contracts/ResearcherContract";
import polybaseSigner from "@/functions/polybaseSigner";
import { polybase } from "@/data/polybase/polybase";
import { Proposal, Researcher } from "@/types/models";

export function ProposalComp({
  proposal,
  noSection,
}: {
  proposal: Proposal;
  noSection?: boolean;
}) {
  const account = useAccount();
  if (account.connector) polybaseSigner(account);
  const proposalReference = polybase.collection("Proposal");

  const handleDiscussion = async (proposal: Proposal) => {
    if (proposal) {
      console.log(proposal.researcher, proposal.title);
      const recordData = await proposalReference
        .where("title", "==", `${proposal.title}`)
        .get();
      const { data } = recordData;
      console.log(data[0].data);
      router.push(`/communication/${data[0].data.chatId}`);
    }
  };

  const [choice, setChoice] = useState<Number>();

  const yayN = Number(proposal.yay) / Number(Math.pow(10, 18));
  const nayN = Number(proposal.nay) / Number(Math.pow(10, 18));

  const router = useRouter();
  const handleClick = () => {
    router.push(`/proposals/${proposal.id.toString()}`);
  };

  //read researcher by address
  const {
    data: researcherData,
    error: errorRead,
    isPending: isPendingRead,
  } = useReadContract({
    account: account.address,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: RC.abi,
    functionName: "getResearcherByAddress",
    args: [proposal.researcher],
  });

  //write contract getResearcherByAddress

  const { data: hash, error, isPending, writeContract } = useWriteContract();
  function submit(e: React.FormEvent<HTMLFormElement>, choiceValue: number) {
    e.preventDefault();
    console.log("Hello", choiceValue, proposal.id);
    writeContract({
      address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
      abi: RC.abi,
      functionName: "vote",
      args: [proposal.id, choiceValue],
    });
  }
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  //write contract queueProposal

  const {
    data: hash1,
    error: error1,
    isPending: isPending1,
  } = useWriteContract();

  function submitQueue(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent default form submission behavior
    writeContract({
      address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
      abi: RC.abi,
      functionName: "queueProposal",
      args: [proposal.id],
    });
  }

  const { isLoading: isConfirming1, isSuccess: isConfirmed1 } =
    useWaitForTransactionReceipt({
      hash,
    });

  //is it queued or not

  const { data: isQueuedProposal } = useReadContract({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: RC.abi,
    functionName: "isQueued",
    args: [proposal.id],
  });

  console.log(isQueuedProposal, proposal.id);

  //execute

  function execute(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    writeContract({
      address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
      abi: RC.abi,
      functionName: "executeProposal",
      args: [proposal.id],
    });
  }

  const isQueued = isQueuedProposal
    ? (isQueuedProposal as boolean[][0])
    : false;

  //is executed
  const { data: isExecutedProposal } = useReadContract({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: RC.abi,
    functionName: "isExecuted",
    args: [proposal.id],
  });

  // const isExecuted = isExecutedProposal ? isExecutedProposal[0] : false;

  const actionButton = isExecutedProposal ? null : isQueuedProposal ? (
    <Button
      onClick={(e) => execute(e)}
      radius="md"
      color="gray"
      style={{ flex: 1 }}
    >
      Execute
    </Button>
  ) : (
    <form onSubmit={(e) => submitQueue(e)}>
      <Button type="submit" radius="md" color="gray" style={{ flex: 1 }}>
        Queue Proposal
      </Button>
    </form>
  );

  const cardClassName = isExecutedProposal
    ? classes.executedCard
    : isQueuedProposal
      ? classes.queuedCard
      : classes.card;

  return (
    <Card withBorder radius="md" p="md" className={cardClassName}>
      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {proposal.title}{" "}
          </Text>
          {(isQueuedProposal as React.ReactNode) && (
            <Badge size="sm" variant="dark">
              queued
            </Badge>
          )}
          {(isExecutedProposal as React.ReactNode) && (
            <Badge size="sm" variant="dark">
              executed
            </Badge>
          )}
        </Group>
        <Text fz="sm" mt="xs">
          {proposal.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        {/* <Text mt="md" className={classes.label} c="dimmed">
					Perfect for you, if you enjoy
				</Text> */}
        <AvatarComp
          researcher_name={
            (researcherData as Researcher) &&
            (researcherData as Researcher).name
          }
          wallet_id={proposal.researcher}
        />
      </Card.Section>
      <Group mt="xs">
        {!noSection && (
          <Button
            radius="md"
            color="gray"
            style={{ flex: 1 }}
            onClick={handleClick}
          >
            Show details
          </Button>
        )}
        <Button
          radius="md"
          onClick={async () => await handleDiscussion(proposal)}
          color="gray"
          style={{ flex: 1 }}
        >
          Join discussion
        </Button>
        {/* <form onSubmit={submitQueue}> */}
        {actionButton}
        {/* </form> */}

        <form onSubmit={(e) => submit(e, 1)} className="flex gap-2">
          <Button type="submit">
            <IconThumbUp />
            <Text className="px-1">{yayN.toString()}</Text>
          </Button>
        </form>
        <form onSubmit={(e) => submit(e, 0)} className="flex gap-2">
          <Button type="submit" onClick={() => setChoice(0)}>
            <IconThumbDown />
            <Text className="px-1">{nayN.toString()}</Text>
          </Button>
        </form>
      </Group>
      <HashAndError
        hash={hash1}
        isConfirming={isConfirming1}
        isConfirmed={isConfirmed1}
        error={error1}
      />
      <HashAndError
        hash={hash}
        isConfirming={isConfirming}
        isConfirmed={isConfirmed}
        error={error}
      />
    </Card>
  );
}
