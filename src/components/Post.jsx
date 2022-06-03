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

      <div className={styles.contet}>
        <p>Hi guys! I submit one more repository on my Github. Check it right now!</p>
        <p>New project <a>#newContent #NLW #Rocketseat</a></p>
      </div>
    </article>
  )
}
