import '../../Styles/cardskills.scss'

import { ImHtmlFive } from 'react-icons/im';
import { VscCircleFilled } from 'react-icons/vsc'

export const CardSkill = () => {
    return(
        <div className='card-skill'>
            <div className='card-skill__container'>
                <div className='card-skill__icon-information-container'>
                    <div className='card-skill__container-icons'>
                        <VscCircleFilled className='card-skill__icon'/>
                        <VscCircleFilled className='card-skill__icon'/>
                        <ImHtmlFive className='card-skill__icon-border'/>
                        <VscCircleFilled className='card-skill__icon'/>
                        <VscCircleFilled className='card-skill__icon'/>
                    </div>
                    
                    <div className='card-skill__information'>
                        <span><b>HTML</b></span>
                        <span>Intermediate</span>
                    </div>
                </div>  
            </div>
        </div>
    )
}