import type { Event } from '../../../CalendarContainer';
import CalendarDay from '../CalendarDay';
import { generateCalendarGrid } from './generateCalendarGrid';
import './index.scss';

interface CalendarGridProps {
  currentDate: Date;
  events: Event[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, events }) => {
  const calendarGrid = generateCalendarGrid(currentDate, events);

  return (
    <div className="calendar-grid">
      <div className="calendar-days">
        <div className="day-name">Понедельник</div>
        <div className="day-name">Вторник</div>
        <div className="day-name">Среда</div>
        <div className="day-name">Четверг</div>
        <div className="day-name">Пятница</div>
        <div className="day-name">Суббота</div>
        <div className="day-name">Воскресенье</div>
      </div>

      <div className="calendar-dates">
        {calendarGrid.map((week, i) => (
          <div key={i} className="week">
            {week.map((date, i) => (
              <CalendarDay
                key={i}
                day={date.day}
                month={date.month}
                year={date.year}
                isPrevMonth={date.isPrevMonth}
                isNextMonth={date.isNextMonth}
                events={date.events}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
