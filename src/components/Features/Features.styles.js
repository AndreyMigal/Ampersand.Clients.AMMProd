import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';
import cardBgOne from 'assets/images/cardBgOne.png'
import cardBgTwo from 'assets/images/cardBgTwo.png'
import cardBgThree from 'assets/images/cardBgThree.png'
import cardBgFour from 'assets/images/cardBgFour.png'
import cardBgFifth from 'assets/images/cardBgFifth.png'
import cardBgSix from 'assets/images/cardBgSix.png'

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',
  },
  title: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '0.07em',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 36,
    }
  },
  label: {
    display: 'block',
    width: 125,
    margin: '7px auto 23px auto',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: '0.07em',
    color: COLORS.BLACK.PRIMARY,
    backgroundColor: COLORS.WHITE,
    padding: '4px 12px',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 22,
      width: 205,
    }
  },
  labelAnimation: {
    animation: '$labelFadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    animationDelay: '1s',
  },
  titleAnimation: {
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    animationDelay: '0.5s',
  },
  '@keyframes fadeIn': {
    from: { transform: 'scale(0.5)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
  },
  '@keyframes labelFadeIn': {
    from: { transform: 'scale(0.5)', opacity: 0 },
    to: { transform: 'scale(1) rotate(-2deg)', opacity: 1 },
  },
  describe: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    textAlign: 'center',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 24,
    }
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,

    [BREAKPOINTS.DESKTOP]: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  },
  featuresItem: {
    display: 'flex',
    gap: 20,
    padding: 18,
    overflow: 'hidden',

    [BREAKPOINTS.DESKTOP]: {
      zIndex: 2,
      position: 'relative',
      width: 376,
      height: 285,
      padding: 40,
      flexDirection: 'column',

      '&::after': {
        content: "''",
        opacity: 0,
        display: 'block',
        height: 285,
        width: 376,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        transition: 'opacity 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
      },

      '&::before': {
        content: "''",
        opacity: 1,
        display: 'block',
        height: 285,
        width: 376,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        transition: 'opacity 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        background: COLORS.BLACK.LIGHT,
      },

      '&:hover::before': {
        opacity: 0,
      },

      '&:hover::after': {
        opacity: 1,
      },
    }
  },
  firstCard: {
    '&::after': {
      background: `url(${cardBgOne})`,
    }
  },
  secondCard: {
    '&::after': {
      background: `url(${cardBgTwo})`,
    }
  },
  thirdCard: {
    '&::after': {
      background: `url(${cardBgThree})`,
    }
  },
  fourthCard: {
    '&::after': {
      background: `url(${cardBgFour})`,
    }
  },
  fifthCard: {
    '&::after': {
      background: `url(${cardBgFifth})`,
    }
  },
  sixthCard: {
    '&::after': {
      background: `url(${cardBgSix})`,
    }
  },
  describeAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '1.5s',
    }
  },
  featuresItemFirstAnimation:{
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '2s',
    }
  },
  featuresItemSecondAnimation:{
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '2.5s',
    }
  },
  featuresIconContainer: {
    width: 40,

    '& svg': {
      width: 40,
      fill: COLORS.WHITE,
    },

    [BREAKPOINTS.DESKTOP]: {
      width: 64,

      '& svg': {
        width: 64,
      }
    }
  },
  featureTitle: {
    marginBottom: 8,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '150%',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 22,
    }
  },
  featureDescription: {
    margin: 0, 
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '150%',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 16,
    }
  }
});

