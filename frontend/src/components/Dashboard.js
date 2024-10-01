import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css'

function Dashboard() {
    const location = useLocation();
    const { username, userType } = location.state || {};

    return (
    <div className='dashboard-container'>
        <div className='dashboard-header'>
            <p className='school-name'>Escola</p>
            <div>
                <p className='welcome'>Bem-vindo(a),</p>
                <p className='username'>{username}!</p>
            </div>
        </div>

        <div className='dashboard-body'>
            <div className='dashboard-main'>
                {userType === 'aluno' && (
                    <div>
                        <h2>Matérias</h2>
                        <ul>
                            <li>Matemática</li>
                            <li>História</li>
                            <li>Geografia</li>
                        </ul>
                    </div>
                )}

                {userType === 'professor' && (
                    <div>
                        <h2>Turmas</h2>
                        <ul>
                            <li>Turma 1</li>
                            <li>Turma 2</li>
                            <li>Turma 3</li>
                        </ul>
                    </div>
                )}
            </div>
            
            <div className='dashboard-side'>
                <h2>Destaques</h2>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;
