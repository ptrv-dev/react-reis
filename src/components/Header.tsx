import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

const socialItems = [
  {
    icon: 'facebook-icon.svg',
    uri: 'https://www.facebook.com/',
    title: 'Facebook',
  },
  {
    icon: 'social-icon.svg',
    uri: 'https://www.facebook.com/',
    title: 'Social',
  },
  {
    icon: 'linkedin-icon.svg',
    uri: 'https://www.linkedin.com/',
    title: 'Linkedin',
  },
  {
    icon: 'instagram-icon.svg',
    uri: 'https://www.instagram.com/',
    title: 'Instagram',
  },
  {
    icon: 'behance-icon.svg',
    uri: 'https://www.behance.net/',
    title: 'Behance',
  },
];

const navigationItems = [
  { title: 'Home', href: '/' },
  { title: 'About us', href: '/about-us' },
  { title: 'Our agents', href: '/our-agents' },
  { title: 'Properties', href: '/properties' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact us', href: '/contact-us' },
  { title: 'Search', href: '/search' },
  { title: 'Add Listing', href: '/add-listing', outlined: true },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header>
      {/* Header Top */}
      <Container
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: '20px',
        }}
      >
        <Link
          href="mailto:example@mail.com"
          display={'inline-flex'}
          alignItems={'center'}
          color={'#fff'}
          sx={{ textDecoration: 'none' }}
        >
          <Box sx={{ mr: '12px' }}>
            <img src="./assets/img/icons/envelope-icon.svg" alt="Email" />
          </Box>
          <Typography variant="body2">
            <b>Email us at</b>: example@mail.com
          </Typography>
        </Link>
        <Box display={'flex'} alignItems={'center'} gap={'32px'}>
          <Box display={'flex'} alignItems={'center'} gap={'16px'}>
            {socialItems.map((item, idx) => (
              <Link key={idx} href={item.uri}>
                <img src={'./assets/img/icons/' + item.icon} alt={item.title} />
              </Link>
            ))}
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ bgcolor: '#fff' }}
          />
          <Link
            href={'tel:1234567890'}
            display={'flex'}
            alignItems={'center'}
            color={'#fff'}
            sx={{ textDecoration: 'none' }}
          >
            <Box sx={{ mr: '12px' }}>
              <img src="./assets/img/icons/phone-icon.svg" alt="Phone" />
            </Box>
            123-4567 890
          </Link>
        </Box>
      </Container>
      {/* Header Bottom */}
      <Divider sx={{ bgcolor: '#fff' }} />
      <Container
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: '20px',
        }}
      >
        <Link href="/">
          <img src="./assets/img/logo.svg" alt="REIS | Real Estate" />
        </Link>
        <nav>
          {navigationItems.map((item, idx) => (
            <Button
              key={idx}
              variant={item.outlined ? 'outlined' : 'text'}
              href={item.href}
              sx={{
                textDecoration: 'none',
                textTransform: item.outlined ? 'capitalize' : 'uppercase',
                fontWeight: item.outlined
                  ? 500
                  : pathname === item.href
                  ? 600
                  : 400,
                padding: '12px 24px',
              }}
            >
              {item.title}
            </Button>
          ))}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
