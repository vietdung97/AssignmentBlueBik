import { create } from "zustand";

interface ITSStore {
    ts: number;
    reload: () => void;
}

export const useTimestampStore = create<ITSStore>((set) => ({
    ts: Date.now(),
    reload: () => set({ ts: Date.now() }),
}));