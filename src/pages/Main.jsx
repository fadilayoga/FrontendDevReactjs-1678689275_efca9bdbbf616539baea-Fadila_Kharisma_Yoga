import React, { useState, useEffect } from 'react'
import { fetchDataByCategory, fetchDataFromApi } from '../services/fetchDataFromApi'
import Restaurant from '../components/Restaurant'
import FilterRestaurant from '../utils/FilterRestaurant'

const Main = () => {
  const [data, setData] = useState([])
  const [originalData, setOriginalData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterStatusRestaurant, setfilterStatusRestaurant] = useState(false)
  const [filterPrice, setfilterPrice] = useState('')
  const [filterCategory, setfilterCategory] = useState('')

  const handleChangeStatusRestaurant = (event) => {
    setfilterStatusRestaurant(event.target.checked)
  }

  const handleChangePrice = (event) => {
    setfilterPrice(event.target.value)
  }

  const handleChangeCategory = (event) => {
    setfilterCategory(event.target.value)
  }

  const handleClear = () => {
    setfilterStatusRestaurant(false)
    setfilterPrice('')
    setfilterCategory('')
    setData(originalData)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromApi()
        setData(result)
        setOriginalData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const filterResult = FilterRestaurant({ filterStatusRestaurant, filterPrice, data: originalData })
    setData(filterResult)
  }, [filterStatusRestaurant, filterPrice])

  useEffect(() => {
    const fetchData = async () => {
      const filterByCategory = await fetchDataByCategory({ filterCategory })
      const filterResult = FilterRestaurant({ filterStatusRestaurant, filterPrice, data: filterByCategory })
      setData(filterResult)
      setOriginalData(filterResult)
    }
    fetchData()
  }, [filterCategory])

  return (
    <div className="flex justify-center my-5 sm:px-10 px-6">
      <div className="flex flex-col gap-5 max-w-[1000px] lg:min-w-[1000px]">
        <h1 className="sm:text-4xl text-2xl sm:ml-10">Restaurants</h1>
        <p className="md:w-3/4 lg:w-2/3 sm:ml-10">Nikmati pengalaman kuliner istimewa kami dengan menu pilihan terbaik yang disajikan dengan cinta dan dedikasi.</p>
        <div className="border-t-2 border-b-2 border-gray-300 py-3">
          <div className="flex justify-between flex-wrap gap-4">
            <div className="flex gap-4 sm:ml-10">
              <p>Filter By:</p>
              <div className="flex items-center border-b-2 border-gray-300 pb-[0.1rem]">
                <input checked={filterStatusRestaurant} onChange={handleChangeStatusRestaurant} id="default-radio-1" type="radio" value="" name="default-radio" className="w-3 h-3" />
                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                  Open Now
                </label>
              </div>
              <div className="flex items-center border-b-2 border-gray-300 pb-[0.1rem]">
                <select id="dropdown" value={filterPrice} onChange={handleChangePrice} className="text-sm font-medium text-gray-900 dark:text-gray-500">
                  <option value="">Price</option>
                  <option value="$">$</option>
                  <option value="$$">$$</option>
                  <option value="$$$">$$$</option>
                  <option value="$$$$">$$$$</option>
                </select>
              </div>
              <div className="flex items-center border-b-2 border-gray-300 pb-[0.1rem]">
                <select id="dropdown" value={filterCategory} onChange={handleChangeCategory} className="text-sm font-medium text-gray-900 dark:text-gray-500">
                  <option value="">Categories</option>
                  <option value="Japanese">Japanese</option>
                  <option value="American">American</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="Steakhouse">Steakhouse</option>
                  <option value="Asian">Asian</option>
                  <option value="Cafe">Cafe</option>
                </select>
              </div>
            </div>
            <button onClick={handleClear} type="button" className="py-1.5 px-7 sm:mx-10 text-sm font-normal text-gray-300 focus:outline-none bg-white border border-gray-300 hover:bg-gray-100 hover:text-grey-700">
              CLEAR ALL
            </button>
          </div>
        </div>
        <p className="sm:px-10 sm:text-2xl text-xl">All Restaurants</p>
        <div className="grid xl:grid-cols-4 xl:gap-5 lg:grid-cols-3 lg:gap-4 md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-4 grid-cols-1 gap-5 sm:px-10">
          {data.map((restaurant) => (
            <Restaurant key={restaurant._id} props={restaurant} />
          ))}
        </div>
        <button type="button" className="sm:self-center sm:w-96 w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-semibold text-sm px-5 py-2.5 me-2 mb-2 dark:border-gray-600 dark:focus:ring-gray-700 mt-10">
          LOAD MORE
        </button>
      </div>
    </div>
  )
}

export default Main
