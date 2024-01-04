import './projects.css';

const projectsData = [
    {
        title: 'Flappy Bird Clone',
        description: 'My first Javasript project. Created a clone of the popular mobile game Flappy Bird using Javascript, canvas, and DOM manipulation.',
        image: 'img',
        githubLink: 'https://github.com/Nisal4/Project_1?tab=readme-ov-file',
        link: 'https://nisal4.github.io/Project_1/', 
    },
    
    {
        title: 'Togethr App',
        description: 'My first group project with collaborators Adriana Saavedra and Kevin Tran. This app was made using Python, Django, and SQL. It is a twitter clone that allows users to create a profile, posts, comments, and follow other users.',
        image: 'img',
        githubLink: 'https://github.com/Nisal4/togethr-app',
        link: 'https://togethr-31dc444c8abd.herokuapp.com/', 
    },

    {
        title: 'BoomerBot',
        description: 'My second group project with collaborators Adriana Saavedra, Ahmad Wali, and Krystalin Castillo. This app was made using React and Express. It is a chatbot that talks to the user as if they were a boomer by implementing googles Gemini Pro Ai API.',
        image: 'img',
        githubLink: 'https://github.com/Nisal4/BoomerBot/tree/main',
        link: 'https://boomerbot-c3175a34bfb5.herokuapp.com/', 
    },
]

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='content'>
                <span className='header'>Projects</span>
                <div className='project-list'>
                    {projectsData.map((project, index) => (
                        <div className='project' key={index}>
                            <div className='project-title'>{project.title}</div>
                            <div className='project-img'>{project.img}</div>
                            <div className='project-description'>{project.description}</div>
                            <a className='github-link' href={project.githubLink}>Github Link</a>
                            <a className='project-link' href={project.link}>View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Projects;