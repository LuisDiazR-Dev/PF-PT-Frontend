import { increment, decrement, reSet, incrementByAmount } from "./Reducer-CounterSlice";

// Un archivo como Actions-ejemplo.js sería útil si
// quieres agrupar varias acciones que interactúan
// con el estado, pero que quizás requieran lógica
// adicional antes de despacharlas. 

// Esto es útil para mantener el código limpio y separar la lógica de negocio del componente.

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};