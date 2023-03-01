import styles from './Button.module.scss';

export function Button({ content }) {
  return <button className={styles.btn}>{content}</button>;
}
