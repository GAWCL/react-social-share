export type AllowFill = 'WHITE' | 'BLACK' | 'GREEN' | 'DARK_GREEN';

export enum FILL {
	WHITE = 'white',
	BLACK = '#111B21',
	GREEN = '#25D366',
	DARK_GREEN = '#103928',
}

export interface Props {
	whith?: string;
	height?: string;
	fill: AllowFill;
}
