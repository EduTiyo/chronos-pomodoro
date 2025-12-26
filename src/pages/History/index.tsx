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
import { useState } from "react";

const History = () => {
  const { state } = useTaskContext();
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
    localStorage.clear();
    showMessage.success("Histórico apagado com sucesso");
  };

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color="red"
                aria-label="Apagar todo o histórico"
                title="Apagar histórico"
                onClick={handleClearAllHistoric}
              />
            </span>
          </Heading>
        </Container>

        <Container>
          {!hasTask && <span>Ainda não há tarefas registradas.</span>}
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
