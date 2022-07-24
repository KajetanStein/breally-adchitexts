import { FC } from "react";
import { PillButtonStyle as styles } from './style'

type Props = {
  label: string,
  onClick: any,
}

export const PillButton: FC<Props> = (props) => {
  const { label, onClick } = props;

  return (
    <button className={styles.root} onClick={onClick}>{label}</button>
  )
}
