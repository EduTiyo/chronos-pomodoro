import { PlayCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";

const MainForm = () => {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          type="text"
          id="meuInput"
          placeholder="Digite aqui..."
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
        <DefaultButton icon={<PlayCircleIcon />} color="red" />
      </div>
    </form>
  );
};

export default MainForm;
