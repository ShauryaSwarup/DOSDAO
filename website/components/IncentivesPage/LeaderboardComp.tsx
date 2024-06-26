"use client";
import { RC } from "@/contracts/ResearcherContract";
import { Researcher } from "@/types/models";
import { Table, Group, Text, Select } from "@mantine/core";
import { useAccount, useReadContract } from "wagmi";
const rolesData = ["Manager", "Collaborator", "Contractor"];

function LeaderboardComp() {
  const account = useAccount();
  const {
    data: researchers,
    error,
    isPending,
  } = useReadContract({
    account: account.address,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    abi: RC.abi,
    functionName: "getAllResearchers",
    // args: [jobId],
  });
  // console.log(researchers);

  if (isPending) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        {error && <span>Error: {error.shortMessage || error.message}</span>}
      </div>
    );

  const rows = (researchers as Researcher[]).map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          {/* <Avatar size={40} src={item.avatar} radius={40} /> */}
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.walletId}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>
        <Select
          data={rolesData}
          defaultValue={item.profession}
          variant="unstyled"
          allowDeselect={false}
        />
      </Table.Td>
      {/* <Table.Td>{item.lastActive}</Table.Td> */}
      <Table.Td>
        {/* {item.active ? (
					<Badge fullWidth variant="light">
						Active
					</Badge>
				) : (
					<Badge color="gray" fullWidth variant="light">
						Disabled
					</Badge>
				)} */}
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      {/* <PersonalStatsComp /> */}
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Employee</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Last active</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
}
export default LeaderboardComp;
