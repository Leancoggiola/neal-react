import React, { Children, cloneElement, useState } from 'react';

export const NlAccordionGroup = ({ children, defaultSelected = null }) => {
  const [activeIndex, setActiveIndex] = useState(typeof defaultSelected === 'number' ? defaultSelected : null);

  return (
    <>
      {Children.map(children, (child, index) => {
        const open = index === activeIndex;

        return cloneElement(child, {
          onClose: () => {
            if (open) {
              setActiveIndex(null);
              if (child.props.onClose) {
                child.props.onClose();
              }
            }
          },
          onOpen: () => {
            if (!open) {
              setActiveIndex(index);
              if (child.props.onOpen) {
                child.props.onOpen();
              }
            }
          },
          open
        })
      })}
    </>
  )
};
