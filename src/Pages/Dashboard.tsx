import React, { useState } from 'react';
import ImageCard from '../Components/ImageCard/ImageCard';
import AccountBalance from '../Components/AccountBalance/AccountBalance';
import RecentTransaction from '../Components/RecentTransaction/RecentTransaction';
import NewTransaction from '../Components/NewTransaction/NewTransaction';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store/store';
const image =  require("../public/assets/images/bank-dashboard.jpg");

const buttonData = [
{
  id: 1,
  title: 'Deposit',
  btnColor: 'bg-color-secondary',
  btnTextColor: 'text-primary',
  type: 'DEPOSIT'
},
{
  id: 2,
  title: 'Withdraw',
  btnColor: 'bg-color-primary',
  btnTextColor: 'text-white',
  type: 'WITHDRAW'
}]

const Dashboard = () => {
    const transaction = useSelector((state: RootState) => state.transaction);
    
    return (
        <div className="flex flex-row gap-11 pt-[50px] pl-[72px] pr-[44px]">
            <div className="basis-3/5">
                <div className="flex flex-col gap-9">
                    <AccountBalance balanceAmount={transaction?.accountBalance} />
                    <RecentTransaction />
                </div>
            </div>
            <div className="basis-2/5">
                <div className="flex flex-col gap-9">
                    <NewTransaction buttonData={buttonData} />
                    <ImageCard image={image} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;