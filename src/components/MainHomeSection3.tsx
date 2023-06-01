import { Grid, GridItem, Image, Link, VStack } from '@chakra-ui/react'
import React from 'react'

const images = [
    {
        url : 'https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/snowy-mountain-1287145.jpg',
        link : '#'
    },
    {
        url : 'https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/green-leafed-trees-during-fog-time-167684.jpg',
        link : '#'
    },
    {
        url : 'https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/green-grass-field-and-mountain-1034887-768x508.jpg',
        link : '#'
    },
    {
        url : 'https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/bird-s-eye-view-photography-of-green-forest-1208379-768x512.jpg',
        link : '#'
    },
    {
        url : 'https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/photo-of-people-standing-on-top-of-mountain-near-grasses-733162.jpg',
        link : '#'
    },
    {
        url : 'https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/mountain-and-lake-at-sunset-135157-768x512.jpg',
        link : '#'
    }
]

const MainHomeSection3 = () => {
  return (
    <VStack w='full' pt={'100px'} pb={'100px'} >
        <Grid templateColumns={"repeat(3, 1fr)"} gap={15}>
            {images.map((el , i)=>{
                return <GridItem>
                    <Link href={el.link} ><Image src={el.url} h={246} w={369} /></Link>
                </GridItem>
            })}
        </Grid>
    </VStack>
  )
}

export default MainHomeSection3