'use client';
import { useState } from 'react';
import { surveyTitle, surveyFooter } from '../lib/survey-copy';
export default function SurveyPage() {
  const [answer, setAnswer] = useState('');
  const [saved, setSaved] = useState(false);
  return <main style={{maxWidth:640,margin:'48px auto',padding:24,fontFamily:'system-ui'}}>
    <p>WB-1025 · ausschließlich synthetische Testdaten</p>
    <h1>Survey-Agent – Test</h1><h2>{surveyTitle}</h2>
    <p>Plattformstand: Agent geschützt</p>
    <label>Testantwort <input value={answer} onChange={e=>setAnswer(e.target.value)} /></label>
    <button onClick={()=>setSaved(true)}>Testantwort merken</button>
    {saved && <p role="status">Gespeichert: {answer}</p>}
    <footer>{surveyFooter}</footer>
  </main>;
}
