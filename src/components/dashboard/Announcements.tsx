const Announcements = () => {
  return (
    <div className='rounded-md bg-slate-100 p-4 dark:bg-background'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold text-orange-600'>Announcements</h1>
        <span className='text-xs text-gray-400'>View All</span>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        <div className='bg-lamaSkyLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
            <span className='rounded-md bg-white px-1 py-1 text-xs text-gray-400 dark:text-gray-800'>
              01-01-2025
            </span>
          </div>
          <p className='mt-1 text-sm text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className='bg-lamaPurpleLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
            <span className='rounded-md bg-white px-1 py-1 text-xs text-gray-400 dark:text-gray-800'>
              01-01-2025
            </span>
          </div>
          <p className='mt-1 text-sm text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className='bg-lamaYellowLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
            <span className='rounded-md bg-white px-1 py-1 text-xs text-gray-400 dark:text-gray-800'>
              01-01-2025
            </span>
          </div>
          <p className='mt-1 text-sm text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Announcements
