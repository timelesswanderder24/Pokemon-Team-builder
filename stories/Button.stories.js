import { template } from "@babel/core";
import Button from "../components/Button";
import {within, userEvent} from "@storybook/testing-library"


export default{
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const deleteButton = Template.bind({})
deleteButton.args = {
  backgroundColor: "red",
  label: "delete",
  size: "md",
}

deleteButton.play = async({canvasElement})=>{
    const canvas = within(canvasElement);
    const deleteInteraction = await canvas.getByRole('button');
    await userEvent.click(deleteInteraction)
}
