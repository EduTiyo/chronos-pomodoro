import { useTaskContext } from "../../contexts/TaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

const Cycles = () => {
  const { state } = useTaskContext();
  const cyclesSteps = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        {cyclesSteps.map((_, idx) => {
          const nextCycle = getNextCycle(idx);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              aria-label={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Cycles;
