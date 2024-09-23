import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {  // when using ref by a diffferent component  than where it is created DorwareRef is used to wrap component function
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal( // Create Portal is used to locate a component in a different place than where it is called in the dom, it is used after return, jsx code is wrapped in it
    // It takes two arguments, the jsx code to be excecuted and the location to place it
    <dialog className="modal" ref={dialog}>      
      {children}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
