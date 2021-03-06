import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = props => {
    return(
        <div className='administrativeArea'>
            <label htmlFor='menu'>Select an Option</label>
            <div className='list-group'>
                <Link to='/admin/portfolio' className='list-group-item list-group-item-action active'>Portfolio</Link>
            </div>
        </div>
    )
}

export default AdminMenu;
