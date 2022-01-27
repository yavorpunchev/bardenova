import { styled } from '../stitches.config';

const Link = styled('a', {
  color: '$text',
  textUnderlinePosition: 'under',
  textDecorationColor: '#text',
  '&:hover': {
    color: '$accent',
    textDecorationColor: '$accent',
  },
});

const LightLink = styled('a', {
  color: '$background',
  textUnderlinePosition: 'under',
  textDecorationColor: '#background',
  '&:hover': {
    opacity: 0.8,
  },
});

export { LightLink };
export default Link;
