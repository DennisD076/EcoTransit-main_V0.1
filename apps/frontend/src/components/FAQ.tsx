import {
    Box,
    Card,
    HStack,
    Image,
    VStack,
    Text,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
  
  export const FAQ = () => {
    return (
        <VStack w="full" mt={3}> 
      <Card
        w={"full"}
        boxShadow="sm"
        borderRadius="xl"
        overflow="hidden"
        bg="white"
        border="1px solid"
        borderColor="gray.100"
      >
           <Box mx={{ base: 2, md: 4 }} my={{ base: 2, md: 0 }}>
       
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
                    EcoTransit - FAQ
                  </Heading>
                  <Text 
                    fontSize="sm" 
                    color="gray.600"
                    lineHeight="tall"
                    fontWeight="medium"
                  >
                    Your questions about sustainable commuting, rewards, and blockchain technology—answered!
                  </Text>
                </VStack>
              </HStack>
            
              <Accordion allowToggle>
                <AccordionItem>
                  <h3>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        What is EcoTransit?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} fontSize="sm" color="gray.600" lineHeight="tall" fontWeight="medium">
                    EcoTransit is a decentralized application (dApp) built on VeChain and integrated with VeBetterDAO. It rewards users with $B3TR tokens for using eco-friendly public transport like buses, trains, trams, and metros.
                  </AccordionPanel>
                </AccordionItem>
  
                <AccordionItem>
                  <h3>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        How do I earn rewards with EcoTransit?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} fontSize="sm" color="gray.600" lineHeight="tall" fontWeight="medium">
                    Users can earn $B3TR tokens by verifying their public transport usage through OV card integration, QR & e-ticket scans, or NFC tap-in via smartphones. Rewards are based on distance traveled, consistency, and off-peak travel.
                  </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <h3>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        How does EcoTransit verify my travel?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} fontSize="sm" color="gray.600" lineHeight="tall" fontWeight="medium">
                    Travel verification is done through scanning tickets or e-tickets check-ins. 
                    Additionally, uploaded images of tickets are analyzed using an AI-based verification system with the following criteria:
                    <ul>
                      <li>The image must depict a valid ticket, receipt, or proof-of-purchase for public transport (bus, train, tram, or metro).</li>
                      <li>The ticket must be clear enough to display essential details such as date, departure/arrival locations, or transport provider branding.</li>
                      <li>The ticket's date must not be older than 14 days from the current date.</li>
                    </ul>
                    If the ticket meets all criteria, it is validated, and $B3TR tokens are awarded accordingly.
                  </AccordionPanel>
                </AccordionItem>
                
  
                <AccordionItem>
                  <h3>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Why use VeChain and VeBetterDAO?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} fontSize="sm" color="gray.600" lineHeight="tall" fontWeight="medium">
                    VeChain provides transparent, low-cost blockchain transactions, while VeBetterDAO ensures decentralized governance and sustainability-focused incentives.
                  </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                  <h3>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        How can I join EcoTransit?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} fontSize="sm" color="gray.600" lineHeight="tall" fontWeight="medium">
                    Simply connect your VeChain wallet, link your public transit account (optional), and start earning rewards for your sustainable commuting!
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </VStack>
          </Box>
        </Box>
      </Card>
      </VStack>

    );
  };
  