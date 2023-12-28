import { useStyles } from './Loader.styles';


function Loader() {
  const s = useStyles();

  return (
    <div className={s.root}>
      <div className={s.spinner}></div>
    </div>
  );
}

export default Loader;
