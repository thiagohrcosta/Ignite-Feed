import { Header } from "./components/Header"

import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUlr: "https://github.com/thiagohrcosta.png",
      name: "Thiago Costa",
      role: "Fullstack Developer RoR | ReactJS"
    },
    content:[
    { type: 'paragraph', content:     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { type: 'paragraph', content:     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { type: 'link', content:     'github.com/thiagohrcosta'}
    ],
    publishedAt: newDate(Date.now() - 1),
  },
];

function App() {

  return (
    <>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
        <main>
          {
            posts.map(post => {
              return <Post />
            })
          }
        </main>
        </div>
    </>
  )
}

export default App
