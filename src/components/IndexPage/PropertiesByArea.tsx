import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionHeader from '../Section/SectionHeader';

const areaData = [
  {
    image: '1.jpg',
    title: 'Washington',
    subtitle: '25 listings',
  },
  { image: '2.jpg', title: 'Franklin', subtitle: '25 listings' },
  { image: '3.jpg', title: 'Clinton', subtitle: '25 listings' },
  { image: '4.jpg', title: 'Arlington', subtitle: '25 listings', large: true },
  { image: '5.jpg', title: 'Centerville', subtitle: '25 listings' },
];

const PropertiesByArea: React.FC = () => {
  return (
    <Container>
      <Box py={'100px'}>
        <SectionHeader
          title="Propertice by Area"
          subtitle="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."
        />
        <Grid container spacing={3} mt={5}>
          {areaData.map((item, idx) => (
            <Grid
              key={idx}
              item
              xs={12}
              sm={6}
              md={item.large ? 8 : 4}
              height={'240px'}
            >
              <Card
                sx={{
                  position: 'relative',
                  height: '100%',
                  padding: 3,
                  boxSizing: 'border-box',
                  backgroundImage: `linear-gradient(180deg, rgba(59, 77, 129, 0.7) -12.86%, rgba(59, 77, 129, 0) 106.85%), url(./assets/img/area/${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center,center',
                  '&:hover': {
                    button: {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Typography variant="h5" fontWeight={700} color={'primary'}>
                  {item.title}
                </Typography>
                <Typography color={'primary'}>{item.subtitle}</Typography>
                <Button
                  variant={'outlined'}
                  sx={{
                    textTransform: 'capitalize',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                    transition: 'opacity .3s ease-in-out',
                    opacity: 0,
                  }}
                >
                  View detail
                </Button>
                <Box position={'absolute'} bottom={24} left={24}>
                  <img
                    src="./assets/img/icons/location-icon.svg"
                    alt="Location"
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PropertiesByArea;
