import React from 'react';

interface ButtonIconAndTextProps {
  text: string;
  icon: JSX.Element;
  className?: string;
  textClassName?: string;
  onClick: () => void;
}

const ButtonIconAndText = ({
  text,
  icon,
  className,
  onClick,
  textClassName,
}: ButtonIconAndTextProps) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
      <p className={textClassName}>{text}</p>
    </button>
  );
};

export default ButtonIconAndText;
