import {createBrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root"
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";


// function Router(){
//     return <BrowserRouter>
   
//     <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/about" element={<About />}/>
//     </Routes>
//     </BrowserRouter>
// }
// export default Router;

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path:"about",
                element: <About />
            },
            {
                path:"users/:userId",
                element: <User />,
                children: [
                    {
                        path:"followers",
                        element: <Followers />
                    }
                ]
            }
        ],
        errorElement: <NotFound />
    }
])

export default router;