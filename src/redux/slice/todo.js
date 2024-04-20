import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push(action.payload);
        },
        update: (state, action) => {
            state.tasks = action.payload;
        },
        removeTodo: (state, action) => {
            state.tasks = state.tasks.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.tasks = state.tasks.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        },
    },
});
export default todoSlice.reducer;