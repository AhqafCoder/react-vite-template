function Navbar() {
    return (
        <div>
            <div className="flex justify-between items-center bg-black text-white p-4 ">
                <div className="flex items-center">
                    OPENGEEK
            
                </div>
                <div className="flex items-center gap-4">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar