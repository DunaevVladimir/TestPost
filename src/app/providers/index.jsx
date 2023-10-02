import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Routing from './routing';

export function Providers() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/TestPost/'}>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}