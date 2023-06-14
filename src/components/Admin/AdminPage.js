import React from 'react'
import "../../App.css"
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';



const AdminPage = () => {


    return (
        <>
            <div className="admin">
                <NavbarAdmin />
                <SidebarAdmin />

            </div>
        </>
    )
}
export default AdminPage;

