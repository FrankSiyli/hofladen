import React from 'react'

const Text = ({textValue}) => {
  return (
    <div className="text-center text-appBlue w-full max-w-[800px] mx-auto p-5 bg-appGrey/60 backdrop-blur-sm rounded last:mb-10">
    {textValue}
    </div>
  )
}

export default Text
