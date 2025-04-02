'use client';

import type React from 'react';
import type { EventType } from './CalendarComponent';
import './CalendarHeader.scss';

interface CalendarHeaderProps {
  currentDate: Date;
  filters: Record<EventType, boolean>;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToggleFilter: (type: EventType) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  filters,
  onPrevMonth,
  onNextMonth,
  onToggleFilter,
}) => {
  // Названия месяцев на русском
  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return (
    <div className="calendar-header">
      <h1>Календарь</h1>
      <div className="calendar-controls">
        <div className="month-navigation">
          <button onClick={onPrevMonth} className="nav-button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <span className="current-month">
            {monthNames[month]}, {year}
          </span>
          <button onClick={onNextMonth} className="nav-button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
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

interface ToggleFilterProps {
  label: string;
  active: boolean;
  onChange: () => void;
}

const ToggleFilter: React.FC<ToggleFilterProps> = ({
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

export default CalendarHeader;
