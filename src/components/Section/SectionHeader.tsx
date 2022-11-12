import { Box, Typography } from '@mui/material';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  white?: boolean;
  big?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  white = false,
  big = false,
}) => {
  return (
    <Box
      color={white ? '#fff' : '#1E2640'}
      maxWidth={700}
      mx={'auto'}
      textAlign={'center'}
    >
      <Typography
        variant={big ? 'h2' : 'h3'}
        mb="24px"
        textTransform={'capitalize'}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant={'subtitle1'} color={white ? '#EDEFF6' : '#889099'}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
