import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
const HomeCard = () => {
  return (
    <section className='py-4'>
      <div className='m-auto container-xl lg:container'>
        <div className='p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Card>
            <h2 className='text-2xl font-bold'>For Developers</h2>
            <p className='mt-2 mb-4'>
              Browse our React jobs and start your career today
            </p>
            <Link to='/jobs' className='bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 inline-block'>
              Browse Jobs
            </Link>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>For Employers</h2>
            <p className='mt-2 mb-4'>
              List your job to find perfect developer for the role
            </p>
            <Link to='/add-job' className='bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-gray-700 inline-block'>
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
export default HomeCard