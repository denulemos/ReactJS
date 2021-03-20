import React from "react";

export default function Table({headers, data}) {
    return (
        <table className="table table-bordered  table-hover">
            <thead>
                <tr>
                    {headers.map(header => <th key={header}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
            {data.map(item => (
                <tr onClick={item.callback} key={item.data[0]}>
                    {item.data.map(field => <td key={field}>{field}</td>)}
                </tr>
            ))}
            </tbody>
        </table>
    )

}

Table.defaultProps = {
    headers: [],
    data: []
}