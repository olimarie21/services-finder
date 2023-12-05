interface LocationDetails {
  programName: string
  organizationName: string
  description: string
  neighborhood: string
  hours: string | null
  cost: string | null
  phone: string | null
  email: string | null
  coords: { lat: number; lng: number }
  details: {
    meals: boolean
    takeout: boolean
    delivery: boolean
    accessible: boolean
    hampers: boolean
    requiresReferral: boolean
    signup: boolean
  }
}

export default LocationDetails
