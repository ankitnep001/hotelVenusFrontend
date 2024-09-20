import Label from "@ui/common/atoms/Label";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

interface RoomDetails {
    name: string;
    images: string[];
    description: string;
    features: string[];
    slogan: string;
    contentHeading: string;
    contentParagraphs: string[];
}

const RoomManager = () => {
    const [rooms, setRooms] = useState<RoomDetails[]>([]);
    const [roomData, setRoomData] = useState<RoomDetails>({
        name: '',
        images: ['', ''],
        description: '',
        features: [''],
        slogan: '',
        contentHeading: '',
        contentParagraphs: ['', '']
    });

    // Add room handler
    const handleAddRoom = () => {
        setRooms([...rooms, { ...roomData }]);
        setRoomData({
            name: '',
            images: ['', ''],
            description: '',
            features: [''],
            slogan: '',
            contentHeading: '',
            contentParagraphs: ['', '']
        });
    };

    // Delete room handler
    const handleDeleteRoom = (index: number) => {
        const updatedRooms = rooms.filter((_, i) => i !== index);
        setRooms(updatedRooms);
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, index?: number) => {
        if (field === 'features') {
            const updatedFeatures = [...roomData.features];
            updatedFeatures[index!] = e.target.value;
            setRoomData({ ...roomData, features: updatedFeatures });
        } else if (field === 'images') {
            const updatedImages = [...roomData.images];
            updatedImages[index!] = e.target.value;
            setRoomData({ ...roomData, images: updatedImages });
        } else if (field === 'contentParagraphs') {
            const updatedParagraphs = [...roomData.contentParagraphs];
            updatedParagraphs[index!] = e.target.value;
            setRoomData({ ...roomData, contentParagraphs: updatedParagraphs });
        } else {
            setRoomData({ ...roomData, [field]: e.target.value });
        }
    };

    return (
        <div className="px-4">
            <div className="flex flex-col gap-6">
                <div className="bg-white p-6 rounded-md shadow-md w-full">
                    <p className="font-poppins text-xl font-medium mb-4">Add Room Details</p>

                    {/* Room Name Input */}
                    <Label name={"name"} label={"Name"} />
                    <input
                        type="text"
                        placeholder="Room Name"
                        value={roomData.name}
                        onChange={(e) => handleChange(e, 'name')}
                        className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                    />

                    {/* Images Inputs */}
                    <input
                        type="file"
                        placeholder="Image URL 1"
                        value={roomData.images[0]}
                        onChange={(e) => handleChange(e, 'images', 0)}
                        className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                    />
                    {/* <input
                        type="text"
                        placeholder="Image URL 2"
                        value={roomData.images[1]}
                        onChange={(e) => handleChange(e, 'images', 1)}
                        className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                    /> */}

                    <div className="w-full flex gap-x-2">
                        {/* Description */}
                        <div className="flex-1">
                            <Label name={"description"} label={"Description"} />
                            <textarea
                                placeholder="Description"
                                value={roomData.description}
                                onChange={(e) => handleChange(e, 'description')}
                                className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* Slogan */}
                        <div className="flex-1">
                            <Label name={"slogan"} label={"Slogan"} />

                            <textarea
                                placeholder="Slogan"
                                value={roomData.slogan}
                                onChange={(e) => handleChange(e, 'slogan')}
                                className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    {/* Content Heading */}
                    <input
                        type="text"
                        placeholder="Content Heading"
                        value={roomData.contentHeading}
                        onChange={(e) => handleChange(e, 'contentHeading')}
                        className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                    />

                    {/* Content Paragraphs */}
                    <div className="w-full flex gap-x-2">

                        <div className="flex-1">
                            <textarea
                                placeholder="Content Paragraph 1"
                                value={roomData.contentParagraphs[0]}
                                onChange={(e) => handleChange(e, 'contentParagraphs', 0)}
                                className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="flex-1">
                            <textarea
                                placeholder="Content Paragraph 2"
                                value={roomData.contentParagraphs[1]}
                                onChange={(e) => handleChange(e, 'contentParagraphs', 1)}
                                className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Features Input */}
                    {roomData.features.map((feature, i) => (
                        <input
                            key={i}
                            type="text"
                            placeholder={`Feature ${i + 1}`}
                            value={feature}
                            onChange={(e) => handleChange(e, 'features', i)}
                            className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                        />
                    ))}

                    {/* Add Room Button */}
                    <button onClick={handleAddRoom} className="p-2 bg-[#6b3aa3] rounded-md text-white font-poppins">
                        Add Room
                    </button>
                </div>

                <div className="bg-white flex-1 p-6 rounded-md shadow-md">
                    <p className="font-poppins text-xl font-medium mb-4">Room List</p>

                    {/* Rooms List */}
                    {rooms.length > 0 ? (
                        rooms.map((room, index) => (
                            <div key={index} className="flex items-center justify-between mb-2 p-4 bg-gray-100 rounded-md">
                                <p>{room.name}</p>
                                <button onClick={() => handleDeleteRoom(index)} className="text-red-500">
                                    <IoTrashOutline />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No rooms added yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoomManager;
