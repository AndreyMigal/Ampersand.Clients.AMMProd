import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    margin: '0 auto 80px auto',
  },
  video: {
    position: 'relative',
    width: 320,
    height: 190,
    backgroundColor: COLORS.BLACK.PRIMARY,

    [BREAKPOINTS.DESKTOP]: {
      width: 575,
      height: 324,
      flexShrink: 0,
    }
  },
  preview: {
    border: 'none',
    width: 320,
    height: 190,
    objectFit: 'cover',

    [BREAKPOINTS.DESKTOP]: {
      width: 575,
      height: 324,
    }
  },
  videoBtn: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fill: COLORS.WHITE,
      width: 60,
    },
    '&:active svg': {
      fill: COLORS.GREY.LIGHT,
    },

    [BREAKPOINTS.DESKTOP]: {
      '& svg': {
        width: 100,
      },
    }
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
  descriptionAnimation: {
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    animationDelay: '1s',

    [BREAKPOINTS.DESKTOP]: {
      width: 590,
      textAlign: 'center',
      margin: '0 auto 80px auto'
    }
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
    margin: '20px 0 0 0',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 24,
      display: 'inline',
    }
  },
  link: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    textAlign: 'center',
    display: 'block',
    textDecoration: 'underline',
    marginBottom: 40,

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 24,
      display: 'inline',
      marginLeft: 10,
      fontWeight: 600,
    }
  },
  card: {
    borderBottom: `1px solid ${COLORS.GREY.PRIMARY}`,
    paddingBottom: 20,

    '&:not(:last-child)': {
      marginBottom: 40,
    },

    [BREAKPOINTS.DESKTOP]: {
      display: 'flex',
      gap: 48,
      borderBottom: 'none',

      '&:nth-child(even)': {
        flexDirection: 'row-reverse'
      }
    }
  },
  cardsTitle: {
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    textAlign: 'center',
    margin: '40px 0 20px 0',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 22,
      margin: '20px 0 20px 0',
    }
  },
  subTitle: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '150%',
    marginBottom: 8,

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 22,
    }
  },
  text: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',

    '&:not(:last-child)': {
      marginBottom: 12,
    },

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 16,
    }
  }
});

