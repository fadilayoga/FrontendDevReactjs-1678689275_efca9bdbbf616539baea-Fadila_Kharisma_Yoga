const MenuItems = ({ props }) => {
  return (
    <ul className="list-inside list-disc">
      {props.map((items, index) => (
        <li key={index}>{items.name}</li>
      ))}
    </ul>
  )
}

export default MenuItems
