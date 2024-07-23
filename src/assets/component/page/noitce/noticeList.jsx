import './noticeStyle.css'
import { Link } from "react-router-dom";

import { useReducer, useState } from "react";
import { Contents, notiReducer } from '../noitce/noticeData';
import NoticePagination from './noticePagination';
import Subnav from '../../common/Subnav';
import Btn from './btn';


export default function NoticeList() {

    const [state, dispatch] = useReducer(notiReducer, Contents);
    const { notis } = state;
    const noitsReverse = [...notis].reverse()

    // 페이지네이션
    const [page, setPage] = useState(1);
    const postPerPage = 10
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = noitsReverse.slice(indexOfFirstPost, indexOfLastPost)


    const btns = {
        tit : '글쓰기',
        link :'/TeamMMs/write',
        Bclass :'writeBtn'
    }

    return (
        <>
         <section className="w1440 flex noticeListWrap pa55">
         <Subnav/>
         <div>
         <h2 className='noticeTit'>공지사항 & 이벤트</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPost.map((noti)=>
                    <tr key={noti.id}>
                       <td>{noti.id + 1}</td>
                       <td>
                       <Link to={`/TeamMMs/detail/${noti.id}`}>
                        {'['}{noti.notiType}{'] '}{noti.notiName}
                        </Link>
                        </td>
                        <td>{noti.date}</td>
                        <td>{noti.views}</td>
                    </tr>)}
                </tbody>
            </table>
            <Btn {...btns}/>
            <NoticePagination page={page} setPage={setPage} postPerPage={postPerPage} notis={notis}/>
         </div>
        </section>
        </>
    )
}