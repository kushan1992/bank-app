import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { RootState } from '../../Redux/Store/store';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
    const { goal, transaction } = useSelector((state: RootState) => state);

    const dataArr = [transaction.accountBalance, goal.goal]   

    const data = {
        labels: ['Current account balance', 'Your goal'],
        datasets: [
          {
            label: 'USD',
            data: dataArr,
            backgroundColor: [
              '#8C78E6',
              '#FFD974'
            ],
            borderColor: [
              '#8C78E6',
              '#FFD974'
            ],
            borderWidth: 1,
          },
        ],
      };
  
  return (
    <div className='bg-[#FFF9E8] h-[500px] rounded-[25px] pt-[35px] pl-[24px] pr-[17px] pb-[35px] flex flex-row justify-center justify-center relative'>
      <Doughnut data={data} />
    </div>
  )
}

export default Chart;