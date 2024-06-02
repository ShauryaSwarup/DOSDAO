"use client";
import React from "react";
import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import { ProposalComp } from "@/components/ProposalsPage/ProposalComp";
import data from "../data.json";
import { useAccount, useReadContract } from "wagmi";
import { RC } from "@/contracts/ResearcherContract";
import { Proposal } from "@/types/models";

const PRIMARY_COL_HEIGHT = rem(300);

function page({ params }: { params: { proposal_id: string } }) {
  const proposal_id = params.proposal_id;
  const account = useAccount();
  const {
    data: proposal,
    error: errorRead,
    isPending: isPendingRead,
  } = useReadContract({
    account: account.address as `0x${string}`,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: RC.abi,
    functionName: "getProposalById",
    args: [proposal_id],
  });
  console.log(proposal);

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="md">
        {(proposal as Proposal) && (
          <ProposalComp
            // height={PRIMARY_COL_HEIGHT}
            // radius="md"
            // animate={false}
            proposal={proposal as Proposal}
            noSection={true}
          />
        )}
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default page;
