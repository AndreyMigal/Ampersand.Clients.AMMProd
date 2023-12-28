import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',
    position: 'relative',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    marginTop: 28,
    width: '100%',
    
    '& label': {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: '100%',
      color: COLORS.WHITE,
    },
  },
  title: {
    fontFamily: 'Furore, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '0.07em',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 36,
      textAlign: 'left',
    }
  }, 
  description: {
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: '150%',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 24,
      textAlign: 'left',
    }
  },
  submittedContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [BREAKPOINTS.DESKTOP]: {
      width: 575,
    }
  },
  contactInput: {
    border: 'none',
    outline: 'none',
    padding: 15,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    color: COLORS.WHITE,
    '-webkit-border-radius': 0,
    '-webkit-appearance': 'none',

    borderBottom: `1px solid ${COLORS.GREY.PRIMARY}`,
    backgroundColor: COLORS.BLACK.PRIMARY,

    '&:hover, &:focus': {
      borderBottom: `1px solid ${COLORS.WHITE}`,
    },

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },

    '&::-webkit-contacts-auto-fill-button': {
      visibility: 'hidden',
      display: 'none !important',
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
    },
  },
  errorState: {
    '& input': {
      borderBottom: `1px solid ${COLORS.RED.TOMATO}`,
    },
  },
  error: {
    color: COLORS.RED.TOMATO,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '100%',
  },
  formContainer: {
    [BREAKPOINTS.DESKTOP]: {
      width: 575,
      marginRight: 'auto',
    }
  },
  submitBtn: {
    height: 50,
    fontFamily: 'Roboto, sans-serif',
    padding: '16px 36px',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '100%',
    border: 'none',
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK.PRIMARY,
    cursor: 'pointer',

    '&:hover': {
      border: `2px solid ${COLORS.WHITE}`
    },

    '&:active': {
      backgroundColor: COLORS.GREY.LIGHT
    }
  },
  successTitle: {
    textAlign: 'center',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    marginTop: 40,
  },
  successDescription: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    textAlign: 'center',
    color: COLORS.GREY.LIGHT,
    margin: '28px 0',
  },
  phoneContainer: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    letterSpacing: '0.07em',
    margin: '30px 0'
  },
  phoneIcon: {
    width: 32,
    fill: COLORS.WHITE,
    marginRight: 12,
  },
  successRequest: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    textAlign: 'center',
    color: COLORS.GREY.LIGHT,
    margin: '0 0 55px 0'
  },
  foxLogo: {
    width: 160,
    margin: '0 auto',
  },
  elispse: {
    dispaly: 'none',
    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      position: 'absolute',
      width: 152,
      height: 245,
      left: 870,
      top: 220,
      background: '#DC1515',
      filter: 'blur(100px)',
      transform: 'translate3d(0, 0, 0)',
      borderRadius: '50%',
      animation: '$Ellipse 13000ms 0ms linear infinite'
    }
  },
  '@keyframes Ellipse': {
    '0%': {
      left: 710,
      top: 160,
    },
    '20%': {
      left: 770,
      top: 160,
    },
    '40%': {
      left: 735,
      top: 160,
    },
    '60%': {
      left: 715,
      top: 160,
    },
    '80%': {
      left: 648,
      top: 130,
    },
    '100%': {
      left: 710,
      top: 160,
    },
  },
  elipseTwo: {
    display: 'none',
    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      position: 'absolute',
      width: 137,
      height: 196,
      left: 820,
      top: 160,
      borderRadius: '50%',
      background: '#C99C9C',
      filter: 'blur(60px)',
      transform: 'translate3d(0, 0, 0)',
      animation: '$Ellipse2 13000ms 0ms linear infinite'
    }
  },

  '@keyframes Ellipse2': {
    '0%': {
      left: 710,
      top: 160,
    },
    '20%': {
      left: 770,
      top: 300,
    },
    '40%': {
      left: 860,
      top: 320,
    },
    '60%': {
      left: 840,
      top: 240,
    },
    '80%': {
      left: 740,
      top: 210,
    },
    '100%': {
      left: 710,
      top: 160,
    },
  },
});

