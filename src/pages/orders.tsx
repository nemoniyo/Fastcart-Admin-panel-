import MenuDrower from "../components/menuDrower"
import Navbar from "../components/navbar"

const Orders = () => {
    return (<>
        <div>
            <Navbar />
            <div className="flex">
                <div>
                    <MenuDrower />
                </div>
            </div>
        </div>
    </>)
}

export default Orders
