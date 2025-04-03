import CalendarAside from './sections/CalendarAside';
import { CalendarContainer } from './sections/CalendarContainer';
import { generateSampleEvents } from './events';
import './index.scss';

export const CalendarPage = () => {
  const events = generateSampleEvents();
  return (
    <div className="calendar-page">
      <CalendarContainer initialDate={new Date()} events={events} />
      <CalendarAside />
    </div>
  );
};
