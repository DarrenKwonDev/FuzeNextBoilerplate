import React from 'react';
import styled from 'styled-components';

const S = {
  Hamberger: styled.div<{ isMenuOpen: boolean }>`
    position: relative;
    width: 20px;

    ${(props) => props.theme.deviceSizes.desktop} {
      width: 30px;
    }

    .menu,
    .menu::before,
    .menu::after {
      position: absolute;
      background: ${({ isMenuOpen, theme }) => (isMenuOpen ? theme.colors.white : theme.colors.indigo)}; // 바의 색깔
      content: '';
      display: block;
      height: 2px; // 바의 두께
      transition: background ease 0.2s, top ease 0.2s 0.2s, transform ease 0.2s;
      width: 20px; // 전체 가로 길이

      ${(props) => props.theme.deviceSizes.desktop} {
        width: 30px; // 전체 가로 길이
      }
    }

    // 중앙바
    .menu {
      left: 0px;
      top: 0px;
    }

    // 맨 위의 바
    .menu::before {
      top: -7.5px;
      height: 2px; // 두껍게

      ${(props) => props.theme.deviceSizes.desktop} {
        top: -10px;
      }
    }

    // 아래의 바
    .menu::after {
      top: 7.5px;
      height: 2px; // 두껍게

      ${(props) => props.theme.deviceSizes.desktop} {
        top: 10px;
      }
    }

    .active {
      // 활성화 되면 중앙에 있는 바는 삭제

      .menu {
        background: transparent;
      }

      .menu::after {
        transform: rotate(-45deg);
      }

      .menu::before {
        transform: rotate(45deg);
      }

      .menu::before,
      .menu::after {
        top: 0px;
        transition: top ease 0.2s, transform ease 0.2s 0.2s;
      }
    }
  `,
};

interface IHambergerProps {
  isMenuOpen: boolean;
}

function Hamberger({ isMenuOpen }: IHambergerProps) {
  return (
    <S.Hamberger isMenuOpen={isMenuOpen}>
      <div className={isMenuOpen ? 'active' : ''}>
        <div className="menu"></div>
      </div>
    </S.Hamberger>
  );
}

export default Hamberger;
