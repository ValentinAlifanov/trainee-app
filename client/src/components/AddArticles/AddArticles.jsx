import React,{useEffect, useState} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";

import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import FooterLogIn from "../FooterLogIn/FooterLogIn";

import './AddArticles.css';



function submit (input1, input2, text, userLogIn,navigate) {

    let newPost = {
        topic: input1,
        category: input2,
        text: text,
        user: userLogIn.userId,
        userName : userLogIn.userName
    }
    const config = {
        headers: {
            Authorization: userLogIn.token
        }
    }
    axios.post('http://localhost:5000/api/article/create', newPost, config)
        .then(function () {
            navigate('/myArticles')
        })
        .catch(function (error) {
            console.log(error)
        });
}

export default  function AddArticle() {
    const userLogIn = JSON.parse(localStorage.getItem('userLogIn'))
    const navigate = useNavigate()
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [text, setText]= useState('')
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );

    let rawContentState, contentHTML

    function onEditorStateChange(e) {
        setEditorState(e);
    }

    useEffect(() =>{
        rawContentState = convertToRaw(editorState.getCurrentContent())
        contentHTML = draftToHtml(rawContentState);
        setText(contentHTML)
    }, [editorState] )

    if (localStorage.getItem('userLogIn')) {
        return (
            <>
                <HeaderLogIn/>
                <main className="add-articles-main-box">
                    <article className="add-articles-title">Add article</article>
                    <div className='add-articles-editor-box'>
                        <div className='add-articles-input-box'>
                            <input type='text' className='add-articles-input' placeholder='Enter a title' value={input1}
                                   onChange={event => setInput1(event.target.value)}/>
                            <input type='text' className='add-articles-input' placeholder='Enter the category name...'
                                   value={input2} onChange={event => setInput2(event.target.value)}/>
                        </div>
                        <Editor
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                            editorState={editorState}
                            onEditorStateChange={(e) => onEditorStateChange(e)}
                        />
                        <button className='add-articles-btn' onClick={(() => submit(input1, input2, text, userLogIn,navigate))}>Publish
                            an article
                        </button>
                    </div>
                </main>
                <FooterLogIn/>
            </>
        )
    }
    else {
        return (
            <Navigate to="/" />);
        }
};