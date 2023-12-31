import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store/store';
import { IInitialState } from '../../Interfaces/Redux/TransactionSlice';
import { DEPOSIT, RECENT_TRANSACTION, WITHDRAW } from '../../Constants/Messages';
import { ButtonType } from '../../Enum/ButtonType';

const RecentTransaction = () => {
  const [transactionData, setTransactionData] = useState<IInitialState>();
  const transaction = useSelector((state: RootState) => state.transaction);
 
  useEffect(() => {   
    setTransactionData(transaction)        
  },[transaction])
  
  return (
    <div className='bg-[#F5F7FB] h-[500px] rounded-[25px] pt-[27px] pl-[34px] pr-[25px] pb-[27px] relative'>
     <p className='text-xl font-semibold text-primary pb-[32px]'>{RECENT_TRANSACTION}</p>
     <div className="pr-8 max-h-96 overflow-y-scroll">
      <div className="flex flex-col gap-2">
      {transactionData && transactionData?.transaction.map(trans => (
       <div className="flex flex-row" key={trans?.id}>
        <div className="basis-3/4">
          <p className='text-xl font-semibold text-primary'>
            {trans?.remark}
          </p>
          <p className='text-sm font-normal text-gray'>
            {trans?.type === ButtonType.DEPOSIT ? DEPOSIT : WITHDRAW} - {new Date(trans?.date).toLocaleString()}
          </p>
        </div>
        <div className="basis-1/4">
          <p className={`text-xl font-semibold text-right ${trans?.type === ButtonType.DEPOSIT ? 'text-green' : 'text-red'}`}>
            {`$${trans?.amount}`}
          </p>
        </div>
       </div>
       ))}
      </div>
     </div>
    </div>
  )
}

export default RecentTransaction;