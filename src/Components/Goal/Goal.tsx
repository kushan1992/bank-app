import React, { useState } from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SetupGoalModal from '../Modal/SetupGoalModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateGoal } from '../../Redux/Features/goal/goalSlice';
import { RootState } from '../../Redux/Store/store';
import { SETUP_GOAL } from '../../Constants/Messages';

interface ISetupGoal {
    goal: number
}

const Goal = () => {
const [modalIsOpen, setModalIsOpen] = useState(false);
const { goal } = useSelector((state: RootState) => state.goal);
const dispatch = useDispatch();

const handleModalOpen = (state: boolean) => {
  setModalIsOpen(state);
}

const handleGoal = (goal: ISetupGoal) => {
  if(goal) dispatch(updateGoal(goal.goal))
}

return (
    <div className='bg-[#F2F6FF] h-[227px] rounded-[25px] pt-[54px] pl-[34px] pr-[34px] relative'>
      <p className='text-2xl font-semibold text-primary pb-[32px] text-center'>{SETUP_GOAL}</p>
      <div className='flex flex-row justify-center'>
        <p className='text-4xl font-semibold text-primary pt-[14px] text-center'>{`$${goal.toFixed(2).toLocaleString()}`}</p>
        <button onClick={() => handleModalOpen(true)} className='p-0 w-[25px] h-[25px] bg-color-button rounded-full hover:bg-color-button-hover active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'>
            <FontAwesomeIcon icon={faPen} color={'white'}/>
        </button>
      </div>
      {modalIsOpen ? (
           <SetupGoalModal existingGoal={goal} handleGoal={handleGoal} handleModalOpen={handleModalOpen} />
         ) : null}
    </div>
)
}

export default Goal;