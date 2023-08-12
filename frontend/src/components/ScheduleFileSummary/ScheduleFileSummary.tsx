import React, { type ReactElement, useState, useEffect } from 'react';
import { FileSummaryProps } from './types';
import { Modal } from '../Modal/Modal';
import { FileSummary } from '../FileSummary/FileSummary';
import { Oval } from 'react-loader-spinner';
import styles from './ScheduleFileSummary.module.scss';
import { formatDateTime } from './helpers/formatDateTime';
import { FadeAppear } from '../FadeAppear/FadeAppear';
import { DocumentCallback } from 'react-pdf/dist/cjs/shared/types';
import { range } from 'lodash-es';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export const ScheduleFileSummary = ({
	title,
	uploadedAt,
	scheduleId,
}: FileSummaryProps): ReactElement => {
	const [showModal, setShowModal] = useState(false);
	const fileUrl = `/api/schedule/${scheduleId}`;
	const [numPages, setNumPages] = useState<number>();

	title = `${title} (обновлено ${formatDateTime(uploadedAt)})`;

	async function handleClick() {
		setShowModal(true);
	}

	function onScheduleLoad({ numPages }: DocumentCallback) {
		setNumPages(numPages);
	}

	function handleCloseModal() {
		setShowModal(false);
	}

	useEffect(() => {
		pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	});

	return (
		<>
			{showModal && (
				<FadeAppear>
					<Modal onOutsideClick={handleCloseModal}>
						<div className={styles.scheduleControls}>
							<Button>
								<a target='__blank' href={fileUrl}>Скачать</a>
							</Button>
							<div className={styles.closeBtn}>
								<Button>
									<a onClick={handleCloseModal}>Закрыть</a>
								</Button>
							</div>
						</div>
						<FadeAppear>
							<Document className={styles.scheduleImages} file={fileUrl} onLoadSuccess={onScheduleLoad}>
								{numPages &&
									range(numPages).map((pageNum) => {
										return (
											<Page
												renderAnnotationLayer={false}
												renderTextLayer={false}
												pageIndex={pageNum}
												key={pageNum}
											/>
										);
									})}
							</Document>
						</FadeAppear>
					</Modal>
				</FadeAppear>
			)}

			<FileSummary title={title} onClick={handleClick} />
		</>
	);
};