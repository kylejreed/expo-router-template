import { create } from "zustand";

type ExampleStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    clear: () => void;
};

export const useExampleStore = create<ExampleStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    clear: () => set({ count: 0 }),
}));
