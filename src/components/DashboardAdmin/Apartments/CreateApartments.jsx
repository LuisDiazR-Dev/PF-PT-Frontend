import Proptypes from "prop-types";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createApartment } from "../../../Redux/features/getApartments/createApartmentsSlice";

const CreateApartments = ({ handleItemClick }) => {
  const dispatch = useDispatch();

  // Obtener el ID del condominio seleccionado desde el estado global de Redux
  const selectedCondoId = useSelector(
    (state) => state.setCondoToAdmin.selectedCondoId
  );

  // Validación del formulario
  const validationSchema = Yup.object().shape({
    ranges: Yup.array().of(
      Yup.object().shape({
        startNumber: Yup.string().required("Número inicial es requerido"),
        endNumber: Yup.string().required("Número final es requerido"),
        size: Yup.string().required("Tamaño es requerido"),
      })
    ),
    imageUrl: Yup.string()
      .url("URL inválida")
      .required("URL de imagen es requerida"),
  });

  const handleSubmit = async (values) => {
    const { ranges, imageUrl } = values;

    for (const range of ranges) {
      const { startNumber, endNumber, size } = range;
      const startNum = parseInt(startNumber.split("-")[1]);
      const endNum = parseInt(endNumber.split("-")[1]);

      for (let i = startNum; i <= endNum; i++) {
        const numberApartment = `${startNumber.split("-")[0]}-${i}`;
        const apartmentData = {
          numberApartment,
          size,
          status: "Disponible",
          CondominiumId: selectedCondoId, // Usar el ID del condominio seleccionado
          imageUrl,
        };

        // Enviar los datos del apartamento al backend
        dispatch(createApartment(apartmentData));
      }
    }
    handleItemClick("ViewApartments"); // Volver a la vista de apartamentos
  };

  return (
    <Formik
      initialValues={{
        ranges: [{ startNumber: "", endNumber: "", size: "" }],
        imageUrl: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="ranges">
            {({ push, remove }) => (
              <>
                {values.ranges.map((range, index) => (
                  <div key={index} className="mb-4">
                    <div>
                      <label
                        htmlFor={`ranges.${index}.startNumber`}
                        className="block"
                      >
                        Número Inicial
                      </label>
                      <Field
                        type="text"
                        name={`ranges.${index}.startNumber`}
                        placeholder="H-101"
                        className="form-input"
                      />
                      <ErrorMessage
                        name={`ranges.${index}.startNumber`}
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`ranges.${index}.endNumber`}
                        className="block"
                      >
                        Número Final
                      </label>
                      <Field
                        type="text"
                        name={`ranges.${index}.endNumber`}
                        placeholder="H-115"
                        className="form-input"
                      />
                      <ErrorMessage
                        name={`ranges.${index}.endNumber`}
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor={`ranges.${index}.size`} className="block">
                        Tamaño (m²)
                      </label>
                      <Field
                        type="text"
                        name={`ranges.${index}.size`}
                        placeholder="30 m²"
                        className="form-input"
                      />
                      <ErrorMessage
                        name={`ranges.${index}.size`}
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="btn btn-danger"
                    >
                      Eliminar Rango
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    push({ startNumber: "", endNumber: "", size: "" })
                  }
                  className="btn btn-primary"
                >
                  Agregar Rango
                </button>
              </>
            )}
          </FieldArray>
          <div>
            <label htmlFor="imageUrl" className="block">
              URL de Imagen
            </label>
            <Field
              type="text"
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
              className="form-input"
            />
            <ErrorMessage
              name="imageUrl"
              component="div"
              className="text-red-500"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Crear Apartamentos
          </button>
        </Form>
      )}
    </Formik>
  );
};

CreateApartments.propTypes = {
  handleItemClick: Proptypes.func.isRequired,
};

export default CreateApartments;
