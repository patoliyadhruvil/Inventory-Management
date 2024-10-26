import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { DATADELETEREJ, DATADELETEREQ, DATAEDITREJ, DATAEDITREQ, DATAEDITRES, GOOGLELOGINREJ, GOOGLELOGINREQ, GOOGLELOGINRES, LOGOUTREJ, LOGOUTREQ, LOGOUTRES, PRODUCTREJ, PRODUCTREQ, PRODUCTSUC, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES, USERLOGINREJ, USERLOGINREQ, USERLOGINRES } from "../../../Const";
import { auth, db, provider } from "../../../firebaseConfig";
import { getDocs, getDoc, setDoc, deleteDoc, collection, doc, addDoc } from "firebase/firestore";
import { Navigate } from "react-router";



export const PRODUCTReq = () => {
  return {
    type: PRODUCTREQ
  }
}

export const PRODUCTSuc = (data) => {
  return {
    type: PRODUCTSUC,
    payload: data
  }
}

export const PRODUCTRej = () => {
  return {
    type: PRODUCTREJ
  }
}

export const singleDataReq = () => {
  return {
    type: SINGLEDATAREQ
  }
};

export const singleDataRes = (data) => {
  return {
    type: SINGLEDATARES,
    payload: data
  }

};

export const singleDataRej = () => {
  return {
    type: SINGLEDATAREJ

  }
};

export const DataEditReq = () => {
  return {
    type: DATAEDITREQ

  }
}

export const DataEditRes = (data) => {
  return {
    type: DATAEDITRES,
    payload: data

  }
}

export const DataEditRej = () => {
  return {
    type: DATAEDITREJ

  }
}

export const DatadeleteReq = () => {
  return {
    type: DATADELETEREQ

  }
}

export const DatadeleteRej = () => {
  return {
    type: DATADELETEREJ

  }
}


export const Productadmin = (productData) => {
  return async dispatch => {
     dispatch(PRODUCTReq());

     await addDoc(collection(db, "Product"), productData).then((res) => {
      dispatch(dataGet());
    }).catch((err) => {
      console.log("err", err);
      dispatch(PRODUCTRej(err));
    })
  }
}

export const dataGet = () => {

  return async dispatch => {
    dispatch(PRODUCTReq());

    await getDocs(collection(db, "Product")).then((res) => {
      let arr = [];
      res.forEach((doc) => {
        let obj = { id: doc.id, ...doc.data() }
        arr = [...arr, obj]
      });
      dispatch(PRODUCTSuc(arr));
      // console.log("arr" , arr);
    }).catch((err) => {
      dispatch(PRODUCTRej(err));
    });
  };
};

export const datasingle = (id) => {

  return async dispatch => {

    dispatch(singleDataReq())

    await getDoc(doc(db, "Product", `${id}`)).then((res) => {

      if (res.exists()) {
        const obj = { id: id, ...res.data() };
        console.log("obj", obj);
        dispatch(singleDataRes(obj));
      } else {
        dispatch(singleDataRej());
      }
    }).catch((err) => {
      dispatch(singleDataRej(err));
    })
  }

}

export const dataEdit = (data) => {
  return async dispatch => {
    dispatch((DataEditReq));
    await setDoc(doc(db, 'Product', `${data.id}`), data).then((res) => {
      console.log("data.id", res.data);
      dispatch(dataGet())
    }).catch((err) => {
      dispatch(DataEditRej());
    })
  }
}



export const dataDelete = (id) => {
  return dispatch => {
    dispatch(DatadeleteReq())
    deleteDoc(doc(db, "Product", `${id}`)).then((res) => {
      dispatch(dataGet())
    }).catch((err) => {
      dispatch(editDataRej())
    })
  }
}


//login

export const loginreq = () => ({
  type: USERLOGINREQ,
});

export const loginres = () => ({
  type: USERLOGINRES,
});

export const loginrej = (err) => ({
  type: USERLOGINREJ,
  payload: err,
});


export const loginuser = (email, password) => {
  return (dispatch) => {
    dispatch(loginreq());

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
        dispatch(loginres());
      })
      .catch((error) => {
        let err = null;
        const errorCode = error.code;
        const errorMessage = error.message;

        if ("auth/missing-email" === errorCode) {
          err = "Email is missing or empty";
        }

        console.log("errrr", error);
        dispatch(loginrej(err));
      });
  };
};


//google 

export const googlereq = () => ({
  type: GOOGLELOGINREQ,
});

export const googleres = (data) => ({
  type: GOOGLELOGINRES,
  payload: data,
});

export const googlerej = (err) => ({
  type: GOOGLELOGINREJ,
});


export const googlelogin = () => {
  return (dispatch) => {
    dispatch(googlereq())
    signInWithPopup(auth, provider).then((res) => {
      console.log("res", res.user);
      dispatch(googleres(res.user))
    }).catch((err) => {
      console.log(err);
      dispatch(googlerej())
    })
  };
};

export const logoutreq = () => ({
  type: LOGOUTREQ,
});

export const logoutres = () => {
  localStorage.removeItem('user');
  return {
    type: LOGOUTRES,
  };
};
export const logoutrej = (err) => ({
  type: LOGOUTREJ,
});


export const logoutuser = () => {
  return (dispatch) => {
    dispatch(logoutreq());

    return signOut(auth)
      .then(() => {
        dispatch(logoutres());
        localStorage.removeItem('user');
        Navigate('/');
      })
      .catch((err) => {
        console.error("Error logging out:", err);
        dispatch(logoutrej());
      });
  };
};