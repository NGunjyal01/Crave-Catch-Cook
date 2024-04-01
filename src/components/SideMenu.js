

const SideMenu = ({setIsSideMenuOpen}) => {

    const handleCloseBtn = ()=>{
        setIsSideMenuOpen(false);
    }

    return (
    <div className="absolute z-50 top-0 w-full h-[100%] bg-[#F7EEDD]">
        <button onClick={handleCloseBtn}>onclose</button>
    </div>
    )
}

export default SideMenu;
