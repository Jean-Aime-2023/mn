import React from 'react'


const Modal = ({open,children,onClose}) => {
    if(!open) return null
  return (
    <div>
        <button onClick={onClose}>Close</button>
        {children}
        
        </div>
  )
}

export default Modal