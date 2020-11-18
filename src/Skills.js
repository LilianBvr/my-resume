import './css/Skills.css';

const Skills = () => {
  return(
    <div className='skills'>
      <div className='skills__title'>Compétences</div>
      <div className='skills__display'>
      {
        SKILLS.map((skill, index)=>{
          const bg = skill.bg || '#FFF';
          return (
          <img
            className='skills__display-item' 
            title={skill.name}
            src={`/img/${skill.image}`}
            alt={skill.name}
            key={index}
            style={{ background: bg }}
          />
        )})
      }
      </div>
      
    </div>
  );
}

const SKILLS = [
  {
    name: 'C',
    image: 'c.svg'
  },
  {
    name: 'C#',
    image: 'cs.svg'
  },
  {
    name: 'Java',
    image: 'java.svg'
  },
  {
    name: 'JavaScript',
    image: 'js.svg',
    bg: 'rgb(247, 223, 30)'
  },
  {
    name: 'React',
    image: 'react.svg',
    bg: 'rgb(34, 34, 34)'
  },
  {
    name: 'Node.js',
    image: 'node.svg'
  },
  {
    name: 'Express',
    image: 'express.svg'
  },
  {
    name: 'MongoDB',
    image: 'mongodb.svg'
  },
  {
    name: 'PHP',
    image: 'php.svg'
  },
  {
    name: 'Laravel',
    image: 'laravel.svg'
  },
  {
    name: 'SQL Oracle',
    image: 'sql.svg'
  },
  {
    name: 'HTML',
    image: 'html.svg'
  },
  {
    name: 'CSS',
    image: 'css.svg'
  },
  {
    name: 'BASH',
    image: 'bash.svg'
  },
  {
    name: 'BEM',
    image: 'bem.svg'
  },
  {
    name: 'GIT',
    image: 'git.svg'
  },
  {
    name: 'EXCEL',
    image: 'excel.svg'
  },
  {
    name: 'Visual-Studio Code',
    image: 'vscode.svg'
  },
  {
    name: 'C',
    image: 'c.svg'
  },
  {
    name: 'C#',
    image: 'cs.svg'
  },
  {
    name: 'Java',
    image: 'java.svg'
  },
  {
    name: 'JavaScript',
    image: 'js.svg',
    bg: 'rgb(247, 223, 30)'
  },
  {
    name: 'React',
    image: 'react.svg',
    bg: 'rgb(34, 34, 34)'
  },
  {
    name: 'Node.js',
    image: 'node.svg'
  },
  {
    name: 'Express',
    image: 'express.svg'
  },
  {
    name: 'MongoDB',
    image: 'mongodb.svg'
  },
  {
    name: 'PHP',
    image: 'php.svg'
  },
  {
    name: 'Laravel',
    image: 'laravel.svg'
  },
  {
    name: 'SQL Oracle',
    image: 'sql.svg'
  },
  {
    name: 'HTML',
    image: 'html.svg'
  },
  {
    name: 'CSS',
    image: 'css.svg'
  },
  {
    name: 'BASH',
    image: 'bash.svg'
  },
  {
    name: 'BEM',
    image: 'bem.svg'
  },
  {
    name: 'GIT',
    image: 'git.svg'
  },
  {
    name: 'EXCEL',
    image: 'excel.svg'
  },
  {
    name: 'Visual-Studio Code',
    image: 'vscode.svg'
  }
]


export default Skills;