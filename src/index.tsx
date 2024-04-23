import React from 'react';
import { Glyph } from '@/';

export const WhatsAppButton = () => {
	return (
		<React.Fragment>
			<button>
				<a aria-label="Chat on WhatsApp" href="https://wa.me/1XXXXXXXXXX">
					<Glyph fill="GREEN" />
				</a>
			</button>
		</React.Fragment>
	);
};
