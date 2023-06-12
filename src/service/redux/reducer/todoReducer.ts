import { Reducer } from "redux";
import { TodoReducerState } from "./todo.interface";
import { produce } from "immer";
import { TODO_ACTION_CONST } from "service/const/actionConst";

const { CREATE_TODO } = TODO_ACTION_CONST;

const initialState: TodoReducerState = {
  todoList: [],
};

const todoReducer: Reducer<TodoReducerState> = (
  state = initialState,
  action: any
): TodoReducerState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_TODO:
        console.log(action.payload);

        break;
      default:
        return state;
    }
  });
};

export default todoReducer;
