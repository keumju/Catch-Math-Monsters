import { useContext } from "react";
import HookInput from "../../../component/hook/hookInput";
import { editAskContext } from '../../../App';
import { useNavigate } from "react-router-dom";
import Subnav from "../../../component/common/Subnav";
import './askboard.css';
import SubHead from "../../../component/common/Subhead";

const AskNew = ()=>{

    const navigate = useNavigate();
    
    const [{tit,content,category},onchange, reset]=HookInput({
        tit : '',
        content :'',
        category : '' ,
        ansur : false
    });

    const {CreateItem}=useContext(editAskContext);
    const createBtn = ()=>{
        let cate
        if(category === undefined || category=== ''){
            cate = '일반문의'
        }else{
            cate = category
        }
        if(window.confirm(`${tit}을/를 등록 하시겠습니까?`)){
            CreateItem(tit,content,cate)
            navigate('/ask')
         }
    };

    function cancleFunc(){
        reset()
        return(navigate('/ask'))}

    return(
        <>
        <SubHead chara={1} />
        <section className='w1440 pa55 flex'>
            <Subnav tit={'학부모 코너'}/>
            <div className="writeWrap">
                <h2 className='subtit'>1:1 문의</h2>
                <div className="editWrap">
                    <div className="TitWrap">
                        <select className='Titbox' name="category" value={category} onChange={onchange}>
                            <option value={'일반문의'}>일반문의</option>
                            <option value={'오답신고'}>오답신고</option>
                            <option value={'학습질문'}>학습질문</option>
                        </select>        
                        <input className='Titbox' type="text"name="tit" value={tit} onChange={onchange} placeholder="제목을 입력하세요."></input>
                    </div>
                    <div className="TitWrap">
                        <textarea className='Titbox' name="content" value={content} onChange={onchange} placeholder="내용을 입력하세요."></textarea>            
                    </div>
                    <div className='flex editTwoBtn'>
                    <button className="bluelineBtn" onClick={cancleFunc}>취소</button>
                    <button className="bgblueBtn" onClick={createBtn}>저장</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default AskNew;