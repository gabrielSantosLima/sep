import React, { useState } from 'react';

import { Container } from './styles';

const Table = ({ children, startIndex = 0 }) => {
    const isChildrenEmpty = !children
    const isNotArray = !children?.length
    const [indexFrame, setIndexFrame] = useState(startIndex)
    
    function handleFrame(index){
        setIndexFrame(index)
    }
    
    function renderNavItems(child){
        const indexOf = children?.indexOf(child)
        const { title } = child.props
        return (
            <li key={indexOf} 
            className={indexFrame === indexOf ? "selected": ""} 
            onClick={() => handleFrame(indexOf)}>
                {title}  
            </li>
        )
    }
    function renderTableContentsItems(child){
        const indexOf = children?.indexOf(child)
        if(indexFrame === indexOf){
            return (
                <div key={indexOf}>
                    {child}
                </div>
            )
        }
    }
    
    if(isChildrenEmpty) return <Container className="table" />
    
    if(isNotArray){
        return (
            <Container className="table">
          <nav>
            <ul>
                <li className="selected">
                    {children?.props?.title}
                </li>
            </ul>
          </nav>
        { children }
      </Container>
        )
    }

    return(
        <Container className="table">
          <nav>
            <ul>
                {children.map(renderNavItems)}
            </ul>
          </nav>
        {children.map(renderTableContentsItems)}
      </Container>
  );
}

export default Table;