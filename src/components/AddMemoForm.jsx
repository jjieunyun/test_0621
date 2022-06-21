import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { memoAdded } from './memoSlice';


const AddMemoForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);


    const onSaveMemoClick = ()=> {
        if(title && content) {
            dispatch(memoAdded(title, content))
            
            setTitle('');
            setContent('');
        }
    }

    return (
        <div>
            <h1>Add a new Memo</h1>
            <label htmlFor="memoTitle">Title : </label>
            <input 
                id='memoTitle' 
                type="text" 
                value={title}
                onChange={onTitleChange}
            />

            <br/>
            <label htmlFor="memoContent"></label>
            <textarea 
                name="memoContent" 
                id="memoContent" 
                value={content} 
                cols="45" 
                rows="10"
                onChange={onContentChange}
            ></textarea>

            <br/>
            <input 
                type="submit" 
                value='Save Memo'
                onClick={onSaveMemoClick} 
            />
        </div>
    );
};

export default AddMemoForm;