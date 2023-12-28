import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from 'helpers/breakpoints';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  root: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.BLACK.PRIMARY,
    zIndex: 8,

    [BREAKPOINTS.DESKTOP]: {
      padding: '12px 24px',
    }
  },
  logo: {
    width: 102,
    height: 56,

    [BREAKPOINTS.DESKTOP]: {
      width: 128,
      height: 76,
    }
  },
  menuBtn: {
    position: 'absolute',
    top: 33,
    left: 20,
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'none',
    }
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: '100%',
    zIndex: 9,
    backgroundColor: COLORS.BLACK.PRIMARY,
    color: COLORS.GREY.LIGHT,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  desctopMenu: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'flex',
      marginLeft: 172,
      justifyContent: 'space-between',
      width: 875,
    }
  },
  myNodeEnter: {
    opacity: 0,
    transform: 'translateY(-50%)',
  },
  myNodeEnterActive: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 2500ms ease',
  },
  myNodeExit: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  myNodeExitActive: {
    opacity: 0,
    transform: 'translateY(-50%)',
    transition: 'all 2500ms ease',
  },
  hidden: {
    display: 'none',
  },
  menuList: {
    margin: '130px 0',
    gap: 32,
  },
  menuItem: {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: COLORS.GREY.LIGHT,

    '&:not(:last-child)': {
      marginBottom: 32,
    },
  },
  contactBtn: {
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'Roboto, san-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '16px',
    color: COLORS.WHITE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 132,
    height: 32,

    '& svg': {
      marginLeft: 10,
    },

    [BREAKPOINTS.DESKTOP]: {
      marginBottom: 0,
      cursor: 'pointer',
      padding: 0,
      '&:hover': {
        borderBottom: `1px solid ${COLORS.WHITE}`
      }
    }
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  separator: {
    margin: '0 10px',
    width: 1,
    height: 20,
    backgroundColor: COLORS.WHITE
  },
  langBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: COLORS.GREY.LIGHT,
    fontFamily: 'Roboto, san-serif',
    fontWeight: 400,
    fontSize: 16,
    cursor: 'pointer',

    '&:hover, &:focus': {
      fontWeight: 700,
      color: COLORS.WHITE,
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 37,
    left: 24,
    border: 'none',
    padding: 0,
    backgroundColor: 'transparent'
  },
  desctopMenuList: {
    display: 'none',

    [BREAKPOINTS.DESKTOP]: {
      display: 'flex',
      gap: 32,
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '100%',
      color: COLORS.GREY.LIGHT,
      alignItems: 'center',
    }
  },
  desctopMenuItem: {
    '&:hover, &:focus': {
      borderBottom: `1px solid ${COLORS.WHITE}`,
      color: COLORS.WHITE
    }
  }
});

