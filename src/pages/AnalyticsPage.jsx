import React from 'react';
import Header from '../components/DashboardComponents/Header';
import { Line, LineChart, ResponsiveContainer, DefaultTooltipContent, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import BarChart from '../components/DashboardComponents/BarChart';
import GeographyChart from '../components/DashboardComponents/GeographyChart';
import Calendar from '../components/DashboardComponents/Calendar';

const data = [
  { name: 'Jan', uv: 3000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },]

const AnalyticsPage = ({ toggleDarkMode }) => {
  return (
    <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen">
      <Header header="Analytics" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
      <div className='flex flex-col mx-10 my-5'>
        {/* divs */}
        <div className='grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
          <div className='flex flex-col justify-between gap-5 p-6 bg-[#D8E2FC] rounded-lg'>
            <div className='flex flex-row justify-between'>
              <section className='flex flex-col justify-between flex-1'>
                <p className='text-[#6B6B6B]'>Total deals</p>
                <p className='text-[#002159] text-2xl font-bold'>$ 56.00</p>
              </section>
              <div className='chart flex-1' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.7))' }}>
                <ResponsiveContainer width="70%" height={70}>
                  <DefaultTooltipContent
                    contentStyle={{ background: "transparent", border: "none" }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 10, y: 70 }}
                  />
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='flex flex-row max-md:justify-between md:gap-10'>
              <p className='text-[#6B6B6B]'>Since Last Month</p>
              <span className='px-2 py-1 bg-white rounded-md'>+13%</span>
            </div>
          </div>

          <div className='flex flex-col justify-between gap-5 p-6 bg-[#E2DEEF] rounded-lg'>
            <div className='flex flex-row justify-between'>
              <section className='flex flex-col justify-between flex-1'>
                <p className='text-[#6B6B6B]'>Total Amount</p>
                <p className='text-[#002159] text-2xl font-bold'>$ 78.00</p>
              </section>
              <div className='chart flex-1' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.7))' }}>
                <ResponsiveContainer width="70%" height={70}>
                  <DefaultTooltipContent
                    contentStyle={{ background: "transparent", border: "none" }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 10, y: 70 }}
                  />
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='flex flex-row max-md:justify-between md:gap-10'>
              <p className='text-[#6B6B6B]'>Since Last Month</p>
              <span className='px-2 py-1 bg-white rounded-md'>-4.6%</span>
            </div>
          </div>

          <div className='flex flex-col justify-between gap-5 p-6 bg-[#DAEAEA] rounded-lg'>
            <div className='flex flex-row justify-between'>
              <section className='flex flex-col justify-between flex-1'>
                <p className='text-[#6B6B6B]'>Escrow amount</p>
                <p className='text-[#002159] text-2xl font-bold'>$ 345.00</p>
              </section>
              <div className='chart flex-1' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.7))' }}>
                <ResponsiveContainer width="70%" height={70}>
                  <DefaultTooltipContent
                    contentStyle={{ background: "transparent", border: "none" }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 10, y: 70 }}
                  />
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='flex flex-row max-md:justify-between md:gap-10'>
              <p className='text-[#6B6B6B]'>Since Last Month</p>
              <span className='px-2 py-1 bg-white rounded-md'>+50.00%</span>
            </div>
          </div>

          <div className='flex flex-col justify-between gap-5 p-6 bg-[#F4E6CC] rounded-lg'>
            <div className='flex flex-row justify-between'>
              <section className='flex flex-col justify-between flex-1'>
                <p className='text-[#6B6B6B]'>Total deals</p>
                <p className='text-[#002159] text-2xl font-bold'>$ 200.00</p>
              </section>
              <div className='chart flex-1' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.7))' }}>
                <ResponsiveContainer width="70%" height={70}>
                  <DefaultTooltipContent
                    contentStyle={{ background: "transparent", border: "none" }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 10, y: 70 }}
                  />
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='flex flex-row max-md:justify-between md:gap-10'>
              <p className='text-[#6B6B6B]'>Since Last Month</p>
              <span className='px-2 py-1 bg-white rounded-md'>+43%</span>
            </div>
          </div>
        </div>

        <div className='flex flex-row w-[100%] py-5'>
          <div className='flex flex-col gap-10 w-[70%] overflow-y-scroll h-[80%] scrollbar-hidden -mb-[12rem]'>
            <div className='shadow-lg rounded-xl bg-white'>
              <BarChart />
            </div>
            <div className='text-xl font-semibold text-gray-500'>Analytics and charts</div>
            <div className='flex flex-row gap-5 w-[100%] mb-10'>
              {/* map */}

              <div className='shadow-lg rounded-xl h-[25rem] w-[50%] p-3 bg-white'>
                <GeographyChart />
              </div>

              {/* line chart */}
              <div className='shadow-lg rounded-xl h-[25rem] w-[50%] p-3 bg-white'>
                <div className='chart flex-1' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.7))' }}>
                  <ResponsiveContainer width="100%" height={360}>
                    <DefaultTooltipContent
                      contentStyle={{ background: "transparent", border: "none" }}
                      labelStyle={{ display: "none" }}
                      position={{ x: 10, y: 70 }}
                    />
                    <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <CartesianGrid stroke="#f5f5f5" />
                      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} dot={false} yAxisId={0} />
                      {/* Add YAxis component */}
                      <YAxis hide={true} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

          </div>

          {/* calendar */}
          <div className='w-[30%] bg-white ml-10 rounded-xl p-7 flex flex-col gap-5 h-full'>
            <Calendar />
            <hr className='border border-gray-300' />
            <div className='flex flex-col gap-7'>
              <section className='flex flex-col gap-2'>
                <p className='text-[#002159]'>Tasks today</p>
                <p className='flex flex-row items-center'>
                  <span><input
                  type="checkbox"
                  className="custom-checkbox"
                /> Send prototypeof the web app to dev
                </span></p>
              </section>
              <section className='flex flex-col gap-2'>
                <p className='text-[#002159]'>Tasks tomorrow</p>
                <p className='flex flex-row items-center'>
                  <span><input
                  type="checkbox"
                  className="custom-checkbox"
                /> Get the copy for the facebook image
                </span></p>
                <p className='flex flex-row items-center'>
                  <span><input
                  type="checkbox"
                  className="custom-checkbox"
                /> Send invision demo to squad
                </span></p>
              </section>
              <section className='flex flex-col gap-2'>
                <p className='text-[#002159]'>Tasks tomorrow</p>
                <p className='flex flex-row items-center'>
                  <span><input
                  type="checkbox"
                  className="custom-checkbox"
                /> Update style guide and add color 
                </span></p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;