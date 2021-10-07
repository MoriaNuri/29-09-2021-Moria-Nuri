import React from 'react'

function Toast({ toast }) {

  return (
    <section className={`toast-container flex align-center ${toast.type}`}>
      <section className="toast-msg flex column">
        <span>{toast.msg}</span>
      </section>
    </section>
  );
}

export default Toast
