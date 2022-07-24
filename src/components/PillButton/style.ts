import { style } from 'typestyle';
import { colors } from '../../utils/constants';

const root = style({
  padding: '12px 55px ',
  backgroundColor: colors.accent,
  borderRadius: '24px',
  fontSize: '16px',
  lineHeight: 1.5,
  textAlign: 'center',
  border: 'none',
  $nest: {
    '&:hover': {
      cursor: 'pointer',
    }
  }
})

export const PillButtonStyle = {
  root,
}
