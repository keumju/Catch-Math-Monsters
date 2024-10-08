import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import EduHeader from './EduHeader.jsx';
import EduFooter from './EduFooter.jsx';
import bero from '../../assets/img/monster/monster5_2.png';
import './EduTodayCont.css';

function EduTodayCont(props){

    const {unitId} = useParams();
    const data = props.data;
    const qDatas = props.qDatas;

    const [onSelect, setSelect] = useState(false);

    function onClickSelect(){
        setSelect(true)
    }

    return(
        <section className='eduTodaySec todayCont'>
            <EduHeader setPage={props.setPage} user={props.user} point={props.point} setHelpPop={props.setHelpPop} />
            <article className='flex eduUnitWrap'>
                <div className='eduUnitL'>
                    <div className='eduMainUnit'>
                        <h2>{data[unitId-1].title}</h2>
                    </div>
                    <div className='flex eduSubUnit'>
                        {data[unitId-1].subTitle1 == undefined ? null : 
                        <div className='flex eduSubUnitBox' onClick={onClickSelect}>
                            <div><span className={'' + (onSelect ? 'on' : null)}></span></div>
                            <h3>{data[unitId-1].subTitle1}</h3>
                        </div>}
                        {data[unitId-1].subTitle2 == undefined ? null : 
                        <div className='flex eduSubUnitBox' onClick={onClickSelect}>
                            <div><span></span></div>
                            <h3>{data[unitId-1].subTitle2}</h3>
                        </div>}
                        {data[unitId-1].subTitle3 == undefined ? null : 
                        <div className='flex eduSubUnitBox' onClick={onClickSelect}>
                            <div><span></span></div>
                            <h3>{data[unitId-1].subTitle3}</h3>
                        </div>}
                        {data[unitId-1].subTitle4 == undefined ? null : 
                        <div className='flex eduSubUnitBox' onClick={onClickSelect}>
                            <div><span></span></div>
                            <h3>{data[unitId-1].subTitle4}</h3>
                        </div>}
                    </div>
                </div>
                <div className='eduUnitR'>
                    <div className={"flex eduNoSelect " + (onSelect ? "off" : " ")}>
                        <div className='eduSpeechBln'>
                            <p>
                                안녕, 내 이름은 베로!
                                <br />나와 함께 여행을 떠나고 싶다면
                                <br />문제를 모두 풀어봐베로!
                            </p>
                        </div>
                        <img src={bero} alt="monster_image" />
                    </div>
                    <div className={"eduSelect " + (onSelect ? "on" : "off")}>
                        {qDatas.filter((qData)=> qData.id === 1)
                        .map((qData, i) =>
                            <Link to={`/education/today/${data[unitId-1].unitId}/${i+1}`} key={i}>
                                <div>
                                    {qData.question}
                                </div>
                            </Link>)}
                    </div>
                </div>
            </article>
            <EduFooter />
        </section>
    )
}

export default EduTodayCont;