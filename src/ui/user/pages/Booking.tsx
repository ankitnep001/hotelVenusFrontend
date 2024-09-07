import { bookingSchema } from "@config/schema/booking.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IBooking } from "@interface/booking.interface";
import Button from "@ui/common/atoms/Button";
import InputField from "@ui/common/atoms/InputField";
import Label from "@ui/common/atoms/Label";
import RoomSelector from "@ui/common/molecules/RoomSelector";
import { SubmitHandler, useForm } from "react-hook-form";

const BookingForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IBooking>({
        resolver: yupResolver(bookingSchema()),
        defaultValues: {
            name: "",
            numberOfPeople: 1,
            rooms: [],
            checkInDate: "",
            checkOutDate: ""
        }
    });

    const onSubmit: SubmitHandler<IBooking> = async (data) => {
        try {
            // Submit form data to the backend
            console.log("Booking Data: ", data);
            // Handle successful booking logic
        } catch (error) {
            console.error("Error submitting booking form:", error);
        }
    };

    return (
        <div className=" bg-[#ffeedc] flex flex-col justify-center items-center px-4 py-4 w-full h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-[#ffeedc] p-10 w-full md:w-[50%] ">
                <h2 className="text-[#5b3423] font-bold text-2xl mb-5">Book Your Stay</h2>

                {/* Name */}
                <div className="mb-4">
                    <Label name="name" label="Name" />
                    <InputField
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        register={register}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                {/* Number of People */}
                <div className="mb-4">
                    <Label name="numberOfPeople" label="Number of People" />
                    <InputField
                        name="numberOfPeople"
                        type="number"
                        placeholder="Enter number of people"
                        register={register}
                    />
                    {errors.numberOfPeople && <span className="text-red-500 text-sm">{errors.numberOfPeople.message}</span>}
                </div>

                {/* Room Selector */}
                <div className="mb-4">
                    <Label name="rooms" label="Rooms" />
                    <RoomSelector register={register} />
                    {errors.rooms && <span className="text-red-500 text-sm">{errors.rooms.message}</span>}
                </div>
                <div className="flex justify-between">
                    {/* Check-In Date */}
                    <div className="mb-4">
                        <Label name="checkInDate" label="Check-In Date" />
                        <InputField
                            name="checkInDate"
                            type="date"
                            register={register}
                        />
                        {errors.checkInDate && <span className="text-red-500 text-sm">{errors.checkInDate.message}</span>}
                    </div>

                    {/* Check-Out Date */}
                    <div className="mb-4">
                        <Label name="checkOutDate" label="Check-Out Date" />
                        <InputField
                            name="checkOutDate"
                            type="date"
                            register={register}
                        />
                        {errors.checkOutDate && <span className="text-red-500 text-sm">{errors.checkOutDate.message}</span>}
                    </div>

                </div>

                <Button type="submit" buttonText="Book Now" />
            </form>
        </div>
    );
};

export default BookingForm;
