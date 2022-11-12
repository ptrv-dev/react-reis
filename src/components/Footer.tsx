import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box pt={'100px'} pb={'50px'}>
      <Container>
        <Grid container justifyContent={'space-between'}>
          <Grid item xs={12} md={4}>
            <Link href="/">
              <img
                src="./assets/img/logo-secondary.svg"
                alt="REIS | Real Estate"
              />
            </Link>
            <Typography variant="h5" sx={{ fontWeight: 600 }} mt={2}>
              Contact us
            </Typography>
            <List sx={{ color: '#6D737A' }}>
              <ListItem disableGutters>Call : +123 400 123</ListItem>
              <ListItem disableGutters>
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </ListItem>
              <ListItem disableGutters>Email: example@mail.com</ListItem>
            </List>
            <Box display={'flex'} gap={2}>
              <Button color={'secondary'} sx={{ minWidth: 0, p: '14px' }}>
                <img
                  src="./assets/img/icons/facebook-secondary-icon.svg"
                  alt="Facebook"
                />
              </Button>
              <Button color={'secondary'} sx={{ minWidth: 0, p: '14px' }}>
                <img
                  src="./assets/img/icons/social-secondary-icon.svg"
                  alt="Social"
                />
              </Button>
              <Button color={'secondary'} sx={{ minWidth: 0, p: '14px' }}>
                <img
                  src="./assets/img/icons/linkedin-secondary-icon.svg"
                  alt="Linkedin"
                />
              </Button>
              <Button color={'secondary'} sx={{ minWidth: 0, p: '14px' }}>
                <img
                  src="./assets/img/icons/instagram-secondary-icon.svg"
                  alt="Instagram"
                />
              </Button>
              <Button color={'secondary'} sx={{ minWidth: 0, p: '14px' }}>
                <img
                  src="./assets/img/icons/Behance-secondary-icon.svg"
                  alt="Behance"
                />
              </Button>
            </Box>
          </Grid>
          <Grid item px={3}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Features
            </Typography>
            <List sx={{ color: '#6D737A' }}>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Become a Host
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Pricing
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Blog
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Contact
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item px={3}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Company
            </Typography>
            <List sx={{ color: '#6D737A' }}>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  About Us
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Press
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Contact
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Careers
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Blog
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item px={3}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Team and policies
            </Typography>
            <List sx={{ color: '#6D737A' }}>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Terms of servies
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <Link href="/" color="#6D737A" sx={{ textDecoration: 'none' }}>
                  Security
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
