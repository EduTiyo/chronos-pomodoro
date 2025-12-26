import MainTemplate from "../../templates/MainTemplate";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import DefaultButton from "../../components/DefaultButton";
import { TrashIcon } from "lucide-react";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext";
import { formatDate } from "../../utils/formatDate";

const History = () => {
  const { state } = useTaskContext();
  const hasTask = state.tasks.length > 0;

  return (
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
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {state.tasks.map(task => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.durationInMinutes}</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{task.interruptDate}</td>
                      <td>{task.type}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </MainTemplate>
  );
};

export default History;
