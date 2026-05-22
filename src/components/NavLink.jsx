'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href,children,className}) => {

    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <Link href={href} className={`${isActive? 'border-b-2 border-orange-400': ''} ${className}`}>{children}</Link>
    );
};

export default NavLink;