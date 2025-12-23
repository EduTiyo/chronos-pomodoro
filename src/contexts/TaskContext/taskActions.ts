import type { TaskModel } from "../../models/TaskModel";

export const TaskActionTypes = {
  START_TASK: "START_TASK",
  INTERRUPT_TASK: "INTERRUPT_TASK",
  RESET_TASK: "RESET_TASK",
} as const;

export type TaskActionType =
  (typeof TaskActionTypes)[keyof typeof TaskActionTypes];

export type TaskActionsWithPayload = {
  type: typeof TaskActionTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionsWitoutPayload =
  | {
      type: typeof TaskActionTypes.RESET_TASK;
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
    };

export type TaskActionModel = TaskActionsWithPayload | TaskActionsWitoutPayload;
