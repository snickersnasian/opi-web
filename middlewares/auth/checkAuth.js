import { Authtatus } from "./constants.js";
import { isCodeWordValid } from "./helpers/isCodeWordValid.js";

export const checkAuth = (req, res, next) => {
	const codeWord = req.headers.codeword;

	if (isCodeWordValid(codeWord)) {
		return next();
	}

	return res.json({
		auth: Authtatus.FAIL,
	});
};
