import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const ContactMainSection1 = () => {
  return (
    <VStack padding={'100px'}>
      <VStack>
        <Box h={0} border={'2px solid gray'} w={'50px'} />
        <Text fontWeight={600}>KEEP IN TOUCH</Text>
        <Text fontWeight={600} fontSize={'40px'}>
          Message us
        </Text>
        <Text maxW={600}>
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </Text>
        <Box>
          <FormControl
            alignItems={'flex-start'}
            display={'flex'}
            flexDir={'column'}
          >
            <Grid templateColumns={'repeat(2,1fr)'} w={800} gap={15}>
              <GridItem colSpan={2}>
                <FormLabel htmlFor="name" fontWeight={700}>
                  Name
                </FormLabel>
                <HStack>
                  <VStack alignItems={'flex-start'} flex={1}>
                    <Input
                      h={50}
                      type="text"
                      id="firstname"
                      name="name"
                      required
                    />
                    <Text marginTop={'0px'}>First</Text>
                  </VStack>
                  <VStack alignItems={'flex-start'} flex={1}>
                    <Input
                      h={50}
                      type="text"
                      id="lastname"
                      name="name"
                      required
                    />
                    <Text>Last</Text>
                  </VStack>
                </HStack>
              </GridItem>
              <GridItem colSpan={2}>
                <VStack align={'flex-start'}>
                  <FormLabel fontWeight={700} htmlFor="email">
                    Email
                  </FormLabel>
                  <Input h={50} type="email" name="email" />
                </VStack>
              </GridItem>
              <GridItem colSpan={2}>
                <VStack align={'flex-start'}>
                  <FormLabel fontWeight={700} htmlFor="message">
                    Message
                  </FormLabel>
                  <Textarea name="message" resize={'none'} h={120} />
                </VStack>
              </GridItem>
            </Grid>
            <Button
              border={'1px solid black'}
              rounded="none"
              paddingLeft={55}
              paddingRight={55}
              marginTop={'25px'}
              alignSelf={'flex-start'}
            >
              SUBMIT
            </Button>
          </FormControl>
        </Box>
      </VStack>
    </VStack>
  );
};

export default ContactMainSection1;
