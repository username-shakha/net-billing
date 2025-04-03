import { create } from 'zustand';
import type { Event } from '@/pages/Calendar/sections/CalendarContainer';

interface CalendarState {
  currentDate: Date;
  filters: {
    responsible: boolean;
    incoming: boolean;
    internal: boolean;
  };
  events: Event[];
  setCurrentDate: (date: Date) => void;
  prevMonth: () => void;
  nextMonth: () => void;
  toggleFilter: (type: 'responsible' | 'incoming' | 'internal') => void;
  setEvents: (events: Event[]) => void;
  filteredEvents: Event[];
  isToday: (day: number, month: number, year: number) => boolean;
  today: Date;
}

export const useCalendarStore = create<CalendarState>((set, get) => ({
  currentDate: new Date(),
  today: new Date(),
  filters: {
    responsible: true,
    incoming: true,
    internal: true,
  },
  events: [],

  setCurrentDate: (date: Date) => set({ currentDate: date }),

  prevMonth: () => {
    const { currentDate } = get();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    set({ currentDate: new Date(currentYear, currentMonth - 1, 1) });
  },

  nextMonth: () => {
    const { currentDate } = get();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    set({ currentDate: new Date(currentYear, currentMonth + 1, 1) });
  },

  toggleFilter: (type: 'responsible' | 'incoming' | 'internal') => {
    set(state => ({
      filters: {
        ...state.filters,
        [type]: !state.filters[type],
      },
    }));
  },

  setEvents: (events: Event[]) => set({ events }),

  isToday: (day: number, month: number, year: number) => {
    const today = get().today;
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  },

  get filteredEvents() {
    const { events, filters } = get();
    return events.filter(event => filters[event.type]);
  },
}));
