import classNames from 'classnames';
import React from 'react';

import { IconProps } from './Icon.types';

export const NlIcon: React.FC<IconProps> = ({src, className, title}) => {
  const classes = classNames({
    'nl-icon': true,
    className: className,
  });

  return <span className={classes} dangerouslySetInnerHTML={{ __html: decodeURIComponent(src.replace(/data:image\/svg\+xml,/, '')) }} title={title} />;
};