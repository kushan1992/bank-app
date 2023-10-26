import { fireEvent, render, screen } from '@testing-library/react';
import NewTransaction from '../NewTransaction';
import configureStore from 'redux-mock-store';
import transactionReducer from "../../../Redux/Store/store";
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

const store = mockStore({
  transaction: {
    transaction: transactionReducer,
  },
});

test('NewTransaction component renders buttons', () => {
    const buttonData = [
      { id: 1, title: 'Deposit', type: 'DEPOSIT', btnColor: 'bg-green', btnTextColor: 'text-white' },
      { id: 2, title: 'Withdraw', type: 'WITHDRAW', btnColor: 'bg-red', btnTextColor: 'text-white' },
    ];
  
    render(
      <Provider store={store}>
        <NewTransaction buttonData={buttonData}/>
      </Provider>
    );
  
    const depositButton = screen.getByText('Deposit');
    const withdrawButton = screen.getByText('Withdraw');
  
    expect(depositButton).toBeDefined();
    expect(withdrawButton).toBeDefined();
});

test('Clicking a button opens the modal', async() => {
  const buttonData = [{ id: 1, title: 'Deposit', type: 'DEPOSIT', btnColor: 'bg-green', btnTextColor: 'text-white' }];
  render(
    <Provider store={store}>
      <NewTransaction buttonData={buttonData}/>
    </Provider>
  );

  const depositButton = screen.getByText('Deposit');

  fireEvent.click(depositButton);

  await (() => {
    const modal = screen.getByTestId('transaction-modal');
    expect(modal).toBeDefined();
  });
});