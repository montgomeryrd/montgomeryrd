import './styles.css'

function Preview({ section, project, website, img, text, description }) {

    return (
        <section className="project-view" id={section}>
            <h2 className="project-title">{project}</h2>
            <p className="project-text">{text}</p>
            <p className="project-description">{description}</p>
            <img src={img} alt={project} />
            <a className="project-link" href={website} target="_blank" rel="noopener noreferrer" alt={`link to ${project}`}>
                <button>
                    website
                </button>
            </a>
        </section>
    )
}

export default Preview;