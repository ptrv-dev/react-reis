import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from '@mui/material';

import SectionHeader from '../Section/SectionHeader';

const actions = ['Rent', 'Sale'];

const selectItems = [
  {
    label: 'Locations',
    placeholder: 'Select your city',
    name: 'location',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  },
  {
    label: 'Property Type',
    placeholder: 'Select property type',
    name: 'property',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  },
  {
    label: 'Rent Range',
    placeholder: 'Select rent range',
    name: 'range',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  },
];

const Hero: React.FC = () => {
  const [currentAction, setCurrentAction] = React.useState(0);
  return (
    <Box
      height={792}
      sx={{
        backgroundImage:
          'linear-gradient(0deg, rgba(6, 48, 83, 0.6), rgba(6, 48, 83, 0.6)), url(/assets/img/hero/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      position={'relative'}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <SectionHeader
          white
          big
          title={'Find your dream house'}
          subtitle={
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.'
          }
        />
      </Container>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'10px'}
        position={'absolute'}
        left={'50%'}
        bottom={-50}
        sx={{ transform: 'translateX(-50%)' }}
      >
        <Box display={'flex'} gap={'10px'}>
          {actions.map((item, idx) => (
            <Button
              key={idx}
              variant="contained"
              onClick={() => {
                setCurrentAction(idx);
              }}
              color={currentAction === idx ? 'secondary' : 'primary'}
              sx={{ textTransform: 'capitalize', fontWeight: 500 }}
              size={'large'}
            >
              {item}
            </Button>
          ))}
        </Box>
        <Box
          display={'flex'}
          bgcolor={'#fff'}
          width={1096}
          padding={'32px 0'}
          borderRadius={1}
          boxShadow={'0px 0px 20px 5px rgba(74,96,161,0.25)'}
        >
          {selectItems.map((item, idx) => (
            <Box
              key={idx}
              flex={1}
              padding={'0 62px'}
              borderRight={'1px solid #CFD3D6'}
            >
              <InputLabel
                variant={'standard'}
                htmlFor={item.name}
                color={'secondary'}
                sx={{ fontWeight: 700 }}
              >
                {item.label}
              </InputLabel>
              <Select
                defaultValue={0}
                fullWidth
                variant={'standard'}
                inputProps={{
                  name: item.name,
                  id: item.name,
                }}
              >
                <MenuItem value={0} disabled>
                  {item.placeholder}
                </MenuItem>
                {item.options.map((option, idx) => (
                  <MenuItem key={idx} value={idx + 1}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          ))}
          <Box
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flex={1}
            padding={'0 62px'}
          >
            <Button variant={'contained'} size={'large'} color={'secondary'}>
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
