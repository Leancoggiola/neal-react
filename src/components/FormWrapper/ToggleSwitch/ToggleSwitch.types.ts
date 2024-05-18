export interface ToggleSwitchProps {
  id?: string,
  checked: boolean,
  disabled?: boolean,
  onLabel?: string,
  offLabel?: string,
  hideLabels?: boolean,
  onChange(): void,
  className?: string
}