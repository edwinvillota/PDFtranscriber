import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
`

export const fadeUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`
