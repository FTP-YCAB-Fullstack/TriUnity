import React from "react";
import { mdiPencil } from '@mdi/js';

function Profile() {
    return (
        <div>
            <div>
            <div>
                <div>
                    <header>
                        <span>{ mdiPencil }</span>
                    </header>
                </div>
            </div>
            </div>
        <h1>First Name</h1>
        <h1>Last Name</h1>
        <h1>Email</h1>
        <h1>Address</h1>
        <h1>Description</h1>
        </div>
    )
}
export default Profile 