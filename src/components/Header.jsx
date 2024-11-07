import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="flex items-center justify-center bg-slate-500">
                <div className="text-xl bg-gray-300">
                    <nav className="m-5">
                        <a href="#home" className="p-5">Home</a>
                        <a href="#news" className="p-5">News</a>
                        <a href="#about" className="p-5">About</a>
                        <a href="#help" className="p-5">Help</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;