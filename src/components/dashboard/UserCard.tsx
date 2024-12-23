import Image from 'next/image'

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className='min-w-[130px] flex-1 rounded-2xl p-4 odd:bg-blue-200 even:bg-green-200 dark:odd:bg-blue-800 dark:even:bg-green-700'>
      <div className='flex items-center justify-between'>
        <span className='rounded-full bg-white px-2 py-1 text-[10px] text-green-600'>
          2024/25
        </span>
        <Image src='/more.png' alt='' width={20} height={20} />
      </div>
      <h1 className='my-4 text-2xl font-semibold'>1,234</h1>
      <h2 className='text-sm font-medium capitalize text-slate-600 dark:text-slate-50'>
        {type}
      </h2>
    </div>
  )
}

export default UserCard
