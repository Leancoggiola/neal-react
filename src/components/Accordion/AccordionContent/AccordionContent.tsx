import classNames from 'classnames';
import React, { useContext } from 'react';

import { AccordionContext } from '../Accordion.content';
import { AccordionContentProps } from '../Accordion.types';

export const NlAccordionContent: React.FC<AccordionContentProps> = ({ children, className = '' }) => {
  const { visible } = useContext(AccordionContext);

  const classes = classNames({
    'nl-accordion-content': true,
    [className]: true,
  });

  return (
    <div className={`nl-accordion-content-${visible ? 'expand' : 'collapse'}`}>
      <div className={classes}>{children}</div>
    </div>
  )
};
