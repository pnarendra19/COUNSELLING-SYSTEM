import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchRegistrations = () => {
    const [res, setRes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/retrieve', {})
            .then(response => {
                setRes(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
            });
    }, []); // Empty dependency array to fetch data only once on component mount

    return (
        <div>
            <h1>FetchRegistrations</h1>
            <table align="center" border={1}>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ROLE</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            {res ? (
                <ul>
                    {res.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                        </tr>
                    ))}
                </ul>
            ) : (
                <p>No data available</p>
            )}
        
        </table>
        </div>
    );
};

export default FetchRegistrations;