import CalendarAside from './sections/CalendarAside';
import { CalendarContainer } from './sections/CalendarContainer';
import { generateEvents } from './generateEvents';
import './index.scss';

export const CalendarPage = () => {
  const events = generateEvents();
  return (
    <div className="calendar-page">
      <CalendarContainer initialDate={new Date()} events={events} />
      <CalendarAside />
    </div>
  );
};
