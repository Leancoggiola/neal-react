import classNames from 'classnames';
import { FC } from 'react';
import { ToggleSwitchProps } from './ToggleSwitch.types';

export const NlToggleSwitch: FC<ToggleSwitchProps> = ({
  id,
  disabled = false,
  checked = false,
  hideLabels = false,
  onLabel = 'On',
  offLabel = 'Off',
  onChange = () => { },
  className = ''
}) => {

  const classes = classNames({
    'nl-toggle-switch-wrapper': true,
    'nl-toggle-switch-disabled': disabled,
    'nl-toggle-switch-checked': checked,
    'nl-toggle-switch-hidden-labels': hideLabels,
    [className]: true,
  });


  return (
    <div className={classes}>
      <span className="nl-toggle-switch-text nl-toggle-switch-off-text" role="definition">
        {offLabel}
      </span>

      <label className="nl-toggle-switch" tabIndex={0}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          role="switch"
        />
        <span className="nl-toggle-switch-slider" />
      </label>
      <span className="nl-toggle-switch-text nl-toggle-switch-on-text" role="definition">
        {onLabel}
      </span>
    </div>
  );
}