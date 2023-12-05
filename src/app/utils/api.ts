import axios from 'axios'

export const fetchData = async () => {
  const apiUrl =
    'https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/free-and-low-cost-food-programs/records?limit=100'

  try {
    const res = await axios.get(apiUrl)
    return res.data
  } catch (err) {
    console.error('Error fetching data:', err)
    throw err
  }
}
