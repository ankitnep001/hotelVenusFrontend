import axiosInstance from "@services/instance";
import InputField from "@ui/common/atoms/InputField";
import Label from "@ui/common/atoms/Label";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

interface RoomData {
    name: string;
    slug: string;
    content: string;
    heading: string;
    intro: string;
    price: string;
    slogan: string;
}

const CreateRoom = () => {
    const { roomId } = useParams(); // Get the roomId from the URL
    const { register, handleSubmit, setValue } = useForm<RoomData>();

    useEffect(() => {
        const fetchRoomData = async () => {
            if (roomId) {
                try {
                    const response = await axiosInstance.get(`/room/${roomId}`);
                    console.log("Fetched room data:", response.data); // Log the entire response

                    // Update form values with fetched room data
                    setValue('name', response.data.data.name || '');
                    setValue('slug', response.data.data.slug || '');
                    setValue('content', response.data.data.content || '');
                    setValue('heading', response.data.data.heading || '');
                    setValue('intro', response.data.data.intro || '');
                    setValue('price', response.data.data.price || '');
                    setValue('slogan', response.data.data.slogan || '');
                } catch (error) {
                    console.error("Error fetching room data:", error);
                }
            }
        };

        fetchRoomData();
    }, [roomId, setValue]);

    const onSubmit = async (data: RoomData) => {
        try {
            if (roomId) {
                // Update existing room
                await axiosInstance.put(`/room/${roomId}`, data);
            } else {
                // Create new room
                await axiosInstance.post("/room", data);
            }
            console.log("Room submitted successfully");
        } catch (error) {
            console.error("Error submitting room data:", error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-medium mb-4">{roomId ? "Edit Room" : "Create Room"}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Room Name */}
                <div className="mb-4">
                    <Label name="name" label="Room Name" />
                    <InputField
                        name="name"
                        type="text"
                        placeholder="Enter room name"
                        register={register}
                    />
                </div>

                {/* Room Slug */}
                <div className="mb-4">
                    <Label name="slug" label="Room Slug" />
                    <InputField
                        name="slug"
                        type="text"
                        placeholder="Enter room slug"
                        register={register}
                    />
                </div>

                {/* Room Price */}
                <div className="mb-4">
                    <Label name="price" label="Room Price" />
                    <InputField
                        name="price"
                        type="number"
                        placeholder="Enter room price"
                        register={register}
                    />
                </div>

                {/* Room Slogan */}
                <div className="mb-4">
                    <Label name="slogan" label="Room Slogan" />
                    <InputField
                        name="slogan"
                        type="text"
                        placeholder="Enter room slogan"
                        register={register}
                    />
                </div>

                {/* Room Content */}
                <div className="mb-4">
                    <Label name="content" label="Room Content" />
                    <InputField
                        name="content"
                        type="textarea"
                        placeholder="Enter room content"
                        register={register}
                    />
                </div>

                {/* Room Heading */}
                <div className="mb-4">
                    <Label name="heading" label="Room Heading" />
                    <InputField
                        name="heading"
                        type="text"
                        placeholder="Enter room heading"
                        register={register}
                    />
                </div>

                {/* Room Intro */}
                <div className="mb-4">
                    <Label name="intro" label="Room Intro" />
                    <InputField
                        name="intro"
                        type="textarea"
                        placeholder="Enter room intro"
                        register={register}
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="p-2 bg-[#6b3aa3] rounded-md text-white font-poppins">
                    {roomId ? "Update Room" : "Create Room"}
                </button>
            </form>
        </div>
    );
};

export default CreateRoom;
