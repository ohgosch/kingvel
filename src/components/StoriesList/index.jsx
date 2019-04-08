import React from 'react';
import styled from 'styled-components';

import { StorieItem } from '@/components/StoriesList/StorieItem';
import { responsive } from '@/styles/utils/constants';
import { character } from '@/logics/requests/character';
import { stories } from '@/logics/requests/stories';

// My favorite heroes id
const charactersMap = [1009610, 1010802, 1010338];

export class StoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      stories: [],
      ready: false,
    };
  }

  componentDidMount() {
    this.setupCharacters();
    this.setupStories();
  }

  setupCharacters() {
    // Find updated informations of the heroes
    Promise.all(charactersMap.map(item => character(item)))
      .then(data => {
        this.setState(state => ({
          ...state,
          characters: data,
          ready: true,
        }))
      });
  }

  setupStories() {
    const { characters } = this.state;

    // Find the stories of the heroes
    Promise.all(charactersMap.map((item) => stories(item)))
      .then(data => {
        const contacted = [];
        data.forEach((storieList, index) => {
          return contacted.push(
            ...storieList.map(storie => ({
              ...storie,
              master: charactersMap[index]
            }))
          );
        });

        this.setState(state => ({
          ...state,
          stories: contacted,
        }));
      });
  }

  getCharacter({ master }) {
    // Find the master character informations
    const { characters } = this.state;

    const { name, thumbnail } = characters.find(character => character.id === master);

    return {
      name,
      thumbnail,
    };
  }

  render() {
    const { stories, ready } = this.state;

    return (
      <Self className="container">
        {/* Load only when the first request is done */}
        {ready && stories.map(storie => (
          <StorieItem
            key={storie.id}
            title={storie.title}
            character={{...this.getCharacter(storie)}}
          />
        ))}
      </Self>
    );
  }
}

const Self = styled.div`
  gap: 20px;
  display: grid;
  padding: 25px 0;

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
