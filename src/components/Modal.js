import React from 'react'

const Modal = (props) => {
  const onConfirmPressed = () => {
    props.onConfirm()
  }

  const onCancle = () => {
    props.onCancle()
  }
  return (
    <div className="modal">
        <p>Are you sure?</p>
        <button className='btn' onClick={onConfirmPressed}>Confirm</button>
        <button className='btn btn--alt' onClick={onCancle}>Cancle</button>
        
    </div>
  )
}

export default Modal