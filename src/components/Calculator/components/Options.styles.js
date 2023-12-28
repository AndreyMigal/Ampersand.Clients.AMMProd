import { makeStyles } from '@mui/styles';
import { COLORS } from 'helpers/colors';

export const useStyles = makeStyles({
  optionContainer: {
    '& div:active': {
      backgroundColor: COLORS.BLACK.LIGHT,
    },
  },

  container: {
    display: 'block',
    position: 'relative',
    padding: '0 0 0 35px',
    cursor: 'pointer',
    userSelect: 'none',
    margin: 0,
    lineHeight: '24px',

    '& input': {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      height: 0,
      width: 0,
    },

    '& input:checked ~ $checkmark:after': {
      display: 'block',
    },

    '& $checkmark:after': {
      left: 8,
      top: 4,
      width: 5,
      height: 10,
      border: 'solid white',
      borderWidth: '0 1px 1px 0',
      transform: 'rotate(45deg)',
    }
  },
  
  checkmark: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: 'transparent',
    border: `1px solid ${COLORS.WHITE}`,

    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',
    },
  }
})