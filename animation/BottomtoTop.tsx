import { keyframes } from 'styled-components';

// Create the keyframes
const BottomtoTop = keyframes`
  from {
    transform: translateY(12px);
    opacity: 0;
  }

  to {
    opacity: 1;
  };
`;

export default BottomtoTop;
