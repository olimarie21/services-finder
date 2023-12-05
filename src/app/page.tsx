import Image from 'next/image'
import DetailBlock from './components/DetailBlock'

const locationDetail = {
  facility: 'Tenth Avenue Church',
  category: 'Adults (all genders)',
  hours: 'N/A',
  services: 'Shelter',
  phone: '604-876-2181',
  details: { meals: true, pets: false, carts: false },
  coords: { lat: 49.262338305195684, lng: -123.10586046207774 }
}

interface LocationDetails {
  facility: string
  category: string
  hours: string
  services: Array<string>
  address: string
  phone: string
  details: { meals: boolean; pets: boolean; carts: boolean }
  coords: { lat: number; lng: number }
}
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-24'>
      <div className=' items-center justify-between font-mono text-sm lg:flex mb-2'>
        <h1 className='font-sans text-2xl/8'>Services</h1>
      </div>
      <DetailBlock details={locationDetail} />
    </main>
  )
}
