import classNames from 'classnames';
import { BadgeProps } from './Badge.types';

export const NlBadge: React.FC<BadgeProps> = ({ value, overlap, variant, className = '' }) => {
  const classes = classNames({
    'nl-badge': true,
    'nl-badge-overlap': overlap,
    [`nl-badge-${variant}`]: variant,
    [className]: true,
  });

  return (
    <div className={classes}>
      <span className='nl-badge-number'>
        {value}
      </span>
    </div>
  );
}