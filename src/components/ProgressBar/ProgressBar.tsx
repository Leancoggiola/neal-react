import classNames from 'classnames';
import React, { useMemo } from 'react';
import { ProgressBarProps } from './ProgressBar.types';

export const NlProgressBar: React.FC<ProgressBarProps> = ({
    circle = false, 
    isIndeterminate = false, 
    value= isIndeterminate ? 25 : 0, 
    error = false,
    hideLabel = false,
    processStateLabel = 'Processing...', 
    resultStateLabel = 'Completed',
    labelPosition = 'default',
    className = ''
  }) => {

  const wrapperClasses = classNames({
    'nl-progress-bar-wrapper': true,
    'nl-progress-bar-wrapper-circle': circle,
    [`nl-progress-bar-label-${labelPosition}`]:  !circle,
    [className]: true
  });
  
  const labelClasses = classNames({
    'nl-progress-bar-label': true,
    'nl-progress-bar-label-hidden': hideLabel,
  })

  const classes = classNames({
    'nl-progress-bar': true,
    'nl-progress-bar-circle': circle,
    'nl-progress-bar-indeterminate': isIndeterminate,
    'nl-progress-error': error,
  });

  const renderProgressBar = () => {
    const progressClasses = classNames({'nl-progress': true,});
    return <div className={progressClasses} style={isIndeterminate ? {} : { width: `${value}%` }} />;
  };

  let progressValue:string;

  if (value >= 100) {
    progressValue = '360';
  } else if (value <= -1) {
    progressValue = '180';
  } else {
    progressValue = `${180 - (value / 100) * 180}`;
  }

  const renderProgressBarPie = useMemo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
        stroke="#E6E6E9"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
        stroke="#2E2E38"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={180}
        strokeDashoffset={progressValue}
      />
    </svg>
  ),[value, error, isIndeterminate]);

  return (
    <div className={wrapperClasses} role="progressbar">
      <span className={labelClasses}>
        {isIndeterminate && !circle ? processStateLabel : `${error ? '' : `${value}%`}  ${circle ? '' : resultStateLabel}`}
      </span>
      <div className={classes}>
        {circle ? renderProgressBarPie : renderProgressBar()}
      </div>
    </div>
  );
};