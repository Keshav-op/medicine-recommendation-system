import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} MediRecommend AI. All rights reserved.
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            For educational purposes only. Not a substitute for professional medical advice.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </a>
                        </div>

                        <div className="flex items-center justify-center">
                            <span className="text-sm flex items-center">
                                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for college project
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;