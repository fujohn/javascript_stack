import React from "react";
import {
    BrowserRouter,
    Link,
    Routes,
    Route,
    useParams
} from "react-router-dom";
    
const Location = (props) => { 
    const { city } = useParams();
    return (
        <h1>Welcome to { city }!</h1>
    );
    }
    
function App() {
    return (
        <BrowserRouter>
            <p>
                <Link to="/location/seattle">Seattle</Link>
                |
                <Link to="/location/chicago">Chicago</Link>
                |
                <Link to="/location/burbank">Burbank</Link>
            </p>
        <Routes>
            <Route path="/location/:city" element={<Location />}/> 
            {/* the preceding ":" lets react know it is a variable */}
        </Routes>
        </BrowserRouter>
    );
}
    
export default App;
