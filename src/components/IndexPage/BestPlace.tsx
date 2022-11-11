import { Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import SectionHeader from '../Section/SectionHeader';

const BestPlace: React.FC = () => {
  return (
    <Box
      py={'150px'}
      sx={{
        background:
          'linear-gradient(0deg, rgba(6, 48, 83, 0.8), rgba(6, 48, 83, 0.8)), url(./assets/img/best-place/bg.jpg);',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SectionHeader
          white
          title={'Find Best Place For Living'}
          subtitle={
            'Spend vacations in best hotels and resorts find the great place of your choice using different searching options.'
          }
        />
        <Button
          variant={'outlined'}
          size={'large'}
          sx={{ textTransform: 'capitalize', marginTop: '32px' }}
        >
          Contact us
        </Button>
      </Container>
    </Box>
  );
};

export default BestPlace;
