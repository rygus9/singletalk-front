import Button, { ButtonProps } from '.';

interface Props extends ButtonProps {
  size?: 'roundedLg' | 'roundedSm';
  color?: 'main' | 'normalColor';
}

RoundedButton.defaultProps = {
  size: 'roundedSm',
  color: 'normalColor',
};

export default function RoundedButton({
  children,
  className,
  color,
  size,
}: Props): JSX.Element {
  return (
    <Button type="button" color={color} className={className} size={size}>
      {children}
    </Button>
  );
}
