import React, { useState, FC, useEffect } from 'react';
import classNames from 'classnames';
import { FormWrapperProps } from './FormWrapper.types';
import { ElementType, FormWrapperProvider } from './FormWrapper.context';

export const NlFormWrapper: FC<FormWrapperProps> = ({ children, error = false, className = '' }) => {
  const [id, setId] = useState<string>('');
  const [value, setValue] = useState(null);
  const [elementType, setElementType] = useState<ElementType>('text');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isRequired, setIsRequired] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(error);
  const [hasContent, setHasContent] = useState<boolean>(false);
  const [hasLabel, setHasLabel] = useState<boolean>(false);
  const [hasPlaceholder, setHasPlaceholder] = useState<boolean>(false);

  const classes = classNames({
    'nl-form-wrapper': true,
    [className]: true,
  });

  useEffect(() => setIsError(error), [error])

  const contextData = {
    id,
    value,
    elementType,
    isDisabled,
    isRequired,
    isFocus,
    isActive,
    isError,
    hasContent,
    hasLabel,
    hasPlaceholder,
    setId,
    setValue,
    setElementType,
    setIsDisabled,
    setIsRequired,
    setIsFocus,
    setIsActive,
    setIsError,
    setHasContent,
    setHasLabel,
    setHasPlaceholder
  }

  return (
    <FormWrapperProvider value={contextData}>
      <div className={classes}>
        {children}
      </div>
    </FormWrapperProvider>
  )
}