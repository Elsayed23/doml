import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import logo from '../assets/images/logo.png'


function NavList() {


    const NavLinks = [
        {
            id: 1,
            link: 'Product'
        },
        {
            id: 2,
            link: 'Team'
        },
        {
            id: 3,
            link: 'Enterprise'
        },
        {
            id: 4,
            link: 'Explore'
        },
        {
            id: 5,
            link: 'Marketplace'
        },
        {
            id: 6,
            link: 'Pricing'
        },
    ]


    const Links = NavLinks.map(link => {
        return (
            <Typography
                key={link.id}
                as="li"
                className="p-1 font-medium Actor"
            >
                <a href='#' className=''>
                    {link.link}
                </a>
            </Typography>
        )
    })

    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {Links}
        </ul>
    );
}

const Nav = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto px-4 lg:px-8 lg:py-6 border-none Actor bg-[#0d0d0d] rounded-none xl:bg-transparent z-50">
            <div className="container mx-auto flex items-center text-[#F8F7F7]">
                <Typography
                    as="a"
                    href="#"
                    className="mr-8 cursor-pointer py-1.5 font-medium"
                >
                    <img src={logo} alt="logo" className="w-[100.101px]" />
                </Typography>
                <div className="hidden lg:block"><NavList /></div>
                <div className="flex items-center ml-auto gap-2">
                    <Button variant="text" size="sm" color="white" className="hidden lg:inline-block Actor">
                        <span>Log In</span>
                    </Button>
                    <Button
                        size="sm"
                        variant="text"
                        color="white"
                        className="hidden lg:inline-block border Actor"
                    >
                        <span>Sign in</span>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="#fff"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    <NavList />
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" color="white" size="sm" className="Actor">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="Actor">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </div>
            </Collapse>
        </Navbar>
    );
}

export default Nav