import { useLocation } from 'react-router-dom'
import Review from '../components/Review'
import Rating from '../components/Rating'
import MenuItems from '../components/MenuItems'

const Detail = () => {
  const { state } = useLocation()
  const { image, name, rating, address, menu_items, description, reviews } = state.props

  return (
    <div className="flex justify-center my-5 sm:px-10 px-6">
      <div className="w-[860px]">
        <div className="grid sm:grid-cols-2 sm:gap-5 grid-cols-1 gap-3">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="sm:col-span-1 sm:col-end-3">
            <div className="flex flex-col gap-2">
              <p className="font-bold sm:text-2xl text-xl">{name}</p>
              <div className="border-b-2 border-orange-500 pb-3">
                <div className="flex justify-between mt-2 mb-1">
                  <p className="font-bold">Rating</p>
                  <Rating props={rating} />
                </div>
                <p className="">{address.street}</p>
              </div>
              <div>
                <p className="font-bold mb-2">Menu Items</p>
                <MenuItems props={menu_items} />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="font-bold pb-1">Overview</p>
            <p className="text-justify">{description}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="font-bold">Review Item</p>
            <div className="flex flex-col gap-[0.15rem]">
              <Review props={reviews} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
