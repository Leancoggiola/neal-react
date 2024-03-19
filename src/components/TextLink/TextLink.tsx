import React from 'react';
import classNames from 'classnames';

import { TextLinkProps } from './TextLink.types';

export const NlTextLink: React.FC<TextLinkProps> = ({href, children, disabled, className}) => {
  const classes = classNames({
    'nl-text-link': true,
    'nl-text-link-disabled': disabled,
    className: className,
  });

  return <a href={href} className={classes}>{children}</a>
};
