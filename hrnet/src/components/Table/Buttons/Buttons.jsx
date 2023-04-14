import styles from './Buttons.module.scss';
export function Buttons({ disabled }) {
  return (
    <div className={styles.container}>
      {disabled ? (
        <>
          <button>Previous</button>
          <button>Next</button>
        </>
      ) : (
        <>
          <button disabled>Previous</button>
          <button disabled>Next</button>
        </>
      )}
    </div>
  );
}
