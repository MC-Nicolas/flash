import React from 'react';

interface ButtonIconProps {
  icon: JSX.Element;
  onClick?: () => void;
}

const ButtonIcon = ({ icon, onClick }: ButtonIconProps) => {
  return <button onClick={onClick}>{icon}</button>;
};

export default ButtonIcon;
