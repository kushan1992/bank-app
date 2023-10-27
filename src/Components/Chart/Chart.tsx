import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { RootState } from '../../Redux/Store/store';
import { useSelector } from 'react-redux';
import { ACHIEVED_GOAL, SETUP_GOAL } from '../../Constants/Messages';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
    const { goal, transaction } = useSelector((state: RootState) => state);

    let data = null;
    if(goal.goal > transaction.accountBalance){
    const dataArr = [goal.goal - transaction.accountBalance, transaction.accountBalance]   

    data = {
          labels: ['Your goal','Current account balance'],
          datasets: [
            {
              label: 'USD',
              data: dataArr,
              backgroundColor: [
                '#FFD974',
                '#8C78E6'
              ],
              borderColor: [
                '#FFD974',
                '#8C78E6'
              ],
              borderWidth: 1,
            },
          ],
        }; 
    } 

  return (
    <div className='bg-[#FFF9E8] h-[500px] rounded-[25px] pt-[35px] pl-[24px] pr-[17px] pb-[35px] flex flex-row justify-center relative'>
      {data ? (
       <Doughnut data={data} />
      ):(goal?.goal === 0) ? (
        <p className='leading-snug break-words text-2xl font-semibold text-center text-primary'>
          {SETUP_GOAL}
        </p>
      ):( 
        <p className='leading-snug break-words text-2xl font-semibold text-center text-primary'>
          {ACHIEVED_GOAL}
        </p>
      )}
    </div>
  )
}

export default Chart;