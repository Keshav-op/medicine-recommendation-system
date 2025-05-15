import React from 'react';
import { Pill } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Pill className="h-8 w-8 text-white" />
                    <h1 className="text-xl md:text-2xl font-bold text-white">MediRecommend AI</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-blue-100 transition-colors duration-200"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-blue-100 transition-colors duration-200"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-white hover:text-blue-100 transition-colors duration-200"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;