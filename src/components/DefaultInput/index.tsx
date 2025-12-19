import styles from "./DefaultInput.module.css";

type DefaultInputsProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

const DefaultInput = ({ id, type, labelText, ...rest }: DefaultInputsProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
};

export default DefaultInput;
