import { isAuth } from '../../controllers/auth';
let mockData, mockCurrentUser, fullAccess;

describe('Authorization tests depending on fullAccess', () => {

    it('should return JSON data if the fullAccess === true and there is data', () =>{
        
    })

    it('should return JSON error message if the fullAccess === true and there is NOT data', () =>{

    })

    it(`should return JSON data if the fullAccess === false, currentUser.role === 'admin' and there is data`, () =>{

    })

    it(`should return JSON error message if the fullAccess === false, currentUser.role === 'admin' and there is NOT data`, () =>{

    })

    it(`should return JSON No auth message if the fullAccess === false and currentUser.role === 'user'`, () =>{

    })

    it(`should return JSON error message if the fullAccess === false and currentUser.role is NOT 'user' OR 'admin'`, () =>{

    })

    

});