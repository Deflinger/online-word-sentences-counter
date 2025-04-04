import { useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppContext'
import './index.scss'

const TextArea = () => {

  const {text,setText}= useAppContext();
  const textareaRef= useRef<HTMLTextAreaElement>(null);

  useEffect(()=>{
    textareaRef.current?.focus();
  },[]);
  

  return (
    <textarea 
      className="text-area" 
      placeholder="Paste your text here..."
      ref={textareaRef}
      value={text||''}
      onChange={event =>  setText(event.target.value)
      } 
    />
  
  )
}

export default TextArea
