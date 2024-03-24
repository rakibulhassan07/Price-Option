
import Link from "../../Link/Link";


const Navbar = () => {
    const routes = [
        { path: '/', name: 'Home', id: 1},
        { path: '/about', name: 'About', id: 2  },
        { path: '/services', name: 'services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/*', name: 'NotFound', id: 5}
      ];
      
    return (
        <nav>
            <ul className="md:flex">
                {
                routes.map(route=> <Link key={routes.id} route={route}></Link>)
            } 
            </ul>
           
        </nav>
    );
};

export default Navbar;