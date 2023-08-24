import { Outlet, useParams, Link } from "react-router-dom";
import { users } from "../../db";


function User(){
    const {userId} = useParams();
    
    return (
    <>
    <h1>User with id {userId} is named: {users[Number(userId) -1].name}</h1>
    <hr/>
    <Link to="followers">See followers</Link>
    <Outlet />
    </>
    )
}
export default User;