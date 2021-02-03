import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  /* position: absolute;
  bottom: 0;
 */
  height: 100px;
  width: 100%;
  background: ${(props) => props.theme.colors.footerColor};

  letter-spacing: 1px;
  line-height: 1.5;

  color: ${(props) => props.theme.colors.white};
  padding: 16px ${(props) => props.theme.paddings.global}; // topbar 좌우측 공간

  display: flex;
  flex-direction: column;
  align-items: center;

  .corp-ltd {
    color: ${(props) => props.theme.colors.grayThree};
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div>Edupopkorn, 750, Gukhoe-daero Yeongdeungpo-gu, Seoul, Republic of Korea</div>
      <div>Email : edupopkorn@edupopkorn.com Tel : 02-7840-9311(Main) Company Registration Number : 549-81-01712</div>
      <div className="corp-ltd">© Edupopkorn co., Ltd., 2020. All rights reserved.</div>
    </StyledFooter>
  );
}

export default Footer;
