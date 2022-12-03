import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeAlert } from '../actions/alert';

function AlertComponent(props) {

    const closeAlert = async() => {
        await props.removeAlert();
    }

    return (
        <>
            {props.alert.msg != null
                    ? <Alert variant={props.alert.alertType} onClose={() => closeAlert()} dismissible>
                            <p>
                                {props.alert.msg}
                            </p>
                        </Alert>
                    : null}
        </>
    );
}
const mapStateToProps = state => {
    return {
        alert: state.alertReducer
    }
}
export default connect(mapStateToProps, {removeAlert})(AlertComponent);
