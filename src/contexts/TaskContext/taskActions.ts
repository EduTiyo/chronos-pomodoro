import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";

export const TaskActionTypes = {
  START_TASK: "START_TASK",
  INTERRUPT_TASK: "INTERRUPT_TASK",
  RESET_TASK: "RESET_TASK",
  COUNT_DOWN: "COUNT_DOWN",
  COMPLETE_TASK: "COMPLETE_TASK",
  CHANGE_SETTINGS: "CHANGE_SETTINGS",
} as const;

export type TaskActionType =
  (typeof TaskActionTypes)[keyof typeof TaskActionTypes];

export type TaskActionsWithPayload =
  | {
      type: typeof TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionTypes.COUNT_DOWN;
      payload: Pick<TaskStateModel, "secondsRemaining">;
    }
  | {
      type: typeof TaskActionTypes.CHANGE_SETTINGS;
      payload: Pick<TaskStateModel, "config">;
    };

export type TaskActionsWitoutPayload =
  | {
      type: typeof TaskActionTypes.RESET_TASK;
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: typeof TaskActionTypes.COMPLETE_TASK;
    };

export type TaskActionModel = TaskActionsWithPayload | TaskActionsWitoutPayload;
