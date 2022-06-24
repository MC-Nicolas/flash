import React from 'react';

interface ButtonIconProps {
  icon: JSX.Element;
}

const ButtonIcon = ({ icon }: ButtonIconProps) => {
  return <button>{icon}</button>;
};

export default ButtonIcon;
