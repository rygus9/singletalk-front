import Button, { ButtonProps } from './index';

interface Props extends ButtonProps {
  size?: 'md' | 'lg' | 'sm';
  color?: 'normal' | 'normalColor';
}

NormalButton.defaultProps = {
  size: 'md',
  color: 'normal',
};

export default function NormalButton({
  children,
  size,
  color,
  ...elem
}: Props) {
  return (
    <Button type="button" size={size} color={color} {...elem}>
      {children}
    </Button>
  );
}
