import { Box, Link, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  text: string;
  background: string;
  link: string;
};

const MainHomeServiceCard: FC<Props> = ({ text, background, link }) => {
  return (
    <VStack
      backgroundImage={background}
      backgroundSize={"cover"}
      position={"relative"}
      w={359}
      h={336}
      justifyContent={'center'}
    >
        <Box w={359} h={336} position={"absolute"} zIndex={1} backgroundColor={'rgba(0,0,0,0.3)'} ></Box>
      <Link color={'white'} fontSize={28} fontWeight={'bold'} zIndex={2}>
        <Text >{text}</Text>
      </Link>
    </VStack>
  );
};

export default MainHomeServiceCard;
