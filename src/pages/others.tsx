import { Edit, Search, Trash } from "lucide-react"
import MenuDrower from "../components/menuDrower"
import Navbar from "../components/navbar"
import { useDeleteCategoryesMutation, useEditCategoryesMutation, useGetCategoryesQuery, useAddCategoryesMutation } from "../reducers/todoslice"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip, Pagination } from "antd";

const Others = () => {
    const { data } = useGetCategoryesQuery();
    const [deleteCategoryes] = useDeleteCategoryesMutation();
    const [editCategoryes] = useEditCategoryesMutation();
    const [addCategoryes] = useAddCategoryesMutation();

    const [editCategoryesModal, setEditCategoryesModal] = useState(false);
    const [editName, setEditName] = useState("");
    const [idx, setIdx] = useState<any>(null);
    const [editImage, setEditImage] = useState<File | null>(null);
    const [previewEdit, setPreviewEdit] = useState<string | null>(null);

    const [addCategoryesModal, setAddCategoryesModal] = useState(false);
    const [addName, setAddName] = useState("");
    const [addImage, setAddImage] = useState<File | null>(null);
    const [previewAdd, setPreviewAdd] = useState<string | null>(null);

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    function showEdit(e: any) {
        setIdx(e.id);
        setEditName(e.categoryName);
        setEditImage(null);
        setPreviewEdit(null);
        setEditCategoryesModal(true);
    };

    async function handleEdit(e: any) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("Id", idx);
        formData.append("CategoryName", editName);

        if (editImage) {
            formData.append("CategoryImage", editImage);
        }

        try {
            await editCategoryes(formData).unwrap();
            toast.success("Category updated successfully!");
            setEditCategoryesModal(false);
        } catch {
            toast.error("Failed to update category!");
        }
    };

    async function handleDelete(id: string) {
        try {
            await deleteCategoryes(id).unwrap();
            toast.success("Category deleted successfully!");
        } catch {
            toast.error("Failed to delete category!");
        }
    }

    async function handleAdd(e: any) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("CategoryName", addName);
        if (addImage) {
            formData.append("CategoryImage", addImage);
        }

        try {
            await addCategoryes(formData).unwrap();
            toast.success("Category added successfully!");
            setAddCategoryesModal(false);
            setAddName("");
            setAddImage(null);
            setPreviewAdd(null);
        } catch {
            toast.error("Failed to add category!");
        }
    }

    const filteredData = data?.data?.filter((item: any) =>
        item.categoryName.toLowerCase().includes(search.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = filteredData?.slice(startIndex, startIndex + pageSize);

    return (<>
        <div>
            <Navbar />
            <div className='flex'>
                <MenuDrower />
                <div className="p-[25px]">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-[30px] text-[20px] font-[500]">
                            <button className="rounded bg-[#DBEAFE] text-[#416BDF] p-[10px]">Categories</button>
                            <Link to={"/others/brands"}>
                                <button className="hover:rounded hover:bg-[#DBEAFE] hover:text-[#416BDF] transition-all duration-500 p-[10px]">Brands</button>
                            </Link>
                            <Link to={"/others/banners"}>
                                <button className="hover:rounded hover:bg-[#DBEAFE] hover:text-[#416BDF] transition-all duration-500 p-[10px]">Subcategorys</button>
                            </Link>
                        </div>
                        <button
                            onClick={() => setAddCategoryesModal(true)}
                            className="w-[160px] h-[55px] bg-[#2563EB] hover:opacity-70 transition-all duration-500 text-[whitesmoke] text-[18px] font-[600] rounded-[4px] hover:rounded-[15px] absolute left-[1660px]"
                        >
                            + Add category
                        </button>
                    </div>

                    <div className="w-[300px] h-[60px] border-[2px] border-gray-300 rounded flex items-center p-[20px] gap-[50px] my-[35px]">
                        <input type="text" className="outline-none placeholder:text-xl w-full" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        <div className="text-gray-300">
                            <Search />
                        </div>
                    </div>

                    <div className="flex gap-[50px] flex-wrap">
                        {paginatedData?.map((element: any) => {
                            return (
                                <div key={element.id} className="w-[250px] h-[180px] border-[2px] border-[whitesmoke] shadow-lg rounded p-[15px] relative">
                                    <div>
                                        <img src={`http://37.27.29.18:8002/images/${element.categoryImage}`} alt="CategoryImage" className="w-[100px] h-[100px]" />
                                        <p className="text-[20px] font-[500]">{element.categoryName}</p>
                                    </div>
                                    <div className="flex gap-[10px] absolute top-[20px] left-[170px]">
                                        <Tooltip title="Edit category">
                                            <button onClick={() => showEdit(element)} className="text-[cornflowerblue]">
                                                <Edit />
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Delete category?">
                                            <button onClick={() => handleDelete(element.id)} className="text-[crimson]">
                                                <Trash className="hover:size-8 transition-all duration-500" />
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {filteredData?.length === 0 && (
                        <p className="text-gray-500 text-xl">Ничего не найдено</p>
                    )}

                    <div className="mt-5 flex justify-center">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={filteredData?.length || 0}
                            onChange={(page) => setCurrentPage(page)}
                        />
                    </div>

                    {editCategoryesModal && (
                        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
                            <form onSubmit={handleEdit} className="bg-white p-6 rounded-lg w-full max-w-md shadow-md space-y-4">
                                {previewEdit && (
                                    <img src={previewEdit} alt="preview" className="w-[100px] h-[100px] object-cover mx-auto" />
                                )}
                                <input
                                    type="file"
                                    name="categoryImage"
                                    onChange={(e) => {
                                        const file = e.target.files ? e.target.files[0] : null;
                                        setEditImage(file);
                                        if (file) setPreviewEdit(URL.createObjectURL(file));
                                    }}
                                />
                                <input
                                    type="text"
                                    name="categoryName"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <div className="flex gap-2 pt-2">
                                    <button type="button" className="w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded" onClick={() => setEditCategoryesModal(false)}>Cancel</button>
                                    <button type="submit" className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Save</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {addCategoryesModal && (
                        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
                            <form onSubmit={handleAdd} className="bg-white p-6 rounded-lg w-full max-w-md shadow-md space-y-4">
                                {previewAdd && (
                                    <img src={previewAdd} alt="preview" className="w-[100px] h-[100px] object-cover mx-auto" />
                                )}
                                <input
                                    type="file"
                                    name="categoryImage"
                                    onChange={(e) => {
                                        const file = e.target.files ? e.target.files[0] : null;
                                        setAddImage(file);
                                        if (file) setPreviewAdd(URL.createObjectURL(file));
                                    }}
                                />
                                <input
                                    type="text"
                                    name="categoryName"
                                    value={addName}
                                    onChange={(e) => setAddName(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <div className="flex gap-2 pt-2">
                                    <button type="button" className="w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded" onClick={() => setAddCategoryesModal(false)}>Cancel</button>
                                    <button type="submit" className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Add</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
    </>)
}

export default Others;
