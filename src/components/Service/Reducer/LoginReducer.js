import { GOOGLELOGINREJ, GOOGLELOGINREQ, GOOGLELOGINRES, LOGOUTREJ, LOGOUTREQ, LOGOUTRES, USERLOGINREJ, USERLOGINREQ, USERLOGINRES } from "../../../Const";

const storedUser = localStorage.getItem('user');

const initialState = {
    isloading: false,
    err: null,
    //   isSignUp: false,
    isLogin: !! storedUser,
    user: storedUser ? JSON.parse(storedUser) : null,
    error:null

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERLOGINREQ:
            return {
                ...state,
                isloading: true,
            };
        case USERLOGINRES:
            localStorage.setItem("user" , JSON.stringify(action.payload))
            return {
                ...state,
                isloading: false,
                isLogin: true,
                user: action.payload,
                error:null
            };
        case USERLOGINREJ:
            return {
                ...state,
                isloading: false,
                isLogin: false,
                err: action.payload,
            };

        case GOOGLELOGINREQ:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case GOOGLELOGINRES:
            localStorage.setItem('user' , JSON.stringify(action.payload));
            return {
                ...state,
                isLogin: true,
                user: action.payload.user,
                isLoading: false,
                err: null,
            };

        case GOOGLELOGINREJ:
            return {
                ...state,
                loading: false,
                error: "something went wrong",
            };

            case LOGOUTREQ:
            return {
                ...state,
                isLoading: true,
            };
            case LOGOUTRES:
            localStorage.removeItem('user');
            return {
                ...state,
                isLoading: false,
                user: null,
                isLogin: false,
            };
            case LOGOUTREJ:
            return {
                ...state,
                isLoading: false,
                err: "something went wrong"
            };

        default:
            return state;

    }


}