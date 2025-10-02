"use client";

import * as React from "react";
import { NavigationMenu } from '@base-ui-components/react/navigation-menu';

export default function Navbar() {
    const navItems = [
        { label: "home", href: "#home" },
        { label: "about", href: "#about" },
        { label: "initiatives", href: "#initiatives" },
        { label: "events", href: "#events" },
    ];

    return (
        <NavigationMenu.Root className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-8">
                <NavigationMenu.List className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="#" className="text-secondary text-xl transition-colors duration-200">
                            illuminaite
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    {/* Nav Items */}
                    <div className="flex items-center space-x-4 h-full">
                        {navItems.map((item) => (
                            <NavigationMenu.Item key={item.label} className="flex w-32 h-full items-center justify-center">
                                <NavigationMenu.Link href={item.href} className="flex items-center h-full w-full justify-center text-text hover:text-secondary transition-colors duration-200">
                                    {item.label}
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                        ))}

                        {/* Contact Us */}
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="#contact" className="flex items-center px-3 py-2 text-text hover:text-secondary transition-colors duration-200 bg-secondary rounded-md">
                                contact us
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    </div>
                </NavigationMenu.List>
            </div>
        </NavigationMenu.Root>
    );
}
