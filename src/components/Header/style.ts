import { style } from 'typestyle';
import { colors } from '../../utils/constants'

const root = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '100%',
  marginTop: '24px',
  padding: '0 64px 12px 64px',
  borderBottom: `1px solid ${colors.fontLight}`
})

const anchorsContainer = style({
  display: 'flex',
})

const anchor= style({
  color: colors.font,
  fontSize: '16px',
  lineHeight: '1.5',
  textAlign: 'left',
  textTransform: 'capitalize',
  textDecoration: 'none',
  marginRight: '48px',
})

const logo = style({
  margin: '0 97px 0 0',
})

const left = style({
  display: 'flex',
  paddingTop: '8px',
})


export const HeaderStyle = {
  anchor,
  anchorsContainer,
  left,
  logo,
  root,
}