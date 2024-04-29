import React, { useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { AccordionProps } from './Accordion.types';
import { AccordionProvider } from './Accordion.content';

export const NlAccordion: React.FC<AccordionProps> = ({ children, onOpen = () => { }, onClose = () => { }, open, useChevronIcon, alignIconRight, className = '' }) => {
  const [localVisible, setLocalVisible] = useState(false);
  const firstRender = useRef(true);
  const isControlled = open !== undefined;
  const visible = isControlled ? open : localVisible;

  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return
    }
    if (isControlled) {
      open ? onOpen() : onClose();
    }
  })

  const toggleAccordion = () => {
    if (!visible && onOpen) onOpen();
    else if (visible && onClose) onClose()
    if (!isControlled) setLocalVisible(!visible)
  }

  const classes = classNames({
    'nl-accordion': true,
    'nl-accordion-content-visible': visible,
    'nl-accordion-icon-right': alignIconRight,
    [className]: true,
  });

  const contextData = {
    visible,
    toggleAccordion,
    alignIconRight,
    useChevronIcon,
  };

  return (
    <AccordionProvider value={contextData}>
      <div className={classes}>
        {children}
      </div>
    </AccordionProvider>
  )
};
