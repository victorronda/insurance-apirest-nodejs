import { isAuth } from '../../controllers/auth';
import axios from 'axios';

describe('Authorization tests depending on fullAccess',  () => {
    let mockData, mockCurrentUser, fullAccess;

    

    it('should return JSON data if the fullAccess === true and there is data',  () =>{
    fullAccess = true;
    mockData = { name: 'test' };
    mockCurrentUser = {role: 'admin'};
    const res = axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: mockData }));
    //console.log('Aquiiii', res);
    
    const result = isAuth(mockData,mockCurrentUser, fullAccess, res);
    expect(mockData).toEqual(result);
    })

    it('should return JSON error message if the fullAccess === true and there is NOT data', () =>{

    })

    it(`should return JSON data if the fullAccess === false, currentUser.role === 'admin' and there is data`, () =>{

    })

    it(`should return JSON error message if the fullAccess === false, currentUser.role === 'admin' and there is NOT data`, () =>{

    })

    it(`should return JSON No auth message if the fullAccess === false and currentUser.role === 'user'`, () =>{

    })

    it(`should return JSON error message if the fullAccess === false and currentUser.role is NOT 'user' NOR 'admin'`, () =>{

    })

    

});