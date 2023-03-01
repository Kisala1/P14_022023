import styles from './Input.module.scss';

export function Input({id}) {
  return (
    <>
      <input type={'text'} id={id} className={styles.input} />
    </>
  );
}
