import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext'
import './index.scss'
import { countChar, countParag, countPronouns, countSente, countWords } from '../texthelper/textHelper';

/*
const pronounList: string[] = [
  "he", "she", "it", "they", "we", "you", "i", "me", "him", "her", "us", "them", 
  "my", "your", "his", "its", "our", "their", "mine", "yours", "hers", "ours", "theirs"
];
*/

const ResultBox = () => {
  const {text}=useAppContext();
  //const words = text.toLowerCase().split(/\s+/);

  const [resultBar,setResultBar]= useState([
    {title: 'Words',value: 0,},
    {title: 'Characters',value: 0,},
    {title: 'Sentences',value: 0,},
    {title: 'Paragraphs ',value: 0,},
    {title: 'Pronouns',value: 0,},
  ]);

  useEffect(()=>{
    if(!text)return;

  /*
    //const charCount = text.replace(/\s/g, '').length;
    //const words = text.trim().split(/\s+/).filter(Boolean).length;
    //const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    //const sentences = text?.split(/[.!?]+/).filter(s => s.trim().length > 0).length || 0;
    //const paragraphs = text.trim().split(/\n{2,}/).filter(Boolean).length;
    //const pronounsCount = words.filter(word => pronounList.includes(word)).length;
    
    setResultBar([{
      title: 'Words',value: wordCount,},
      {title: 'Characters',value: charCount,},
      {title: 'Sentences',value: sentences,},
      {title: 'Paragraphs ',value: paragraphs,},
      {title: 'Pronouns',value: pronounsCount,},
    ])
    */
    setResultBar([{
      title: 'Words',value: countWords(text),},
      {title: 'Characters',value: countChar(text),},
      {title: 'Sentences',value: countSente(text),},
      {title: 'Paragraphs ',value: countParag(text),},
      {title: 'Pronouns',value: countPronouns(text),},
    ])
  },[text]);

  if(!text)return null;
    return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
