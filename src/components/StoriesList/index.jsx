import React from 'react';
import styled from 'styled-components';

import { StorieItem } from '@/components/StoriesList/StorieItem';
import { responsive } from '@/styles/utils/constants';

export const StoriesList = () => {
  return (
    <Self className="container">
      <StorieItem />
      <StorieItem />
      <StorieItem />
      <StorieItem />
    </Self>
  );
};

const Self = styled.div`
  gap: 20px;
  display: grid;
  margin-top: 25px;

  /* Desktop */
  @media (min-width: ${responsive.desktop.min}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  /* Tablet */
  @media (min-width: ${responsive.tablet.min}) and (max-width: ${responsive.tablet.max}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default StoriesList;
