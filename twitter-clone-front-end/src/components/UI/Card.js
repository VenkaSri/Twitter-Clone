const Card = props => {
  return <div className={`border border-[#f2f2f2] h-72 rounded-xl self-center`}>
    {props.children}
  </div>
}

export default Card;