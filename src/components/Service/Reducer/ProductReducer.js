import { DATADELETEREQ, DATAEDITREJ, DATAEDITREQ, DATAEDITRES, GOOGLELOGINREJ, GOOGLELOGINREQ, GOOGLELOGINRES, PRODUCTREJ, PRODUCTREQ, PRODUCTSUC, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES, USERLOGINREJ, USERLOGINREQ, USERLOGINRES } from "../../../Const";

const initialState = {
  products: [],
  product: null,
  isloading: false,
  err: false,
  isSignUp: false,
  isLogin: false,
  user: null,

}

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTREQ:
      return {
        ...state,
        isloading: true
      };

    case PRODUCTSUC:
      return {
        ...state,
        isloading: false,
        products: action.payload,
        error: null
      };

    case PRODUCTREJ:
      return {
        ...state,
        err: true,
        isloading: false
      }

    case SINGLEDATAREQ:
      return {
        ...state,
        isloading: true,
      }

    case SINGLEDATARES:
      return {
        ...state,
        isloading: false,
        product: action.payload,
        error: null,
      }

    case SINGLEDATAREJ:
      return {
        ...state,
        isloading: false,
        error: "error",
      }

    case DATAEDITREQ:
      return {
        ...state,
        isloading: true
      }

    case DATAEDITREJ:
      return {
        ...state,
        isloading: false,
        err: "error"
      }

    case DATADELETEREQ:
      return {
        ...state,
        isloading: true,
      }

    case DATAEDITRES:
      return {
        ...state,
        isloading: false,
        products: action.payload,
        error: "error"
      }


    case USERLOGINREQ:
      return {
        ...state,
        isloading: true,
      };
    case USERLOGINRES:
      return {
        ...state,
        isloading: false,
        isLogin: true,
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



    default:
      return state;

  }


}