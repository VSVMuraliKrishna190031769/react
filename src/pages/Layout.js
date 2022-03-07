
import { Outlet, Link } from 'react-router-dom';
import './pages.css'
const Layout = () => {
    return (
        <>
        <nav>
            <ul><div className='layout'>
                <li>
                    <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/blogs">Blogs</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/contact">Contact</Link>
                </li>
                </div>
            </ul>
        </nav>
        <Outlet />
	</>

        
    );
}
export default Layout;