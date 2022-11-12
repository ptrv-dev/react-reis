import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import SectionHeader from '../Section/SectionHeader';

const latestProductsData = [
  {
    image: '1.jpg',
    title: '92 ALLIUM PLACE, ORLANDO FL 32827',
    price: 590693,
    carsSlots: 4,
    bathroomCount: 4,
    area: 2096.0,
    author: {
      image: '1.jpg',
      name: 'Jenny Wilson',
    },
  },
  {
    image: '2.jpg',
    title: '92 ALLIUM PLACE, ORLANDO FL 32827',
    price: 590693,
    carsSlots: 4,
    bathroomCount: 4,
    area: 2096.0,
    author: {
      image: '2.jpg',
      name: 'Arnold White',
    },
  },
  {
    image: '3.jpg',
    title: '92 ALLIUM PLACE, ORLANDO FL 32827',
    price: 590693,
    carsSlots: 4,
    bathroomCount: 4,
    area: 2096.0,
    author: {
      image: '3.jpg',
      name: 'Anna Gilberg',
    },
  },
  {
    image: '4.jpg',
    title: '92 ALLIUM PLACE, ORLANDO FL 32827',
    price: 590693,
    carsSlots: 4,
    bathroomCount: 4,
    area: 2096.0,
    author: {
      image: '4.jpg',
      name: 'John Snow',
    },
  },
  {
    image: '5.jpg',
    title: '92 ALLIUM PLACE, ORLANDO FL 32827',
    price: 590693,
    carsSlots: 4,
    bathroomCount: 4,
    area: 2096.0,
    author: {
      image: '5.jpg',
      name: 'Anthony Whiskey',
    },
  },
  {
    image: '6.jpg',
    title: '92 ALLIUM PLACE, ORLANDO FL 32827',
    price: 590693,
    carsSlots: 4,
    bathroomCount: 4,
    area: 2096.0,
    author: {
      image: '6.jpg',
      name: 'Garry Black',
    },
  },
];

const LatestPropertiesGrid: React.FC = () => {
  return (
    <Box py={'100px'}>
      <Container sx={{}}>
        <SectionHeader
          title={'Letest Properties of Rent'}
          subtitle={
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.'
          }
        />
        <Grid container spacing={3} mt={4}>
          {latestProductsData.map((item, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="240"
                  image={`./assets/img/products/${item.image}`}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant={'h6'} fontWeight={500}>
                    {item.title}
                  </Typography>
                  <Typography
                    color={'secondary'}
                    fontWeight={600}
                    variant={'body1'}
                  >
                    {item.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} gap={3} my={2}>
                    <Box display={'inline-flex'} alignItems={'center'} gap={1}>
                      <img src="./assets/img/icons/car-icon.svg" alt="" />
                      {item.carsSlots}
                    </Box>
                    <Box display={'inline-flex'} alignItems={'center'} gap={1}>
                      <img src="./assets/img/icons/bathroom-icon.svg" alt="" />
                      {item.bathroomCount}
                    </Box>
                    <Box display={'inline-flex'} alignItems={'center'} gap={1}>
                      <img src="./assets/img/icons/area-icon.svg" alt="" />
                      {item.area.toLocaleString('en-US')} ft
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    mt={2}
                  >
                    <Box display={'inline-flex'} alignItems={'center'} gap={1}>
                      <Avatar src={`./assets/img/users/${item.author.image}`} />
                      <Typography variant="body1" fontWeight={'500'}>
                        {item.author.name}
                      </Typography>
                    </Box>
                    <Box display={'inline-flex'} alignItems={'center'} gap={1}>
                      <Button
                        size={'small'}
                        color={'secondary'}
                        sx={{
                          minWidth: '30px',
                          height: '30px',
                          p: '2px',
                        }}
                      >
                        <img src="./assets/img/icons/share-icon.svg" alt="" />
                      </Button>
                      <Button
                        size={'small'}
                        color={'secondary'}
                        sx={{
                          minWidth: '30px',
                          height: '30px',
                          p: '2px',
                        }}
                      >
                        <img src="./assets/img/icons/heart-icon.svg" alt="" />
                      </Button>
                      <Button
                        size={'small'}
                        color={'secondary'}
                        sx={{
                          minWidth: '30px',
                          height: '30px',
                          p: '2px',
                        }}
                      >
                        <img src="./assets/img/icons/plus-icon.svg" alt="" />
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LatestPropertiesGrid;
