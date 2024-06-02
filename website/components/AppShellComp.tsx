"use client";
import { AppShell, Burger, Button, Code, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "./Navbar/Navbar";
import Link from "next/link";
import { useAccount } from "wagmi";

function AppShellComp({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const account = useAccount();
  const [opened, { toggle }] = useDisclosure();
  console.log(account.address);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className="">
        <Group h="100%" px="md" className=" bg-gray-700 text-white">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          {/* <MantineLogo size={30} /> */}
          <Link href="/">
            <div className="font-bold font-mono text-2xl ml-2">DOS DAO</div>
          </Link>
          <Link
            href="http://localhost:8501/"
            rel="noopener noreferrer"
            target="_blank"
            className="p-4 rounded-md bg-blue-500 text-white font-semibold"
          >
            Chatbot
          </Link>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarSimple />
      </AppShell.Navbar>

      <AppShell.Main className="bg-gray-100">{children}</AppShell.Main>
    </AppShell>
  );
}
export default AppShellComp;
