import React from 'react';
import { render, screen } from '@testing-library/react';
import RecentTransaction from '../RecentTransaction';
import configureStore from 'redux-mock-store';
import transactionReducer from "../../../Redux/Store/store";
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

const store = mockStore({
    transaction: {
        transaction: [
            {
              id: 1,
              remark: 'Transaction 1',
              type: 'DEPOSIT',
              date: new Date(),
              amount: 100,
            },
            {
              id: 2,
              remark: 'Transaction 2',
              type: 'WITHDRAW',
              date: new Date(),
              amount: 50,
            },
          ]
    },
  });

test('RecentTransaction component renders correctly', () => {
  render(<Provider store={store}>
        <RecentTransaction />
    </Provider>
  );
//   render(<RecentTransaction />);
  const titleElement = screen.getByText('Recent Transaction');
  expect(titleElement).toBeDefined();
});