import { FC, useState } from "react";
import { PillButton } from "../PillButton";
import { NewsletterStyle as styles } from './style'

type Props = {
  send: (email: string) => void;
  message?: string,
  problem?: boolean,
}

export const Newsletter: FC<Props> = (props) => {

  const { send, problem, message='Thank you for signing up for the Breally newsletter.' } = props;

  const [email, setEmail] = useState('');

  return (
    <section className={styles.root}>
      <p className={styles.title}>Sign up for Newsletter</p>
      <div>
        <input 
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
        />
        <PillButton label='Submit' onClick={() => send(email)}/>
      </div>

      {message && <p className={styles.feedback(problem)}>{message}</p>}
    </section>
  )
}