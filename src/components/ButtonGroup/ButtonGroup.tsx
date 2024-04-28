import classNames from 'classnames';
import { useRef } from 'react';
import { ButtonGroupProps } from './ButtonGroup.types';

export const NlButtonGroup: React.FC<ButtonGroupProps> = ({ children, size = 'small', variant, className = '' }) => {
  const classes = classNames({
    'nl-button-group': true,
    [`nl-button-group-${size}`]: size,
    'nl-button-group-ghost': variant === 'ghost',
    [className]: true,
  });

  const buttonsRef = useRef(null);

  return (
    <div className={classes} ref={buttonsRef} role="menu">
      {children}
    </div>
  );
}