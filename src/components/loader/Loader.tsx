import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
