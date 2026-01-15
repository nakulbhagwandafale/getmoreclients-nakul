import {
    HomeIcon,
    Briefcase,
    Layers,
    Info,
    FileText,
    Mail,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';

const navItems = [
    {
        title: 'Home',
        icon: <HomeIcon className="h-full w-full text-neutral-300" />,
        href: '#home',
    },
    {
        title: 'Work',
        icon: <Briefcase className="h-full w-full text-neutral-300" />,
        href: '#work',
    },
    {
        title: 'Services',
        icon: <Layers className="h-full w-full text-neutral-300" />,
        href: '#services',
    },
    {
        title: 'About Us',
        icon: <Info className="h-full w-full text-neutral-300" />,
        href: '#about',
    },
    {
        title: 'Blogs',
        icon: <FileText className="h-full w-full text-neutral-300" />,
        href: '#blogs',
    },
    {
        title: 'Contact',
        icon: <Mail className="h-full w-full text-neutral-300" />,
        href: '#contact',
    },
];

export function NavbarDock() {
    return (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
            <Dock className="items-end gap-2 pb-3">
                {navItems.map((item, index) => (
                    <a key={index} href={item.href}>
                        <DockItem className="bg-gray-800 hover:bg-purple-600/30 transition-colors cursor-pointer">
                            <DockLabel>{item.title}</DockLabel>
                            <DockIcon>{item.icon}</DockIcon>
                        </DockItem>
                    </a>
                ))}
            </Dock>
        </div>
    );
}

export default NavbarDock;
