import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    margin: '70px auto 80px auto',
    position: 'relative',
    paddingTop: 50,

    [BREAKPOINTS.DESKTOP]: {
      paddingTop: 0,
      margin: '120px auto 80px auto',
    }
  },
  desctopContainer: {
    [BREAKPOINTS.DESKTOP]: {
      display: 'flex',
    }
  },
  leftBlock: {
    [BREAKPOINTS.DESKTOP]: {
      width: 230,
    }
  },
  rightBlock: {
    [BREAKPOINTS.DESKTOP]: {
      width: 940,
    }
  },
  labelContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    animation: '$labelFadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
  },
  label: {
    padding: '4px 12px',
    fontFamily: 'Furore, sans-serif',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '100%',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '0.07em',
    color: COLORS.BLACK.PRIMARY,
    backgroundColor: COLORS.WHITE,

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 22,
    }
  },
  labelAnimation: {
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    animationDelay: '0.5s',
  },
  titleAnimation: {
    animation: '$fadeIn 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    animationDelay: '1s',
  },
  '@keyframes fadeIn': {
    from: { transform: 'scale(0.5)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1, },
  },
  '@keyframes labelFadeIn': {
    from: { transform: 'scale(0.5)', opacity: 0 },
    to: { transform: 'scale(1) rotate(-2deg)', opacity: 1, },
  },
  title: {
    fontFamily: 'Furore',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '150%',
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
    margin: '0 auto 20px auto',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 36,
    }
  },
  reasonList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBottom: 40,
  },
  reasonItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '150%',

    [BREAKPOINTS.DESKTOP]: {
      fontSize: 18,
    }
  },
  starIcon: {
    fill: COLORS.WHITE,
    width: 16,
    flexShrink: 0,
  },
  video: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: "56.25%",
    backgroundColor: COLORS.BLACK.PRIMARY
  },
  preview: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
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
});

