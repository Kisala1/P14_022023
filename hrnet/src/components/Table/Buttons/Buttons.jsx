import styles from './Buttons.module.scss'
export function Buttons() {
    return (
      <div className={styles.container}>
        <button>Previous</button>
        <button>Next</button>
      </div>
    );
}