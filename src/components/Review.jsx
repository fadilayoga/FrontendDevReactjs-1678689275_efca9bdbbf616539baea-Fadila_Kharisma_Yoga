import formatDate from '../utils/formatDate'

const Review = ({ props }) => {
  return (
    <div>
      {props.map((items, index) => (
        <div key={index} className="grid grid-cols-2 bg-gray-300 p-3 items-center mt-2 rounded-lg w-full">
          <div>
            <p className="font-semibold text-orange-600">{items.user}</p>
            <p className="text-sm mt-1">{formatDate(items.date)}</p>
          </div>
          <div>{items.comment}</div>
        </div>
      ))}
    </div>
  )
}

export default Review
