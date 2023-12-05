import LocationDetails from '../utils/LocationDetails'

export default function DetailBlock({ details }: { details: LocationDetails }) {
  return (
    <div className='relative flex place-items-start'>
      <div className='p-14 border-2 border-black rounded-md'>
        <h2 className='text-xl'>{details.programName}</h2>
        <p>{details.neighborhood}</p>
        <p>{details.description}</p>
        <div>
          <h3>Contact:</h3>
          <button className='w-100 px-2 py-1 bg-indigo-500'>
            {details.phone}
          </button>
          <button className='w-100 px-2 py-1 bg-indigo-500'>
            {details.email}
          </button>
        </div>
        <div>
          <div>{details.details.meals ? 'meals' : 'no meals'}</div>
          <div>{details.details.takeout ? 'takeout' : 'no takeout'}</div>
          <div>{details.details.delivery ? 'delivery' : 'no delivery'}</div>
          <div>
            {details.details.accessible ? 'accessible' : 'not accessible'}
          </div>
          <div>{details.details.hampers ? 'hampers' : 'no hampers'}</div>
          <div>
            {details.details.requiresReferral ? 'referral' : 'no referral'}
          </div>
          <div>{details.details.signup ? 'signup' : 'no signup'}</div>
        </div>
      </div>
    </div>
  )
}
