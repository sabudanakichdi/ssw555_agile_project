import React, { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  setToken: () => {},
  email: "",
  setEmail: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [customerID, setcustomerID] = useState(
    localStorage.getItem("customerID") || ""
  );
  const [data, setData] = useState(
    useState('default value')
  );
  const [deliveryDate, setDeliveryDate] = useState(
        useState('')
  );
  //console.log(email)

  return (
    <AuthContext.Provider
          value={{ token, setToken, email, setEmail, customerID, setcustomerID, data, setData, deliveryDate, setDeliveryDate }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
