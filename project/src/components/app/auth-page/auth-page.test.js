import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import AuthPage from './auth-page';

let store = null;

describe('Component: AuthScreen', () => {
  beforeEach(() => {
    const createFakeStore = configureStore({});
    store = createFakeStore({ USER: {
      authorizationStatus: 'NO_AUTH',
      authUser: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      },
    }});
  });

  it('should reder "AuthScreen" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={store}>
        <Router history={history}>
          <AuthPage/>
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'test@test.com');
    userEvent.type(screen.getByTestId('password'), '1234567');

    expect(screen.getByDisplayValue(/test@test.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/1234567/i)).toBeInTheDocument();
  });
});
