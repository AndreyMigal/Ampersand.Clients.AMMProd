import { components } from "react-select";
import { useStyles } from './Options.styles';

export const Option = (props) => {
  const s = useStyles();

  return (
    <div className={s.optionContainer}>
      <components.Option {...props}> 
      <p className={s.container}>{props.label}
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <span className={s.checkmark}></span>
        </p>
      </components.Option>
    </div>
  );
};
