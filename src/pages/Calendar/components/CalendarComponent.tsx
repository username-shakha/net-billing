'use client';

import type React from 'react';
import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import './Calendar.scss';

export type EventType = 'responsible' | 'incoming' | 'internal';

export interface Event {
  date: Date;
  type: EventType;
}

interface CalendarProps {
  initialDate?: Date;
  events?: Event[];
}

export const CalendarComponent: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  events = [],
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [filters, setFilters] = useState({
    responsible: true,
    incoming: true,
    internal: true,
  });

  // Получение текущего месяца и года
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Навигация по месяцам
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Переключение фильтров
  const toggleFilter = (type: EventType) => {
    setFilters((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Фильтрация событий
  const filteredEvents = events.filter((event) => filters[event.type]);

  return (
    <div className="calendar">
      <CalendarHeader
        currentDate={currentDate}
        filters={filters}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
        onToggleFilter={toggleFilter}
      />
      <CalendarGrid currentDate={currentDate} events={filteredEvents} />
    </div>
  );
};
