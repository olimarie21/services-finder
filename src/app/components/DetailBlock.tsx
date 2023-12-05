interface LocationDetails {
  facility: string
  category: string
  hours: string
  services: string
  phone: string
  details: { meals: boolean; pets: boolean; carts: boolean }
  coords: { lat: number; lng: number }
}

export default function DetailBlock({ details }: { details: LocationDetails }) {
  return (
    <div className='relative flex place-items-start'>
      <div className='p-14 border-2 border-black rounded-md'>
        <h2 className='text-xl'>{details.facility}</h2>
        <p>Hours: {details.hours}</p>
        <p>{details.services}</p>
        <div>{details.details.meals ? 'meals' : 'no meals'}</div>
        <div>{details.details.pets ? 'pets' : 'no pets'}</div>
        <div>{details.details.carts ? 'carts' : 'no carts'}</div>
        <button className='w-100 px-2 py-1 bg-indigo-500'>Call</button>
      </div>
    </div>
  )
}
