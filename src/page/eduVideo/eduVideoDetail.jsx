import './eduVideoStyle.css';
import '../edu/EduMath/EduMathQ.css';
import { useParams } from 'react-router-dom';

import EduHeader from '../edu/EduHeader';
import EduVideoDatas from './eduVideoData';
import EduFooter from '../edu/EduFooter';
import EduQuestion from './eduQuestion';

export default function EduVideoDetail({ setPage, user, point, setHelpPop }) {

    const { id } = useParams();

    return (
        <section className='innereduViedosWrap'>
            <EduHeader setPage={setPage} user={user} point={point} setHelpPop={setHelpPop} />
            <div className='eduViedoNowWrap'>
                <div className='flex eduViedoNow'>
                    <video src={EduVideoDatas[id].vSource} controls autoPlay></video>
                    <EduQuestion />
                </div>
            </div>
            <div className='eduViedosFooter'>
            <EduFooter/>
            </div>
        </section>
    );
}
