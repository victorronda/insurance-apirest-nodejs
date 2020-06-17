import axios from 'axios';
import {isAuth} from './auth';

const clientsURL = 'http://www.mocky.io/v2/5808862710000087232b75ac';
const policiesURL = 'http://www.mocky.io/v2/580891a4100000e8242b75c5';


exports.getUserDataByUserId = async (req, res , next) => {
    const { userId } = req.params;
    const { currentUser } = req.body;
    const fullAccess = true;

    try {
    const clientsData = await axios.get(clientsURL);
    const clientById = clientsData.data.clients.filter(client => client.id === userId)[0];
    const currentUserData = clientsData.data.clients.filter(client => client.name === currentUser)[0];

        if(fullAccess === true) {
            clientById ? res.status(200).json(clientById) : res.status(404).json({message: "The user does not exist"});
        } else {
            if(currentUserData.role === 'admin') {
                clientById ? res.status(200).json(clientById) : res.status(404).json({message: "The user does not exist"})
            } else {
                res.status(401).json({message: "Your role does not have access to this content. Please, contact your administrator to have access."});
            }
        }

    } catch (error) {
        console.log('The following error happened: ', error);
    }
};


exports.getUserDataByUserName = async (req, res , next) => {
    const { name } = req.query;  
    const { currentUser } = req.body;
    const fullAccess = true;  

    try {
    const clientsData = await axios.get(clientsURL);
    const clientByName = clientsData.data.clients.filter(client => client.name === name)[0];
    const currentUserData = clientsData.data.clients.filter(client => client.name === currentUser)[0];

    
        if(fullAccess === true) {
            clientByName ? res.status(200).json(clientByName) : res.status(404).json({message: "The user does not exist"});
        } else {
            if(currentUserData.role === 'admin') {
                clientByName ? res.status(200).json(clientByName) : res.status(404).json({message: "The user does not exist"})
            } else {
                res.status(401).json({message: "Your role does not have access to this content. Please, contact your administrator to have access."});
            }
        }

    } catch (error) {
        console.log('The following error happened: ', error);
    }
};


exports.getPoliciesDataLinkedByUserName = async (req, res , next) => {
    const { currentUser } = req.body;  
    const fullAccess = false;  


    try {
    const policiesData = await axios.get(policiesURL);
    const clientsData = await axios.get(clientsURL);
    const currentUserData = clientsData.data.clients.filter(client => client.name === currentUser)[0];
    const allPoliciesList = policiesData.data.policies.map(policy => {
     
          const userData = clientsData.data.clients.filter(client => client.id === policy.clientId)[0];
          return {...policy, name: userData.name}

    });

    
    if(fullAccess === true) {
        allPoliciesList ? res.status(200).json(allPoliciesList) : res.status(404).json({message: "No policy list"});
    } else {
        if(currentUserData.role === 'admin') {
            allPoliciesList ? res.status(200).json(allPoliciesList) : res.status(404).json({message: "No policy list"})
        } else {
            res.status(401).json({message: "Your role does not have access to this content. Please, contact your administrator to have access."});
        }
    }
    } catch (error) {
        console.log('The following error happened: ', error);
    }
};


exports.getUserDataLinkedByPolicyNumber = async (req, res , next) => {
    // const { currentUser, clientSearched } = req.body;  
    const currentUser = {
        role: 'admin'
    }

    //const { clientSearched } = req.body;

    const clientSearched = 'Manning'

    const fullAccess = false;  


    try {
    const clientsData = await axios.get(clientsURL);
    const policiesData = await axios.get(policiesURL);
    const currentUserData = clientsData.data.clients.filter(client => client.name === currentUser)[0];

    

    const clientListWithPolicy = clientsData.data.clients.map(client => {
        const policyData = policiesData.data.policies.filter(policy => policy.clientId === client.id)
        
      
        
        return {...client, policies_numbers: policyData.map(policy => policy.id)}     
    })

    const theClient = clientListWithPolicy.filter(client => client.name === clientSearched)[0];


    
    if(fullAccess === true) {
        theClient ? res.status(200).json(theClient) : res.status(404).json({message: "No policy list"});
    } else {
        if(currentUser.role === 'admin') {
            theClient ? res.status(200).json(theClient) : res.status(404).json({message: "No policy list"})
        } else {
            res.status(401).json({message: "Your role does not have access to this content. Please, contact your administrator to have access."});
        }
    }
    } catch (error) {
        console.log('The following error happened: ', error);
    }
};






