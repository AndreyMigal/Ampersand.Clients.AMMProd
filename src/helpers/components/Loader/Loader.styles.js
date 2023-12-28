import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.WHITE,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '100%',
  },
  spinner: {
    marginTop: 20,
    width: 40,
    height: 40,
    borderRadius: '50%',
    borderTop: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: `5px solid ${COLORS.GREY.PRIMARY}`,
    borderLeft: `5px solid ${COLORS.GREY.PRIMARY}`,
    animation: '$spin 0.5s infinite linear',

    [BREAKPOINTS.DESKTOP]: {
      width: 80,
      height: 80,
      borderTop: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: `10px solid ${COLORS.GREY.PRIMARY}`,
      borderLeft: `10px solid ${COLORS.GREY.PRIMARY}`,
    }
  },

  '@keyframes spin': {
    '0%': { transform: 'rotate(0)'},
    '100%': {transform: 'rotate(360deg)'},
  }
})