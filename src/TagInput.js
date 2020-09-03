import React, { useState } from 'react';
import './TagInput.css';

const TagInput = ({limit, tags, setTags, hint}) => {
    
    const [newTag, setNewTag] = useState('');
    
    const handleChange = (e) => {
        
        if(e.target.value !== ','){
            
            setNewTag(e.target.value);
            
        }
        
    }
    
    const handleKeyDown = (e) => {
        
        if(e.key === ','){
            
            setTags([...tags, newTag]);
            setNewTag('');
            
        }
        
    }
    
    const handleDelete = (e) => {
        
        let indexToDelete = parseInt(e.target.id);
        
        setTags([...tags.slice(0, indexToDelete), ...tags.slice(indexToDelete + 1)]);
        
    }
    
    return(
        <div className = 'TagInput'>
            <div className = 'Tags'>
                {tags.map((tag, index) => (
                    <div className = 'Tag' key = {index}>
                        <span>{tag}</span>
                        <button className = 'Delete' onClick = {handleDelete} id = {index}>✕</button>
                    </div>
                ))}
                <input
                    onChange  = {handleChange}
                    onKeyDown = {handleKeyDown}
                    value     = {newTag}
                    disabled  = {tags.length === limit ? true : false}
                />
            </div>
            <div className = 'Hint'>{hint}</div>
        </div>
    );
    
}

export default TagInput;