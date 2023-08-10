import React, { type ReactElement } from 'react';
import { type ImageBannerProps } from './types';
import styles from './ImageBanner.module.scss';

export const ImageBanner = ({ src }: ImageBannerProps): ReactElement => {
	return (
		<div className={styles.banner}>
			<img src={src} alt="Banner" />
		</div>
	);
};
