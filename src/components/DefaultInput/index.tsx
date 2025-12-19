type DefaultInputsProps = {
  id: string;
} & React.ComponentProps<"input">;

const DefaultInput = ({ id, type }: DefaultInputsProps) => {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
};

export default DefaultInput;
