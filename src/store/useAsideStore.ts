import { create } from 'zustand';

interface AsideStore {
  isOpen: { [key: number]: boolean };
  open: (id: number) => void;
  close: (id: number) => void;
}

export const useAsideStore = create<AsideStore>((set) => ({
  isOpen: { 1: true, 2: false },
  open: (id) => set((state) => ({ isOpen: { ...state.isOpen, [id]: true } })),
  close: (id) => set((state) => ({ isOpen: { ...state.isOpen, [id]: false } })),
}));
