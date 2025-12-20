import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const EditJobPage = ({ updateJobSubmit }) => {
    const { id } = useParams()
    const [job, setJob] = useState(null)
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`http://localhost:5000/jobs/${id}`)
                const data = await res.json()
                setJob(data)
                setTitle(data.title)
                setType(data.type)
                setLocation(data.location)
                setDescription(data.description)
                setSalary(data.salary)
                setCompanyName(data.company.name)
                setCompanyDescription(data.company.description)
                setContactEmail(data.company.contactEmail)
                setContactPhone(data.company.contactPhone)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchJob()
    }, [])
    const navigate = useNavigate();
    const submitForm = async (e) => {
        e.preventDefault()
        // console.log(description)
        const updatedJob = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone
            }
        }
        // console.log(updatedJob)
        await updateJobSubmit(updatedJob)
        toast.success('Job updated successfully')
        return navigate(`/job/${id}`)
    }
    return (
        <section className='bg-indigo-50'>
            <div className='container m-auto max-w-2xl py-24'>
                <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
                    <form onSubmit={submitForm}>
                        <h2 className='text-3xl text-center font-semibold mb-6'>Update Job</h2>
                        <h3 className='text-2xl mb-5 font-bold'>Job Info</h3>
                        <div className='mb-4'>
                            <label htmlFor="type" className='block text-gray-700 font-bold mb-2'>
                                Type
                            </label>
                            <select
                                name="type" id="type"
                                className='border rounded w-full p-3'
                                required
                                value={type}
                                onChange={(e) => { setType(e.target.value) }}>
                                {/* <option value="--">--</option> */}
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="title" className='block text-gray-700 font-bold mb-2'>Title</label>
                            <input
                                type="text" id='title' name='title'
                                className='border rounded w-full p-3 mb-2'
                                placeholder='eg. Senior React Developer'
                                required
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }} />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="description" className='block text-gray-700 font-bold mb-2'>Description</label>
                            <textarea
                                name="description" id="description"
                                className='border rounded w-full p-3'
                                rows={4}
                                placeholder='eg. We are seeking a talented Front-End Developer to join our team, with strong skills in...'
                                value={description}
                                required
                                onChange={(e) => { setDescription(e.target.value) }} />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="salary" className='block text-gray-700 font-bold mb-2'>Salary</label>
                            <select
                                name="salary" id="salary"
                                className='border rounded w-full p-3'
                                required
                                value={salary}
                                onChange={(e) => { setSalary(e.target.value) }}>
                                <option value='Under $50K'>Under $50K</option>
                                <option value='$50K - 60K'>$50K - $60K</option>
                                <option value='$60K - 70K'>$60K - $70K</option>
                                <option value='$70K - 80K'>$70K - $80K</option>
                                <option value='$80K - 90K'>$80K - $90K</option>
                                <option value='$90K - 100K'>$90K - $100K</option>
                                <option value='$100K - 125K'>$100K - $125K</option>
                                <option value='$125K - 150K'>$125K - $150K</option>
                                <option value='$150K - 175K'>$150K - $175K</option>
                                <option value='$175K - 200K'>$175K - $200K</option>
                                <option value='Over $200K'>Over $200K</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor="location"
                                className='block text-gray-700 font-bold mb-2'>Location</label>
                            <input
                                type="text" id='location' name='location'
                                className='border rounded w-full p-3 mb-2'
                                placeholder='Company Location'
                                value={location}
                                required
                                onChange={(e) => { setLocation(e.target.value) }} />
                        </div>
                        <h3 className='text-2xl mb-5 font-bold'>Company Info</h3>
                        <div className='mb-4'>
                            <label
                                htmlFor="company_name"
                                className='block text-gray-700 font-bold mb-2'>Name</label>
                            <input
                                type="text" id='company_name' name='company_name'
                                placeholder='Company Name'
                                className='border rounded w-full p-3'
                                value={companyName}
                                required
                                onChange={(e) => { setCompanyName(e.target.value) }} />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor="company_description"
                                className='block text-gray-700 font-bold mb-2'>Description</label>
                            <textarea
                                name="company_description" id="company_description"
                                className='border rounded w-full p-3'
                                rows={4}
                                placeholder='About the Company'
                                value={companyDescription}
                                required
                                onChange={(e) => { setCompanyDescription(e.target.value) }} />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor="company_email"
                                className='block text-gray-700 font-bold mb-2'>Email</label>
                            <input
                                type="email" id='company_email' name='company_email'
                                className='border rounded w-full p-3'
                                placeholder='eg. contact@company.com'
                                value={contactEmail}
                                required
                                onChange={(e) => { setContactEmail(e.target.value) }} />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor="company_phone"
                                className='block text-gray-700 font-bold mb-2'>Phone</label>
                            <input
                                type="tel" id='company_phone' name='company_phone'
                                className='border rounded w-full p-3'
                                placeholder='Company Contact Number'
                                // required
                                value={contactPhone}
                                onChange={(e) => { setContactPhone(e.target.value) }} />
                        </div>
                        <div>
                            <button
                                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full'
                                type='submit'>Update Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default EditJobPage