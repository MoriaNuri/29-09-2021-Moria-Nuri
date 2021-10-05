import React from 'react'

function Toast({toast}) {



  const toastIcon = toast.type === 'error'
    ? 'fas fa-exclamation-triangle'
    : 'far fa-check-circle';
    return (

      <section className={`toast-container flex align-center ${toast.type}`}>
      <span className="toast-icon"><i className={toastIcon} /></span>
      <section className="toast-msg flex column">
        <span>{toast.msg}</span>
      </section>
    </section>
    );
    
}

export default Toast
