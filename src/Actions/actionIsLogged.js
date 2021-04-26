export const setLogged = (userData) => {
    console.log(userData)
        
    return {
        type: 'SIGN_IN',
        user: userData,
    }
}