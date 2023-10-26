import React from 'react';
import { Formik } from 'formik';
import * as yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import { CANCEL_BUTTON, SUBMIT_BUTTON } from '../../Constants/Messages';
import { IValues } from '../../Interfaces/Transaction/TransactionValue';

interface ITransactionModal {
  btnType: string;
  handleTransaction: (values: IValues) => void;
  handleModalOpen: (isOpen: boolean) => void;
}

const TransactionModal = (prop: ITransactionModal) => {

  const validationSchema = yup.object().shape({
    amount: yup.string().required("Required"),
    remark: yup.string().required("Required")
  });
  
  return (
    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  id="modal-id">
   	<div className="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
      <div className="">
        <div className="p-5 flex-auto justify-center">
              <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">{prop.btnType === 'DEPOSIT' ? 'Deposit' : 'Withdraw'}</h1>
              <Formik
                initialValues={{ id: '', amount: 0, remark: '', type: '', date: '' }}
                validationSchema={validationSchema}
                onSubmit={(values: IValues, { setSubmitting }) => {
                  setTimeout(() => {
                    values.id = uuidv4();
                    values.type = prop.btnType;
                    values.date = Date();
                    prop.handleTransaction(values)
                    setSubmitting(false);
                    prop.handleModalOpen(false)
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-5 mt-2">
                    <label htmlFor="amount" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Amount</label>
                    <input type='number' name='amount' onChange={handleChange} onBlur={handleBlur} value={values.amount} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="450.89" />    
                    <p className="text-sm text-red-400">{errors.amount && touched.amount && errors.amount}</p>
                  </div>
                  <div className="mb-5 mt-2">
                  <label htmlFor="remark" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Remark</label>
                    <input type='text' name='remark' onChange={handleChange} onBlur={handleBlur} value={values.remark} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />                 
                    <p className="text-sm text-red-400">{errors.remark && touched.remark && errors.remark}</p>
                  </div>
                  <div className="flex items-center justify-start w-full">
                      <button type="submit" disabled={isSubmitting} className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-color-button focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">{SUBMIT_BUTTON}</button>
                      <button onClick={() => prop.handleModalOpen(false)} className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">{CANCEL_BUTTON}</button>
                  </div>
              </form>
              )}
            </Formik>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TransactionModal;