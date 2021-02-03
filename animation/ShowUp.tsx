import { keyframes } from 'styled-components';

const ShowUp = keyframes`
    0% {
         /* 모달 콘텐츠를 하단에 위치시킴 */
         transform: scale(.8) translateY(1000px);
         opacity: 0;
    } 
    
    100% {
         /* 모달 콘텐츠를 본래 위치로 돌려놓음 */
         transform: scale(1) translateY(0);
         opacity: 1;
    }
`;

export default ShowUp;
