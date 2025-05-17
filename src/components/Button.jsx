import React from 'react'

const Button = ({name,icon}) => {
  return (
    <div   className='
      flex gap-2 items-center
      border-2 rounded-full border-blue-600 
      hover:bg-blue-600 hover:text-white 
      p-2 cursor-pointer 
      transition-all duration-300 ease-in-out 
      transform hover:scale-105
      shadow-sm hover:shadow-lg
    '>
     {name} 
     <span>
        {icon}
     </span>

    </div>
  )
}

export default Button