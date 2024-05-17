import classNames from 'classnames';
import { FC, useContext, useEffect } from 'react';
import { FormWrapperContext } from '../FormWrapper.context';
import { LabelProps } from './Label.types';

export const NlLabel: FC<LabelProps> = ({ children, className = '' }) => {
  const formContext = useContext(FormWrapperContext);

  useEffect(() => {
    formContext.setHasLabel(true);
  }, [formContext.setHasLabel])

  const classes = classNames({
    'nl-label': true,
    'nl-label-required': formContext.isRequired,
    'nl-label-disabled': formContext.isDisabled,
    'nl-label-focused': formContext.isFocus,
    'nl-label-when-content': formContext.hasContent,
    'nl-label-when-placeholder': formContext.hasPlaceholder,
    'nl-label-text-input': formContext.elementType === 'text',
    'nl-label-text-select': formContext.elementType === 'select',
    [className]: true,
  });


  return (
    <label className={classes}>
      {children}
    </label>
  )
}