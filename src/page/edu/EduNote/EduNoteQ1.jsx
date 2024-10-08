import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

import EduHeader from '../EduHeader.jsx';
import EduMathBlock from '../EduMath/EduMathBlock1';
import EduFooter from '../EduFooter.jsx';

import left_arrow from '../../../assets/img/icon/left-arrow2.png';
import right_arrow from '../../../assets/img/icon/right-arrow2.png';
import score_answer from '../../../assets/img/icon/score.png';
import score_wrong from '../../../assets/img/icon/score_wrong.png';
import check from '../../../assets/img/icon/check-mark.png';
import spin from '../../../assets/img/icon/spin_mark.png';
import commen from '../../../assets/img/icon/book.png';
import close from '../../../assets/img/icon/x.png';

import ex2 from '../../../assets/img/ex2.png';
import ex1 from '../../../assets/img/ex1.png';
import closeY from '../../../assets/img/icon/x_yellow.png';

import './EduNoteQ.css'
import EduQna from '../EduMath/EduQna';
import EduHint from '../EduMath/EduHint';

function EduNoteQ1({setPage, user, point, setHelpPop}){

    const [onPopUp, setPopUp] = useState(false);

    function checkQ(){
        setPopUp(true)
    }

    function closeQ(){
        setPopUp(false)
    }

    const [onAnswer, setAnswer] = useState('');
    const [onScore, setScore] = useState(null);

    function saveAnswer(e){
        setAnswer(e.target.value);
    }

    function answerQ(){
        if(onAnswer === '직육면체'){
            setScore(true)
        }else{
            setScore(false)
        }
        setPopUp(false)
    }

    let [exPop, setExPop] = useState(false);

    function exFunc(){
        setExPop((exPop)=>!exPop)
    }

    
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
      
    const resizeListener = () => {
        setInnerWidth(window.innerWidth);
    };
      
    useEffect(() => {
        window.addEventListener("resize", resizeListener);
    
        return () => {
        window.removeEventListener("resize", resizeListener);
        };
    }, []);

    //힌트보기
    const hintText = "이 도형은 우리가 사는 집이나 학교, 혹은 상자처럼 보일 수 있어.";

    return(
        <section className='eduNoteSec mathQ'>
            <EduHeader setPage={setPage} user={user} point={point} setHelpPop={setHelpPop} />
            <article className='flex eduUnitWrap'>
                <div className='eduArrowWrap'>
                    <img src={left_arrow} alt="previous-button" className='eduLeftArrow' />
                    <img src={right_arrow} alt="next-button" className='eduRightArrow' />
                </div>
                <div className='eduUnitLs'>
                    <img src={score_answer} alt="" className={'scoreAnswer ' + (onScore !== null && onScore === true ? 'on' : '')} />
                    <img src={score_wrong} alt="" className={'scoreWrong ' + (onScore !== null && onScore === false ? 'on' : '')} />
                    <h1>01. 다음 입체도형의 이름을 작성하세요.</h1>
                    <Canvas
                        style={{width: `100%`, height: `500px`}}
                        camera={{fov: 75, near: 0.1, far: 100, position: [2, 2, 2]}}
                    >
                        <EduMathBlock />
                    </Canvas>
                    <img src={spin} alt="spin-mark" className='eduSpin' />
                </div>
                <div className='flex eduUnitRs'>
                    <div className='eduAnswer'>
                        <h1>직사각형 6개로 둘러싸인 도형을 무엇이라고 하나요?</h1>
                        <input type="text" onChange={saveAnswer} value={onAnswer} />
                    </div>
                    <div className='flex eduSubBtn'>
                        <EduQna/>
                        <EduHint hintText={hintText}/>
                        {onScore == true || onScore == false ? 
                        <div className='flex commenWrap' onClick={exFunc}>
                            <img src={commen} alt="commentary-button" />
                            <h3>해설보기</h3>
                        </div>
                        :
                        <div className='flex checkWrap' onClick={checkQ}>
                            <img src={check} alt="check-button" />
                            <h3>채점하기</h3>
                        </div>}
                    </div>
                </div>
                {exPop ?
                <div className='exPart'>
                    <div className='exPartWrap'>
                        <div className='exClose'>
                            <img src={closeY} alt='닫기' onClick={()=>setExPop(false)}/>
                        </div>
                        <div className='exImg'>
                            {innerWidth <= 750 ?
                            <img src={ex1} alt='해설 보기'/>
                            :
                            <img src={ex2} alt='해설 보기'/>
                            }
                        </div>
                    </div>
                </div>
                :
                null
                }
                <div className={'eduPopUp ' + (onPopUp ? 'on' : '')}>
                    <div className='flex eduCloseBtn' onClick={closeQ}>
                        <img src={close} alt="close-button" />
                    </div>
                    <h2>채점하시겠습니까?</h2>
                    <div className='flex eduPopBtn'>
                        <button className='eduCancleBtn' onClick={closeQ}>취소하기</button>
                        <button className='eduGradeBtn' onClick={answerQ}>채점하기</button>
                    </div>
                </div>
                <div className={'shadowBox ' + (onPopUp ? 'shadow' : '')}></div>
            </article>
            <div className='eduPagenation'>1 / 1</div>
            <EduFooter />
        </section>
    )
}

export default EduNoteQ1;