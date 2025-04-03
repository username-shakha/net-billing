import './index.scss';

interface ToggleFilterProps {
  label: string;
  active: boolean;
  onChange: () => void;
}

export const ToggleFilter: React.FC<ToggleFilterProps> = ({
  label,
  active,
  onChange,
}) => (
  <label className="filter-toggle">
    <div className={`toggle ${active ? 'active' : ''}`} onClick={onChange}>
      <div className="toggle-handle"></div>
    </div>
    <span>{label}</span>
  </label>
);
