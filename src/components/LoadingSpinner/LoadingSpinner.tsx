import classNames from 'classnames';
import React from 'react';

import { LoadingSpinnerProps } from './LoadingSpinner.types';

export const NlLoadingSpinner: React.FC<LoadingSpinnerProps> = ({show = false, className = '', fullscreen = false}) => {
  const classes = classNames({
    'nl-loader': true,
    'nl-loader-container': true,
    'nl-loader-fullscreen': fullscreen,
    [className]: true,
  });

  return (
    <>
      {show && (
        <div className={classes}>
          <div className="nl-loader-content">
            <div className="nl-loader-square" />
            <div className="nl-loader-square" />
            <div className="nl-loader-square" />
          </div>
        </div>
      )}
    </>
  );
};