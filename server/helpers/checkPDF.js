export const checkPDF = (filename) => {
	const [name, extension] = filename.split(".");
	return Boolean(name && extension === "pdf");
};
