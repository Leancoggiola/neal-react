import classNames from 'classnames';
import { FC, useContext, useEffect, useState } from 'react';
import { FormWrapperContext } from '../FormWrapper.context';
import { ErrorMessageProps } from './ErrorMessage.types';

export const NlErrorMessage: FC<ErrorMessageProps> = ({ children, className = '' }) => {
  const formContext = useContext(FormWrapperContext);
  const [show, setShow] = useState<boolean>(false);

  const classes = classNames({
    'nl-error-message': true,
    [className]: true,
  });

  useEffect(() => setShow(formContext.isError), [formContext.isError])

  return (
    <>
      {show ?
        <p
          id={`${formContext.id}-error-message`}
          role='alert'
          className={classes}>
          {children}
        </p>
        :
        null}
    </>
  )
}