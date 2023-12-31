import RestaurantStatus from './RestaurantStatus';

const FilterRestaurant = ({ filterStatusRestaurant, filterPrice, data }) => {
  let filteredData = [...data];
  
  if (filterStatusRestaurant) {
    filteredData = filteredData.filter((item) => {
      const statusRestaurant = RestaurantStatus(item) === filterStatusRestaurant;
      return statusRestaurant;
    });
  }

  if (filterPrice !== '') {    
    filteredData = filteredData.filter((item) => {
      const price = item.price_range === filterPrice;
      return price;
    });
  }

  return filteredData;
};

export default FilterRestaurant;
