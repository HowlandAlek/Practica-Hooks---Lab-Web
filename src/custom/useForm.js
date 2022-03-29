import { useState } from "react";

export const useForm = (initialState = {}) => {
    // Crear el estado inicial
    const [formState, setFormState] = useState(initialState);

    //Esta función se va invocar cada vez que exista un cambio en alguno de los input text del formulario.
    const handleInputChange = (e) => {
        //console.log(e.target.name);
        //console.log(e.target.value);
        //Actualizamos el estado del formulario.
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    //Regresamos un objeto que va tener un arreglo con el estado actual y la referencia a la funcion handleInputChange
    return [formState, handleInputChange];
};
