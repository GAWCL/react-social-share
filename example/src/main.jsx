import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import { WhatsAppButton } from './../../build';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<WhatsAppButton brand="Glyph" fill="BLACK" phoneNumber="584129867974" />
	</React.StrictMode>
);
