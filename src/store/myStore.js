import {create} from 'zustand'

export const useStore = create((set) => ({
    recipe: [],
    counter: 0,
    wrapping: [],
    gameOver: false,
    setGameOver: () => set(state => ({gameOver: true})),
    addRecipe: data => set(state => ({recipe: data})),
    addWrappingItem: data => set(state => ({wrapping: [...state.wrapping, data]})),
    removeWrappingItem: index => set( state => {
        const result = state.wrapping.filter((x, i) => i !== index)
        return ({wrapping: result})
    }),
    counterAdd: () => set(state => ({counter: state.counter + 1, wrapping: []}))

}))

