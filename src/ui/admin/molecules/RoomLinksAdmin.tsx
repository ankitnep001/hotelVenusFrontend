import { useState } from "react";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";

const RoomLinksAdmin = () => {
    // State to store the rows
    const [rows, setRows] = useState([{ page: "" }]);

    // Function to handle adding a new row
    const handleAddRow = () => {
        setRows([...rows, { page: "" }]);
    };

    // Function to handle deleting a row
    const handleDeleteRow = (index: number) => {
        const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
        setRows(newRows);
    };

    // Function to handle input changes for the pages
    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newRows = [...rows];
        newRows[index].page = event.target.value;
        setRows(newRows);
    };

    return (
        <div className="p-4">
            <p className="font-poppins text-[0.875rem] mb-4">Room</p>

            {/* Heading */}
            <div className="flex items-center gap-4 font-semibold mb-2">
                <p className="font-poppins font-medium text-[1rem] w-12">S.N</p>
                <p className="font-poppins font-medium text-[1rem] flex-1">Pages</p>
                <p className="w-24">
                    <button
                        type="button"
                        onClick={handleAddRow}
                        className="bg-[#6b3aa3] text-white py-1 px-2 rounded-md"
                    >
                        Add New
                    </button>
                </p>
            </div>

            {/* Rows */}
            {rows.map((row, index) => (
                <div key={index} className="flex items-center gap-4 mb-4">
                    {/* Serial Number */}
                    <p className="font-poppins w-12">{index + 1}</p>
                    {/* Page Input */}
                    <input
                        type="text"
                        value={row.page}
                        onChange={(event) => handleInputChange(index, event)}
                        className="flex-1 border border-gray-300 px-[0.75rem] py-[0.4375rem] rounded-md focus:outline-none"
                        placeholder="Enter page name"
                    />
                    {/* Add & Delete Buttons */}
                    <div className="flex gap-2 w-24">
                        {/* Add Button */}
                        <button
                            type="button"
                            onClick={handleAddRow}
                            className="bg-[#6b3aa3] hover:bg-[#713dad] text-white px-[0.6rem] py-[0.47rem] rounded-md"
                        >
                            <IoAddCircleOutline />
                        </button>
                        {/* Delete Button (only show if more than 1 row) */}
                        {rows.length > 1 && (
                            <button
                                type="button"
                                onClick={() => handleDeleteRow(index)}
                                className="bg-red-500 hover:bg-red-600 text-white px-[0.6rem] py-[0.47rem] rounded-md"
                            >
                                <IoTrashOutline />
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RoomLinksAdmin;
