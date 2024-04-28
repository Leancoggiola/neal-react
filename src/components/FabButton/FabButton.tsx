import classNames from 'classnames';
import { forwardRef } from 'react';
import { FabButtonProps } from './FabButton.types';

export const NlFabButton = forwardRef<HTMLButtonElement, FabButtonProps>(({ children, onClick, type, size = 'small', className = '', disabled }, ref) => {
  const classes = classNames({
    'nl-fab': true,
    [`nl-fab-${size}`]: size,
    [className]: true,
  });

  return (
    <button ref={ref} type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
})