import React from 'react'

const Backdrop = (props) => {

  return (
    <div className="backdrop" onClick={props.onCancle}></div>
  )
}

export default Backdrop