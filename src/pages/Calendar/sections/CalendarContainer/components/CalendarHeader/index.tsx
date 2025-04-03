import { MonthNavigation } from './components/MonthNavigation';
import { ToggleFilter } from './components/ToggleFilter';
import './index.scss';

interface CalendarHeaderProps {
  currentDate: Date;
  filters: Record<'responsible' | 'incoming' | 'internal', boolean>;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToggleFilter: (type: 'responsible' | 'incoming' | 'internal') => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  filters,
  onPrevMonth,
  onNextMonth,
  onToggleFilter,
}) => {
  return (
    <div className="calendar-header">
      <h1>Календарь</h1>
      <div className="calendar-controls">
        <div className="month-navigation">
          <MonthNavigation
            currentDate={currentDate}
            onNextMonth={onNextMonth}
            onPrevMonth={onPrevMonth}
          />
        </div>

        <div className="filters">
          <ToggleFilter
            label="Я ответственный"
            active={filters.responsible}
            onChange={() => onToggleFilter('responsible')}
          />
          <ToggleFilter
            label="Входящие"
            active={filters.incoming}
            onChange={() => onToggleFilter('incoming')}
          />
          <ToggleFilter
            label="Внутренние"
            active={filters.internal}
            onChange={() => onToggleFilter('internal')}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
