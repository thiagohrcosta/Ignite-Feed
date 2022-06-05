import { Header } from "./components/Header"

import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/thiagohrcosta.png",
      name: "Thiago Costa",
      role: "Fullstack Developer RoR | ReactJS"
    },
    content:[
    { type: 'paragraph', content:     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { type: 'paragraph', content:     'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { type: 'link', content:     'github.com/thiagohrcosta'}
    ],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
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
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
        </div>
    </>
  )
}

export default App
