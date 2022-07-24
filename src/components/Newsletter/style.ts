import { style } from 'typestyle';
import { colors } from '../../utils/constants'

const root = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '100%',
  padding: '128px 0 198px 0',
})

const title = style({
  color: colors.font,
  fontSize: '40px',
  fontWeight: 500,
  lineHeight: 1.4,
  margin: '0 0 64px 0',
});

const input = style({
  padding: '14px 32px ',
  backgroundColor: colors.fontLight,
  borderRadius: '24px',
  color: colors.font,
  fontSize: '16px',
  lineHeight: 1.1875,
  textAlign: 'left',
  border: 'none',
  width: '416px',
  marginRight: '16px',
})

const feedback = (problem?: boolean) => style({
  color: problem ? colors.font : colors.correct,
  fontSize: '14px',
  lineHeight: 1.6,
  marginTop: '48px',
})

export const NewsletterStyle = {
  feedback,
  input,
  root,
  title,
}