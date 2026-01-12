import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById("root")!).render( 
  <React.StrictMode>
    <Authenticator>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Authenticator>
  </React.StrictMode>
);
