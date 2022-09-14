import React from 'react'
import "./App.scss";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  
  }
export default function Services({ open, children , onClose }) {
    if (!open) return null

  return (
    <>
    <div style={OVERLAY_STYLES}></div>
    <div style= {MODAL_STYLES} className="shadow-xl ServiceModal">
    <button onClick={onClose} className="shadow-m hover:shadow-xl CloseButton">x</button>
    {children}</div>
    </>
  )
}