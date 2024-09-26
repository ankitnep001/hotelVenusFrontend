import axiosInstance from "@services/instance"; // Adjust this import based on your axios instance
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTripadvisor, FaWhatsapp } from "react-icons/fa";

interface SocialLinks {
    facebook?: string;
    instagram?: string;
    tripAdvisor?: string;
    whatsApp?: string;
}

const FooterSocial: React.FC = () => {
    const [socialLinks, setSocialLinks] = useState<SocialLinks>({
        facebook: "",
        instagram: "",
        tripAdvisor: "",
        whatsApp: "",
    });

    // Fetch social media links from API
    useEffect(() => {
        const fetchSocialMediaLinks = async () => {
            try {
                const response = await axiosInstance.get("/social"); // Adjust API endpoint
                setSocialLinks(response.data.data);
                // console.log(response);

            }


            catch (error) {
                console.error("Error fetching social media links:", error);
            }
        };
        fetchSocialMediaLinks();
    }, []);

    return (
        <div className="flex items justify-start gap-x-3 mt-1">
            {/* Facebook */}
            {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <p>
                        <FaFacebookF className="text-[#6f4028] hover:text-black" />
                    </p>
                </a>
            )}

            {/* Instagram */}
            {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <p>
                        <FaInstagram className="text-[#6f4028] hover:text-black" />
                    </p>
                </a>
            )}

            {/* TripAdvisor */}
            {socialLinks.tripAdvisor && (
                <a href={socialLinks.tripAdvisor} target="_blank" rel="noopener noreferrer">
                    <p>
                        <FaTripadvisor className="text-[#6f4028] hover:text-black" />
                    </p>
                </a>
            )}

            {/* WhatsApp */}
            {socialLinks.whatsApp && (
                <a href={socialLinks.whatsApp} target="_blank" rel="noopener noreferrer">
                    <p>
                        <FaWhatsapp className="text-[#6f4028] hover:text-black" />
                    </p>
                </a>
            )}
        </div>
    );
};

export default FooterSocial;
