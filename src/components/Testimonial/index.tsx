import { FC } from "react";
import { colors } from "../../utils/constants";
import { TestimonialStyle as styles } from './style'
const QuotationMark = require('../../assets/quotation-mark.svg').ReactComponent

type Props = {
  text: string,
  author: string
}

export const Testimonial: FC<Props> = (props) => {
  const { text, author } = props;

  return (
    <section className={styles.root}>
      <div className={styles.top}>
        <QuotationMark fill={colors.accent}/>
        <p>{text}</p>
      </div>
      <p className={styles.author}>{author}</p>
    </section>
  )
}
