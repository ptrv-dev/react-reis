import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
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
  { title: 'About us', href: '/' },
  { title: 'Our agents', href: '/' },
  { title: 'Properties', href: '/' },
  { title: 'Gallery', href: '/' },
  { title: 'Blog', href: '/' },
  { title: 'Contact us', href: '/' },
  { title: 'Search', href: '/' },
  { title: 'Add Listing', href: '/', outlined: true },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const [currentWidth, setCurrentWidth] = React.useState(0);

  React.useEffect(() => {
    const windowResize = () => setCurrentWidth(window.innerWidth);
    windowResize();

    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  return (
    <Box component={'header'} position="absolute" zIndex={10} width={'100%'}>
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
        {currentWidth > 550 && (
          <Link
            href="mailto:example@mail.com"
            display={'inline-flex'}
            gap={'12px'}
            alignItems={'center'}
            color={'#fff'}
            sx={{ textDecoration: 'none' }}
          >
            <Box>
              <img src="./assets/img/icons/envelope-icon.svg" alt="Email" />
            </Box>
            <Typography variant="body2">
              <b>Email us at</b>: example@mail.com
            </Typography>
          </Link>
        )}
        <Box
          display={'flex'}
          alignItems={'center'}
          width={currentWidth <= 550 ? '100%' : 'auto'}
          justifyContent={currentWidth <= 550 ? 'space-between' : ''}
          gap={currentWidth <= 768 ? '16px' : '32px'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={currentWidth <= 425 ? '8px' : '16px'}
          >
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
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={currentWidth <= 425 ? '8px' : '16px'}
          >
            <Link
              href={'tel:1234567890'}
              display={'flex'}
              alignItems={'center'}
              color={'#fff'}
              gap={'12px'}
              sx={{ textDecoration: 'none' }}
            >
              <Box>
                <img src="./assets/img/icons/phone-icon.svg" alt="Phone" />
              </Box>
              {currentWidth > 750 && '123-4567 890'}
            </Link>
            {currentWidth <= 550 && (
              <Link
                href="mailto:example@mail.com"
                display={'inline-flex'}
                gap={'12px'}
                alignItems={'center'}
                color={'#fff'}
                sx={{ textDecoration: 'none' }}
              >
                <Box>
                  <img src="./assets/img/icons/envelope-icon.svg" alt="Email" />
                </Box>
              </Link>
            )}
          </Box>
        </Box>
      </Container>

      <Divider sx={{ bgcolor: '#fff' }} />

      {/* Header Bottom */}
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
        {currentWidth >= 1400 ? (
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
        ) : (
          <Button
            onClick={() => setMenuOpen((prev) => !prev)}
            sx={{
              display: 'inline-flex',
              minWidth: 0,
              width: 30,
              height: 25,
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 0,
            }}
          >
            <Box
              component={'span'}
              sx={{ width: '100%', height: '3px', background: '#FFFFFF' }}
            ></Box>
            <Box
              component={'span'}
              sx={{ width: '100%', height: '3px', background: '#FFFFFF' }}
            ></Box>
            <Box
              component={'span'}
              sx={{ width: '100%', height: '3px', background: '#FFFFFF' }}
            ></Box>
          </Button>
        )}
      </Container>

      <Drawer
        open={isMenuOpen}
        anchor={'right'}
        onClose={() => setMenuOpen(false)}
        sx={{ background: 'none' }}
      >
        <Box
          component={'nav'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          py={4}
          minWidth={320}
        >
          {navigationItems.map((item, idx) => (
            <Button
              key={idx}
              variant={item.outlined ? 'outlined' : 'text'}
              href={item.href}
              color={'secondary'}
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
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
