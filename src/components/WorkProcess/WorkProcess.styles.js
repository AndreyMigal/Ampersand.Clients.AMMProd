import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import desctopImageOne from 'assets/images/01w.png'
import desctopImageOneHover from 'assets/images/01r.png'
import desctopImageTwo from 'assets/images/02w.png'
import desctopImageTwoHover from 'assets/images/02r.png'
import desctopImageThree from 'assets/images/03w.png'
import desctopImageThreeHover from 'assets/images/03r.png'
import desctopImageFour from 'assets/images/04w.png'
import desctopImageFourHover from 'assets/images/04r.png'

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 

    [BREAKPOINTS.DESKTOP]: {
      margin: '0 auto 136px auto',
    }
  },
  cardsContainer: {
    [BREAKPOINTS.DESKTOP]: {
      display: 'flex',
      gap: 20,
    }
  },
  title: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    letterSpacing: '0.07em',
    marginBottom: 48,

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 36,
    }
  },
  titleAnimation:{
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '0.5s',
    }
  },
  cardOneAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '1s',
    }
  },
  cardTwoAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '1.5s',
    }
  },
  cardThreeAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '2s',
    }
  },
  cardFourAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '2.5s',
    }
  },
  '@keyframes fadeIn': {
    from: { transform: 'scale(0.5)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1, },
  },
  cardsItem: {
    display: 'flex',
    gap: 33,

    '&:not(:last-child)': {
      marginBottom: 48,
    },

    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      width: 278,

      '&:not(:last-child)': {
        marginBottom: 0,
      },
    }
  },
  cardsList: {
    width: 195,
  },
  cardsNumberImg: {
    width: 105,
    height: 69,
    marginLeft: 10,

    [BREAKPOINTS.DESKTOP]: {
      display: 'none',
    }
  },
  cardsItemTitle: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    letterSpacing: '0.07em',
    marginBottom: 12,

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 22,
    }
  },
  cardsListItem: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    margin: 0,

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 16,
    }
  },
  desctopImgPlaceholder: {
    display: 'none',
    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      width: 181,
      height: 120,
      position: 'relative',
      marginBottom: 28,  

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${desctopImageOne})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
        transition: '0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
      '$cardsItem:hover &::after': {
        opacity: 0,
      },
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${desctopImageOneHover})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 0,
        transition: 'all 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
      '$cardsItem:hover &::before': {
        opacity: 1,
      }
    }
  },
  desctopImgPlaceholderTwo: {
    display: 'none',
    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      width: 181,
      height: 120,
      position: 'relative',
      marginBottom: 28,

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${desctopImageTwo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
        transition: 'all 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
      '$cardsItem:hover &::after': {
        opacity: 0,
      },
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${desctopImageTwoHover})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 0,
        transition: 'all 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
      '$cardsItem:hover &::before': {
        opacity: 1,
      }
    }
  },
  desctopImgPlaceholderThree: {
    display: 'none',
    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      width: 181,
      height: 120,
      position: 'relative',
      marginBottom: 28,

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${desctopImageThree})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
        transition: 'all 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
      '$cardsItem:hover &::after': {
        opacity: 0,
      },
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${desctopImageThreeHover})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 0,
        transition: 'all 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
      '$cardsItem:hover &::before': {
        opacity: 1,
      }
    }
  },
  desctopImgPlaceholderFour: {
    display: 'none',
    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      width: 181,
      height: 120,
      position: 'relative',
      marginBottom: 28,

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${desctopImageFour})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
        transition: 'all 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
      '$cardsItem:hover &::after': {
        opacity: 0,
      },
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${desctopImageFourHover})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 0,
        transition: 'all 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)'
      },
      '$cardsItem:hover &::before': {
        opacity: 1,
      }
    }
  }
});

