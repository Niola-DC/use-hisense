import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';

const Counter = () => {
//    WE WANT TO GET THE VALUE OF THE PREVIOUS COUNT
    return (
    <div>
            <p>Previous:</p>
            <p>Count: </p>
            <button>Increment</button>

    </div>
    );
}

export default Counter;



const InputWorthy = () => {
    // WE WANT TO FOCUS ON AN INPUT FIELD


 return (
   <div>
    <input placeholder='Type Something...'/>
    <button>Sumbit</button>
   </div>
 )
}

export {InputWorthy};


import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef((props, ref) => {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      modalRef.current.style.display = "block";
    },
    close: () => {
      modalRef.current.style.display = "none";
    }
  }));

  return (
    <div ref={modalRef} style={styles.modal}>
      <div style={styles.modalContent}>
        <h2>Modal Title</h2>
        <p>This is a modal window.</p>
        <button onClick={() => ref.current.close()}>Close</button>
      </div>
    </div>
  );
});

const styles = {
  modal: {
    display: "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  },
};

export {Modal};

function Pop() {
    const modalRef = useRef();
  
    return (
      <div>
        <button onClick={() => modalRef.current.open()}>Open Modal</button>
        <Modal ref={modalRef} />
      </div>
    );
  }
