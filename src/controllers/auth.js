const isAValidUser = (user) => {
	if (!(user.role === 'admin' || user.role === 'user')) {
		throw new Error('The role of the user must be or user or admin.');
	} 
};

const isAuth = (user) => {
	isAValidUser(user);
	let isAdmin = user.role === 'admin' ? true : false;
	return isAdmin;
};

module.exports = {
	isAuth
};
