import React from 'react'

const Text = ({textValue}) => {
  return (
    <div className="text-center text-appBlue max-w-[800px] mx-auto p-5 backdrop-blur-md backdropSafari rounded-xl last:mb-10">
    {textValue}
    </div>
  )
}

export default Text
