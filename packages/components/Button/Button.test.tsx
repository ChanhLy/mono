import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('Button Component', () => {
  it('should render', () => {
    const component = renderer.create(<Button>Click me</Button>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
