import React from 'react';
import styled from 'styled-components';

import { color } from '@/styles/utils/constants';
import kingvel from '@/assets/img/kingvel.png';

export const Header = () => (
  <Self>
    <Hidden>Kingvel</Hidden>
    <img src={kingvel} alt="Logotipo da Kingvel" title="Kingvel" />
  </Self>
);

const Self = styled.header`
  background-color: ${color.primary};
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Hidden = styled.h1`
  position: absolute;
  left: -9999pc;
`;

export default Header;
