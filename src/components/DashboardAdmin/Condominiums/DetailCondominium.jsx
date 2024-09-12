import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCondominium } from "../../../Redux/features/getCondominium/updateCondominiumSlice";
import { deactivateCondominium } from "../../../Redux/features/getCondominium/deleteCondoSlice";

const DetailCondominium = () => {
  const dispatch = useDispatch();
  const {
    condominium,
    status: condoStatus,
    error: condoError,
  } = useSelector((state) => state.getCondoById);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    condominium_name: "",
    condominium_country: "",
    condominium_state: "",
    condominium_logo: "",
    condominiums_apartments_number: "",
    imageUrl: "",
    isActive: true,
  });

  const { loading: updateLoading, error: updateError } = useSelector(
    (state) => state.updateCondominium
  );
  const { loading: deactivateLoading, error: deactivateError } = useSelector(
    (state) => state.deactivateCondominium
  );

  useEffect(() => {
    if (condominium) {
      setFormData({
        condominium_name: condominium.condominium_name || "",
        condominium_country: condominium.condominium_country || "",
        condominium_state: condominium.condominium_state || "",
        condominium_logo: condominium.condominium_logo || "",
        condominiums_apartments_number:
          condominium.condominiums_apartments_number || "",
        imageUrl: condominium.imageUrl || "",
        isActive: condominium.isActive || true,
      });
    }
  }, [condominium]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const id = condominium?.id;
    if (id) {
      const AdminId = condominium?.AdminId || ""; // Usar AdminId desde el estado de Redux
      try {
        await dispatch(
          updateCondominium({ id, updatedData: { ...formData, AdminId } })
        ).unwrap();
        setIsEditing(false);
      } catch (error) {
        console.error("Error en la actualización del condominio:", error);
      }
    }
  };

  const handleDeactivate = async () => {
    const id = condominium?.id;
    if (id) {
      try {
        await dispatch(deactivateCondominium(id)).unwrap();
        console.log("Condominio desactivado:", id);
      } catch (error) {
        console.error("Error al desactivar el condominio:", error);
      }
    }
  };

  if (condoStatus === "loading") {
    return <div>Cargando datos del condominio...</div>;
  }

  if (condoError) {
    return <div>Error al cargar los datos: {condoError}</div>;
  }

  if (!condominium) {
    return <div>No hay información del condominio disponible</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
        <span>ID admin: {condominium?.AdminId || "null"}</span>
      </div>
      <div className="flex items-center mb-6">
        <img
          src={condominium.condominium_logo}
          alt="Logo del Condominio"
          className="w-20 h-20 object-cover rounded-full mr-4"
        />
        <h2 className="text-3xl font-bold">{condominium.condominium_name}</h2>
      </div>
      <div className="mb-6">
        <img
          src={condominium.imageUrl}
          alt="Imagen del Condominio"
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4">
        {!isEditing ? (
          <div>
            <p>
              <strong>País del Condominio:</strong>{" "}
              {condominium.condominium_country}
            </p>
            <p>
              <strong>Estado del Condominio:</strong>{" "}
              {condominium.condominium_state}
            </p>
            <p>
              <strong>Número de Apartamentos:</strong>{" "}
              {condominium.condominiums_apartments_number}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Actualizar Condominio
            </button>
            <button
              onClick={handleDeactivate}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
            >
              Desactivar Condominio
            </button>
            {deactivateLoading && <p>Desactivando...</p>}
            {deactivateError && (
              <p className="text-red-500">Error: {deactivateError}</p>
            )}
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <label className="block">
              Nombre del Condominio
              <input
                type="text"
                name="condominium_name"
                value={formData.condominium_name}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              País
              <input
                type="text"
                name="condominium_country"
                value={formData.condominium_country}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              Estado
              <input
                type="text"
                name="condominium_state"
                value={formData.condominium_state}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              Logo del Condominio
              <input
                type="text"
                name="condominium_logo"
                value={formData.condominium_logo}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              Imagen del Condominio
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              Número de Apartamentos
              <input
                type="number"
                name="condominiums_apartments_number"
                value={formData.condominiums_apartments_number}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <button
              onClick={() => setIsEditing(false)}
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancelar
            </button>
            <button
              onClick={handleUpdate}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Guardar Cambios
            </button>
            {updateLoading && <p>Cargando...</p>}
            {updateError && (
              <p className="text-red-500">Error: {updateError}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default DetailCondominium;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateCondominium } from "../../../Redux/features/getCondominium/updateCondominiumSlice";
// import { deactivateCondominium } from "../../../Redux/features/getCondominium/deleteCondoSlice";

// const DetailCondominium = () => {
//   const dispatch = useDispatch();
//   const [condominium, setCondominium] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     condominium_name: "",
//     condominium_country: "",
//     condominium_state: "",
//     condominium_logo: "",
//     condominiums_apartments_number: "",
//     imageUrl: "",
//     isActive: true,
//   });

//   const { loading: updateLoading, error: updateError } = useSelector(
//     (state) => state.updateCondominium
//   );
//   const { loading: deactivateLoading, error: deactivateError } = useSelector(
//     (state) => state.deactivateCondominium
//   );

//   useEffect(() => {
//     const savedCondominium = JSON.parse(
//       localStorage.getItem("createdCondominium")
//     );
//     if (savedCondominium && savedCondominium.condominium) {
//       setCondominium(savedCondominium.condominium);
//       setFormData({
//         condominium_name: savedCondominium.condominium.condominium_name,
//         condominium_country: savedCondominium.condominium.condominium_country,
//         condominium_state: savedCondominium.condominium.condominium_state,
//         condominium_logo: savedCondominium.condominium.condominium_logo,
//         condominiums_apartments_number:
//           savedCondominium.condominium.condominiums_apartments_number,
//         imageUrl: savedCondominium.condominium.imageUrl,
//         isActive: savedCondominium.condominium.isActive,
//       });
//     } else {
//       console.error("No se encontró el condominio en localStorage");
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     const id = condominium?.id;
//     if (id) {
//       const AdminId = localStorage.getItem("id");
//       try {
//         const action = await dispatch(
//           updateCondominium({ id, updatedData: { ...formData, AdminId } })
//         ).unwrap();
//         localStorage.setItem("createdCondominium", JSON.stringify(action));
//         console.log("Datos actualizados en localStorage:", action);
//         setIsEditing(false);
//       } catch (error) {
//         console.error("Error en la actualización del condominio:", error);
//       }
//     }
//   };

//   const handleDeactivate = async () => {
//     const id = condominium?.id;
//     if (id) {
//       try {
//         await dispatch(deactivateCondominium(id)).unwrap();
//         console.log("Condominio desactivado:", id);
//         // Actualiza el estado local si es necesario
//         setCondominium((prev) => ({ ...prev, isActive: false }));
//       } catch (error) {
//         console.error("Error al desactivar el condominio:", error);
//       }
//     }
//   };

//   if (!condominium) {
//     return <div>No hay información del condominio disponible</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
//       <div className="bg-gray-800 p-4 text-white flex justify-between items-center"></div>
//       <div className="flex items-center mb-6">
//         <img
//           src={condominium.condominium_logo}
//           alt="Logo del Condominio"
//           className="w-20 h-20 object-cover rounded-full mr-4"
//         />
//         <h2 className="text-3xl font-bold">{condominium.condominium_name}</h2>
//       </div>
//       <div className="mb-6">
//         <img
//           src={condominium.imageUrl}
//           alt="Imagen del Condominio"
//           className="w-full h-60 object-cover rounded-lg"
//         />
//       </div>
//       <div className="space-y-4">
//         {!isEditing ? (
//           <div>
//             <p>
//               <strong>País del Condominio:</strong>{" "}
//               {condominium.condominium_country}
//             </p>
//             <p>
//               <strong>Estado del Condominio:</strong>{" "}
//               {condominium.condominium_state}
//             </p>
//             <p>
//               <strong>Número de Apartamentos:</strong>{" "}
//               {condominium.condominiums_apartments_number}
//             </p>
//             <button
//               onClick={() => setIsEditing(true)}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Actualizar Condominio
//             </button>
//             <button
//               onClick={handleDeactivate}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
//             >
//               Desactivar Condominio
//             </button>
//             {deactivateLoading && <p>Desactivando...</p>}
//             {deactivateError && (
//               <p className="text-red-500">Error: {deactivateError}</p>
//             )}
//           </div>
//         ) : (
//           <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//             <label className="block">
//               Nombre del Condominio
//               <input
//                 type="text"
//                 name="condominium_name"
//                 value={formData.condominium_name}
//                 onChange={handleInputChange}
//                 className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//               />
//             </label>
//             <label className="block">
//               País
//               <input
//                 type="text"
//                 name="condominium_country"
//                 value={formData.condominium_country}
//                 onChange={handleInputChange}
//                 className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//               />
//             </label>
//             <label className="block">
//               Estado
//               <input
//                 type="text"
//                 name="condominium_state"
//                 value={formData.condominium_state}
//                 onChange={handleInputChange}
//                 className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//               />
//             </label>
//             <label className="block">
//               Logo del Condominio
//               <input
//                 type="text"
//                 name="condominium_logo"
//                 value={formData.condominium_logo}
//                 onChange={handleInputChange}
//                 className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//               />
//             </label>
//             <label className="block">
//               Imagen del Condominio
//               <input
//                 type="text"
//                 name="imageUrl"
//                 value={formData.imageUrl}
//                 onChange={handleInputChange}
//                 className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//               />
//             </label>
//             <label className="block">
//               Número de Apartamentos
//               <input
//                 type="number"
//                 name="condominiums_apartments_number"
//                 value={formData.condominiums_apartments_number}
//                 onChange={handleInputChange}
//                 className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//               />
//             </label>
//             <button
//               onClick={handleUpdate}
//               className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Guardar Cambios
//             </button>
//             {updateLoading && <p>Cargando...</p>}
//             {updateError && (
//               <p className="text-red-500">Error: {updateError}</p>
//             )}
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DetailCondominium;
