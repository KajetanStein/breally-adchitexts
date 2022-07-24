import { FC } from "react";
const LogoSVG = require('../../assets/logo.svg').ReactComponent


export const Logo: FC<{className: string}> = (props) => <a className={props.className} href='/'><LogoSVG/></a>;