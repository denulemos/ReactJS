import React from "react";
import UserForm from "../UserForm";
import UserDeleteButton from "../UserDeleteButton";

export default function Edit(props) {

    return (
        <>
            <h1>Edit</h1>
            <UserForm userId={props.match.params.id}/>
            <UserDeleteButton id={props.match.params.id}/>
        </>
    )
}