import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',
    width: '100vw',

    [BREAKPOINTS.DESKTOP]: {
      maxWidth: 1170,
    }
  },
  mobilePlaseholder: {
    padding:10,
    [BREAKPOINTS.DESKTOP]: {
      display: 'none'
    }
  },
  title: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '0.07em',
    color: COLORS.WHITE,
    [BREAKPOINTS.DESKTOP]: {
      fontSize: 36,
    },
  }, 
  cardsContainer: {
    marginTop: 40,
    minWidth: '100%',
    display: 'flex',
    gap: 16,
    overflowX: 'scroll',
    paddingBottom: 20,
    
    [BREAKPOINTS.DESKTOP]: {
      gap: 20,
      flexWrap: 'wrap',
      overflowX: 'hidden',
    }
  },
  desctopFoto: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      width: 575,
      height: 501
    }
  },
  card: {
    minWidth: 280,
    width: 280,
    padding: 16,
    backgroundColor: COLORS.BLACK.LIGHT,
    color: COLORS.WHITE,

    '&:first-child': {
      display: 'none',
    },

    [BREAKPOINTS.DESKTOP]: {
      width: 575,
      height: 501,
      overflow: 'hidden',
      padding: 40,

      '&:first-child': {
        padding: 0,
        display: 'block',
      }
    },
  },
  cardTitle: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '0.07em',
    marginBottom: 16,

    [BREAKPOINTS.DESKTOP]: {
      textAlign: 'left',
      fontSize: 22,
    }
  },
  line: {
    color: COLORS.RED.PRIMARY,
    marginRight: 5,

    [BREAKPOINTS.DESKTOP]: {
      display: 'none',
    }
  },
  carlList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  listItem: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    display: 'flex',
    gap: 16,
    alignItems: 'center',

    '& svg': {
      width: 16,
      flexShrink: 0,
    },

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 16,
    }
  },
  studioFoto: {
    width: 320,
    height: 320, 
    display: 'block',
    margin: '80px auto 0 auto',

    [BREAKPOINTS.DESKTOP]: {
      display: 'none',
    }
  },
  titleAnimation: {
    [BREAKPOINTS.DESKTOP]: {

    },
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    animationDelay: '0.5s',
  },
  '@keyframes fadeIn': {
    from: { transform: 'scale(0.5)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
  },
  firstCardAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '1s',
    },
  },
  secondaCardAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '1.5s',
    },
  },
  thirdCardAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '2s',
    },
  },
  fourCardAnimation: {
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '2.5s',
    },
  }
});

