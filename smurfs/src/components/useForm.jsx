import { useState } from 'react';

const initialForm = {
    name: "",
    age: 0,
    height: ""
}

export default function useForm() {
    const [ formValues, setformValues ] = useState(initialForm);
    const handleChanges = (event) => {
        setformValues({ ...formValues, [event.target.name]: event.target.value });
      };
    return [formValues, handleChanges]
}