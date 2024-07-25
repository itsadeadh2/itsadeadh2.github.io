import Button from "./Button";
import {Link, useLocation} from "react-router-dom";

function Header() {
    const location = useLocation();
    const routes = [
        {
            'path': '/',
            'text': 'contact'
        },
        {
            'path': '/about',
            'text': 'about'
        },
        {
            'path': '/projects',
            'text': 'projects'
        },
        {
            'path': '/games',
            'text': 'games'
        },
        {
            'path': '/readme',
            'text': 'readme'
        }
    ]
    const renderedLinks = routes.map((route, i) => {
        return (
            <Link to={route.path} key={i}>
                <Button active={route.path === location.pathname}>{route.text}</Button>
            </Link>
        )
    })
    return (
        <header className="h-10 border-b flex items-stretch bg-gray-1">
            <div className="px-6 border-r flex items-center">itsadev</div>
            <nav className="flex w-full divide-x">
                {renderedLinks}
            </nav>
        </header>
    )
}

export default Header;
