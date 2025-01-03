'use client'
import Image from 'next/image'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white'
  },
  {
    name: 'Limited companies',
    count: 53,
    fill: '#FAE27C'
  },
  {
    name: 'Other',
    count: 53,
    fill: '#C3EBFA'
  }
]

const CountChart = () => {
  return (
    <div className='h-full w-full rounded-xl bg-slate-100 p-4 dark:bg-background'>
      {/* TITLE */}
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold text-orange-600'>Clients</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      {/* CHART */}
      <div className='relative h-[75%] w-full'>
        <ResponsiveContainer>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='40%'
            outerRadius='100%'
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey='count' />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src='/maleFemale.png'
          alt=''
          width={50}
          height={50}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      {/* BOTTOM */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='h-5 w-5 rounded-full bg-blue-200' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-500'>Limited companies (55%)</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='h-5 w-5 rounded-full bg-yellow-200' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-500'>Other (45%)</h2>
        </div>
      </div>
    </div>
  )
}

export default CountChart
