import { Header } from "./components/Header"

import "./global.css";

import styles from "./App.module.css";
import { Post } from "./Post";

function App() {

  return (
    <>
      <Header />
        <div className={styles.wrapper}>
        <aside></aside>
        <main>
          <Post author="Thiago Costa" content="React and RoR" />
        </main>
        </div>
    </>
  )
}

export default App
