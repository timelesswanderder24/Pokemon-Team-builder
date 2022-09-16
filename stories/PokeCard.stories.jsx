import PokeCard from './PokeCard';
import React from 'react';
import {within, userEvent} from "@storybook/testing-library"

export default {
  title: 'PokeCard',
  component: PokeCard,
  argTypes: { handleClick: { action: "handleClick" } }
} 

const Template = (args) => <PokeCard {...args} />;

export const Base = Template.bind({});
Base.args = {
  name: "ditto",
  url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
  defense: "electric",
  backgroundColor: "blue"
}; 
/*
Base.play = async({canvasElement})=>{
    const canvas = within(canvasElement);
    const deleteInteraction = await canvas.getByRole('button');
    await userEvent.click(deleteInteraction)
}*/

