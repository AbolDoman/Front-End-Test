import React, {useContext, useReducer} from 'react'

const StateContext = React.createContext(undefined);
const DispatchContext = React.createContext(undefined);

function hypeReducer(state,action) {
    switch (action.type) {
        case "SET_LOG_OR_REG":
            return {...state, LoginOrRegister: action.payload};
        case "SET_NAV_HEIGHT":
            return {...state, heightOfNav: action.payload};


        default :
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}
function ContextProvider({children}) {
    const [state,dispatch] = useReducer(hypeReducer,{
        LoginOrRegister : 2,
        heightOfNav : 0,


    });
    return(
    <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
            {children}
        </DispatchContext.Provider>
    </StateContext.Provider>
    )
}
function useHypeState() {
    const context = useContext(StateContext);
    console.log("useState: ",context.LoginOrRegister);
    if (context === undefined) {
        throw new Error("useTweetState must be used within a TweetProvider");
    }
    return context;
}
function useHypeDispatch() {
    const context = useContext(DispatchContext);
    if (context === undefined) {
        throw new Error("useTweetDispatch must be used within a TweetProvider");
    }
    return context;

}
export {ContextProvider,
    useHypeState,useHypeDispatch,
    setLogOrReg}


function setLogOrReg(dispatch,typeSub) {
    dispatch({
        type: "SET_LOG_OR_REG",
        payload : typeSub
    });
}
function setNavHeight(dispatch,height) {
    dispatch({
        type: "SET_NAV_HEIGHT",
        payload : height
    });
}