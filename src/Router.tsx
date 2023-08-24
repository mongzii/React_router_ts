import {createBrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root"
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";






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
            }
        ],
        errorElement: <NotFound />
    }
])

export default router;