import { useState } from 'react';
import adminService from '../../service/ServiceAdmin';

export const CreateAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await adminService.createAdmin(
        username,
        password,
        email,
        imageUrl,
        isActive
      );
      console.log('Administrador creado:', response);
      // Limpiar el formulario después del envío exitoso
      setUsername('');
      setPassword('');
      setEmail('');
      setImageUrl('');
      setIsActive(true);
    } catch (error) {
      console.error('Error al crear el administrador:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-40 p-6 bg-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Crear Administrador</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-700">
            Nombre de Usuario:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Crear Administrador
        </button>
      </form>
    </div>
  );
};
