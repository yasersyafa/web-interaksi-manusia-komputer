

// eslint-disable-next-line react/prop-types
const Card = ({ imageSrc, title, description }) => {
  return (
    <div className=" rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full aspect-square object-cover" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-lora">{title}</div>
        <p className="text-gray-700 text-base font-futura">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card