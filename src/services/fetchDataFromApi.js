export const fetchDataFromApi = async () => {
  try {
    const response = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/data-wdthr/endpoint/restaurant')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error.message)
    throw error
  }
}

export const fetchDataByCategory = async ({ filterCategory }) => {
  if (filterCategory !== '') {
    try {
      const response = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-wdthr/endpoint/restaurant_by_category?category=${filterCategory}`)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching data:', error.message)      
    }
  }

  return fetchDataFromApi()
}
