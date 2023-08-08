export const isCodeWordValid = (codeWord) => {
	console.log(codeWord);
	return codeWord === process.env.CODEWORD;
};
