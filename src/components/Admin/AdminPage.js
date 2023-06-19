import React from 'react'
import "../../App.css"
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';



const AdminPage = ({ alert }) => {


    return (
        <>
            <div className="admin ">
                <NavbarAdmin alert={alert} />
                <SidebarAdmin />
            </div>
        </>
    )
}
export default AdminPage;

