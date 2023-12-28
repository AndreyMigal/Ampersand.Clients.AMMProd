import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import client1x2 from 'assets/images/client1x2.png';
import client2x2 from 'assets/images/client2x2.png';
import client3x2 from 'assets/images/client3x2.png';
import client4x2 from 'assets/images/client4x2.png';
import client5x2 from 'assets/images/client5x2.png';
import client6x2 from 'assets/images/client6x2.png';
import client7x2 from 'assets/images/client7x2.png';
import client8x2 from 'assets/images/client8x2.png';
import client1x2b from 'assets/images/client1x2b.png';
import client2x2b from 'assets/images/client2x2b.png';
import client3x2b from 'assets/images/client3x2b.png';
import client4x2b from 'assets/images/client4x2b.png';
import client5x2b from 'assets/images/client5x2b.png';
import client6x2b from 'assets/images/client6x2b.png';
import client7x2b from 'assets/images/client7x2b.png';
import client8x2b from 'assets/images/client8x2b.png';

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',

    [BREAKPOINTS.DESKTOP]: {
      position: 'relative',
      margin: '0 auto 120px auto',
    }
  },
  title: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '0.07em',
    marginBottom: 40,

    [BREAKPOINTS.DESKTOP]: {
      textAlign: 'left',
      fontSize: 36,
      marginBottom: 87,
    }
  },
  clientsCardList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
  },
  clutch: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '150%',
    textAlign: 'center',
    width: 210,
    margin: '40px auto 20px auto',

    '& img': {
      width: 168,
      height: 68,
    },

    [BREAKPOINTS.DESKTOP]: {
      position: 'absolute',
      top: 15,
      right: 250,
      textAlign: 'left',
      margin: 0,
    }
  },
  clutchLink: {
    margin:'20px auto 0 auto', 
    width: 168,
    display: 'block',

    [BREAKPOINTS.DESKTOP]: {
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 0, 
    }
  },
  clientsImg: {
    [BREAKPOINTS.DESKTOP]:{
      display: 'none'
    }
  },
  clientOne: {
    [BREAKPOINTS.DESKTOP]: {
      width: 278,
      height: 180,
      position: 'relative',
  
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client1x2b})`,
        backgroundSize: 'cover',
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client1x2})`,
        backgroundSize: 'cover',
        opacity: 0,
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&:hover::before': {
        opacity: 1,
      },
  
      '&:hover::after': {
        opacity: 0,
      }
    }
  },
  clientTwo: {
    [BREAKPOINTS.DESKTOP]: {
      width: 278,
      height: 180,
      position: 'relative',
  
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client2x2b})`,
        backgroundSize: 'cover',
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client2x2})`,
        backgroundSize: 'cover',
        opacity: 0,
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&:hover::before': {
        opacity: 1,
      },
  
      '&:hover::after': {
        opacity: 0,
      }
    }
  },
  clientThree: {
    [BREAKPOINTS.DESKTOP]: {
      width: 278,
      height: 180,
      position: 'relative',
  
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client3x2b})`,
        backgroundSize: 'cover',
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client3x2})`,
        backgroundSize: 'cover',
        opacity: 0,
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&:hover::before': {
        opacity: 1,
      },
  
      '&:hover::after': {
        opacity: 0,
      }
    }
  },
  clientFour: {
    [BREAKPOINTS.DESKTOP]: {
      width: 278,
      height: 180,
      position: 'relative',
  
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client4x2b})`,
        backgroundSize: 'cover',
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client4x2})`,
        backgroundSize: 'cover',
        opacity: 0,
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&:hover::before': {
        opacity: 1,
      },
  
      '&:hover::after': {
        opacity: 0,
      }
    }
  },
  clientFive: {
    [BREAKPOINTS.DESKTOP]: {
      width: 278,
      height: 180,
      position: 'relative',
  
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client5x2b})`,
        backgroundSize: 'cover',
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client5x2})`,
        backgroundSize: 'cover',
        opacity: 0,
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&:hover::before': {
        opacity: 1,
      },
  
      '&:hover::after': {
        opacity: 0,
      }
    }
  },
  clientSix: {
    [BREAKPOINTS.DESKTOP]: {
      width: 278,
      height: 180,
      position: 'relative',
  
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client6x2b})`,
        backgroundSize: 'cover',
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client6x2})`,
        backgroundSize: 'cover',
        opacity: 0,
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&:hover::before': {
        opacity: 1,
      },
  
      '&:hover::after': {
        opacity: 0,
      }
    }
  },
  clientSeven: {
    [BREAKPOINTS.DESKTOP]: {
      width: 278,
      height: 180,
      position: 'relative',
  
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client7x2b})`,
        backgroundSize: 'cover',
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client7x2})`,
        backgroundSize: 'cover',
        opacity: 0,
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&:hover::before': {
        opacity: 1,
      },
  
      '&:hover::after': {
        opacity: 0,
      }
    }
  },
  clientEight: {
    [BREAKPOINTS.DESKTOP]: {
      width: 278,
      height: 180,
      position: 'relative',
  
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client8x2b})`,
        backgroundSize: 'cover',
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url(${client8x2})`,
        backgroundSize: 'cover',
        opacity: 0,
        transition: 'all cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
  
      '&:hover::before': {
        opacity: 1,
      },
  
      '&:hover::after': {
        opacity: 0,
      }
    }
  },
  titleAnimation:{
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '0.5s',
    }
  },
  clutchAnimation:{
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '1s',
    }
  },
  firstRowAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '1.5s',
    }
  },
  secondRowAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '2s',
    }
  },
  '@keyframes fadeIn': {
    from: { transform: 'scale(0.5)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1, },
  },
 });

