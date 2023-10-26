import React from 'react';

interface IAcountBalance {
    balanceAmount: number
}
const AccountBalance = (prop: IAcountBalance) => {
  
  return (
    <div className='bg-[#F2F6FF] h-[227px] rounded-[25px] pt-[54px] pl-[34px] pr-[34px] relative'>
        <p className='text-4xl font-semibold text-primary'>Account Balance</p>
        <p className='text-5xl font-semibold text-primary pt-[14px]'>{`$ ${prop.balanceAmount.toFixed(2).toLocaleString()}`}</p>
    </div>
  )
}

export default AccountBalance;