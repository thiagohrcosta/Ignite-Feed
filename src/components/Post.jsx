import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/thiagohrcosta.png" />
          <div className={styles.authorInfo}>
            <strong>Thiago H. R. Costa</strong>
            <span>FullStack Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08h00" dateTime="22-05-11 08:00:00">Publicado há 1h </time>
      </header>

      <div className={styles.content}>
        <p>Hi guys! I submit one more repository on my Github. Check it right now!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at odio nec libero tristique cursus. In vel interdum mauris, in pretium metus. Cras sem libero, pulvinar non lacus luctus, consectetur condimentum augue.</p>
        <p><a>#New project</a> {" "} <a>#ReactJS</a> {" "} <a>#IGNITE</a> {" "} <a>#Rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
