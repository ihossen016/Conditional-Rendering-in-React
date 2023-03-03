import React from "react";

const DataList = ({ userList }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>value</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataList;
