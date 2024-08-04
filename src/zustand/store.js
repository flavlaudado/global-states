import {create} from "zustand"

const useStore = create((set)=>({
    count: 0, 
    increment: () => set((state) => ({count: state.count + 1})),
    resetCount: () => set(() => ({count: 0}))
}))

export default useStore