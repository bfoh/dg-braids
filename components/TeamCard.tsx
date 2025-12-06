import React from 'react';

interface TeamCardProps {
    name: string;
    role: string;
    image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => {
    return (
        <div className="flex flex-col items-center text-center group">
            <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6 w-full">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary-dark mb-1">{name}</h3>
            <p className="text-gray-500 font-medium">{role}</p>
        </div>
    );
};

export default TeamCard;
