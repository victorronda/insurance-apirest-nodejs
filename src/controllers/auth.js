
exports.isAuth = ( data, currentUser, fullAccess, res ) => {

    if(fullAccess === true) {
        if(currentUser.role === 'admin' || currentUser.role === 'user'){
            data ? res.status(200).json(data) : res.status(404).json({message: "Not found"});
        } else {
            res.status(404).json({message: "Not found"});
        }
    } else {
        if(currentUser.role === 'admin') {
            data ? res.status(200).json(data) : res.status(404).json({message: "Not found"});
        } else if (currentUser.role === 'user'){
            res.status(401).json({message: "Your role does not have authorization to this content. Please, contact your administrator."});
        } else {
            res.status(404).json({message: "Not found"});
        }
    }
};

