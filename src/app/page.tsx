'use client'
import Image from 'next/image'
import DetailBlock from './components/DetailBlock'
import { fetchData } from './utils/api'
import { useEffect, useState } from 'react'
import LocationDetails from './utils/LocationDetails'

const locationDetail = {
  programName: 'Washington Community Market',
  organizationName: 'Portland Hotel Society (PHS)',
  description:
    'Low cost essential food and household supplies, Mon-Sat 9am-5pm. For info contact (604) 683-0073.',
  neighborhood: 'Downtown',
  hours: 'Mon. - Sat. | 9 a.m. - 5 p.m.',
  cost: null,
  phone: '604-683-0073',
  email: null,
  coords: { lat: 49.281418, lng: -123.100279 },
  details: {
    meals: false,
    takeout: false,
    delivery: false,
    accessible: true,
    hampers: true,
    requiresReferral: false,
    signup: false
  }
}

export default function Home() {
  const [locations, setLocations] = useState<LocationDetails[] | null>(null)

  useEffect(() => {
    const getAndFormatData = async () => {
      try {
        const res = await fetchData()
        setLocations(res.results)
      } catch (err) {
        console.log('error fetching data', err)
      }
    }

    getAndFormatData()
    console.log(locations)
  })

  return (
    <main className='flex min-h-screen flex-col p-24'>
      <div className=' items-center justify-between font-mono text-sm lg:flex mb-2'>
        <h1 className='font-sans text-2xl/8'>
          Free and Low Cost Food Programs
        </h1>
      </div>
      <DetailBlock details={locationDetail} />
    </main>
  )
}
