export function NumberInput({ functionOnChange, id, name }) {
  return (
    <>
      <input onChange={functionOnChange} type={'number'} id={id} name={name} />
    </>
  );
}
