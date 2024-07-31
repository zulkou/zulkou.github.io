interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

const ProjectCard = ({
  name,
  description,
  language,
  html_url,
}: ProjectCardProps) => {
  return (
    <div className="slide">
      <a
        href={html_url}
        target="_blank"
        className="flex flex-col items-start justify-center p-10 m-10 border-2 border-gray-300 dark:border-gray-800"
      >
        <div
          className="text-2xl font-bold text-cyan-500 dark:text-cyan-300 hover:text-cyan-600 hover:dark:text-cyan-600"
        >
          {name}
        </div>
        <p className="description">
          {description === null ? "-" : description}
        </p>
        <p className="text-gray-500 dark:text-gray-500">
          Language: {language === null ? "none" : language}
        </p>
      </a>
    </div>
  );
};

export default ProjectCard;
