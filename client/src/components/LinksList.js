import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'


export const LinksList = ( {links, setLinks} ) => {    
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    
    if (!links.length) {
        return <p className="center">No links yet</p>
    }
    
    const deleteClick = async event => {
        try {            
            const data = await request(`/api/link/delete/${event.target.id}`, 'POST', {_id: event.target.id}, {
                Authorization: `Bearer ${auth.token}`
            })
            if( data ) {                         
                const deleted = links.filter(link => link._id!== event.target.id)
                setLinks(deleted) 
                alert('Link with ID = ' + event.target.id + ' is deleted')    
                console.log(deleted)
            }                            
            
        } catch (e) {
            alert(`Error + ${e}`)
        }
    }
    return (
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Original link</th>
                <th>Shorted link</th>
                <th>Open</th>
                <th>Delete</th>
            </tr>
            </thead>

            <tbody>
                { links.map((link, index) => {
                    return (
                        <tr key={link._id}>
                            <td>{index + 1}</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td>
                                <Link 
                                    to={`/detail/${link._id}`}
                                >
                                    Open
                                </Link>
                            </td>
                            <td>
                                <Link
                                    type="text"
                                    id={link._id} 
                                    to={'#'} 
                                    onClick={deleteClick}
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>  )
                }) }
                    
        </tbody>
      </table>
    )
}