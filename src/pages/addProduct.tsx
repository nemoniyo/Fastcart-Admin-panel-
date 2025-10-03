"use client"

import { useState } from "react"
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
import { Link } from "react-router-dom"

const AddProduct = () => {
    const [taxEnabled, setTaxEnabled] = useState(false)
    const [optionsEnabled, setOptionsEnabled] = useState(true)
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [tags, setTags] = useState(["T-Shirt", "Men Clothes", "Summer Collection"])
    const [tagInput, setTagInput] = useState("")
    const [images, setImages] = useState([
        { id: 1, name: "Healthcare_Ethology.png" },
        { id: 2, name: "Healthcare_Ethology.png" },
        { id: 3, name: "Healthcare_Ethology.png" },
    ])
    const [sizes, setSizes] = useState(["S", "M", "L", "XL"])
    const [weights, setWeights] = useState(["10", "20", "30", "40"])

    const colors = [
        { name: "blue", class: "bg-blue-400" },
        { name: "pink", class: "bg-pink-400" },
        { name: "purple", class: "bg-purple-500" },
        { name: "yellow", class: "bg-yellow-400" },
        { name: "green", class: "bg-green-500" },
        { name: "gray", class: "bg-gray-700" },
    ]

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

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex">
                <MenuDrower />

                {/* Main Content */}
                <div className="flex-1 p-6">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button className="flex items-center text-gray-600 hover:text-gray-900">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <h1 className="text-xl font-semibold text-gray-900">
                                Products / <span className="font-normal">Add new</span>
                            </h1>
                        </div>
                        <div className="flex gap-3">
                            <Link to={"/products"}>
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Cancel</button>
                            </Link>
                            <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                Save
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        {/* Left Column - Main Form */}
                        <div className="flex-1 space-y-6">
                            {/* Information Section */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h2 className="text-sm font-semibold text-gray-900 mb-4">Information</h2>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-2">Product name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-2">Code</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Rich Text Editor Toolbar */}
                                <div className="mb-2">
                                    <div className="flex items-center gap-1 mb-2">
                                        <select className="px-2 py-1 text-xs border border-gray-200 rounded bg-white">
                                            <option>Normal</option>
                                        </select>
                                        <div className="w-px h-4 bg-gray-200 mx-1"></div>
                                        <button className="p-1.5 hover:bg-gray-100 rounded">
                                            <Bold className="w-4 h-4" />
                                        </button>
                                        <button className="p-1.5 hover:bg-gray-100 rounded">
                                            <Italic className="w-4 h-4" />
                                        </button>
                                        <button className="p-1.5 hover:bg-gray-100 rounded">
                                            <Underline className="w-4 h-4" />
                                        </button>
                                        <button className="p-1.5 hover:bg-gray-100 rounded">
                                            <Strikethrough className="w-4 h-4" />
                                        </button>
                                        <div className="w-px h-4 bg-gray-200 mx-1"></div>
                                        <button className="p-1.5 hover:bg-gray-100 rounded">
                                            <List className="w-4 h-4" />
                                        </button>
                                        <button className="p-1.5 hover:bg-gray-100 rounded">
                                            <ListOrdered className="w-4 h-4" />
                                        </button>
                                        <button className="p-1.5 hover:bg-gray-100 rounded">
                                            <AlignLeft className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <textarea
                                        placeholder="Description"
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-2">Categories</label>
                                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option></option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-2">Brands</label>
                                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option></option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h2 className="text-sm font-semibold text-gray-900 mb-4">Price</h2>

                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-2">Product price</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-2">Discount</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 mb-2">Count</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">Add tax for this product</span>
                                    <button
                                        onClick={() => setTaxEnabled(!taxEnabled)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${taxEnabled ? "bg-blue-600" : "bg-gray-200"
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
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h2 className="text-sm font-semibold text-gray-900">Different Options</h2>
                                        <p className="text-xs text-gray-500">This product has multiple options</p>
                                    </div>
                                    <button
                                        onClick={() => setOptionsEnabled(!optionsEnabled)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${optionsEnabled ? "bg-blue-600" : "bg-gray-200"
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
                                        <div className="border-t border-gray-100 pt-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs text-gray-500 mb-2">Option 1</label>
                                                    <input
                                                        type="text"
                                                        value="Size"
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs text-gray-500 mb-2">Value</label>
                                                    <div className="flex flex-wrap gap-2">
                                                        {sizes.map((size) => (
                                                            <span
                                                                key={size}
                                                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                                                            >
                                                                {size}
                                                                <button onClick={() => handleRemoveSize(size)}>
                                                                    <X className="w-3 h-3" />
                                                                </button>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-100 pt-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs text-gray-500 mb-2">Option 2</label>
                                                    <input
                                                        type="text"
                                                        value="Weight"
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs text-gray-500 mb-2">Value</label>
                                                    <div className="flex flex-wrap gap-2">
                                                        {weights.map((weight) => (
                                                            <span
                                                                key={weight}
                                                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                                                            >
                                                                {weight}
                                                                <button onClick={() => handleRemoveWeight(weight)}>
                                                                    <X className="w-3 h-3" />
                                                                </button>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-100 pt-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs text-gray-500 mb-2">Option 2</label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs text-gray-500 mb-2">Value</label>
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
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
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-sm font-semibold text-gray-900">Colour:</h2>
                                    <button className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700">
                                        <Check className="w-3 h-3" />
                                        Create new
                                    </button>
                                </div>
                                <div className="flex gap-3">
                                    {colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-10 h-10 rounded-full ${color.class} ${selectedColor === color.name ? "ring-2 ring-offset-2 ring-blue-500" : ""
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Tags Section */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h2 className="text-sm font-semibold text-gray-900 mb-4">Tags</h2>

                                <div className="relative mb-3">
                                    <input
                                        type="text"
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                                        placeholder="Tags name"
                                        className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        onClick={handleAddTag}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700"
                                    >
                                        <Check className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                                        >
                                            {tag}
                                            <button onClick={() => handleRemoveTag(tag)}>
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Images Section */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h2 className="text-sm font-semibold text-gray-900 mb-4">Images</h2>

                                {/* Upload Area */}
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                                    <p className="text-xs text-gray-400">(SVG, PNG, JPG, or maximum 300x300)</p>
                                </div>

                                {/* Image List */}
                                <div className="space-y-2">
                                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 pb-2 border-b border-gray-100">
                                        <span>Image</span>
                                        <span>File name</span>
                                        <span className="text-right">Action</span>
                                    </div>
                                    {images.map((image) => (
                                        <div key={image.id} className="grid grid-cols-3 gap-2 items-center py-2">
                                            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                                                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                                            </div>
                                            <span className="text-xs text-gray-700 truncate">{image.name}</span>
                                            <div className="flex justify-end">
                                                <button className="text-gray-400 hover:text-red-600">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
