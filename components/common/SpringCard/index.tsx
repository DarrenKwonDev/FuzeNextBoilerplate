import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    .card {
      width: 300px;
      height: 300px;
      background: grey;
      border-radius: 5px;
      background-size: cover;
      background-position: center center;
      box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
      transition: box-shadow 0.5s;
      will-change: transform; // 미리 변화할 것을 알려주어 브라우저가 최적화할 수 있게 함. https://developer.mozilla.org/ko/docs/Web/CSS/will-change
      border: 2px solid white;
    }
  `,
};

const calc = (x: number, y: number): number[] => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.03];

// 600 거리에서 calc이 변화시킨 [x, y, scale] 만큼 움직임
const trans = (x: number, y: number, s: number): string => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface ISpringCardProps {
  imgPath: string
}

function SpringCard({ imgPath = 'https://dmodelmanagement.com/%EB%AF%BC%EA%B2%BD_1611308774817.jpg' }: ISpringCardProps) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 170, friction: 26 }, // default
  }));

  return (
    <S.Wrapper>
      <animated.img
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        src={imgPath}
        // @ts-ignore 이건 어쩔 수 없다...
        style={{ transform: props.xys.interpolate(trans) }}
      />
    </S.Wrapper>
  );
}

export default SpringCard;
