import React from 'react'
import { SKILLS } from '../utils/data'
const Skills = () => {
  return (
    <section id="skills" className='max-w-screen-xl px-6 mx-auto pb-20'>
      <div className='bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8'>
        <h5 className='text-xl font-medium mb-5'> Skills </h5>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'> 

          {SKILLS.map((skill, index) => (
            <SkillsCard 
            key={index}
            icon={skill.Icon}
            iconProps={skill.iconProps}
            title={skill.name}
            comment={skill.comment}
            />
          ))}
        </div>
      </div>
      </section>
  )
};

const SkillsCard = ({icon:Icon, iconProps, title, comment}) => {
  return (
    <div className='bg-slate-900 rounded border border-blue-900 p-5'>
      <div className='flex items-center justify-between mb-5'>
        <p className='text-base'>{title} </p>
        <Icon className='text-3xl text-[var(--primary)]' />
      </div>
      <p className='text-xs font-light leading-5 opacity-80'>{comment} </p>
    </div>
  )
}

export default Skills