import { Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};
export default meta;

export function Default() {
  return <Button>Boop</Button>;
}
