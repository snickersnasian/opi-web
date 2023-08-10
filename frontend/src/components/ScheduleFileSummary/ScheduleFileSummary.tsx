import React, { type ReactElement, useState } from 'react';
import { FileSummaryProps } from './types';
import { Modal } from '../Modal/Modal';
import { FileSummary } from '../FileSummary/FileSummary';

export const ScheduleFileSummary = ({
	title,
	scheduleId,
}: FileSummaryProps): ReactElement => {
	const [showModal, setShowModal] = useState(false);

	function handleCloseModal() {
		setShowModal(false);
	}

	return (
		<>
			{showModal && <Modal onOutsideClick={handleCloseModal}>{title}</Modal>}

			<FileSummary title={title} onClick={() => setShowModal(true)} />
		</>
	);
};
