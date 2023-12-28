import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  closeBtn: {
    position: 'absolute',
    top: 28,
    left: 24,
    border: 'none',
    padding: 0,
    backgroundColor: 'transparent'
  },
  contactsModal: {
    position: 'fixed',
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    height: "100vh",
    backgroundColor: COLORS.BLACK.PRIMARY,

    [BREAKPOINTS.DESKTOP]: {
      width: 960,
      height: 660,
      top: 'calc(50% - 330px)',
      left: 'calc(50% - 480px)',
      overflow: 'hidden',
    }
  },
  successModal: {
    [BREAKPOINTS.DESKTOP]: {
      height: 558,
      width: 960,
    }
  },
  modalContainer: {
    backgroundColor: COLORS.BLACK.PRIMARY,
    width: 288,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,

    [BREAKPOINTS.DESKTOP]: {
      width: 575,
      height: 540,
      margin: '60px auto 60px 80px'
    }
  },
  successfullForm: {
    backgroundColor: COLORS.BLACK.PRIMARY,
    width: 288,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [BREAKPOINTS.DESKTOP]: {
      width: 492,
      height: 333,
      margin: '112px 145px 113px auto'
    }
  },
  pigLogo: {
    width: 80,

    [BREAKPOINTS.DESKTOP]: {
      display: 'none',
    }
  },
  pigLogoDesc: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      position: 'absolute',
      right: 0,
      display: 'block',
    },
  },
  modalTitle: {
    textAlign: 'center',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    marginTop: 18, 

    [BREAKPOINTS.DESKTOP]:{
      marginTop: 0,
      fontSize: 36,
      textAlign: 'center',
      letterSpacing: '0.07em',
    }
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
  contactInput: {
    border: 'none',
    padding: 15,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    color: COLORS.WHITE,
    '-webkit-appearance': 'none',
    '-webkit-border-radius':'0px',
    outline: 'none',
    
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      display: 'none',
      appearance: 'none',
      margin: 0,
    },
    
    '&::-webkit-contacts-auto-fill-button': {
      visibility: 'hidden',
      display: 'none !important',
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
    },

    borderBottom: `1px solid ${COLORS.GREY.PRIMARY}`,
    backgroundColor: COLORS.BLACK.PRIMARY,

    '&:hover, &:focus': {
      borderBottom: `1px solid ${COLORS.WHITE}`,
    }
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
  submitBtn: {
    height: 50,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '100%',
    border: 'none',
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK.PRIMARY,
    cursor: 'pointer',

    '&:active': {
      backgroundColor: COLORS.GREY.LIGHT
    }
  },
  modalCloseBtn: {
    position: 'absolute',
    top: 23,
    right: 23,
    zIndex: 11,
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  successTitle: {
    textAlign: 'center',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    marginTop: 80,

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 36,
      lineHeight: '150%',
      letterSpacing: '0.07em',
    }
  },
  successDescription: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    textAlign: 'center',
    color: COLORS.GREY.LIGHT,
    margin: '28px 0',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 18,
    }
  },
  phoneIcon: {
    width: 32,
    fill: COLORS.WHITE,
    marginRight: 12,
  },
  phoneContainer: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    letterSpacing: '0.07em',
    margin: '30px 0',

    [BREAKPOINTS.DESKTOP]:{
      fontSize: 22,
    }
  },
  successRequest: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    textAlign: 'center',
    color: COLORS.GREY.LIGHT,
    margin: '0 0 55px 0',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 18,
    }
  },
  foxLogo: {
    width: 160,
    margin: '0 auto',

    [BREAKPOINTS.DESKTOP]: {
      display: 'none'
    }
  },
  foxLogoDesc: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      position: 'absolute',
      left: 0,
      display: 'block'
    }
  },
  backdrop: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      zIndex: 9,
      top: 0,
      left: 0,
      right: 0,
      height: "100vh",
    }
  }
});

