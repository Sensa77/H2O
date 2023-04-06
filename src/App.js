import styles from './App.module.scss';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <section className={styles.main}>main</section>
    </div>
  );
}

export default App;
