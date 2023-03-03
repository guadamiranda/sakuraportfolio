import '../../Styles/cardskills.scss';

import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import { DiJavascript, DiMongodb } from 'react-icons/di';
import { TbBrandAmongUs } from 'react-icons/tb';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { VscCircleFilled } from 'react-icons/vsc';

export const CardSkill = () => {
    const skills = [{name:'HTML', icon:<ImHtmlFive className='card-skill__icon-border'/>, level:'Intermediate'},
                    {name:'CSS', icon:<ImCss3 className='card-skill__icon-border'/>, level:'Intermediate'},
                    {name:'JavaScript', icon:<DiJavascript className='card-skill__icon-border'/>, level:'Intermediate'},
                    {name:'React', icon:<FaReact className='card-skill__icon-border'/>, level:'Intermediate'},
                    {name:'MongoDB', icon:<DiMongodb className='card-skill__icon-border'/>, level:'Basic'},
                    {name:'Node', icon:<FaNodeJs className='card-skill__icon-border'/>, level:'Basic'}]

    return(
        <div className='card-skill'>
            <div className='card-skill__container'>
                {skills.map((skill) => 
                    <div className='card-skill__icon-information-container'>
                    <div className='card-skill__container-icons'>
                        <VscCircleFilled className='card-skill__icon'/>
                        <VscCircleFilled className='card-skill__icon'/>
                        {skill.icon}
                        <VscCircleFilled className='card-skill__icon'/>
                        <VscCircleFilled className='card-skill__icon'/>
                    </div>
                    
                    <div className='card-skill__information'>
                        <span><b>{skill.name}</b></span>
                        <span>{skill.level}</span>
                    </div>
                </div>)}
            </div>
        </div>
    )
}