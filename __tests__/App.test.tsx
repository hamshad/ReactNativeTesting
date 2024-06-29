import {expect, jest, test} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import App from '../App';

test('rendering the first screen', () => {
  const {getByTestId} = render(<App />);
  const basicsText = getByTestId('basicsTest');
  expect(basicsText).toBeTruthy();
});
