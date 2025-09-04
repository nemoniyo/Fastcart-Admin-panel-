import { Edit, Search, Trash } from "lucide-react"
import MenuDrower from "../components/menuDrower"
import Navbar from "../components/navbar"
import { useDeleteCategoryesMutation, useEditCategoryesMutation, useGetCategoryesQuery } from "../reducers/todoslice"
import { useState } from "react"
import { Link } from "react-router-dom"

const Others = () => {
    const { data } = useGetCategoryesQuery();
    const [deleteCategoryes] = useDeleteCategoryesMutation();
    const [editCategoryes] = useEditCategoryesMutation();
    const [editCategoryesModal, setEditCategoryesModal] = useState(false);
    const [editName, setEditName] = useState("");
    const [idx, setIdx] = useState(null);
    const [editImage, setEditImage] = useState("");
    const [search, setSearch] = useState("");


    function showEdit(e: any) {
        setIdx(e.id);
        setEditName(e.categoryName);
        setEditCategoryesModal(true);
    };

    function handleEdit(e: any) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("Id", idx);
        if (editImage) {
            formData.append("CategoryImage", e.target["categoryImage"].files[0]);
        }
        formData.append("CategoryName", e.target["categoryName"].value);
        editCategoryes(formData);
        setEditCategoryesModal(false);
    };

    const filteredData = data?.data?.filter((item: any) =>
        item.categoryName.toLowerCase().includes(search.toLowerCase())
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
                        <button className="rounded bg-[#DBEAFE] text-[#416BDF] p-[10px]">Categories</button>
                        <Link to={"/others/brands"}>
                            <button className="hover:rounded hover:bg-[#DBEAFE] hover:text-[#416BDF] transition-all duration-500 p-[10px]">Brands</button>
                        </Link>
                        <Link to={"/others/banners"}>
                            <button className="hover:rounded hover:bg-[#DBEAFE] hover:text-[#416BDF] transition-all duration-500 p-[10px]">Banners</button>
                        </Link>
                    </div>
                    <div className="w-[300px] h-[60px] border-[2px] border-gray-300 rounded flex items-center p-[20px] gap-[50px] my-[35px]">
                        <input type="text" className="outline-none placeholder:text-xl w-full" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        <div className="text-gray-300">
                            <Search />
                        </div>
                    </div>
                    <div className="flex gap-[50px]">
                        {filteredData?.map((element: any) => {
                            return (
                                <div key={element.id} className="w-[250px] h-[180px] border-[2px] border-[whitesmoke] shadow-lg rounded p-[15px] relative">
                                    <div>
                                        <img src={`http://37.27.29.18:8002/images/${element.categoryImage}`} alt="CategoryImage" className="w-[100px] h-[100px]" />
                                        <p className="text-[20px] font-[500]">{element.categoryName}</p>
                                    </div>
                                    <div className="flex gap-[10px] absolute top-[20px] left-[170px]">
                                        <button onClick={() => deleteCategoryes(element.id)} className="text-[crimson]">
                                            <Trash />
                                        </button>
                                        <button onClick={() => showEdit(element)} className="text-[cornflowerblue]">
                                            <Edit />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                        {editCategoryesModal && (
                            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
                                <form onSubmit={handleEdit} className="bg-white p-6 rounded-lg w-full max-w-md shadow-md space-y-4">
                                    <input type="file" name="categoryImage" value={editImage} onChange={(e) => setEditImage(e.target.value)} />
                                    <input type="text" name="categoryName" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                    <div className="flex gap-2 pt-2">
                                        <button type="button" className="w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded" onClick={() => setEditCategoryesModal(false)}>Cancel</button>
                                        <button type="submit" className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Save</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Others
