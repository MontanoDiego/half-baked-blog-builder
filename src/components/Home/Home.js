import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subtitle, setSubtitle] = useState('Subtitle');
  const [font, setFont] = useState('Font');
  const [align, setAlign] = useState('Align');
  const [text, setText] = useState('Text');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} align={align} text={text}/>
      <Editor setTitle={setTitle} setSubtitle={setSubtitle} setFont={setFont} setAlign={setAlign} setText={setText}/>
    </main>
  );
}
