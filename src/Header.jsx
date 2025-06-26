
function Header(){
    return (
        <header className="flex justify-between bg-blue-400 p-4">
            <div className="">
                <h1>My Portfolio</h1>
            </div>
            <nav className="flex gap-1 justify-center">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header