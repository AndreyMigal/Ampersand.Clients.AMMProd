import { makeStyles } from '@mui/styles';
import { BREAKPOINTS } from '../../breakpoints';
import { COLORS } from '../../colors';

export const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    margin: '0 auto',
    backgroundColor: COLORS.BLACK.PRIMARY,
    color: COLORS.WHITE,
    paddingTop: 110,
    overflow: 'hidden',
    
    [BREAKPOINTS.DESKTOP]: {
      maxWidth: 1170,
    }
  },
});

