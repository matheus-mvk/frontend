import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    // usestate retorna um array com 2 posições.
    //1. variável com seu valor inicial
    //2. Função para atualizarmos esse valor

    function hendleAddProject(){
        setProjects([...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
    <>
        <Header title="Projects"/>

        <img width="500"src={backgroundImage} />

        <ul>
            {projects.map(project => <li key={project}>{project}</li> )}
        </ul>
        <button type="button" onClick={hendleAddProject}>Adicionar projeto</button>
    </>
    );
}

export default App;