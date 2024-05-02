import classNames from 'classnames';
import { FC, useContext, useEffect, useRef } from 'react';
import { navigationIcClose } from '../../../assets/icons';
import { NlIcon } from '../../Icon';
import { NlIconButton } from '../../IconButton';
import { FormWrapperContext } from '../FormWrapper.context';
import { InputProps } from './Input.types';

let idCounter = 0;

export const NlInput: FC<InputProps> = (props) => {
  const { id, placeholder = '', value = '', type, disabled = false, required = false, hideClearButton, onBlur = () => { }, onChange = () => { }, onFocus = () => { }, className = '' } = props;

  const formContext = useContext(FormWrapperContext);
  const inputVal = value.toString();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    formContext.setElementType('text');
    id ? formContext.setId(id) : formContext.setId(`nl-input-${idCounter++}`);
  }, [])

  useEffect(() => {
    formContext.setValue(inputVal);
    formContext.setHasContent(inputVal.length > 0);
  }, [value])

  useEffect(() => formContext.setHasPlaceholder(placeholder !== ''), [placeholder]);
  useEffect(() => formContext.setIsDisabled(disabled), [disabled]);
  useEffect(() => formContext.setIsRequired(required), [required]);

  // Focus handlers
  const handleBlur = (event: any) => {
    formContext.setIsFocus(false);
    onBlur(event);
  }

  const handleFocus = (event: any) => {
    formContext.setIsFocus(true);
    onFocus(event);
  }

  // Value handlers
  const handleChange = (event: any) => {
    formContext.setValue(event.target.value);
    onChange(event);
  }

  const handleClear = () => {
    handleChange({ target: { value: '' } });
    ref.current?.focus();
  }

  const classes = classNames({
    'nl-input': true,
    'nl-input-error': formContext.isError,
    'nl-input-disabled': formContext.isDisabled,
    'nl-input-has-value': formContext.hasContent,
    'nl-input-has-placeholder': formContext.hasPlaceholder,
    [className]: true,
  });


  return (
    <div className='nl-input-wrapper'>
      <input
        {...props}
        ref={ref}
        id={formContext.id}
        type={type}
        value={value}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        className={classes}

        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {inputVal.length > 0 && !hideClearButton && (
        <NlIconButton onClick={handleClear} disabled={disabled} className='nl-input-clear-button'>
          <NlIcon src={navigationIcClose} />
        </NlIconButton>
      )}
    </div>
  )
}