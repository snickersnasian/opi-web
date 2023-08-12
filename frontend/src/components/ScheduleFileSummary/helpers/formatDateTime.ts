export const formatDateTime = (dateString: string) => {
	const date = new Date(dateString).toLocaleString().split(', ');
	return `${date[0]} в ${date[1]}`;
};
