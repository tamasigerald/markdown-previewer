import React, { useContext } from 'react';
import Marked from 'marked';

import { InputContext } from 'contexts/InputContext';

export function Preview() {

    const { marked } = useContext(InputContext);

    return <div className="section">
        <h2 className="section__title">Preview</h2>
        <div 
        className="preview"
        id="preview"
        dangerouslySetInnerHTML={{ __html: Marked(marked) }}
        >
        </div>
    </div>
}