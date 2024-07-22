import navNotiIcon from '../../img/icon/noticeIcon.svg';
import mypageIcon from '../../img/icon/mypageIcon.svg';
import './subnav.css'

function Subnav(props){
const navNoti = [
    {tit:'알림마당',
    icon: navNotiIcon,
    key:'1'}]
const mypage =
    [{tit:'학부모코너',
    icon: mypageIcon,
    key:'2'
    }]
const notiList = [
    {tit:'공지사항&이벤트',
    key : '1'
    },
    {tit:'FAQ',key : '2'}]
const mypageList=[
    {tit:'내 정보',
    key : '1'
    },
    {tit:'학습현황',
    key : '2'
    },
    {tit:'포인트 내역',
    key : '3'
    },
    {tit:'1:1 문의',
    key : '4'}]

    return(
        <>
        {props.tit==='알림마당'?  <div>
        <div className='subnav'>
            <p>{props.tit}</p>
            {navNoti.map((list)=>
            <img src={list.icon} alt={list.icon} key={list.key}></img>
            )}
        </div>
        <div className='subnavList'>
            <ul>
                {notiList.map((item)=><a href="/"><li key={item.key}>{item.tit}</li></a>)}
            </ul>
        </div>
        </div>: <div>
        <div className='subnav'>
            <p>{props.tit}</p>
            {mypage.map((list)=>
            <img src={list.icon} alt={list.icon} key={list.key}></img>
            )}
        </div>
        <div className='subnavList'>
            <ul>
            {mypageList.map((item)=><a href="/"><li key={item.key}>{item.tit}</li></a>)}
            </ul>
        </div>
        </div>
    }
    </>
    )
}

export default Subnav;