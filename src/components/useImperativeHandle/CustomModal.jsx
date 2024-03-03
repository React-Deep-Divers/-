/* eslint-disable no-unused-vars */
import React, { useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function CustomModal({ open, onClose }, ref) {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      closeBtn: closeRef.current,
      confirmBtn: confirmRef.current,
      denyBtn: denyRef.current,
    };
  });

  if (!open) return null;

  return (
    <div>
      <button ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <h1>Title</h1>
      <div>
        <button ref={confirmRef}>Confirm</button>
        <button ref={denyRef}>Deny</button>
      </div>
    </div>
  );
}

export default React.forwardRef(CustomModal);
