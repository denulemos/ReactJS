import React from "react";
import LinkButton from "./html/LinkButton";
import DeleteButton from "./html/DeleteButton";
import {connect} from "react-redux";
import {del} from "../state/actions";
import {withRouter} from "react-router";


function UserDeleteButton({id, deleteUser, deleteResult, history}) {

    if(deleteResult) {
        history.push('/');
    }

    return (
        <DeleteButton handleClick={() => {
            deleteUser(id);
        }}>Borrar</DeleteButton>
    )
}

const mapStateToProps = state => ({
    deleteResult: state.deleteResult
});

const mapDispatchToProps = dispatch => ({
    deleteUser: (id) => dispatch(del(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDeleteButton));