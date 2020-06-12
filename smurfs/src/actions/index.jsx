import axios from "axios"

export const getData = () => dispatch => {
    axios.get("http://localhost:3333/smurfs")
        .then( data => {
            dispatch({ type: "GET_DATA_SUCCESS", payload: data.data })
        })
        .catch( error => {
            console.log(error);
            dispatch({ type: "GET_DATA_FAIL", payload: `${error.response.status} : ${error.response.data}` })
            debugger
        })
}

export const sendData = (data) => dispatch => {
    axios.post(
        "http://localhost:3333/smurfs", 
        { name: data.name, age: data.age, height: data.height})
        .then( res => {
            dispatch({ type: "SEND_DATA_SUCCESS", payload: res.data })
        })
        .catch( error => console.log(error))
}

export const setActiveSmurf = (data) => dispatch => {
    dispatch({ type: "SET_ACTIVE_SMURF", payload: data})
}

export const deleteData = (id) => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then( res => {
            dispatch({ type: "DELETE_ACTIVE_SMURF", payload: res.data })
        })
        .catch( error => {
            console.log(error)
            debugger
        })
}

export const editData = (data, id) => dispatch => {
    axios.put(
        `http://localhost:3333/smurfs/${id}`, 
        { name: data.name, age: data.age, height: data.height})
        .then( res => {
            dispatch({ type: "EDIT_ACTIVE_SMURF", payload: res.data})
        })
        .catch( error => {
            console.log(error)
            debugger
        })
}