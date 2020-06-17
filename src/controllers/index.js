import axios from 'axios';
import isAuth from './auth';

const clientsURL = 'http://www.mocky.io/v2/5808862710000087232b75ac';

const getDataByUserId = async (req, res , next) => {
    const { userId } = req.params;
    try {
    const clientsData = await axios.get(clientsURL);
    const userData = clientsData.data.clients.filter(client => client.id === userId)[0];
    userData ? res.status(200).json(userData) : res.status(404).json({message: "The user does not exist"});
    } catch (error) {
        console.log('The following error happened: ', error);
    }
};


module.exports = {
    getDataByUserId
}

