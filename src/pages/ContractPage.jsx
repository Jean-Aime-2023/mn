import Header from '../components/DashboardComponents/Header';
import Button from '../components/DashboardComponents/Button';
// import { styled } from '@mui/system';
// import { css } from '@emotion/react';
import TuneIcon from '@mui/icons-material/Tune';
import { IoSearch } from 'react-icons/io5';
import ContractAccordion from '../components/DashboardComponents/ContractAccordion';
import { useNavigate } from 'react-router-dom';


const ContractPage = ({ toggleDarkMode }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Contracts" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className='flex flex-col mx-10 my-5 gap-7'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-10'>
            <Button action={'Filter'} icon={<TuneIcon  />} bg={'#5547D7'} hoverBg={'#7094db'} onClick={() => document.getElementById('my_modal_left3').showModal()} />
              <dialog id="my_modal_left3" className="w-[30%] h-[20%] rounded-2xl px-6 py-6 text-lg dark:bg-[#1B1D52] dark:text-white">
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl">Oops!</h3>
                  <p className="py-4">Unable to filter contract and money !!</p>
                  <div className="modal-action flex justify-end">
                    <form method="dialog" className='mt-4'>
                      <button className="bg-[#5547D7] text-white px-4 py-2 rounded-lg">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
          </div>


          <div><Button onClick={()=>navigate("/activities/contracts/newContract")} action={'New Contract'} icon={false} bg={'#5547D7'} hoverBg={'#7094db'} /></div>
        </div>

        <div className='flex flex-row justify-between text-md font-semibold dark:text-white'>
          <p>Contract ID</p>
          <p>Contractee</p>
          <p>Doc</p>
          <p>Category</p>
          <p>Price</p>
          <p>Status</p>
        </div>

        <section className='h-full mb-[10rem]'>
          <div className='flex flex-col gap-6 overflow-y-scroll scrollbar-hidden h-[98%]'>
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
            <ContractAccordion />
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContractPage;

