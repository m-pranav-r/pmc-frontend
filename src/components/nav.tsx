import { FC } from "react"
import { Link } from "react-router-dom";
export const NavBar: FC = () => {
    const links = ['Home', 'Listings', 'Your Listing', 'Account']
    return (
        <div>
            <Link to={"/"}>/</Link>
            <Link to={"/test"}>/test</Link>
            <Link to={"/back"}>/back</Link>
        </div>
    );
}