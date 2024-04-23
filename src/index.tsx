import React, { FC } from 'react';
import { svg } from './Components';
import { Props } from './Components/Glyph/glyph';
import { createUrlUseToChatWhatsApp } from './Utils';

export type Brand = 'Glyph';
// | 'Inline' | 'Stacked'
export interface WhatsAppButtonProps {
	phoneNumber: string;
	message?: string;
	brand: Brand;
	whith: number;
	height: number;
	fill: Props['fill'];
}
export const WhatsAppButton: FC<WhatsAppButtonProps> = ({
	phoneNumber,
	message,
	brand,
	whith,
	height,
	fill,
}) => {
	const url = createUrlUseToChatWhatsApp(phoneNumber, message);
	const BRAND: React.FC<Props> = svg[brand] as React.FC<Props>;

	return (
		<React.Fragment>
			<button>
				<a aria-label="Chat on WhatsApp" href={url}>
					<BRAND
						fill={fill}
						whith={whith.toString()}
						height={height.toString()}
					/>
				</a>
			</button>
		</React.Fragment>
	);
};
