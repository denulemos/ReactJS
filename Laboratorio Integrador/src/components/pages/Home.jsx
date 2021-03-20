import React from "react";
import UsersTable from "../UsersTable";
import {NavLink} from "react-router-dom";
import LinkButton from "../html/LinkButton";

export default function Home() {
    return (
        <>
            <h2>Listado de usuarios</h2>
            <NavLink to="/create">
                <LinkButton>Crear</LinkButton>
            </NavLink>
            <UsersTable />
        </>
    )
}