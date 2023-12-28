import { COLORS } from 'helpers/colors';

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    border: 0,
    boxShadow: state.isFocused ? 0 : 0,
    borderRadius: 0,
    marginBottom: 40,
    borderBottom: state.isFocused ? `1px solid ${COLORS.WHITE} !important` : `1px solid ${COLORS.GREY.PRIMARY} !important`,
    backgroundColor: COLORS.BLACK.PRIMARY,
  }),
  singleValue: (provided, state) => ({
    ...provided, 
    color: COLORS.WHITE,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
    backgroundColor: state.isFocused ? COLORS.BLACK.LIGHT : 'transparent',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 16,
  }),
  placeholder: (provided) => ({
    ...provided, 
    color: COLORS.GREY.PRIMARY,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '150%',
    margin: 0,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.isFocused ? 'rotate(-180deg)' : 'none',
    color: COLORS.WHITE
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '15px 16px',
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 0,
    fontWeight: 400,
    fontSize: 14,
    backgroundColor: state.isFocused ? COLORS.BLACK.LIGHT : 'transparent',
    display: 'flex',
    alignItems: 'flex-start',
  }),
  menu: (provided) => ({
    ...provided,
    width: '100%',
    borderRadius: 0,
    backgroundColor: COLORS.BLACK.PRIMARY,
    overflow: 'hidden',
    '& div:active': {
      backgroundColor: COLORS.BLACK.LIGHT,
    }
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: 0,
    color: COLORS.WHITE,
    backgroundColor: COLORS.BLACK.PRIMARY,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    '& div': {
      color: COLORS.WHITE,
    }
  }),
  multiValueRemove: () => ({
    display: 'none',
  }),
}