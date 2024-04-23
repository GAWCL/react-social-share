export const createUrlUseToChatWhatsApp = (
	phoneNumber: string,
	message?: string
) => {
	if (message) {
		return `https://wa.me/${phoneNumber}?text=${message}`;
	} else {
		return `https://wa.me/${phoneNumber}`;
	}
};
