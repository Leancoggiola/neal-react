import classNames from 'classnames';
import { Children, forwardRef, isValidElement } from 'react';
import { hardwareIcKeyboardArrowLeft, hardwareIcKeyboardArrowRight } from '../../assets/icons';
import { NlIcon } from '../Icon';
import { ButtonProps } from './Button.types';
import { NlProgressBar } from '../ProgressBar/Index';

const defaultIcons = {
  previous: hardwareIcKeyboardArrowLeft,
  next: hardwareIcKeyboardArrowRight,
};


export const NlButton = forwardRef<HTMLButtonElement,ButtonProps>(({children, onClick, type, size = 'small', warn, variant, className='', disabled, loading, progress, stepper }, ref) => {
  
  const hasSingleIconChild = Children.count(children) === 1 && isValidElement(children) && children.type === NlIcon;
  const isIndeterminate = loading && !progress;

  const classes = classNames({
    [`nl-button-stepper-${stepper}`]: children && stepper,
    [`nl-button nl-button-${variant}`]: true,
    [`nl-button-${size}`]: size,
    ['nl-button-warn']: warn,
    'nl-button-icon-only': hasSingleIconChild,
    [className]: className,
  });

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} ref={ref}>
      {stepper === 'prev' && (<NlIcon src={defaultIcons.previous} />)}
      {children}
      {loading && (<NlProgressBar hideLabel value={progress} isIndeterminate={isIndeterminate} />)}
      {stepper === 'next' && (<NlIcon src={defaultIcons.next} />)}
    </button>
  );
})