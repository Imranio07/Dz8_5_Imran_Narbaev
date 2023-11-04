import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_,{rejectedWithValue}){
        try {
            const response =await fetch('https://dummyjson.com/posts?limit=10')
            if(!response.ok){
                throw new Error('Server Error!');
            }
            const data = await response.json();

        return data;
        } catch (error){
            return rejectedWithValue(error.message)
        }
    }
)
const todoSlice = createSlice({
    name: 'todos',
  initialState: {
    todos: {
      posts: []
    },
    status: null,
    error: null
  },
  reducers: {
    addTodo(state, action) {
      state.todos.posts.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos.posts = state.todos.posts.filter(todo => todo.id !== action.payload.id);
        },
    },
    extraReducers: {
        [fetchTodos.pending]:(state)=> {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]:(state,action)=> {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]:(state,action)=> {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});
export const {addTodo, toggleComplete, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;