import classNames from 'classnames';
import { forwardRef } from 'react';
import { IconButtonProps } from './IconButton.types';

export const NlIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ children, onClick, type, size = 'small', className = '', disabled }, ref) => {
  const classes = classNames({
    'nl-icon-button': true,
    [`nl-icon-button-${size}`]: size,
    [className]: true,
  });

  return (
    <button ref={ref} type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
})