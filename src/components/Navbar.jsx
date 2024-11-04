import { useState, useEffect, useContext } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { ToggleContext } from '../store/Toggle-Context'
import logo from "../assets/logo2.png"
export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { theme, toggleThemeColor } = useContext(ToggleContext)

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#work' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact Me', href: '#contact' }
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const yOffset = -80
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > window.innerHeight)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navClasses = `fixed w-full top-0 left-0 z-[500] transition-all duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/30'} hover:opacity-100 backdrop-blur-lg shadow-md`
    const textClasses = theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
    const hoverClasses = theme === 'light' ? 'hover:text-white ' : 'hover:text-[#D4A03E] '
    
    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href='#contact' className={`h-14 w-14 rounded-full cursor-pointer border-4 p-1 overflow-hidden ${theme === 'dark' ? 'border-[#D4A03E]' : 'border-gray-700'
                    }`}>
                    <img src={logo} className="w-10 scale-x-[-1] animate-pulse" alt="Logo" />
                </a>


                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-4">
                    {menuItems.map((item) => (
                        <li key={item.name} className="text-xl font-semibold cursor-pointer">
                            <a
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`${textClasses} transition-colors duration-300 ease-in-out ${hoverClasses}`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Theme Toggle (Desktop) */}
                <button
                    onClick={toggleThemeColor}
                    className={`hidden md:block p-2 rounded-md focus:outline-none focus:ring-2 transition-colors duration-200 ease-in-out focus:ring-offset-2 
                        ${theme === 'dark'
                            ? 'focus:ring-offset-[#D4A03E] focus:ring-[#D4A03E]'
                            : 'focus:ring-offset-gray-700 focus:ring-gray-700'
                        } 
                        ${textClasses} ${hoverClasses}`}
                >
                   
                {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 rounded-md ${textClasses} ${hoverClasses}`}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>

            {/* Mobile Menu */ }
    {
        isOpen && (
            <div className="md:hidden px-2 pt-2 pb-3 space-y-1 transition-all duration-300 ease-in-out max-h-[500px] opacity-100 overflow-hidden">
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${textClasses} ${hoverClasses}`}
                    >
                        {item.name}
                    </a>
                ))}
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <button onClick={toggleThemeColor} className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${textClasses} ${hoverClasses}`}>
                        {theme === 'dark' ? <Sun className="inline-block h-6 w-6 mr-2" /> : <Moon className="inline-block h-6 w-6 mr-2" />}
                        Toggle theme
                    </button>
                </div>
            </div>
        )
    }
        </nav >
    )
}
