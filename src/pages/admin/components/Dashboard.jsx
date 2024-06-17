import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado
import FormProfes from '../../FormProfes';

const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState('Profesores');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const renderSelectedComponent = () => {
        switch (selectedOption) {
            case 'Profesores':
                return <Profesores />;
            case 'Empresas':
                return <Empresas />;
            case 'Eventos':
                return <Eventos />;
            default:
                return null;
        }
    };

    return (
        <div className="flex">
            <div className="w-1/4 bg-gray-200 h-screen px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                <div>
                    <div
                        className={`py-2 px-4 cursor-pointer ${selectedOption === 'Profesores' && 'bg-blue-500 text-white'}`}
                        onClick={() => handleOptionSelect('Profesores')}
                    >
                        Profesores
                    </div>
                    <div
                        className={`py-2 px-4 cursor-pointer ${selectedOption === 'Empresas' && 'bg-blue-500 text-white'}`}
                        onClick={() => handleOptionSelect('Empresas')}
                    >
                        Empresas
                    </div>
                    <div
                        className={`py-2 px-4 cursor-pointer ${selectedOption === 'Eventos' && 'bg-blue-500 text-white'}`}
                        onClick={() => handleOptionSelect('Eventos')}
                    >
                        Eventos
                    </div>
                </div>
            </div>
            <div className="w-3/4 p-8">
                {renderSelectedComponent()}
            </div>
        </div>
    );
};

const Profesores = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Sección de Profesores</h2>
            <p>Aquí puedes administrar los profesores</p>
            <FormProfes />
        </div>
    );
};

const Empresas = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Sección de Empresas</h2>
            <p>Aquí puedes administrar las empresas</p>
        </div>
    );
};

const Eventos = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Sección de Eventos</h2>
            <p>Aquí puedes administrar los eventos</p>
        </div>
    );
};

export default Dashboard;
