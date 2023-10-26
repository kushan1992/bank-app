import React, { useEffect, useState } from 'react';
import TransactionModal from '../Modal/TransactionModal';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, updateAccountBalance } from '../../Redux/Features/transaction/transactionSlice';
import { RootState } from '../../Redux/Store/store';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { CANT_PROCEED, NEW_TRANSACTION, SUCCESSFULLY_DEPOSIT, WITHDRAW_COMPLETED } from '../../Constants/Messages';
import { IValues } from '../../Interfaces/Transaction/TransactionValue';
import { ButtonType } from '../../Enum/ButtonType';

interface IButtonData {
  id: number,
  title: string,
  type: string,
  btnColor: string,
  btnTextColor: string,
}

interface INewTransaction {
  buttonData: IButtonData[]
}

const NewTransaction = (prop: INewTransaction) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [btnType, setBtnType] = useState('');
  const [newAccBalance, setNewAccBalance] = useState(0);
  const transaction = useSelector((state: RootState) => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {   
    setNewAccBalance(transaction.accountBalance)    
  },[transaction])

  function openModal(btnType: string) {
    setModalIsOpen(true);
    setBtnType(btnType);
  }
  const handleTransaction = (value: IValues) => {    
    const data = {transaction: value};
    
    if(btnType === ButtonType.DEPOSIT){
     dispatch(updateAccountBalance(newAccBalance + value.amount))
     dispatch(addTransaction(data));
     toast.success(SUCCESSFULLY_DEPOSIT, {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
     if((newAccBalance - value.amount) !== 0 && (newAccBalance - value.amount) > 0) {
       dispatch(updateAccountBalance(newAccBalance - value.amount))
       dispatch(addTransaction(data));
       toast.success(WITHDRAW_COMPLETED, {
        position: toast.POSITION.TOP_CENTER
      });
     } else {
        toast.error(CANT_PROCEED, {
            position: toast.POSITION.TOP_CENTER
        });
     }
    }
  }

  const handleModalOpen = (isOpen: boolean) => {
    setModalIsOpen(isOpen);
  }  
  return (
    <div className='bg-[#FFF9E8] h-[380px] rounded-[25px] pt-[46px] pl-[25px] pr-[25px]'>
        <p className='text-xl font-semibold text-primary pb-[32px] text-center'>{NEW_TRANSACTION}</p>
        <div className='flex flex-col pt-[67px] gap-11'>
           {prop.buttonData?.map(btn => (
            <button key={btn.id} onClick={() => openModal(btn.type)} data-testid="transaction-button" className={`${btn.btnTextColor} px-4 w-auto h-[51px] ${btn.btnColor} rounded-[10px] active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`}>
              <p className='text-xl font-medium'>{btn.title}</p>
            </button>
           ))}
        </div>
        {modalIsOpen ? (
           <TransactionModal btnType={btnType} handleTransaction={handleTransaction} handleModalOpen={handleModalOpen} data-testid="transaction-modal"/>
         ) : null}
        <ToastContainer />
    </div>
  )
}

export default NewTransaction;