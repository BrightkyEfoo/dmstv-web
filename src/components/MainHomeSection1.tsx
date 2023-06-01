import { Button, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import MainHomeServiceCard from './MainHomeServiceCard';
import Button1 from './Button1';

const MainHomeSection1 = () => {
  return (
    <VStack paddingTop={100} paddingBottom={100}>
      <VStack maxW={1280} gap={'100px'} alignItems={'stretch'}>
        <HStack justifyContent={'space-between'}>
          <MainHomeServiceCard
            text="Nos emissions"
            background="https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/green-leafed-trees-during-fog-time-167684.jpg"
            link="#"
          />
          <MainHomeServiceCard
            text="Programmes"
            background="https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/snowy-mountain-1287145.jpg"
            link="#"
          />
          <MainHomeServiceCard
            text="Bouquets"
            background="https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/photo-of-people-standing-on-top-of-mountain-near-grasses-733162.jpg"
            link="#"
          />
        </HStack>
        <Grid templateColumns={'repeat(2, 1fr)'}>
          <GridItem>
            <Text textAlign={'left'} fontSize={'28px'} fontWeight={'bold'}>Amazing Things for You</Text>
          </GridItem>
          <GridItem textAlign={'justify'} fontSize={"16px"} gap={8} display={'flex'} flexDir={'column'} alignItems={'flex-start'}>
            <Text>
              Always write benefits over features. Mention all the benefits or
              services with some real examples. Focus on how you can help and
              benefit your user. Use simple words so that you don’t confuse
              people. Say as much in as few words as possible.
            </Text>
            <Text>Speak directly to users using you not I or we.</Text>
            <Button1 link= '#' text='OUR HISTORY' backColor='white' hovColor='white' color='#1a6c7a' hovBackColor='#3a3a3a' />
          </GridItem>
        </Grid>
      </VStack>
    </VStack>
  );
};

export default MainHomeSection1;
