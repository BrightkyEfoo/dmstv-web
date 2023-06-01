import {
  Box,
  Button,
  FormControl,
  Grid,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaPhoneSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { TbInfoCircleFilled } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';

const MainAbout = () => {
  return (
    <Grid w={'100vw'} padding={'100px'} placeItems={'center'}>
      <HStack
        maxW={1280}
        w="full"
        alignItems={'flex-start'}
        justifyContent={'center'}
      >
        <VStack color={'#3a3a3a'} flex={1} align={'flex-start'} gap={45}>
          <Text fontSize={'1.75rem'} fontWeight={'bold'}>
            Get in Touch
          </Text>
          <VStack align={'flex-start'} gap={50}>
            <VStack align={'flex-start'}>
              <Text fontSize={'22px'} fontWeight={600} lineHeight={'taller'}>
                Numbers
              </Text>
              <HStack>
                <FaPhoneSquareAlt />{' '}
                <Text>General Inquiries (123) 456 7890</Text>
              </HStack>
              <HStack>
                <FaPhoneSquare /> <Text>Accounts Inquiries (987) 654 3210</Text>
              </HStack>
            </VStack>

            <VStack align={'flex-start'}>
              <Text fontSize={'22px'} fontWeight={600} lineHeight={'taller'}>
                Email
              </Text>
              <HStack>
                <TbInfoCircleFilled />{' '}
                <Text>General Inquiries (123) 456 7890</Text>
              </HStack>
              <HStack>
                <BiSupport /> <Text>Accounts Inquiries (987) 654 3210</Text>
              </HStack>
            </VStack>

            <VStack align={'flex-start'}>
              <Text fontSize={'22px'} lineHeight={'taller'} fontWeight={600}>
                Business Hours
              </Text>
              <Text>Monday — Friday 9am - 5pm</Text>
              <Text>Saturday — 10am - 3pm</Text>
              <Text>Sunday — Closed</Text>
            </VStack>
          </VStack>
        </VStack>
        <VStack align={'stretch'} flex={2} gap={'25px'}>
          <Text fontSize={'1.75rem'} fontWeight={'bold'} textAlign={'left'}>
            Send Us a Message
          </Text>
          <FormControl>
            <VStack align={'flex-start'} gap={"15px"}>
              <Input placeholder="Name" h={'50px'} type="text" />
              <Input placeholder="Phone number" h={'50px'} type="text" />
              <Input placeholder="Email" h={'50px'} type="text" />
              <Textarea placeholder="Message" h={'135px'} resize={'none'} />
              <Button
                border={'2px solid rgb(26, 108, 122)'}
                color={'rgb(26, 108, 122)'}
                alignSelf="flex-start"
                transition={'all ease 300ms'}
                paddingLeft={'25px'}
                paddingRight={'25px'}
                rounded={'none'}
                _hover={{
                  backgroundColor: 'rgb(26, 108, 122)',
                  color: 'white',
                }}
              >
                SUBMIT
              </Button>
            </VStack>
          </FormControl>
        </VStack>
      </HStack>
    </Grid>
  );
};

export default MainAbout;
