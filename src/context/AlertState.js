import AlertContext from "./AlertContext";
import { useState } from "react";

const AlertState = (props) => {
 const [alert, setAlert] = useState(null);
const showAlert = (typ, message) => {
  setAlert({
    msg: message,
    type: typ,
  });
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}
    return (
        <AlertContext.Provider value={{showAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}

// export default AlertState;