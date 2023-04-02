import React from 'react'
import Comment from '../comment/Comment'
import './_comments.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action'
import { useState } from 'react'
const profile = 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'

const Comments = ({id,totalComments}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCommentsOfVideoById(id))
  },[dispatch,id])


  const comments = useSelector(state => state.commentList.comments && state.commentList.comments)
  const [text,setText] = useState('')
  const _comments = comments?.map((comment)=>comment.snippet.topLevelComment.snippet)
  const { user } = useSelector(state=>state.auth)

  const handleComment = (e) =>{
    e.preventDefault();
    if(text.length===0) return;
    dispatch(addComment(id,text))
    setText('');
  }
  return (
    <div className='comments'>
      <p>{totalComments} Comments</p>
      <div className='my-2 comments__form d-flex w-100'>
        <img src={user.photoURL || profile} alt='avatar' className='mr-3 rounded-circle' />
        <form onSubmit={handleComment} className='d-flex flex-grow-1'>
          <input
            type='text'
            className='flex-grow-1'
            placeholder='Write a comment...'
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button className='p-2 border-0'>Comment</button>
        </form>
      </div>
      <div className='comments__list'>
        {_comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Comments