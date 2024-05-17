import classNames from 'classnames';
import { FC, useContext, useEffect, useState } from 'react';
import { FormWrapperContext } from '../FormWrapper.context';
import { ErrorMessageProps } from './ErrorMessage.types';

export const NlErrorMessage: FC<ErrorMessageProps> = ({ children, className = '' }) => {
  const { id, setIsError } = useContext(FormWrapperContext);

  useEffect(() => {
    setIsError(true);
    return () => { setIsError(false) };
  }, []);

  const classes = classNames({
    'nl-error-message': true,
    [className]: true,
  });

  return (
    <p
      id={`${id}-error-message`}
      role='alert'
      className={classes}>
      {children}
    </p>
  )
}