import { FC } from "react";
import { Logo } from "../Logo";
import { PillButton } from "../PillButton";
import { HeaderStyle as styles } from './style'

type Props = {
  headerLinks: { url: string, id: string}[]
}

export const Header: FC<Props> = (props) => {
  const { headerLinks } = props;

  return (
    <header className={styles.root}>
      <div className={styles.left}>
        <Logo className={styles.logo}/>
        <div className={styles.anchorsContainer}>
          {headerLinks.map(headerElement => {
            const { id, url } = headerElement;
            return <a className={styles.anchor} key={id} href={url}>{url.slice(1)}</a>
          })}
        </div>
      </div>
      <PillButton onClick= {() => console.log('contact')} label='Contact us'/>
    </header>
  )
}