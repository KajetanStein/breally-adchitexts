import { FC } from "react";
// TODO fix import with ts
const { ReactComponent } = require('../../assets/logo.svg')


export const Logo: FC<{className: string}> = (props) => <a className={props.className} href='/'><ReactComponent/></a>;