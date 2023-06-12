import { TODO_ACTION_CONST } from "service/const/actionConst";
import { CreateTodoActionType } from "./todo.interface";
import { TodoType } from "service/model/todo";

const { CREATE_TODO } = TODO_ACTION_CONST;

export const createTodoAction = (
  createInput: TodoType
): CreateTodoActionType => {
  return {
    type: CREATE_TODO,
    payload: createInput,
  };
};
