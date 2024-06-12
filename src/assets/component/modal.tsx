import React, { ReactElement } from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import "./testcomponent.css"
interface ParentProps {
  modalChildren:
    | React.ReactElement[]
    | ReactElement | React.ReactNode;
}

export default function Modal({ modalChildren }: ParentProps) {
  const modalRef:any = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const observerRefValue:any = modalRef.current;
    disableBodyScroll(observerRefValue);
    return () => {
      if (observerRefValue) {
        enableBodyScroll(observerRefValue);
      }
    };
  }, []);

  return (
    <div ref={modalRef} id="modal-wrapper" onClick={() => navigate("/")}>
      <div
        id="module"
        onClick={(e) => e.stopPropagation()}
        className="main-content h-[80%] bg-slate-100">
        {modalChildren}
      </div>
    </div>
  );
}
