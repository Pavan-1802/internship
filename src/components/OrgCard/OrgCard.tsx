import Image from "next/image";
import React from "react";

interface OrgCardProps {
  logo: string;
  name: string;
}

const OrgCard: React.FC<OrgCardProps> = ({ logo, name }) => {
    const truncatedName = name.split(" ").slice(0, 5).join(" ");

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-900 border-2 border-opacity-25 border-white rounded-md shadow-md">
            <div className="mx-4 mb-4 rounded-md">
                <Image src={logo} alt={`${name} logo`} width={100} height={100} />
            </div>
            <div>
                <h2 className="text-lg text-gray-300 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[200px]">
                    {truncatedName}
                </h2>
            </div>
        </div>
    );
};

export default OrgCard;
