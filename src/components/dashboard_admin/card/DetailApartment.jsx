import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import apartmentService from '../../../service/Service'; 

export const DetailApartment = () => {
    const { id } = useParams(); 
    const [apartment, setApartment] = useState(null); 

    useEffect(() => {
        const fetchApartment = async () => {
            try {
                const result = await apartmentService.apartmentId(id); 
                setApartment(result);
            } catch (error) {
                console.error("Error fetching apartment:", error);
            }
        };

        fetchApartment();
    }, [id]); 

    if (!apartment) {
        return <p>Loading...</p>; 
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={apartment.imageUrl} alt={`Apartment ${apartment.numberApartment}`} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Apartment {apartment.numberApartment}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Size: {apartment.size} m²
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Status: {apartment.status}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Active: {apartment.isActive ? "Yes" : "No"}
                </p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Update
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
