import React from 'react';
import styled from 'styled-components';

import { color } from '@/styles/utils/constants';

const pathFix = path => path.replace(/http:\/\//, '//');

export const StorieItem = (props) => {
  const { title, character: { name, thumbnail } } = props;

  return (
    <article>
      <SelfLink href="#" title={`${title} of ${name}`}>
        <Title>{title}</Title>
        <Character>
          <Image src={`${pathFix(thumbnail.path)}.${thumbnail.extension}`} />
          <CharacterTitle>{name}</CharacterTitle>
        </Character>
      </SelfLink>
    </article>
  );
};

const marginDefault = '15px';

const SelfLink = styled.a`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  background-color: white;
  position: relative;
  border-radius: 5px;
  display: block;
  height: 100%;
  padding: ${marginDefault};
  padding-bottom: 60px;
  transition: .1s;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: normal;
  color: ${color.primary};
`;

const Character = styled.div`
  position: absolute;
  bottom: ${marginDefault};
  left: ${marginDefault};
  right: ${marginDefault};
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const CharacterTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: normal;
  color: ${color.gray};
  margin-left: 5px;
`;

export default StorieItem;
