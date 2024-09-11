// import { useState } from "react";

// interface RoomDetails {
//     name: string;
//     images: string[];
//     description: string;
//     features: string[];
//     slogan: string;
//     contentHeading: string;
//     contentParagraphs: string[];
// }

// const RoomManager = () => {
//     const [rooms, setRooms] = useState<RoomDetails[]>([]);
//     const [roomData, setRoomData] = useState<RoomDetails>({
//         name: '',
//         images: ['', ''],
//         description: '',
//         features: [''],
//         slogan: '',
//         contentHeading: '',
//         contentParagraphs: ['', '']
//     });

//     const handleAddRoom = () => {
//         setRooms([...rooms, { ...roomData }]);
//         setRoomData({
//             name: '',
//             images: ['', ''],
//             description: '',
//             features: [''],
//             slogan: '',
//             contentHeading: '',
//             contentParagraphs: ['', '']
//         });
//     };

//     const handleDeleteRoom = (index: number) => {
//         const updatedRooms = rooms.filter((_, i) => i !== index);
//         setRooms(updatedRooms);
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, index?: number) => {
//         if (field === 'features') {
//             const updatedFeatures = [...roomData.features];
//             updatedFeatures[index!] = e.target.value;
//             setRoomData({ ...roomData, features: updatedFeatures });
//         } else if (field === 'images') {
//             const updatedImages = [...roomData.images];
//             updatedImages[index!] = e.target.value;
//             setRoomData({ ...roomData, images: updatedImages });
//         } else if (field === 'contentParagraphs') {
//             const updatedParagraphs = [...roomData.contentParagraphs];
//             updatedParagraphs[index!] = e.target.value;
//             setRoomData({ ...roomData, contentParagraphs: updatedParagraphs });
//         } else {
//             setRoomData({ ...roomData, [field]: e.target.value });
//         }
//     };

//     return (
//         <div>
//             <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6">
//                 <div className="bg-white px-6 py-5 flex flex-col rounded-md shadow-md w-full">
//                     <p className="font-poppins text-xl font-medium mb-2">Rooms</p>

//                     <input
//                         type="text"
//                         placeholder="Room Name"
//                         value={roomData.name}
//                         onChange={(e) => handleChange(e, 'name')}
//                         className="mb-2 p-2 border border-gray-300 rounded-md"
//                     />

//                     <input
//                         type="text"
//                         placeholder="Image URL 1"
//                         value={roomData.images[0]}
//                         onChange={(e) => handleChange(e, 'images', 0)}
//                         className="mb-2 p-2 border border-gray-300 rounded-md"
//                     />

//                     <input
//                         type="text"
//                         placeholder="Image URL 2"
//                         value={roomData.images[1]}
//                         onChange={(e) => handleChange(e, 'images', 1)}
//                         className="mb-2 p-2 border border-gray-300 rounded-md"
//                     />

//                     <textarea
//                         placeholder="Description"
//                         value={roomData.description}
//                         onChange={(e) => handleChange(e, 'description')}
//                         className="mb-2 p-2 border border-gray-300 rounded-md"
//                     />

//                     <textarea
//                         placeholder="Slogan"
//                         value={roomData.slogan}
//                         onChange={(e) => handleChange(e, 'slogan')}
//                         className="mb-2 p-2 border border-gray-300 rounded-md"
//                     />

//                     <input
//                         type="text"
//                         placeholder="Content Heading"
//                         value={roomData.contentHeading}
//                         onChange={(e) => handleChange(e, 'contentHeading')}
//                         className="mb-2 p-2 border border-gray-300 rounded-md"
//                     />

//                     <textarea
//                         placeholder="Content Paragraph 1"
//                         value={roomData.contentParagraphs[0]}
//                         onChange={(e) => handleChange(e, 'contentParagraphs', 0)}
//                         className="mb-2 p-2 border border-gray-300 rounded-md"
//                     />

//                     <textarea
//                         placeholder="Content Paragraph 2"
//                         value={roomData.contentParagraphs[1]}
//                         onChange={(e) => handleChange(e, 'contentParagraphs', 1)}
//                         className="mb-2 p-2 border border-gray-300 rounded-md"
//                     />

//                     {roomData.features.map((feature, i) => (
//                         <input
//                             key={i}
//                             type="text"
//                             placeholder={`Feature ${i + 1}`}
//                             value={feature}
//                             onChange={(e) => handleChange(e, 'features', i)}
//                             className="mb-2 p-2 border border-gray-300 rounded-md"
//                         />
//                     ))}
//                     <button onClick={handleAddRoom} className="p-2 bg-[#6b3aa3] rounded-md text-white">
//                         Add Room
//                     </button>
//                 </div>

//                 <div className="bg-white flex-1 p-5 rounded-md shadow-md w-full">
//                     <button className="p-2 bg-[#6b3aa3] rounded-md text-white">
//                         Update
//                     </button>
//                 </div>
//             </div>

//             <div className="mt-4">
//                 {rooms.map((room, index) => (
//                     <div key={index} className="mb-2 p-4 bg-gray-100 rounded-md">
//                         <p>{room.name}</p>
//                         <button onClick={() => handleDeleteRoom(index)} className="text-red-500">
//                             Delete
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RoomManager;
