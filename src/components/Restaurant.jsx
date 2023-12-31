import { useNavigate } from 'react-router-dom'
import Rating from './Rating'
import StatusOpen from './StatusOpen'
import StatusClosed from './StatusClosed'
import RestaurantStatus from '../utils/RestaurantStatus'

const Restaurant = ({ props }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col justify-between" style={{ height: '340px' }}>
        <div className="flex flex-col gap-2">
          <img className="object-cover h-40 w-full " src={props.image} alt="" />
          <p className="font-semibold">{props.name}</p>
          <Rating props={props.rating} />
          <div className="flex justify-between text-xs uppercase">
            <p>
              {props.cuisines[0]} - {props.price_range}
            </p>
            {RestaurantStatus(props) ? <StatusOpen /> : <StatusClosed />}
          </div>
        </div>
        <button onClick={() => navigate(`/restaurant/${props._id}`, { state: { props } })} type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-950 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Restaurant
