import styles from './ProjectsStyles.module.css';
import study from '../../assets/studywise.png';
import coach from '../../assets/AICoach.png';
import invent from '../../assets/Inventory.png';
import poke from '../../assets/pokemon.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={study}
          link="https://github.com/Shbucket/AI-Flashcards"
          h3="StudyWise"
          p="Flashcard Generator"
        />
        <ProjectCard
          src={coach}
          link="https://github.com/Shbucket/Basketball-Assistant-Coach-"
          h3="Basketball Coach"
          p="AI powered Basketball Coach"
        />
        <ProjectCard
          src={invent}
          link="https://github.com/Shbucket/InventoryApp"
          h3="Inventory App"
          p="Keep track of whats in your inventory"
        />
        <ProjectCard
          src={poke}
          link="https://github.com/Shbucket/Pokemon-Card-Geneator"
          h3="Pokemon Card Generator"
          p="Powered by pokemon API. Find your favorite pokemon"
        />
      </div>
    </section>
  );
}

export default Projects;
