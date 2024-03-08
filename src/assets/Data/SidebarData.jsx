import { faBookAtlas, faDashboard, faListCheck, faShoppingCart, faUsers } from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
    {
        title: "Dashboard",
        href: "addashboard",
        icon: faDashboard,
    },
    {
        title: "Manage Users",
        href: "musers",
        icon: faUsers,
    },
    // {
    //     title: "Manage Products",
    //     href: "mproducts",
    //     icon: faShoppingCart,
    // },
    {
        title: "Manage Orders",
        href: "morders",
        icon: faListCheck,
    },
    {
        title: "Manage Appointments",
        href: "mappointments",
        icon: faBookAtlas,
    },
];
