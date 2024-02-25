import { useRef, useState } from "react";
import CustomModal from "./CustomModal";

const UseImperativeHandleMain = () => {
	const [open, setOpen] = useState(false);
	const modalRef = useRef();

	return (
		<>
			<button onClick={() => setOpen(true)}>Open</button>
			<button>Focus Close Btn</button>
			<button>Focus Confirm Btn</button>
			<button>Focus Deny Btn</button>
			<CustomModal ref={modalRef} open={open} onClose={() => setOpen(false)} />
		</>
	);
};

export default UseImperativeHandleMain;
