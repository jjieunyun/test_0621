import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memoRemoved } from './memoSlice';

const MemoList = () => {

    const memos = useSelector(state => state.memos)
    const dispatch = useDispatch()

    const onRemoveClick = (memoId) => {
        dispatch(memoRemoved(memoId))
    }

    const renderMemos = memos.map(memo => (
        <article key={memo.id}>
            <h3 style={{display : 'inline', marginRight : '10px'}}>title : {memo.title}</h3> 
            <button
            onClick={()=>onRemoveClick(memo.id)}
            >X</button>
            <p>{memo.content}</p>
        </article>
    ))

    return (
        <section>
            <hr/>
            <h1>MEMO LIST</h1>
            {renderMemos}
        </section>
    );
};

export default MemoList;