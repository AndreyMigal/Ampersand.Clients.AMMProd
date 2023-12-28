import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    maxWidth: 320,
    margin: '52px auto 50px auto',
    backgroundColor: COLORS.BLACK.PRIMARY,
    color: COLORS.WHITE,
    
    [BREAKPOINTS.DESKTOP] : {
      maxWidth: 1440,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '50px 50px',
    }
  },
  adressContainer: {
    [BREAKPOINTS.DESKTOP]: {
      gridColumn: 3, 
      gridRow: 1,
      alignSelf: 'center'
    }
  },
  separator: {
    position: 'absolute',
    top: -52,
    left: -100,
    zIndex: 10,
    width: 500,
    borderTop: `1px solid ${COLORS.GREY.PRIMARY}`,

    [BREAKPOINTS.DESKTOP]: {
      width: 2700,
    }
  },
  logoIcon: {
    width: 102,
    display: 'block',
    margin: '0 auto',
    
    '& svg': {
      width: 102,
      height: 56,
    },
    [BREAKPOINTS.DESKTOP]: {
      alignSelf: 'center'
    }
  },
  icon: {
    fill: COLORS.GREY.LIGHT,

    '&:hover': {
      fill: COLORS.WHITE,
    }
  },
  newIconContainer: {
    width: 24,
    paddingTop: 2,
    display: 'flex',
    justifyContent: 'center',
  },
  newIcon: {
    stroke: COLORS.GREY.LIGHT,
    width: 19.5,
    height: 19.5,

    '&:hover': {
      stroke:COLORS.WHITE,
    }
  },
  socialmediaList: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '40px 0',

    [BREAKPOINTS.DESKTOP]: {
      margin: 0,
    }
  },
  contacts: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
    textAlign: 'center',
    margin: '0 0 12px 0',
  },
  rights: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    margin: 0,
    textAlign: 'center',

    [BREAKPOINTS.DESKTOP]: {
      gridColumn: 2, 
      gridRow: 2,
    }
  }
});

