import { Link, useNavigate, useParams } from "react-router-dom"
import { imageIcon, leftIcon } from "../components/icons"
import { useGetBrandsQuery, useGetColorQuery, useGetSubcategoryesQuery } from "../reducers/todoslice";
import MenuDrower from "../components/menuDrower";
import Navbar from "../components/navbar";

const EditProduct = () => {
    const navigate = useNavigate();
    const { data: dataBrand } = useGetBrandsQuery({});
    const { data: dataColor } = useGetColorQuery({});
    const { data: subCategory } = useGetSubcategoryesQuery({});
    const { id } = useParams();
    return (
        <div>
            <Navbar />
            <div className="flex">
                <MenuDrower />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[15px] text-[24px] font-[700]">
                        <Link to={"/products"}>
                            <span className="w-[17.5px] h-[14px] relative top-[1px] text-[#7E84A3]">{leftIcon}</span>
                        </Link>
                        <span>Products</span>
                        <span>/</span>
                        <span>Edit Product</span>
                    </div>
                </div>
                <form action="" className="flex items-start justify-between mt-[50px]">
                    <aside className="flex flex-col gap-[20px] w-[55%]">
                        <h1 className="font-bold text-[#131523] dark:text-white transititon-all duration-300">Information</h1>
                        <div className="flex items-center gap-[10px]">
                            <input className="border-b shadow-md border-gray-500 p-[10px] w-full rounded" type="text" placeholder="Product Name" name="productName" id="" />
                            <input className="border-b shadow-md border-gray-500 p-[10px] w-full rounded" type="text" placeholder="Code" name="code" id="" />
                        </div>
                        <textarea className="w-full h-[220px] p-[10px] rounded border-b shadow-md border-gray-500 text-start" placeholder="Description" name="description" id=""></textarea>
                        <div className="flex items-center gap-[10px]">
                            <select
                                className="w-full rounded border-b shadow-md border-gray-500 p-[10px]"
                                name="category"
                            >
                                <option value="">-- Select Sub Category --</option>
                                {subCategory?.data.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.subCategoryName}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="w-full rounded border-b shadow-md border-gray-500 p-[10px]"
                                name="brand">
                                <option value="">-- Select Brand --</option>
                                {dataBrand?.data.map((brand) => (
                                    <option key={brand.id} value={brand.id}>
                                        {brand.brandName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <h1 className="font-bold text-[#131523] dark:text-white transititon-all duration-300">Price</h1>
                        <div className="flex items-center gap-[10px]">
                            <input className="w-full rounded border-b shadow-md border-gray-500 p-[10px]" type="number" placeholder="Product price" name="price" id="" />
                            <input className="w-full rounded border-b shadow-md border-gray-500 p-[10px]" type="number" placeholder="Quantity" name="quantity" id="" />
                        </div>
                    </aside>
                    <aside className="flex flex-col gap-[20px] w-[40%]">
                        <h1> </h1>
                        <select
                            className="w-full rounded border-b shadow-md border-gray-500 p-[10px]"
                            name="color">
                            <option value="">-- Select Color --</option>
                            {dataColor?.data.map((color) => (
                                <option key={color.id} value={color.id}>
                                    {color.colorName.charAt(0).toUpperCase() + color.colorName.slice(1)}
                                </option>
                            ))}
                        </select>
                        <div className="flex items-center gap-[10px]">
                            <label className="w-full rounded border-b shadow-md border-green-600 flex items-center cursor-pointer hover:opacity-50 transition-all duration-300 gap-[10px] justify-center text-center bg-green-600 text-white p-[10px]" htmlFor="image">
                                <span>{imageIcon}</span>
                                <p>Add image</p>
                                <input className="hidden" type="file" name="image" id="image" />
                            </label>
                            <select className="w-full rounded border-b shadow-md border-gray-500 p-[10px]" name="hasDiscount" id="">
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <button type="submit" className="transition-all duration-300 cursor-pointer hover:opacity-50 bg-blue-600 text-white rounded w-full h-[40px] py-[10px] px-[16px] flex items-center justify-center text-center">Save</button>
                    </aside>
                </form>
            </div>
        </div>
    )
}

export default EditProduct