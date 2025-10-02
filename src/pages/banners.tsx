import { Edit, Search, Trash } from "lucide-react";
import MenuDrower from "../components/menuDrower";
import Navbar from "../components/navbar";
import {
    useGetSubcategoryesQuery,
    useDeleteSubcategoryesMutation,
    useAddSubcategoryesMutation,
} from "../reducers/todoslice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "antd";

const Banners = () => {
    const { data } = useGetSubcategoryesQuery();
    const [deleteSubcategory] = useDeleteSubcategoryesMutation();
    const [addSubcategory] = useAddSubcategoryesMutation();

    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);

    const [editName, setEditName] = useState("");
    const [newName, setNewName] = useState("");
    const [idx, setIdx] = useState<any>(null);
    const [search, setSearch] = useState("");

    function showEdit(e: any) {
        setIdx(e.id);
        setEditName(e.subCategoryName);
        setEditModal(true);
    };

    async function handleEdit(e: any) {
        e.preventDefault();
        try {
            toast.success("Subcategory updated successfully!");
            setEditModal(false);
        } catch {
            toast.error("Failed to update subcategory!");
        }
    };

    async function handleAdd(e: any) {
        e.preventDefault();
        try {
            await addSubcategory(newName).unwrap();
            toast.success("Subcategory added successfully!");
            setAddModal(false);
            setNewName("");
        } catch {
            toast.error("Failed to add subcategory!");
        }
    };

    async function handleDelete(id: string) {
        try {
            await deleteSubcategory(id).unwrap();
            toast.success("Subcategory deleted successfully!");
        } catch {
            toast.error("Failed to delete subcategory!");
        }
    }

    const filteredData = data?.data?.filter((item: any) =>
        item.subCategoryName.toLowerCase().includes(search.toLowerCase())
    );

    return (<>
        <div>
            <Navbar />
            <div className="flex">
                <div>
                    <MenuDrower />
                </div>
                <div className="p-[25px]">
                    <div className="flex gap-[30px] text-[20px] font-[500]">
                        <Link to={"/others"}>
                            <button className="hover:rounded hover:bg-[#DBEAFE] hover:text-[#416BDF] transition-all duration-500 p-[10px]">Categories</button>
                        </Link>
                        <Link to={"/others/brands"}>
                            <button className="hover:rounded hover:bg-[#DBEAFE] hover:text-[#416BDF] transition-all duration-500 p-[10px]">Brands</button>
                        </Link>
                        <button className="rounded bg-[#DBEAFE] text-[#416BDF] p-[10px]">Subcategorys</button>
                        <button
                            onClick={() => setAddModal(true)}
                            className="w-[180px] h-[55px] bg-[#2563EB] hover:opacity-70 transition-all duration-500 text-[whitesmoke] text-[18px] font-[600] rounded-[4px] hover:rounded-[15px] absolute left-[1640px]"
                        >
                            + Add subcategory
                        </button>
                    </div>
                    <div className="w-[300px] h-[60px] border-[2px] border-gray-300 rounded flex items-center p-[20px] gap-[50px] my-[35px]">
                        <input
                            type="text"
                            className="outline-none placeholder:text-xl w-full"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="text-gray-300">
                            <Search />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[360px] text-[22px] font-[600]">
                            <p>Subcategories</p>
                            <p>Actions</p>
                        </div>
                        {filteredData?.slice(0, 10).map((element: any) => {
                            return (
                                <div key={element.id} className="flex text-start gap-[300px]">
                                    <p className="text-[20px] font-[400] w-[70%]">{element.subCategoryName}</p>
                                    <div className="flex w-[20%] text-end gap-2">
                                        <Tooltip title="Delete subcategory?">
                                            <button onClick={() => handleDelete(element.id)} className="text-[crimson]">
                                                <Trash className="hover:size-8 transition-all duration-500" />
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Edit subcategory">
                                            <button onClick={() => showEdit(element)} className="text-[cornflowerblue]">
                                                <Edit />
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                            )
                        })}

                        {editModal && (
                            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
                                <form onSubmit={handleEdit} className="bg-white p-6 rounded-lg w-full max-w-md shadow-md space-y-4">
                                    <input
                                        type="text"
                                        name="subCategoryName"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <div className="flex gap-2 pt-2">
                                        <button type="button" className="w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded" onClick={() => setEditModal(false)}>Cancel</button>
                                        <button type="submit" className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Save</button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {addModal && (
                            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
                                <form onSubmit={handleAdd} className="bg-white p-6 rounded-lg w-full max-w-md shadow-md space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Subcategory Name"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <div className="flex gap-2 pt-2">
                                        <button type="button" className="w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded" onClick={() => setAddModal(false)}>Cancel</button>
                                        <button type="submit" className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Add</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
    </>)
}

export default Banners;
