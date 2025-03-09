import { Button, Fade, HStack, Text } from "@chakra-ui/react";
import { useWallet, useWalletModal } from "@vechain/dapp-kit-react";
import { FaWallet } from "react-icons/fa6";
import { AddressIcon } from "./Icon";
import { humanAddress } from "@repo/utils/FormattingUtils";

export const ConnectWalletButton = () => {
  const { account } = useWallet();
  const { open } = useWalletModal();

  if (!account)
    return (
      <Fade in={true}>
                 <Button
              onClick={open}
              bg="green.500"
              color="white"
              size="md"
              leftIcon={<FaWallet />}
              px={6}
              py={2}
              fontWeight="500"
              letterSpacing="0.5px"
              rounded="full"
              transition="all 0.2s"
              _hover={{
                bg: "green.400",
                transform: "translateY(-1px)",
                boxShadow: "lg",
              }}
              _active={{
                bg: "green.600",
                transform: "translateY(0)",
              }}
            >
              Connect Wallet
          
         
        </Button>
      </Fade>
    );

  return (
    <Fade in={true}>
                 <Button
              onClick={open}
              bg="green.500"
              color="white"
              size="md"
              leftIcon={<FaWallet />}
              px={6}
              py={2}
              fontWeight="500"
              letterSpacing="0.5px"
              rounded="full"
              transition="all 0.2s"
              _hover={{
                bg: "green.400",
                transform: "translateY(-1px)",
                boxShadow: "lg",
              }}
              _active={{
                bg: "green.600",
                transform: "translateY(0)",
              }}
            >
   
        
        <HStack spacing={3}>
          <AddressIcon address={account} boxSize={5} rounded="full" />
          <Text fontWeight="500" fontSize="sm">
            {humanAddress(account, 4, 6)}
          </Text>
        </HStack>
      </Button>
    </Fade>
  );
};
