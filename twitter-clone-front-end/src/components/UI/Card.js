const Card = props => {
  return <div className={`w-80.1 border border-[#f2f2f2] h-72 rounded-xl`}>
    {props.children}
  </div>
}

export default Card;