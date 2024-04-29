import classNames from 'classnames';
import React, { useContext } from 'react';

import { contentIcAdd, contentIcRemove, hardwareIcKeyboardArrowDown, hardwareIcKeyboardArrowUp } from '../../../assets/icons';
import { NlIcon } from '../../Icon';
import { AccordionContext } from '../Accordion.content';
import { AccordionTriggerProps } from '../Accordion.types';

export const NlAccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className = '' }) => {
  const { toggleAccordion, useChevronIcon } = useContext(AccordionContext);

  const classes = classNames({
    'nl-accordion-trigger': true,
    [className]: true,
  });

  const collapseIc = <NlIcon src={useChevronIcon ? hardwareIcKeyboardArrowDown : contentIcRemove} className='nl-accordion-trigger-collapse-icon' />
  const expandIc = <NlIcon src={useChevronIcon ? hardwareIcKeyboardArrowUp : contentIcAdd} className='nl-accordion-trigger-expand-icon' />

  return (
    <button onClick={toggleAccordion} type='button' className={classes}>
      <div className='nl-accordion-trigger-icons'>{expandIc}{collapseIc}</div>
      <div className='nl-accordion-trigger-title-content'>{children}</div>
    </button>
  )
};
