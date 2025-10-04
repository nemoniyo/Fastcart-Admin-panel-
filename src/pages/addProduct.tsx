"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import MenuDrower from "../components/menuDrower"
import Navbar from "../components/navbar"
import {
    ChevronLeft,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    List,
    ListOrdered,
    AlignLeft,
    Upload,
    Trash2,
    Check,
    Plus,
    X,
} from "lucide-react"
import {
    useAddProductsMutation,
    useGetBrandsQuery,
    useGetColorQuery,
    useGetSubcategoryesQuery,
} from "../reducers/todoslice"

const AddProduct = () => {
    const { data: dataBrand } = useGetBrandsQuery({})
    const { data: dataColor } = useGetColorQuery({})
    const { data: subCategory } = useGetSubcategoryesQuery({})
    const [addFunc] = useAddProductsMutation()
    const navigate = useNavigate()

    const [subId, setSubId] = useState("")
    const [brandSelect, setBrandSelect] = useState("")
    const [colorSelect, setColorSelect] = useState("")

    // UI state
    const [taxEnabled, setTaxEnabled] = useState(false)
    const [optionsEnabled, setOptionsEnabled] = useState(true)
    const [tags, setTags] = useState(["T-Shirt", "Men Clothes", "Summer Collection"])
    const [tagInput, setTagInput] = useState("")
    const [uploadedImages, setUploadedImages] = useState<File[]>([])
    const [sizes, setSizes] = useState(["S", "M", "L", "XL"])
    const [weights, setWeights] = useState(["10", "20", "30", "40"])

    async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData()

        // Add image if exists
        const imageInput = (e.target as HTMLFormElement)["image"] as HTMLInputElement
        if (imageInput?.files?.[0]) {
            formData.append("Images", imageInput.files[0])
        }

        formData.append("BrandId", brandSelect)
        formData.append("ColorId", colorSelect)
        formData.append("ProductName", (e.target as any)["productName"].value)
        formData.append("Description", (e.target as any)["description"].value)
        formData.append("Quantity", (e.target as any)["quantity"].value)
        formData.append("Code", (e.target as any)["code"].value)
        formData.append("Price", (e.target as any)["price"].value)
        formData.append("HasDiscount", (e.target as any)["hasDiscount"].value === "true")
        formData.append("SubCategoryId", subId)

        try {
            const res = await addFunc(formData).unwrap()
            if (res) {
                navigate("/products")
            }
        } catch (err) {
            console.error("Error adding product:", err)
            alert("Ошибка при добавлении продукта!")
        }
    }

    const handleAddTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()])
            setTagInput("")
        }
    }

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove))
    }

    const handleRemoveSize = (sizeToRemove: string) => {
        setSizes(sizes.filter((size) => size !== sizeToRemove))
    }

    const handleRemoveWeight = (weightToRemove: string) => {
        setWeights(weights.filter((weight) => weight !== weightToRemove))
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setUploadedImages(Array.from(e.target.files))
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <div className="flex">
                <MenuDrower />

                {/* Main Content */}
                <div className="flex-1 p-6">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Link
                                to="/products"
                                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Link>
                            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Products / <span className="font-normal">Add new</span>
                            </h1>
                        </div>
                        <div className="flex gap-3">
                            <Link to="/products">
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                    Cancel
                                </button>
                            </Link>
                            <button
                                type="submit"
                                form="add-product-form"
                                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Save
                            </button>
                        </div>
                    </div>

                    <form id="add-product-form" onSubmit={handleAdd} className="flex gap-6">
                        {/* Left Column - Main Form */}
                        <div className="flex-1 space-y-6">
                            {/* Information Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
                                <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Information</h2>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Product name</label>
                                        <input
                                            type="text"
                                            name="productName"
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Code</label>
                                        <input
                                            type="text"
                                            name="code"
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Rich Text Editor Toolbar */}
                                <div className="mb-2">
                                    <div className="flex items-center gap-1 mb-2">
                                        <select className="px-2 py-1 text-xs border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded transition-colors">
                                            <option>Normal</option>
                                        </select>
                                        <div className="w-px h-4 bg-gray-200 dark:bg-gray-600 mx-1"></div>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <Bold className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <Italic className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <Underline className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <Strikethrough className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                        </button>
                                        <div className="w-px h-4 bg-gray-200 dark:bg-gray-600 mx-1"></div>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <List className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <ListOrdered className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                        </button>
                                        <button
                                            type="button"
                                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <AlignLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                        </button>
                                    </div>
                                    <textarea
                                        name="description"
                                        placeholder="Description"
                                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Categories</label>
                                        <select
                                            name="category"
                                            value={subId}
                                            onChange={(e) => setSubId(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                        >
                                            <option value="">-- Select Sub Category --</option>
                                            {subCategory?.data.map((category: any) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.subCategoryName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Brands</label>
                                        <select
                                            name="brand"
                                            value={brandSelect}
                                            onChange={(e) => setBrandSelect(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                        >
                                            <option value="">-- Select Brand --</option>
                                            {dataBrand?.data.map((brand: any) => (
                                                <option key={brand.id} value={brand.id}>
                                                    {brand.brandName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
                                <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Price</h2>

                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Product price</label>
                                        <input
                                            type="number"
                                            name="price"
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Discount</label>
                                        <select
                                            name="hasDiscount"
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                        >
                                            <option value="false">False</option>
                                            <option value="true">True</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Count</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Add tax for this product</span>
                                    <button
                                        type="button"
                                        onClick={() => setTaxEnabled(!taxEnabled)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${taxEnabled ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-600"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${taxEnabled ? "translate-x-6" : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Different Options Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Different Options</h2>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">This product has multiple options</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setOptionsEnabled(!optionsEnabled)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${optionsEnabled ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-600"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${optionsEnabled ? "translate-x-6" : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                </div>

                                {optionsEnabled && (
                                    <div className="space-y-4">
                                        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Option 1</label>
                                                    <input
                                                        type="text"
                                                        value="Size"
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-gray-50 dark:bg-gray-700 dark:text-white transition-colors"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Value</label>
                                                    <div className="flex flex-wrap gap-2">
                                                        {sizes.map((size) => (
                                                            <span
                                                                key={size}
                                                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md transition-colors"
                                                            >
                                                                {size}
                                                                <button type="button" onClick={() => handleRemoveSize(size)}>
                                                                    <X className="w-3 h-3" />
                                                                </button>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Option 2</label>
                                                    <input
                                                        type="text"
                                                        value="Weight"
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-gray-50 dark:bg-gray-700 dark:text-white transition-colors"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Value</label>
                                                    <div className="flex flex-wrap gap-2">
                                                        {weights.map((weight) => (
                                                            <span
                                                                key={weight}
                                                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md transition-colors"
                                                            >
                                                                {weight}
                                                                <button type="button" onClick={() => handleRemoveWeight(weight)}>
                                                                    <X className="w-3 h-3" />
                                                                </button>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Option 2</label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-2">Value</label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                            Add more
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="w-80 space-y-6">
                            {/* Colour Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Colour:</h2>
                                    <button
                                        type="button"
                                        className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <Check className="w-3 h-3" />
                                        Create new
                                    </button>
                                </div>
                                <select
                                    value={colorSelect}
                                    onChange={(e) => setColorSelect(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                >
                                    <option value="">-- Select Color --</option>
                                    {dataColor?.data.map((color: any) => (
                                        <option key={color.id} value={color.id}>
                                            {color.colorName.charAt(0).toUpperCase() + color.colorName.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Tags Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
                                <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Tags</h2>

                                <div className="relative mb-3">
                                    <input
                                        type="text"
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                                        placeholder="Tags name"
                                        className="w-full px-3 py-2 pr-10 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddTag}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        <Check className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md transition-colors"
                                        >
                                            {tag}
                                            <button type="button" onClick={() => handleRemoveTag(tag)}>
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Images Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
                                <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Images</h2>

                                {/* Upload Area */}
                                <label htmlFor="image" className="block cursor-pointer">
                                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400 dark:text-gray-500" />
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Click to upload or drag and drop</p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500">(SVG, PNG, JPG, or maximum 300x300)</p>
                                    </div>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </label>

                                {/* Image List */}
                                {uploadedImages.length > 0 && (
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 dark:text-gray-400 pb-2 border-b border-gray-100 dark:border-gray-700">
                                            <span>Image</span>
                                            <span>File name</span>
                                            <span className="text-right">Action</span>
                                        </div>
                                        {uploadedImages.map((image, index) => (
                                            <div key={index} className="grid grid-cols-3 gap-2 items-center py-2">
                                                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                                                    <div className="w-6 h-6 bg-gray-400 dark:bg-gray-600 rounded"></div>
                                                </div>
                                                <span className="text-xs text-gray-700 dark:text-gray-300 truncate">{image.name}</span>
                                                <div className="flex justify-end">
                                                    <button
                                                        type="button"
                                                        onClick={() => setUploadedImages(uploadedImages.filter((_, i) => i !== index))}
                                                        className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
