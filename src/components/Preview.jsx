import React, { useContext } from 'react';
import Marked from 'marked';

import { InputContext } from 'contexts/InputContext';

export function Preview() {

    const { marked } = useContext(InputContext);

    return <div>
        <div dangerouslySetInnerHTML={{ __html: Marked(marked) }}>

        </div>
    </div>
}