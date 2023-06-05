import {createContext, useReducer} from 'react'

// export for consuming context
export const LoginContext = createContext(null)  
export const LoginDispatchContext = createContext(null)

const initialState = {
    username: '',
    isAuth: false
}
// export for providing context (reducer - state and dispatch)
export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, 'Hello World')

    return (
        <LoginContext.Provider value={login}>
            <LoginDispatchContext.Provider value={dispatch}>
                {children}
            </LoginDispatchContext.Provider>
        </LoginContext.Provider>
    )
}

// reducer used in same file, no export
const loginReducer = (login, action) => {
    switch (action.type) {
        case 'LOGIN':
            // console.log(action.data)
           if (action.data.password === 'abc'){
            return {
                username: action.data.username,
                isAuth: true
            }
           }
            return login
        default:
            return login
    }
}