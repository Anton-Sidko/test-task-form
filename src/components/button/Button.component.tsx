import './Button.styles.scss';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button = function ({
  children,
  className,
  ...otherProps
}: ButtonProps): JSX.Element {
  return (
    <button
      {...otherProps}
      type="submit"
      className={`button-default ${className ? className : ''}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
