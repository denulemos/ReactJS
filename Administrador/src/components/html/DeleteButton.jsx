import React from "react";

export default function DeleteButton({children, handleClick}) {
    return <button className="btn btn-danger" onClick={handleClick}>{children}</button>
}