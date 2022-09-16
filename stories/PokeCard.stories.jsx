import PokeCard from './PokeCard';
import React from 'react';

export default {
  title: 'PokeCard',
  component: PokeCard
} 

const Template = (args) => <PokeCard {...args} />;

export const Base = Template.bind({});
Base.args = {
  poke: {
  tag: 'delete',
  name: "ditto",
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
  },
}; 

