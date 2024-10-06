export type RadioButtonProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  checked?: boolean;
  disabled?: boolean;
};
