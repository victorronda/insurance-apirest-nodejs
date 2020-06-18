import { isAuth } from './auth';
import { getClientsList, getPoliciesList } from './data';

exports.getUserDataByUserId = async ( req, res ) => {
    const { userId } = req.params;
    const { currentUser } = req.body;
    const fullAccess = true;

    try {
    const clientsData = await getClientsList()
    const clientById = clientsData.filter(client => client.id === userId)[0];
    const currentUserData = clientsData.filter(client => client.name === currentUser)[0];
    isAuth(clientById, currentUserData, fullAccess, res);

    } catch (error) {
        console.log('The following error happened: ', error);
    }
};


exports.getUserDataByUserName = async ( req, res ) => {
    const { name } = req.query;  
    const { currentUser } = req.body;
    const fullAccess = true;  

    try {
    const clientsData = await getClientsList()
    const clientByName = clientsData.filter(client => client.name === name)[0];
    const currentUserData = clientsData.filter(client => client.name === currentUser)[0];
    isAuth(clientByName, currentUserData, fullAccess, res);

    } catch (error) {
        console.log('The following error happened: ', error);
    }
};


exports.getPoliciesDataLinkedByUserName = async ( req, res ) => {
    const { currentUser } = req.body;  
    const fullAccess = false;  

    try {
    const policiesData = await getPoliciesList();
    const clientsData =  await getClientsList();
    const currentUserData = clientsData.filter(client => client.name === currentUser)[0];

    const allPoliciesList = policiesData.map(policy => { 
          const userData = clientsData.filter(client => client.id === policy.clientId)[0];
          return {...policy, name: userData.name}
    });
    
    isAuth(allPoliciesList,currentUserData,fullAccess, res);

    } catch (error) {
        console.log('The following error happened: ', error);
    }
};


exports.getUserDataLinkedByPolicyNumber = async ( req, res ) => { 
    const { currentUser, clientSearched } = req.body;  
    const fullAccess = false;  

    try {
    const clientsData = await getClientsList();
    const policiesData = await getPoliciesList();
    const currentUserData = clientsData.filter(client => client.name === currentUser)[0];

    const clientListWithPolicy = clientsData.map(client => {
        const policyData = policiesData.filter(policy => policy.clientId === client.id);
        return {...client, policies_numbers: policyData.length > 0 ? policyData.map(policy => policy.id) : null};     
    });

    const theClient = clientListWithPolicy.filter(client => client.name === clientSearched)[0];
    isAuth(theClient,currentUserData,fullAccess, res);

    } catch (error) {
        console.log('The following error happened: ', error);
    }
};






