import {

  Card,
  VStack,
  Heading,
  Text
} from "@chakra-ui/react";

export const PrivacyPolicy = () => {
  return (
    <Card
      w={"full"}
      boxShadow="sm"
      borderRadius="xl"
      overflow="hidden"
      bg="white"
      border="1px solid"
      borderColor="gray.100"
      p={6}
    >
      <VStack spacing={6} align="stretch">
        <Heading size="lg" color="gray.800">EcoTransit Privacy Policy</Heading>
        <Text fontSize="sm" color="gray.600">Last Updated: March 8, 2025</Text>

        <Heading size="md" color="gray.800">1. Introduction</Heading>
        <Text fontSize="sm" color="gray.700">
          At EcoTransit, we are dedicated to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy outlines the data we collect, how we use and protect it, and your rights concerning this information.
          By using EcoTransit services, you consent to the collection and use of your information as described in this policy.
        </Text>

        <Heading size="md" color="gray.800">2. Information We Collect</Heading>
        <Text fontSize="sm" color="gray.700">
          To provide and enhance our services, we collect the following information:
          <ul>
            <li>VeChain Wallet Address: Required for user authentication and reward distribution.</li>
            <li>Public Transit Usage Data: Includes travel history, timestamps, and transportation type for reward verification.</li>
            <li>Location Data (Optional): Used to enhance accuracy for reward calculations and gamification features.</li>
          </ul>
          We do not collect or store personally identifiable information beyond what is necessary for service functionality.
        </Text>

        <Heading size="md" color="gray.800">3. Data Usage</Heading>
        <Text fontSize="sm" color="gray.700">
          The collected information is used exclusively for:
          <ul>
            <li>Verifying public transportation usage for reward distribution.</li>
            <li>Enabling seamless access to EcoTransit features.</li>
            <li>Enhancing user experience through personalized incentives.</li>
          </ul>
        </Text>

        <Heading size="md" color="gray.800">4. Data Storage and Security</Heading>
        <Text fontSize="sm" color="gray.700">
          We implement strict security measures to safeguard your data:
          <ul>
            <li>Secure Blockchain Storage: Reward transactions are recorded on the VeChain blockchain for transparency and security.</li>
            <li>Access Controls: Only authorized systems can process reward-related data.</li>
            <li>Encryption: Sensitive data is encrypted to prevent unauthorized access.</li>
          </ul>
        </Text>

        <Heading size="md" color="gray.800">5. Data Sharing and Third Parties</Heading>
        <Text fontSize="sm" color="gray.700">
          We do not sell or share your personal information with third parties. 
          However, public transit usage data may be anonymized and aggregated for sustainability research and urban planning improvements.
        </Text>

        <Heading size="md" color="gray.800">6. Blockchain Data</Heading>
        <Text fontSize="sm" color="gray.700">
          As part of our commitment to security and transparency:
          <ul>
            <li>Reward activities are recorded on the VeChain blockchain as cryptographic proofs.</li>
            <li>Blockchain records do not contain personal data but serve as immutable proof of sustainable travel behavior.</li>
          </ul>
        </Text>

        <Heading size="md" color="gray.800">7. Changes to This Privacy Policy</Heading>
        <Text fontSize="sm" color="gray.700">
          We may update this Privacy Policy periodically to reflect new features or legal requirements. 
          Updates will be published on this page with a revised "Last Updated" date.
        </Text>

        <Heading size="md" color="gray.800">8. Contact Us</Heading>
        <Text fontSize="sm" color="gray.700">
          For any questions or concerns about this Privacy Policy, please contact us at:
          <br />
          <strong>Email:</strong>info@ecotransit.tech


        </Text>
      </VStack>
    </Card>
  );
};
