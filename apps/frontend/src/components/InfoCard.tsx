import {
  Box,
  Card,
  HStack,
  Image,
  VStack,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
// import { MdOutlineArrowOutward } from "react-icons/md";

export const InfoCard = () => {
  return (
    <Card
      w={"full"}
      boxShadow="sm"
      borderRadius="xl"
      overflow="hidden"
      bg="white"
      border="1px solid"
      borderColor="gray.100"
    >
      <Box>
        <Image 
          src="/BANNER.png" 
          w="full"
          h="auto"
          objectFit="cover"
        />
        <Box px={6} py={5}>
          <VStack w="full" spacing={6} align="stretch">
            <HStack spacing={5}>
              <Image 
                src="/LOGO_EcoTransit.png" 
                h={20} 
                w="auto"
                borderRadius="xl"
                boxShadow="sm"
              />
              <VStack align="start" spacing={2}>
                <Heading size="md" color="gray.800">
                  EcoTransit
                </Heading>
                <Text 
                  fontSize="sm" 
                  color="gray.600"
                  lineHeight="tall"
                  fontWeight="medium"
                >
                  A decentralized application (dApp) built on VeChain and integrated with VeBetterDAO
                </Text>
              </VStack>
            </HStack>
            
            <Text
              align= "center"
              fontSize="sm"
              color="gray.700"
              lineHeight="1.7"
              fontWeight="normal"
            >
              We incentivize users to choose eco-friendly public transport by rewarding them with $B3TR tokens for verified bus, train, tram, and metro rides. Our mission is to reduce carbon emissions by making sustainable commuting more attractive and rewarding.
            </Text>
            <Text
             align= "center"
              fontSize="sm"
              color="gray.700"
              lineHeight="1.7"
              fontWeight="normal"
            >
            We start small with simple ticket validation! 🎟️✅ <br/>
            Users can upload a ticket number to verify their ride and earn $B3TR rewards. 🚆♻️ <br/>As we grow, we'll integrate public transport APIs and AI route tracking for a seamless experience.
            <br/><br/>
Step 1: Simple ticket validation.<br/>
Step 2: Expand with live transit data & automation.<br/>
<br/>
Sustainable commuting made easy! 🌍🚊<br/>

</Text>

        <Button
        alignContent="center"
          as="a"
          href="/blog"
          colorScheme="blue"
          size="lg"
        >
          Read Our Blog
        </Button>
 
          </VStack>
        </Box>
      </Box>
    </Card>
  );
};
