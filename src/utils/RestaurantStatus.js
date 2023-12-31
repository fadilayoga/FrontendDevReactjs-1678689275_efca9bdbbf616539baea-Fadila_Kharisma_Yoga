const RestaurantStatus = ({ hours }) => {
  const isCurrentlyOpen = () => {
    const currentDay = new Date().toLocaleDateString(undefined, { weekday: 'long' }).toLowerCase()
    const currentTime = new Date().toLocaleTimeString(undefined, { hour12: false })
        
    if (hours[currentDay]) {
      const [openingTime, closingTime] = hours[currentDay].split('-')      
      return currentTime >= openingTime && currentTime <= closingTime
    }

    return false
  }

  return isCurrentlyOpen()
}

export default RestaurantStatus
