import { useState } from 'react';
import condominiumService from '../../service/ServiceCondominium';

export const CreateCondominium = () => {
  const [condominiumName, setCondominiumName] = useState('');
  const [condominiumCountry, setCondominiumCountry] = useState('');
  const [condominiumState, setCondominiumState] = useState('');
  const [condominiumLogo, setCondominiumLogo] = useState('');
  const [condominiumsApartmentsNumber, setCondominiumsApartmentsNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await condominiumService.createCondominium(
        condominiumName,
        condominiumCountry,
        condominiumState,
        condominiumsApartmentsNumber,
        isActive,
        imageUrl,
        condominiumLogo
      );
      console.log('Condominio creado:', response);
      // Limpiar el formulario después del envío exitoso
      setCondominiumName('');
      setCondominiumCountry('');
      setCondominiumState('');
      setCondominiumLogo('');
      setCondominiumsApartmentsNumber('');
      setImageUrl('');
      setIsActive(true);
    } catch (error) {
      console.error('Error al crear el condominio:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-40 p-6 bg-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Crear Condominio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="condominiumName" className="block text-gray-700">
            Nombre del Condominio:
          </label>
          <input
            type="text"
            id="condominiumName"
            value={condominiumName}
            onChange={(e) => setCondominiumName(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="condominiumCountry" className="block text-gray-700">
            País:
          </label>
          <input
            type="text"
            id="condominiumCountry"
            value={condominiumCountry}
            onChange={(e) => setCondominiumCountry(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="condominiumState" className="block text-gray-700">
            Estado:
          </label>
          <input
            type="text"
            id="condominiumState"
            value={condominiumState}
            onChange={(e) => setCondominiumState(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="condominiumLogo" className="block text-gray-700">
            Logo:
          </label>
          <input
            type="text"
            id="condominiumLogo"
            value={condominiumLogo}
            onChange={(e) => setCondominiumLogo(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="condominiumsApartmentsNumber" className="block text-gray-700">
            Número de Apartamentos:
          </label>
          <input
            type="number"
            id="condominiumsApartmentsNumber"
            value={condominiumsApartmentsNumber}
            onChange={(e) => setCondominiumsApartmentsNumber(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-gray-700">
            URL de Imagen:
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="isActive" className="text-gray-700 mr-2">
            ¿Activo?:
          </label>
          <input
            type="checkbox"
            id="isActive"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Crear Condominio
        </button>
      </form>
    </div>
  );
};
