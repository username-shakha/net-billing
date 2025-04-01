import React, { FC } from 'react';
import './IconButton.scss';

interface IIconButtonProps {
  icon: React.ReactNode;
}

export const IconButton: FC<IIconButtonProps> = ({ icon }) => (
  <button className="icon-button">{icon}</button>
);
