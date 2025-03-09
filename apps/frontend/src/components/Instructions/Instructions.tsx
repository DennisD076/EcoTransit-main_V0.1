import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.png",
    title: "Choose eco-friendly transport",
    description: "Take public transport like bus, train, tram, or metro for your commute.",
  },
  {
    icon: "/steps/2.png",
    title: "Verify your ride",
    description: "Upload your ticket or use our verification system to confirm your journey.",
  },
  {
    icon: "/steps/3.svg",
    title: "Earn $B3TR tokens",
    description: "Get rewarded with $B3TR tokens for choosing sustainable transport.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={2} w={"full"}>
      <Flex p={{ base: 10 }} w="100%" direction={{ base: "column", md: "row" }}>
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
