import React from 'react'

export default function Sidebar(props) {
    return (
        <div className="col-2 sideBar" style={{backgroundColor:'red', height:'100vh'}}>
            <div className="row">
                <h2>Filter by:</h2>
            </div>
            <div>
                <ul className="list-group"><h3>Genres:</h3></ul>
                <li className="list-group-item">Action</li>
            </div>
        </div>
    )
}
