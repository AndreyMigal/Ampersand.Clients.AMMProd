import {useStyles} from './Layout.styles'

function  Layout({children}) {
  const s = useStyles()
 
  return (
    <div className={s.root}>
      {children}
    </div>
  );
}

export default Layout;
