import axios from 'axios';

const clientsURL = 'http://www.mocky.io/v2/5808862710000087232b75ac';
const policiesURL = 'http://www.mocky.io/v2/580891a4100000e8242b75c5';

exports.getClientsList = async () => {
    const clientList =  await axios.get(clientsURL);
    return clientList.data.clients;
};

exports.getPoliciesList = async () => {
    const policiesList =  await axios.get(policiesURL);
    return policiesList.data.policies;
};
