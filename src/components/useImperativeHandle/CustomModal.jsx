import React from "react";
import PropTypes from "prop-types";

CustomModal.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

function CustomModal({ open, onClose }, ref) {
	if (!open) return null;

	return (
		<div ref={ref}>
			<button onClick={onClose}>&times;</button>
			<h1>Title</h1>
			<div>
				<button>Confirm</button>
				<button>Deny</button>
			</div>
		</div>
	);
}

export default React.forwardRef(CustomModal);
