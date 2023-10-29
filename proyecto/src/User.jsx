import { useEffect, useState } from "react";
import axios from 'axios';


function User(){
    const url = '${import.meta.env.VITE_CRUD_URL}/user'
    const [user, setUser] = useState([])

    useEffect(()=>{
        async function getUser(){
            await axios({
                url: url,
                method: "get"
            }).then((response)=>{
                setUser(response.data)
            })
        }
        getUser()

},[])

    return (
        <>
        <h>Vista Usuarios</h>
        <table className="table">
            <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
            </tr>
            {user.map((user)=> {
            <tr key={user.id}>
                <td>{user.nombre}</td>
                <td>{user.teléfono}</td>
                <td>{email}</td>
            </tr>
            })}

        </table>
        </>
    )
}

export default User