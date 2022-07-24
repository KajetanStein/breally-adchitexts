import { FC } from "react";
import { HeroStyle as styles } from './style'

type Props = {
  text: string,
  img: string
}

export const Hero: FC<Props> = (props) => {
  const { text, img } = props;

  return (
    <section className={styles.root}>
      <div className={styles.left}>
        {text}
      </div>
      <div className={styles.right(img)}/>
    </section>
  )
}