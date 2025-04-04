import { useEffect, useState } from 'react'
import './index.scss'
import { useAppContext } from '../context/AppContext'
import { getLongestWord } from '../texthelper/textHelper';

const BottomResultBox = () => {
  const {text} = useAppContext();
  const[bottomResult,setBottomResult] = useState(
    [
    {title: 'Average Reading Time:',value: '-',},
    {title: 'Longest word:',value: '-',},
    ]

  )
  
  useEffect(()=>{
    /*
    const words = text.trim().split(/\s+/).filter(Boolean);
    const countWord = words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
    */
    
    setBottomResult([
    {title: 'Average Reading Time:',value: '-',},
    {title: 'Longest word:',value: getLongestWord(text || ''),},
    ])

  },[text]);

  return (
    <div className="bottom-result-bar">
      {bottomResult.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
