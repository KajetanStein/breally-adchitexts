import { style } from 'typestyle';

const root = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '100%',
  padding: '128px 172px 152px 172px'
  
})

const left = style({
  fontSize: '48px',
  fontWeight: '500',
  lineHeight: 1.5,
  textAlign: 'left',
  flex: 1,
  margin:'auto 12px auto 0',

})

const right = (img:string) => style({
  flex: 1,
  width: '516px',
  height: '384px',
  backgroundImage: `url(${img})`,
  backgroundSize: '100%',
  backgroundPosition: 'center',
  marginLeft: '12px'
})


export const HeroStyle = {
  left,
  right,
  root,
}