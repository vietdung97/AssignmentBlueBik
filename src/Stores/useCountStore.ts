import { create } from "zustand";

interface ICountStore {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const useCountStore = create<ICountStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

