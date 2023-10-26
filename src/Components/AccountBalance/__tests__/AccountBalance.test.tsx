import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountBalance from '../AccountBalance';

describe('AccountBalance', () => {
    it('should render account balance', () => {
    const { getByText } = render(<AccountBalance balanceAmount={120} />);

      const firstShortTitleNode = screen.getByText('$ 120.00');
      expect(firstShortTitleNode).toBeDefined();
    })
});