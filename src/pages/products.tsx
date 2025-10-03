import { Edit, Search, Trash } from "lucide-react"
import MenuDrower from "../components/menuDrower"
import Navbar from "../components/navbar"
import { useEffect, useState } from "react"
import { useDeleteProductMutation, useGetProductsQuery } from "../reducers/todoslice"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip, Pagination } from "antd";
import { Link } from "react-router-dom"

const Products = () => {
    const { data, error, isLoading } = useGetProductsQuery();
    const [deleteProduct, { isLoading: deleting, isSuccess, isError }] = useDeleteProductMutation();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        if (isSuccess) {
            toast.success("Продукт успешно удалён!");
        }
        if (isError) {
            toast.error("Ошибка при удалении продукта!");
        }
    }, [isSuccess, isError]);

    const filteredProducts = data?.data?.products?.filter((product: any) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedProducts = filteredProducts?.slice(startIndex, startIndex + pageSize);

    return (<>
        <div>
            <Navbar />
            <div className='flex'>
                <MenuDrower />
                <div className="p-[25px]">
                    <div className="flex items-center relative">
                        <h1 className="text-[32px] font-[600]">Products</h1>
                        <Link to={"/products/addproduct"}>
                            <button className="w-[160px] h-[55px] bg-[#2563EB] hover:opacity-70 transition-all duration-500 text-[whitesmoke] text-[18px] font-[600] rounded-[4px] hover:rounded-[15px] absolute left-[1480px]">+  Add product</button>
                        </Link>
                    </div>
                    <div className="w-[300px] h-[60px] border-[2px] border-gray-300 rounded flex items-center p-[20px] gap-[50px] my-[35px]">
                        <input type="text" className="outline-none placeholder:text-xl w-full" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <div className="text-gray-300">
                            <Search />
                        </div>
                    </div>
                    <div className="w-[1620px]  mt-[100px]">
                        {paginatedProducts?.map((element: any) =>
                            <div key={element.id} className="flex justify-between border-b-[2px] border-gray-300 p-[20px] text-start">
                                <img src={`http://37.27.29.18:8002/images/${element.image}`} alt="Product image" className="w-[40px] h-[40px]" />
                                <p className="w-[15%]">{element.productName}</p>
                                <p className="w-[15%]">{element.quantity}</p>
                                <p className="w-[15%]">{element.categoryName}</p>
                                <p className="w-[15%]">{element.price}</p>
                                <div className="flex gap-[20px]">
                                    <Tooltip title="Edit product">
                                        <button className="text-[cornflowerblue]">
                                            <Link to={"/products/editProduct"}>
                                                <Edit />
                                            </Link>
                                        </button>
                                    </Tooltip>
                                    <Tooltip title="Delete product?">
                                        <button onClick={() => deleteProduct(element.id)} className="text-[crimson]">
                                            <Trash className="hover:size-8 transition-all duration-500" />
                                        </button>
                                    </Tooltip>
                                </div>
                            </div>
                        )}
                    </div>
                    {filteredProducts?.length === 0 && (
                        <p className="text-gray-500 text-xl">Ничего не найдено</p>
                    )}
                    <div className="mt-5 flex justify-center">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={filteredProducts?.length || 0}
                            onChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
    </>)
}

export default Products  
