import React, { useContext } from 'react';

import { InputContext } from 'contexts/InputContext';

export function Edit() {

    const { marked, setMarked } = useContext(InputContext);

    return <div>
        <textarea 
        defaultValue={marked}
        onInput={(e) => setMarked(e.target.value)}
        >
        </textarea>
    </div>
}