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
        <header className="h-10 flex items-stretch border-t-2 border-zinc-950 bg-gray-800 fixed bottom-0 w-full">
            <div className="px-6 flex items-center">itsadev</div>
            <nav className="flex w-full">
                {renderedLinks}
            </nav>
        </header>
    )
}

export default Header;
