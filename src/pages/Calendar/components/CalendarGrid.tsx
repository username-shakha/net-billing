import type React from 'react';
import type { Event } from './CalendarComponent';
import CalendarDay from './CalendarDay';
import './CalendarGrid.scss';

interface CalendarGridProps {
  currentDate: Date;
  events: Event[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, events }) => {
  // Названия дней недели на русском
  const dayNames = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  // Генерация сетки календаря
  const generateCalendarGrid = () => {
    const grid = [];
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Получение первого дня месяца
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay() || 7; // Преобразование воскресенья (0) в 7 для европейского календаря

    // Получение количества дней в месяце
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Получение дней из предыдущего месяца
    const daysFromPrevMonth = firstDayOfWeek - 1;
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    let dayCounter = 1;
    let nextMonthCounter = 1;

    // Всегда 6 рядов для постоянной высоты
    const rows = 6;

    for (let row = 0; row < rows; row++) {
      const week = [];

      for (let col = 0; col < 7; col++) {
        let day,
          month,
          year,
          isPrevMonth = false,
          isNextMonth = false;

        // Дни предыдущего месяца
        if (row === 0 && col < daysFromPrevMonth) {
          day = prevMonthDays - (daysFromPrevMonth - col - 1);
          month = currentMonth - 1 < 0 ? 11 : currentMonth - 1;
          year = currentMonth - 1 < 0 ? currentYear - 1 : currentYear;
          isPrevMonth = true;
        }
        // Дни следующего месяца
        else if (dayCounter > daysInMonth) {
          day = nextMonthCounter++;
          month = currentMonth + 1 > 11 ? 0 : currentMonth + 1;
          year = currentMonth + 1 > 11 ? currentYear + 1 : currentYear;
          isNextMonth = true;
        }
        // Дни текущего месяца
        else {
          day = dayCounter++;
          month = currentMonth;
          year = currentYear;
        }

        // Получение событий для этой даты
        const dateEvents = events.filter((event) => {
          const eventDate = event.date;
          return (
            day === eventDate.getDate() &&
            month === eventDate.getMonth() &&
            year === eventDate.getFullYear()
          );
        });

        week.push({
          day,
          month,
          year,
          isPrevMonth,
          isNextMonth,
          events: dateEvents,
        });
      }

      grid.push(week);
    }

    return grid;
  };

  const calendarGrid = generateCalendarGrid();

  return (
    <div className="calendar-grid">
      <div className="calendar-days">
        {dayNames.map((day, index) => (
          <div key={index} className="day-name">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-dates">
        {calendarGrid.map((week, weekIndex) => (
          <div key={weekIndex} className="week">
            {week.map((date, dateIndex) => (
              <CalendarDay
                key={dateIndex}
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
