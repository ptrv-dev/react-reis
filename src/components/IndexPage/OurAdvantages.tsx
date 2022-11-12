import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionHeader from '../Section/SectionHeader';

const advantagesData = [
  {
    icon: '1.png',
    title: 'Sell your home',
    subtitle: 'We do a free evaluation to be sure you want to start selling.',
  },
  {
    icon: '2.png',
    title: 'Rent your home',
    subtitle: 'We do a free evaluation to be sure you want to start selling.',
  },
  {
    icon: '3.png',
    title: 'Buy a home',
    subtitle: 'We do a free evaluation to be sure you want to start selling.',
  },
  {
    icon: '4.png',
    title: 'Free marketing',
    subtitle: 'We do a free evaluation to be sure you want to start selling.',
  },
];

const OurAdvantages: React.FC = () => {
  return (
    <Box py={'100px'} bgcolor={'#EDEFF6'}>
      <Container>
        <SectionHeader
          title={'Our advantages'}
          subtitle={
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.'
          }
        />
        <Grid container mt={8}>
          {advantagesData.map((item, idx) => (
            <Grid
              key={idx}
              item
              xs={12}
              sm={6}
              lg={3}
              p={3}
              sx={{
                transition:
                  'background .3s ease-in-out, box-shadow .3s ease-in-out',
                '&:hover': {
                  bgcolor: '#fff',
                  boxShadow: '0px 24px 68px rgba(59, 77, 129, 0.08)',
                },
              }}
            >
              <Box>
                <img
                  src={`./assets/img/advantages/${item.icon}`}
                  alt={item.title}
                />
              </Box>
              <Typography
                variant={'h5'}
                my={3}
                color={'#363A3D'}
                fontWeight={600}
              >
                {item.title}
              </Typography>
              <Typography mb={3} color={'#889099'}>
                {item.subtitle}
              </Typography>
              <Button color={'secondary'} sx={{ textTransform: 'capitalize' }}>
                Read more
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurAdvantages;
