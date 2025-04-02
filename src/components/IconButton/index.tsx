import { CSSProperties, ReactElement } from 'react';
import './index.scss';

interface IIconButtonProps {
  icon: ReactElement;
  style?: CSSProperties;
  onClick?: () => void;
}

export const IconButton = ({ icon, onClick, style }: IIconButtonProps) => (
  <button className="icon-button" onClick={onClick} style={style}>
    {icon}
  </button>
);
