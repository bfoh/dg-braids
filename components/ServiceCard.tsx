import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    image: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, link }) => {
    return (
        <div className="relative group overflow-hidden rounded-3xl aspect-[4/5]">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-full px-6 py-3 inline-flex items-center justify-between w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="font-display font-semibold text-lg">{title}</span>
                    <Link to={link} className="bg-black text-white p-2 rounded-full group-hover:bg-white group-hover:text-primary transition-colors">
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
