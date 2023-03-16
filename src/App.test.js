import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import Navbar from './components/navbar';
import Detail from './components/viewDetails';

describe('App renders correctly', () => {
  test('Home page renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Navbar renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('City details page renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Detail />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
