import styles from './App.module.scss';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
