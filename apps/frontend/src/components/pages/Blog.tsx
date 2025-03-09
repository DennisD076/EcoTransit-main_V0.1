import {
  Box,
  Card,
  Container,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  useColorModeValue
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export const Blog = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("gray.900", "white");

  return (
    <Container maxW="4xl" py={8}>
      <Card
        w="full"
        boxShadow="lg"
        borderRadius="xl"
        overflow="hidden"
        bg={bgColor}
        border="1px solid"
        borderColor={borderColor}
        p={8}
      >
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading size="lg" color={headingColor} mb={4}>
              Revolutionizing Sustainable Transit
            </Heading>
            <Text fontSize="md" color={textColor} lineHeight="tall">
              In an age where climate change is no longer a distant concern but a pressing reality, the need for sustainable solutions has never been greater.
              One of the most impactful ways to reduce carbon emissions is by shifting towards eco-friendly public transportation. However, the challenge lies
              in making this shift attractive and rewarding for individuals.
            </Text>
          </Box>

          <Divider />

          <Box>
            <Heading size="md" color={headingColor} mb={4}>
              What is $B3TR?
            </Heading>
            <Text fontSize="md" color={textColor} lineHeight="tall">
              $B3TR tokens represent a revolutionary approach to incentivize sustainable commuting. By choosing public transport options such as buses,
              trains, trams, and metro systems, users can earn $B3TR tokens for each verified ride. This innovative system not only encourages environmentally 
              responsible choices but also fosters a community dedicated to reducing carbon footprints and building a greener future.
            </Text>
          </Box>

          <Divider />

          <Box>
            <Heading size="md" color={headingColor} mb={4}>
              How It Works
            </Heading>
            <Text fontSize="md" color={textColor} lineHeight="tall" mb={4}>
              Our system is designed to seamlessly integrate into everyday commuting habits. Here's how you can start earning rewards:
            </Text>
            <List spacing={3} ml={4}>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text fontSize="md" color={textColor}>
                  <strong>Ride Public Transport:</strong> Opt for eco-friendly commuting by taking a bus, train, tram, or metro.
                </Text>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text fontSize="md" color={textColor}>
                  <strong>Verify Your Ride:</strong> Use our app to verify your tickets.
                </Text>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Text fontSize="md" color={textColor}>
                  <strong>Earn $B3TR Tokens:</strong> Get rewarded instantly for your sustainable choice.
                </Text>
              </ListItem>
            </List>
        
          </Box>

          <Divider />

          <Box>
            <Heading size="md" color={headingColor} mb={4}>
              Environmental Impact
            </Heading>
            <Text fontSize="md" color={textColor} lineHeight="tall">
              By incentivizing public transport use, we collectively reduce traffic congestion, lower greenhouse gas emissions, and promote cleaner urban air quality.
              A single person switching from car travel to public transit can reduce their annual carbon footprint by approximately 4,800 pounds of CO₂. Imagine the
              impact when thousands or even millions of people make this choice!
            </Text>
          </Box>

          <Divider />

          <Box>
            <Heading size="md" color={headingColor} mb={4}>
              Join the Movement
            </Heading>
            <Text fontSize="md" color={textColor} lineHeight="tall" mb={4}>
              Sustainability isn't just a trend—it's a necessity. By choosing public transport and earning $B3TR tokens, you're not only making an eco-conscious decision
              but also actively participating in a movement that benefits both individuals and the planet.
            </Text>
            <Text fontSize="md" color={textColor} lineHeight="tall" fontWeight="medium">
              The future of commuting is here, and it's green, rewarding, and better for everyone. Hop on board, verify your rides, and start earning today!
            </Text>
          </Box>
        </VStack>
      </Card>
    </Container>
  );
};
  