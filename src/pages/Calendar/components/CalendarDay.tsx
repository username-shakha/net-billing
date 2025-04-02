import type React from 'react';
import type { Event } from './CalendarComponent';
import './CalendarDay.scss';
import { useAsideStore } from '@/store/useAsideStore';

export interface CalendarDayProps {
  day: number;
  month: number;
  year: number;
  isPrevMonth: boolean;
  isNextMonth: boolean;
  events: Event[];
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  month,
  year,
  isPrevMonth,
  isNextMonth,
  events,
}) => {
  const { open } = useAsideStore();

  const isToday = () => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const today = isToday();
  const otherMonth = isPrevMonth || isNextMonth;

  return (
    <div
      className={`date-cell ${otherMonth ? 'other-month' : ''} ${today ? 'today' : ''}`}
      onClick={() => open(2)}
    >
      <div>
        <div className="date-number">{day}</div>
        {today && <div className="today-label">Сегодня</div>}
      </div>
      <div className="events">
        {events.map((event, index) => (
          <div key={index} className={`event-dot ${event.type}`}></div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;
