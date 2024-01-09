import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Signin from "./Signin";
import Page from "./Page";


function App() {


    return (
        <Router>
            <Routes>
                <Route
                    path="/*"
                    element={<Page />}
                />
                <Route
                    path="/sign-in"
                    element={<Signin />}
                />
            </Routes>
        </Router>
    );
}

export default App;

