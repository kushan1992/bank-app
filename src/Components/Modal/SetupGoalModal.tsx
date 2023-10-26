import React from 'react';
import { Formik } from 'formik';
import * as yup from "yup";

interface IValues {
    goal: number,
}

interface ISetupGoalModal {
  handleGoal: (values: IValues) => void;
  handleModalOpen: (isOpen: boolean) => void;
  existingGoal: number;
}

const SetupGoalModal = (prop: ISetupGoalModal) => {

  const validationSchema = yup.object().shape({
    goal: yup.string().required("Required"),
  });
  
  return (
    <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  id="modal-id">
   	<div className="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
      <div className="">
        <div className="p-5 flex-auto justify-center">
             
              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Set up the goal</h1>
              <Formik
                initialValues={{ goal: prop.existingGoal}}
                validationSchema={validationSchema}
                onSubmit={(values: IValues, { setSubmitting }) => {
                  setTimeout(() => {
                    prop.handleGoal(values)
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
                    <label htmlFor="Goal" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Goal</label>
                    <input type='number' name='goal' onChange={handleChange} onBlur={handleBlur} value={values.goal} className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="450.89" />    
                    <p className="text-sm text-red-400">{errors.goal && touched.goal && errors.goal}</p>
                  </div>
                  <div className="flex items-center justify-start w-full">
                      <button type="submit" disabled={isSubmitting} className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-color-button focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                      <button onClick={() => prop.handleModalOpen(false)} className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">Cancel</button>
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

export default SetupGoalModal;