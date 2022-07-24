import { style } from 'typestyle';
import { colors } from '../../utils/constants'

const root = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  padding: '128px 280px 128px 172px',
  backgroundColor: colors.font,
  fontSize: '24px',
  lineHeight: 1.2,
  color: colors.fontLight,
});

const top = style({
  marginBottom: '96px',
  $nest: {
    svg: {
      marginBottom: '68px',
    }
  }
});

const author= style({
  color: colors.fontMedium,
  margin: 0,
})

export const TestimonialStyle = {
  author,
  root,
  top,
}