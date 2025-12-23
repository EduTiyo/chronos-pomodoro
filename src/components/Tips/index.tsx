import { useTaskContext } from "../../contexts/TaskContext";
import type { TaskModel } from "../../models/TaskModel";

interface TipsProps {
  nextCycleType: TaskModel["type"];
}

const Tips = ({ nextCycleType }: TipsProps) => {
  const { state } = useTaskContext();
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}m</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}m</span>,
    longBreakTime: <span>Descanse por {state.config.longBreakTime}m</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime}m</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo é de <b>{state.config.shortBreakTime}m</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo ciclo é de <b>{state.config.longBreakTime}m</b>
      </span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
};

export default Tips;
