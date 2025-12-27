import React, { useEffect, useState } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'
import { toast } from 'react-toastify';
import No_Reults from './../assets/no-results.jpg'
const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('http://localhost:5000/jobs')
                const data = await res.json()
                setJobs(isHome ? data.slice(-3) : data)
            } catch (error) {
                console.log(error)
                toast.error('Error Fetching Jobs')
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [])
    return (
        <section className='bg-blue-50 px-4 py-10'>
            <div className='m-auto container-xl lg:container'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                {loading
                    ? <Spinner loading={loading} />
                    : jobs.length == 0
                        ? <div className='flex justify-center bg-white h-44 md:h-80 w-auto rounded-3xl'>
                            <img
                                src={No_Reults} alt="no results"
                                className='h-full' />
                        </div>
                        : <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </div>
                }
            </div>
        </section>
    )
}
export default JobListings