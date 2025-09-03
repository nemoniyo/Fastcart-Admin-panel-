import { Edit, Search, Trash } from "lucide-react";
import MenuDrower from "../components/menuDrower";
import Navbar from "../components/navbar";
import { useState } from "react";
import { useGetDataQuery, useDeleteDataMutation, useRoleUserMutation, useRoleDeleteMutation } from "../reducers/todoslice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Orders = () => {
    const { data } = useGetDataQuery();
    const [deleteUser] = useDeleteDataMutation();
    const [searchTerm, setSearchTerm] = useState("");
    const [roleUser] = useRoleUserMutation();
    const [roleDelete] = useRoleDeleteMutation();

    const handleDelete = async (id) => {
        try {
            await deleteUser(id).unwrap();
            toast.success("Пользователь успешно удалён");
        } catch (error) {
            console.error("Ошибка при удалении:", error);
            toast.error("Ошибка при удалении пользователя");
        }
    };

    const filteredUsers = data?.data.filter((user) =>
        user.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function toggleRole({ userId, currentRoleId }) {
        const adminRole = '34808f49-52e9-4fb7-9001-cf05800d608d'
        const userRole = '82f1e62b-03ca-4d0e-a61a-e5398d8a67e1'
        if (currentRoleId == adminRole) {
            roleUser({ id1: userId, id2: userRole })
            roleDelete({ id1: userId, id2: adminRole })
        } else {
            roleUser({ id1: userId, id2: adminRole })
            roleDelete({ id1: userId, id2: userRole })
        }
    }



    return (<>
        <Navbar />
        <div className="flex">
            <div>
                <MenuDrower />
            </div>
            <div className="p-[25px]">
                <div className="flex items-center relative">
                    <h1 className="text-[32px] font-[600]">Orders</h1>
                    <button className="w-[120px] h-[50px] bg-[#2563EB] hover:opacity-70 transition-all duration-500 text-[whitesmoke] rounded-[4px] absolute left-[1480px]">+  Add order</button>
                </div>
                <div className="w-[300px] h-[60px] border-[2px] border-gray-300 rounded flex items-center p-[20px] gap-[50px] my-[35px]">
                    <input type="text" className="outline-none placeholder:text-xl w-full" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className="text-gray-300">
                        <Search />
                    </div>
                </div>
                <div className="w-[1620px] overflow-scroll h-[900px]">
                    {filteredUsers?.map((user) => (
                        <div key={user.userId} className="flex justify-between border-b-[2px] border-gray-300 p-[20px] text-start">
                            <h1 className="w-[20%]">{user.userName}</h1>
                            <p className="w-[20%]">{user.userId.slice(0, 5)}</p>
                            <div>
                                {user.userRoles.map((role) => (
                                    <p key={role.id} className="w-[20%]">{role.name}</p>
                                ))}
                            </div>
                            <p>{user.dob}</p>
                            <div className="flex gap-[20px] items-center">
                                <div className="flex flex-col gap-[3px]">
                                    {user.userRoles?.map((el) => (
                                        <button onClick={() => toggleRole({ userId: user.userId, currentRoleId: el.id })} key={el.name} className='px-2 py-1  w-[100px] font-[18px] bg-[cornflowerblue] dark:bg-[whitesmoke] dark:text-[vlack] transition-all duration-500 text-[whitesmoke] rounded'>
                                            {el.name}
                                        </button>
                                    ))}
                                </div>
                                <button className="text-[crimson]" onClick={() => handleDelete(user.userId)}>
                                    <Trash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
    </>)
}

export default Orders