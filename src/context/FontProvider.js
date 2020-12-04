import React, { useState, createContext } from 'react';

export const FontContext = createContext()

const fonts = [
  '52.5%',
  '56.5%', 
  '60.5%',
  '62.5%',
  '64.5%',
  '68.5%',
  '72.5%',
  '76.5%'
]

const FontProvider = ({children}) => {
  const [ font, setFont] = useState(fonts[3]);

  function nextFontSize(){
    const nextFont = fonts[fonts.indexOf(font) + 1]
    if(!nextFont) return
    setFont(nextFont)
  }
  
  function backFontSize(){
    const backFont = fonts[fonts.indexOf(font) - 1]
    if(!backFont) return
    setFont(backFont)
  }

  return (
    <FontContext.Provider value={{font, nextFontSize, backFontSize}}>
      {children}
    </FontContext.Provider>
  );
}

export default FontProvider;