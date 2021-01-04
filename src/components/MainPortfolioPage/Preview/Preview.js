function Preview({ project, website, img, text }) {
    return (
        <section className="project-view" id={`${project}-view`}>
            <h2>{project}</h2>
            <p className="blah-bar" id={`${project}-bar`}>{text}</p>
            <img src={img} alt={project} />
            <a id={`${project}-link`} href={website} target="_blank" rel="noopener noreferrer" alt={`link to ${project}`}>
                <button>
                    website
                </button>
            </a>
        </section>
    )
}

export default Preview;