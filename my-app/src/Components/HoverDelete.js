import React, {useState} from 'react'

export default function HoverDelete() {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <button className='delete' onMouseOver={() => {
        setIsHovered(true);
    }} onMouseLeave={() => {
        setIsHovered(false);
    }}></button>
  )
}
