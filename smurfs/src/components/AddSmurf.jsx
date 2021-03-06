import React from 'react';
import { connect } from "react-redux";
import { getData, sendData, editData, deleteData } from "../actions";
import { Form, Input, Button } from "reactstrap";
import useForm from "./useForm";
import Smurf from "./Smurf";

function AddSmurf(props) {
    const { getData, sendData, editData, deleteData, activeSmurf } = props;
    const [formValues, handleChanges] = useForm();
    return (
        <div className="forms">
            <h1>Get Smurfs: <Button onClick={() => getData()}>Get Current Smurfs</Button></h1>
            <hr/>
            <Smurf/>
            <hr/>
            <h5>Add A Smurf!</h5>
            <Form>
                <Input 
                    type="text" 
                    name="name"
                    placeholder="....type a name...."
                    value={formValues.name}
                    onChange={handleChanges}>
                </Input>
                <Input 
                    type="number" 
                    name="age" 
                    placeholder="....type a age...."
                    value={formValues.age}
                    onChange={handleChanges}>
                </Input>
                <Input 
                    type="text" 
                    name="height" 
                    placeholder="....type a height...."
                    value={formValues.height}
                    onChange={handleChanges}>
                </Input>
                <Button 
                    className="btns"
                    onClick={() => sendData(formValues)}>Add a Smurf!</Button>
                <Button 
                    className="btns"
                    onClick={() => deleteData(activeSmurf)}> Delete Smurf</Button>
                <Button 
                    className="btns"
                    onClick={() => editData(formValues, activeSmurf)}>Edit Smurf</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        activeSmurf: state.activeSmurf
    }
}

export default connect (mapStateToProps, {getData, sendData, editData, deleteData}) (AddSmurf)