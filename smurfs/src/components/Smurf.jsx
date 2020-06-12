import React from 'react';
import { connect } from "react-redux";
import { setActiveSmurf } from "../actions";
import { Card, Col } from "reactstrap";

function Smurf(props) {
    const { smurfs, setActiveSmurf } = props;

    let smurf = smurfs.map( item => {
        let smurff = item.map( items => {
            return (
                <div className="cardss" onClick={() => setActiveSmurf(items.id)}>
                    <Col >
                        <Card>
                            <h6>{`Name: ${items.name} Smurf`}</h6>
                            Age: {items.age}
                            Height: {items.height}
                        </Card>
                    </Col>
                </div>
            )
        })
        return smurff
    })

    return (
        <div>
            {smurf}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect (mapStateToProps, {setActiveSmurf}) (Smurf)
