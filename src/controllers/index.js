import axios from 'axios';
import {isAuth} from './auth';

const clientsURL = 'http://www.mocky.io/v2/5808862710000087232b75ac';

exports.getDataByUserId = async (req, res , next) => {
    const { userId } = req.params;
    const fullAccess = true;
    try {
    const clientsData = await axios.get(clientsURL);
    const userData = clientsData.data.clients.filter(client => client.id === userId)[0];

        if(fullAccess === true) {
            userData ? res.status(200).json(userData) : res.status(404).json({message: "The user does not exist"});
        } else {
            if(userData.role === 'admin') {
                userData ? res.status(200).json(userData) : res.status(404).json({message: "The user does not exist"})
            } else {
                res.status(401).json({message: "Your role does not have access to this content. Please, contact your administrator to have access."});
            }
        }
    } catch (error) {
        console.log('The following error happened: ', error);
    }
};

exports.getDataByUserName = async (req, res , next) => {
    const { name } = req.query;  
    const fullAccess = true;  
    try {
    const clientsData = await axios.get(clientsURL);
    const userData = clientsData.data.clients.filter(client => client.name === name)[0];
    
    if(fullAccess === true) {
        userData ? res.status(200).json(userData) : res.status(404).json({message: "The user does not exist"});
    } else {
        if(userData.role === 'admin') {
            userData ? res.status(200).json(userData) : res.status(404).json({message: "The user does not exist"})
        } else {
            res.status(401).json({message: "Your role does not have access to this content. Please, contact your administrator to have access."});
        }
    }
    } catch (error) {
        console.log('The following error happened: ', error);
    }
};





