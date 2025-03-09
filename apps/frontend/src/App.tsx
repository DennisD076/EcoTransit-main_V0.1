import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Dropzone,
  Footer,
  InfoCard,
  Instructions,
  Navbar,
  SubmissionModal,
} from "./components";

import { lightTheme } from "./theme";
import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";
import { Blog } from "./components/pages/Blog";
import { FAQ } from "./components/FAQ";

// Separate component for the main content to use hooks
const MainContent = () => {
  return (
    <>
      <InfoCard />
      <Instructions />
      <Dropzone />
      
      <FAQ />
    </>
  );
};

function App() {
  return (
    <Router>
      <ChakraProvider theme={lightTheme}>
        <DAppKitProvider
          usePersistence
          requireCertificate={false}
          genesis="test"
          nodeUrl="https://testnet.vechain.org/"
          logLevel={"DEBUG"}
        >
          <Navbar />
          <Flex flex={1}>
            <Container
              mt={{ base: 4, md: 10 }}
              maxW={"container.xl"}
              mb={{ base: 4, md: 10 }}
              display={"flex"}
              flex={1}
              alignItems={"center"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
            >
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </Container>
          </Flex>
          <Footer />
          <SubmissionModal />
        </DAppKitProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
