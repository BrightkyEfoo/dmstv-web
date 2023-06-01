import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import CommonHeader from '../components/CommonHeader';
import Foot from '../components/Footer';
import MainAboutSection4 from '../components/MainAboutSection4';
import {
  AiFillQuestionCircle,
  AiFillWarning,
  AiTwotoneWarning,
} from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';

const DonnationPage = () => {
  return (
    <VStack alignItems={'stretch'}>
      <CommonHeader title="Donate" />
      <HStack padding={'100px'}>
        <HStack w="full" maxW={1280} align={'flex-start'} gap={50}>
          <VStack
            padding={'50px'}
            align={'flex-start'}
            fontWeight={'bold'}
            flex={1}
          >
            <Box h={0} border={'2px solid gray'} w={'50px'} />
            <Text>GIVE</Text>
            <Text textAlign={'left'} fontSize={'32px'}>
              Here at ACC we're all about sharing the love of Jesus with our
              community. Lorem ipsum dolor sit amet.
            </Text>
          </VStack>

          <VStack flex={1} gap={'10px'} align={'flex-start'} padding={'10px'}>
            <Text fontSize={'40px'} fontWeight={'bold'}>
              Donation Form
            </Text>
            <Box
              position={'relative'}
              borderLeft={'4px solid rgb(255, 186, 0)'}
              padding={'16px 32px'}
              boxShadow={'rgba(0, 0, 0, 0.125) 0.5px 1px 1px 0px'}
            >
              <Text textAlign={'justify'}>
                <b>Notice:</b> Test mode is enabled. While in test mode no live
                donations are processed.
              </Text>
              <Box
                position={'absolute'}
                left={'-22px'}
                h={'40px'}
                w={'40px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'rgb(255, 186, 0)'}
                borderRadius={'50%'}
                top={'50%'}
                transform={'translateY(-50%)'}
              >
                <AiFillWarning color="white" size={20} />
              </Box>
            </Box>
            <HStack border={'1px solid rgb(204, 204, 204)'} align={'stretch'}>
              <VStack
                justifyContent={'center'}
                w="fit-content"
                backgroundColor={'rgb(242, 242, 242)'}
                borderRight={'1px solid rgb(204, 204, 204)'}
                h={'50px'}
                aspectRatio={'1/1'}
              >
                <BiDollar color="#333333" />
              </VStack>
              <Box w={'full'}>
                <Input
                  border={'none'}
                  h={'50px'}
                  w={'full'}
                  type="number"
                  placeholder="100.00"
                />
              </Box>
            </HStack>
            <Select h={'50px'} w={'fit-content'}>
              <option>$50.00</option>
              <option>$100.00</option>
              <option>$500.00</option>
              <option>Custom Amount</option>
            </Select>
            <Text
              fontSize={'18.4px'}
              fontWeight={'bold'}
              padding={'8px 0'}
              borderBottom={'1px solid black'}
              alignSelf={'stretch'}
              textAlign={'left'}
            >
              Personal Info
            </Text>
            <Grid templateColumns={'repeat(2,1fr)'} gap={'15px'}>
              <GridItem>
                <HStack>
                  <Text>First Name *</Text>
                  <Tooltip
                    hasArrow={true}
                    label="First Name is used to personalize your donation record."
                    bg="black"
                    padding={3}
                    w={'200px'}
                    placement="top"
                  >
                    <span>
                      <AiFillQuestionCircle />
                    </span>
                  </Tooltip>
                </HStack>
                <Input h={'50px'} type="text" placeholder="First Name" />
              </GridItem>
              <GridItem>
                <HStack>
                  <Text>Last Name *</Text>
                  <Tooltip
                    hasArrow={true}
                    label="First Name is used to personalize your donation record."
                    bg="black"
                    padding={3}
                    w={'200px'}
                    placement="top"
                  >
                    <span>
                      <AiFillQuestionCircle />
                    </span>
                  </Tooltip>
                </HStack>
                <Input h={'50px'} type="text" placeholder="Last Name" />
              </GridItem>
              <GridItem colSpan={2}>
                <HStack>
                  <Text>Email Address *</Text>
                  <Tooltip
                    hasArrow={true}
                    label="First Name is used to personalize your donation record."
                    bg="black"
                    padding={3}
                    w={'200px'}
                    placement="top"
                  >
                    <span>
                      <AiFillQuestionCircle />
                    </span>
                  </Tooltip>
                </HStack>
                <Input h={'50px'} type="text" placeholder="Email Address" />
              </GridItem>
              <GridItem colSpan={2}>
                <HStack gap={'5px'}>
                  <input type="checkbox" />
                  <Text>Make this an anonymous donation. </Text>
                  <Tooltip
                    hasArrow={true}
                    label="First Name is used to personalize your donation record."
                    bg="black"
                    padding={3}
                    w={'200px'}
                    placement="top"
                  >
                    <span>
                      <AiFillQuestionCircle />
                    </span>
                  </Tooltip>
                </HStack>
              </GridItem>
            </Grid>
            <HStack align={'stretch'} border={'1px solid rgb(204, 204, 204)'}>
              <Text
                lineHeight={'50px'}
                backgroundColor={'rgb(242, 242, 242)'}
                borderRight={'1px solid rgb(204, 204, 204)'}
                padding={'0 10px'}
              >
                Donation Total:
              </Text>
              <Text lineHeight={'50px'} padding={'0 10px'}>
                $100.00
              </Text>
            </HStack>
            <Button
              rounded={'none'}
              h="fit-content"
              backgroundColor={'transparent'}
              padding={'0 35px'}
              color={'black'}
              border={'2px solid black'}
              transition={'all ease 300ms'}
              cursor={'pointer'}
              _hover={{
                color: 'white',
                backgroundColor: 'black',
              }}
            >
              <Text lineHeight={'50px'}>GIVE NOW</Text>
            </Button>
          </VStack>
        </HStack>
      </HStack>
      <MainAboutSection4 />
      <Foot />
    </VStack>
  );
};

export default DonnationPage;
