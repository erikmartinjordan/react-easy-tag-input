# react-easy-tag-input

![react-easy-tag-input version](https://img.shields.io/npm/v/react-easy-tag-input)
![react-easy-tag-input license](https://img.shields.io/npm/l/react-easy-tag-input)

Easy way to create tags inside an input element.

## Installation

```
npm i --save react-easy-tag-input
```

## Example

![react-easy-tag-input](https://github.com/erikmartinjordan/react-easy-tag-input/blob/master/react-easy-tag-input.gif?raw=true)

## How to use

```jsx
import React, { useState } from 'react';
import TagInput            from 'react-easy-tag-input';

const App = () => {
    
    const [tags, setTags] = useState(['React', 'JavaScript', 'Firebase']);
    
    return(
        <TagInput
            limit   = {5}
            tags    = {tags}
            setTags = {setTags}
        />
    );
    
}

export default App;
```

## Author

[Erik Martín Jordán](https://erikmartinjordan.com)

## License

This component is open source and available under the MIT License.
