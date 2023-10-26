import React from 'react';
import { ACCOUNT_BALANCE } from '../../Constants/Messages';

interface IAcountBalance {
    balanceAmount: number
}
const AccountBalance = (prop: IAcountBalance) => {
  
  return (
    <div className='bg-[#F2F6FF] h-[227px] rounded-[25px] pt-[54px] pl-[34px] pr-[34px] relative'>
        <p className='text-4xl font-semibold text-primary' data-testid="account-balance-label">{ACCOUNT_BALANCE}</p>
        <p className='text-5xl font-semibold text-primary pt-[14px]' data-testid="account-balance-value">{`$ ${prop.balanceAmount?.toFixed(2).toLocaleString()}`}</p>
    </div>
  )
}

export default AccountBalance;