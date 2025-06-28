import './projects.css';
import boomerbot from '../../assets/boomerbot.png';
import togethr from '../../assets/togethr.png';
import flappy from '../../assets/flappy.png';
import myrefuge from '../../assets/myrefuge.png';


const projectsData = [
    {
        title: 'My Refuge Mission',
        description: 'Worked as a developer and web admin to maintain and expand a Wix-based site. Built new pages, enhanced layout using Wix Editor and Velo, and implemented custom features with JavaScript. Handled troubleshooting, performance monitoring, and UX improvements.',
        image: myrefuge,
        githubLink: '',
        link: 'https://www.myrefugemission.org', 
    },
        
    {
        title: 'BoomerBot',
        description: 'Built a full-stack AI chatbot with Gemini API and custom prompt tuning. Added secure user authentication, session handling with MongoDB, and designed a quirky, user-driven experience around a boomer-style personality.',
        image: boomerbot,
        githubLink: 'https://github.com/Nisal4/BoomerBot/tree/main',
        link: 'https://boomerbot-c3175a34bfb5.herokuapp.com/', 
    },
       
    {
        title: 'Togethr App',
        description: 'Developed a Django-based social media app with user profiles, real-time content feeds, and interactive features like posts, likes, and comments. Built secure flows for sign-up, login, and account management.',
        image: togethr,
        githubLink: 'https://github.com/Nisal4/togethr-app',
        link: 'https://togethr-ff4e7e1c9fca.herokuapp.com', 
    },

    {
        title: 'Flappy Bird Clone',
        description: 'Created a Flappy Bird clone using HTML, CSS, and JavaScript. Implemented game mechanics for scoring, collisions, gravity, and game over.',
        image: flappy,
        githubLink: 'https://github.com/Nisal4/Project_1?tab=readme-ov-file',
        link: 'https://nisal4.github.io/Project_1/', 
    },
    
]

const Projects = () => {
    return (
        <div className='projects-container' id="Projects">
            <div className='content'>
                <span className='header'>Projects</span>
                <div className='project-list'>
                    {projectsData.map((project, index) => (
                        <div className='project' key={index}>
                            <div className='project-title'>{project.title}</div>
                            <div className='descrip-image'>
                                <div className='img-container'>
                                    <img src={project.image} className='project-img' alt='project-img' />
                                </div>
                                <div className='descrip-link'>
                                    <div className='project-description'>{project.description}</div>
                                    <div className='link-container'>
                                        {project.githubLink && (
                                            <a className='github-link' href={project.githubLink} target="_blank" rel="noopener noreferrer">Github Link</a>
                                        )}
                                        {project.link && (
                                            <a className='project-link' href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                                        )}
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Projects;