const isAValidUser = (user) => {
	if (user.name === -1 || user.email === -1 ){
		throw new Error('The user does not exist in our DB.');
	} 
};

exports.isAuth = (user) => {
	isAValidUser(user);
	const fullAccess = user.role === 'admin' ? true : false;
	return fullAccess;
};

