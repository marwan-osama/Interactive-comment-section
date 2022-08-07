import Button from "./Button";

const DeleteConfirm = ({ itemToDelete, onDelete, onCancel }) => {
	return (
		<div className="delete-confirm-wrapper">
			<div className="delete-confirm">
				<h2 className="fw-m">Delete {itemToDelete}</h2>
				<p className="clr-gray-blue">
					Are you sure you want to delete this {itemToDelete}? This will remove
					the {itemToDelete} and can't be undone.
				</p>
				<div className="confirmation-buttons">
					<Button
						text="NO, CANCEL"
						handleClick={onCancel}
						className="clr-white bg-gray-blue fill-available-width"
					/>
					<Button
						text="YES, DELETE"
						handleClick={onDelete}
						className="clr-white bg-red fill-available-width"
					/>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirm;
