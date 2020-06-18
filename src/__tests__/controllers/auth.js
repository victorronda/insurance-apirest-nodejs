import { isAuth } from '../../controllers/auth';
import axios from 'axios';

describe('Authorization tests depending on fullAccess',  () => {
    let mockData, mockCurrentUser, fullAccess;

    it('should return JSON data if the fullAccess === true and there is data', async () =>{
    fullAccess = true;
    mockData = { name: 'test' };
    mockCurrentUser = {role: 'admin'};
    const res = await axios.get.mockImplementationOnce(() => Promise.resolve({data: mockData}))
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