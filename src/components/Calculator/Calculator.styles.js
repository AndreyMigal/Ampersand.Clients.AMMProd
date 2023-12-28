import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  title: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '0.07em',
    margin: '0 0 20px 0',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 36,
    }
  },
  descriptionAnimation: {
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
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
  description: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    textAlign: 'center',
    margin: '0 0 55px 0',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 24,
    }
  },
  radioContainer: {
    display: 'flex',
    padding: '0 1px',
    marginBottom: 55, 
    justifyContent: 'space-between',

    '& div:active': {
      backgroundColor: COLORS.BLACK.LIGHT,
    },
  },
  calculatorForm: {
    marginBottom: 130,

    [BREAKPOINTS.DESKTOP]: {
      width: 575,
      marginBottom: 0
    }
  },
  typeOfContent: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
  },
  radioLabel:{ 
    display: 'block',
    position: 'relative',
    paddingLeft: 35,
    marginBottom: 12,
    cursor: 'pointer',
    userSelect: 'none',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',
    letterSpacing: '0.07em',

    '&:hover input ~ span': {
      border: `1px solid ${COLORS.WHITE}`,
    },

    '& input:checked ~ p': {
      display: 'block',
    },

    '& input:checked ~ span:after': {
      display: 'block',
    },

    '& span:after': {
      left: 9,
      top: 5,
      width: 5,
      height: 10,
      border: `1px solid ${COLORS.WHITE}`,
    },

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 22,
      lineHeight: '100%'
    }
  },
  formTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '100%',
    marginBottom: 8,
  },
  checkmarkInner: {
    margin: 0,
    width: 12,
    height: 12,
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    top: 6,
    left: 6,
    display: 'none',
    pointerEvents: 'none',
  },
  checkmark: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: 'transparent',
    border: `1px solid ${COLORS.GREY.PRIMARY}`,

    '&:after': {
      content: '"',
      position: 'absolute',
      display: 'none',
    }
  },
  submitBtn: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 18,
    width: '100%',
    color: COLORS.BLACK.PRIMARY,
    backgroundColor: COLORS.WHITE,
    border: 'none',
    padding: '16px 66px',
    '&:active': {
      backgroundColor: COLORS.GREY.LIGHT
    }
  },
  calculatorImg: {
    display: 'none',
    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      width: 496,
      height: 496,
    }
  },
  calculatorImgAnimation:{
    [BREAKPOINTS.DESKTOP]: {
      animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      animationDelay: '1.5s',
    }
  },
  formContainer: {
    width: '100%',
    [BREAKPOINTS.DESKTOP]: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 90,
    }
  },
  calculatedBlock: {
    padding: 16,
    border: `1px solid ${COLORS.GREY.PRIMARY}`,
    width: '100%',
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,

    [BREAKPOINTS.DESKTOP]: {
      marginTop: 0,
      flexDirection: 'row',
      gap: 0,
      padding: 0,
    }
  },
  finalPrice: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 40,
    lineHeight: '100%',
    letterSpacing: '0.07em',
    marginBottom: 12,

    [BREAKPOINTS.DESKTOP]: {
      display: 'none'
    }
  },
  finalPriceDesctop: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      fontFamily: 'Furore, sans-serif',
      fontWeight: 400,
      fontSize: 40,
      lineHeight: '100%',
      letterSpacing: '0.07em',
    }
  },
  finalPriceWrapper: {
    [BREAKPOINTS.DESKTOP]: {
      display: 'flex',
      gap: 25,
      alignItems: 'center',
      marginBottom: 28,
    }
  },
  disclaimerTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '150%',

    [BREAKPOINTS.DESKTOP]: {
      display: 'none'
    }
  },
  disclaimerTitleDesctop: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'block',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '150%',
    }
  },
  videoOptionsContainer: {
    '& p': {
      display: 'flex',
      justifyContent: 'space-between'
    },

    [BREAKPOINTS.DESKTOP]: {
       borderRight: `1px solid ${COLORS.GREY.PRIMARY}`,
       width: 398,
       padding: 28,
       flexShrink: 0
    }
  },
  finalpriceContainer: {
    [BREAKPOINTS.DESKTOP]: {
      padding: 28,
    }
  },
  videoOptionsValue: {
    width: 152,
    display: 'inline-block',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
  },
  optionsValues: {
    margin: 0,
    width: 152,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
  },
  videoOptionsTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '150%',
    width: 72,

    [BREAKPOINTS.DESKTOP]: {
      width: 'auto'
    }
  },
  videoDisclaimer: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',

    [BREAKPOINTS.DESKTOP]: {
      marginBottom: 28,
      fontSize: 18,
    }
  },
  modalBtn: {
    height: 50,
    width: '100%',
    marginTop: 28,
    fontFamily: 'Roboto, sans-serif',
    padding: '16px 36px',
    alignSelf: 'center',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '100%',
    border: 'none',
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK.PRIMARY,
    cursor: 'pointer',
    margin: '0 auto',
    animationDelay: '1.5s',
    '&:active': {
      backgroundColor: COLORS.GREY.LIGHT,
    },

    [BREAKPOINTS.DESKTOP]: {
      marginTop: 0,
      width: 'auto',
    }
  },
});

