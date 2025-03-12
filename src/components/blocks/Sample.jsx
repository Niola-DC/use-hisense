import { create } from 'framer-motion/client';
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
 return (
   <UserContext.Provider value={ { user, setUser }}>
        {children}
   </UserContext.Provider>
 )
}

export default UserProvider;




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

export default Modal;



import Modal from "./Modal";

function Navbar() {
  const modalRef = useRef();

  return (
    <div>
      <nav>
        <li>Home</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact Us</li>

      </nav>
      <button onClick={() => modalRef.current.open()}>Open Modal</button>
      <Modal ref={modalRef} />
    </div>
  );
}

export  {Navbar};
