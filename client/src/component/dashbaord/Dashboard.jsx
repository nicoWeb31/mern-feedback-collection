import React from 'react'


const Dashboard = () => {
    return (
        <div>
            Dashobord
            <div className="fixed-action-btn">
                <a href="true" className="btn-floating btn-large red">
                {/* materialze css ajouter le cdn, class  et le nom de l'icone est dans le tag 'ADD'  ici!  */}
                    <i className="material-icons">add</i>
                </a>
            </div>
        </div>
    );
}

export default Dashboard;