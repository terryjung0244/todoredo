import { Reducer } from "redux";
import { TodoReducerState } from "./todo.interface";
import { produce } from "immer";

const initialState: TodoReducerState = {
  todoList: [],
};

const todoReducer: Reducer<TodoReducerState> = (
  state = initialState,
  action: any
): TodoReducerState => {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        return state;
    }
  });
};

export default todoReducer;
