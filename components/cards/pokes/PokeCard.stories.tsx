import { ComponentStory, ComponentMeta } from '@storybook/react';
import PokeCard, { IPokeCard } from './PokeCard';
import { mockPokeCardProps } from './PokeCard.mocks';

export default {
  title: 'templates/PokeCard',
  component: PokeCard,
  argTypes: {},
} as ComponentMeta<typeof PokeCard>;

const Template: ComponentStory<typeof PokeCard> = (args) => (
  <PokeCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockPokeCardProps.base,  
} as IPokeCard;   