import { useRef, useState } from "react";
import CustomModal from "./CustomModal";

const UseImperativeHandleMain = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.closeBtn.focus()}>
        Focus Close Btn
      </button>
      <button onClick={() => modalRef.current.confirm.focus()}>
        Focus Confirm Btn
      </button>
      <button onClick={() => modalRef.current.denyBtn.focus()}>
        Focus Deny Btn
      </button>
      <CustomModal ref={modalRef} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default UseImperativeHandleMain;
