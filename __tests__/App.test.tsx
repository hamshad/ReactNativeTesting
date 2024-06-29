import {expect, jest, test} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import App from '../App';

const tree = render(<App />);

// test('rendering the first screen', () => {
//   expect(tree).toMatchSnapshot();
// });
