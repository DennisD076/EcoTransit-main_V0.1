import { Image, ImageProps, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
  beBetterProps?: ImageProps;
  veBetterProps?: ImageProps;
};

/**
 * BeBetterVeBetterIcon displays the BeBetterVeBetter logo
 */
export const BeBetterVeBetterIcon: React.FC<Props> = ({

  beBetterProps,
}) => (
  <VStack spacing={1} align="flex-start" w="full">
    <Image src="/LOGO_EcoTransit.png" {...beBetterProps} />
 {/* //   <Image src="/vebetter_dark.svg" {...veBetterProps} /> */}
  </VStack>
);
