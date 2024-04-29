import classNames from 'classnames';
import { forwardRef } from 'react';
import { NlIcon } from '../Icon';
import { AvatarProps } from './Avatar.types';
import { alertIcWarning, contentIcRemove, deviceIcAccessTime, navigationIcCheck, navigationIcClose } from '../../assets/icons';

const defaultIcons = {
  'online': navigationIcCheck,
  'no-disturb': contentIcRemove,
  'no-available': navigationIcClose,
  'absent': deviceIcAccessTime,
  'warning': alertIcWarning,
  'offline': contentIcRemove,
};

export const NlAvatar = forwardRef<HTMLButtonElement, AvatarProps>(({ src, userName, description, interactive, size, status, variant, className = '', disabled }, ref) => {
  const getInitials = () => {
    const initials = userName?.split(' ').reduce((acc, curr, index, array) => {
      if (index === 0 || index === array.length - 1) {
        acc += curr[0];
      }
      return acc
    }, '')
    return initials?.toUpperCase();
  }

  const getStatusLabel = () => {
    return ` - ${status?.replace('-', ' ')}`
  }

  const getStatusIcon = () => {
    if (status) {
      return <NlIcon src={defaultIcons[status]} className={`nl-avatar-status-icon-${status} nl-avatar-status-icon`} />
    } else {
      return null
    }
  }

  const avatarContent = () => {
    let avatarElement = null;
    if (src && variant === 'image') {
      avatarElement = <img src={src} alt={labelDescription} className='nl-avatar-img' />
    }
    if (src && variant === 'icon') {
      avatarElement = <NlIcon src={src} />
    }
    if (avatarElement === null) {
      avatarElement = <abbr role='img' className='nl-avatar-initials'>{userName?.length ? getInitials() : ''}</abbr>
    }
    return (
      <>
        {avatarElement}
        {getStatusIcon()}
      </>
    )
  }

  const label = `${userName}${getStatusLabel()}`;
  const labelDescription = description ? description : label;
  const classes = classNames({
    'nl-avatar': true,
    'nl-avatar-interactive': interactive,
    'nl-avatar-icon': variant === 'icon',
    [`nl-avatar-variant-${variant}`]: true,
    [`nl-avatar-status-${status}`]: status,
    [`nl-avatar-size-${size}`]: size,
    [className]: true,
  });

  return (
    <>
      {interactive ?
        <button ref={ref} title={label} disabled={disabled} className={classes}>
          {avatarContent()}
        </button>
        :
        <div title={label} className={classes}>
          {avatarContent()}
        </div>
      }
    </>
  );
})