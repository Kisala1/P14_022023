export function DateInput({ functionOnChange, id, name }) {
  return (
    <>
      <input onChange={functionOnChange} type={'date'} id={id} name={name} />
    </>
  );
}
