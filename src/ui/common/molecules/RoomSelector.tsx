import { rooms } from "@data/rooms";
import { IBooking } from "@interface/booking.interface";
import { UseFormRegister } from "react-hook-form";

interface RoomSelectorProps {
    register: UseFormRegister<IBooking>;
}

const RoomSelector: React.FC<RoomSelectorProps> = ({ register }) => {
    return (
        <div className="flex flex-col gap-2">
            {rooms.map((room) => (
                <div key={room.id} className="flex items-center">
                    <input
                        type="checkbox"
                        id={room.name}
                        value={room.name}
                        {...register("rooms")}
                        className="mr-2"
                    />
                    <label htmlFor={room.name} className="text-[#5b3423]">{room.name}</label>
                </div>
            ))}
        </div>
    );
};

export default RoomSelector;
