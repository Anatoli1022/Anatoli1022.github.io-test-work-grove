interface ButtonProps {
  className: string;
  children: string;
  onClick: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
