"use client";
import { useState } from "react";
import { Paper, TextInput, Button, Title, Text, Select } from "@mantine/core";
import classes from "./AuthenticationImage.module.css";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import HashAndError from "@/components/HashAndError";
import { RC } from "@/contracts/ResearcherContract";
import polybaseSigner from "@/functions/polybaseSigner";
import { polybase } from "@/data/polybase/polybase";

function Page() {
  const account = useAccount();
  if (account.connector) polybaseSigner(account);

  const createResearcher = async (
    name: any,
    email: any,
    university: any,
    affiliation: any,
    occupation: any,
  ) => {
    const researcherReference = polybase.collection("Researcher");
    const recordData = await researcherReference.create([
      account.address,
      name,
      affiliation,
      email,
      university,
      occupation,
    ]);
    console.log(recordData);
  };

  // State variables to store input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  function submit(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();
    try {
      writeContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: RC.abi,
        functionName: "addResearcher",
        args: [
          account.address,
          name,
          affiliation,
          email,
          university,
          occupation,
        ],
      });
      try {
        createResearcher(name, email, university, affiliation, occupation);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  // Function to handle form submission
  const handleSubmit = () => {
    // Log input values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Affiliated University:", university);
    console.log("Occupation:", occupation);
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={submit}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={30}
          >
            Onboard yourself as a Researcher
          </Title>

          <TextInput
            label="Your name"
            placeholder="name"
            size="md"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextInput
            label="University"
            placeholder="university"
            size="md"
            value={university}
            onChange={(event) => setUniversity(event.target.value)}
          />

          <TextInput
            label="Affiliation"
            placeholder="ieee"
            size="md"
            value={affiliation}
            onChange={(event) => setAffiliation(event.target.value)}
          />

          <Select
            label="Your occupation"
            size="md"
            placeholder="Pick occupation"
            data={["Student", "Post Grad", "Professor", "Scientist"]}
            value={occupation}
            onChange={(value) => setOccupation(value as string)}
          />

          <Button
            fullWidth
            disabled={isPending}
            mt="xl"
            size="md"
            onClick={submit}
          >
            {isPending ? "Confirming..." : "Onboard"}
          </Button>
          <HashAndError
            hash={hash}
            isConfirming={isConfirming}
            isConfirmed={isConfirmed}
            error={error}
          />

          <Text ta="center" mt="md"></Text>
        </Paper>
      </form>
    </div>
  );
}

export default Page;
