import MainTemplate from "../../templates/MainTemplate";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import DefaultButton from "../../components/DefaultButton";
import { TrashIcon } from "lucide-react";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { showMessage } from "../../adapters/showMessage";
import { type SortTaskOptions, sortTasks } from "../../utils/sortTasks";
import { useEffect, useState } from "react";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

const History = () => {
  const { state, dispatch } = useTaskContext();
  const hasTask = state.tasks.length > 0;

  const [sortTaskOptions, setSortTaskOptions] = useState<SortTaskOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    },
  );

  useEffect(() => {
    setSortTaskOptions(prev => ({
      ...prev,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prev.direction,
        field: prev.field,
      }),
    }));
  }, [state.tasks]);

  const handleSortTasks = ({ field }: Pick<SortTaskOptions, "field">) => {
    const newDirection = sortTaskOptions.direction === "desc" ? "asc" : "desc";

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  };

  const handleClearAllHistoric = () => {
    if (!confirm("Tem certeza que deseja apagar todo o histórico de tarefas?"))
      return;

    try {
      dispatch({ type: TaskActionTypes.RESET_TASK });
      showMessage.success("Histórico excluído com sucesso");
    } catch (error) {
      console.error(error);
      showMessage.error("Erro ao deletar histórico");
    }
  };

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>Histórico</span>
            {hasTask && (
              <span className={styles.buttonContainer}>
                <DefaultButton
                  icon={<TrashIcon />}
                  color="red"
                  aria-label="Apagar todo o histórico"
                  title="Apagar histórico"
                  onClick={handleClearAllHistoric}
                />
              </span>
            )}
          </Heading>
        </Container>

        <Container>
          {!hasTask && (
            <p style={{ textAlign: "center" }}>
              Ainda não há tarefas registradas.
            </p>
          )}
          {hasTask && (
            <div className={styles.responsiveTable}>
              <table>
                <thead>
                  <tr>
                    <th
                      onClick={() => handleSortTasks({ field: "name" })}
                      className={styles.thSort}
                    >
                      Tarefa
                    </th>
                    <th
                      onClick={() =>
                        handleSortTasks({ field: "durationInMinutes" })
                      }
                      className={styles.thSort}
                    >
                      Duração
                    </th>
                    <th
                      onClick={() => handleSortTasks({ field: "startDate" })}
                      className={styles.thSort}
                    >
                      Data
                    </th>
                    <th>Status</th>
                    <th>Tipo</th>
                  </tr>
                </thead>

                <tbody>
                  {sortTaskOptions.tasks.map(task => {
                    const taskTypeDictionary = {
                      workTime: "Foco",
                      shortBreakTime: "Descanso curto",
                      longBreakTime: "Descanso longo",
                    };
                    return (
                      <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.durationInMinutes}</td>
                        <td>{formatDate(task.startDate)}</td>
                        <td>{getTaskStatus(task, state.activeTask)}</td>
                        <td>{taskTypeDictionary[task.type]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </Container>
      </MainTemplate>
    </>
  );
};

export default History;
