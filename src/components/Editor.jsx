import React, { useContext } from 'react';

import { InputContext } from 'contexts/InputContext';

export function Edit() {

    const { marked, setMarked } = useContext(InputContext);

    return <section className="section">
        <h2 className="section__title">Editor</h2>
        <textarea 
        className="editor"
        id="editor"
        defaultValue={marked}
        onInput={(e) => setMarked(e.target.value)}
        >
        </textarea>
    </section>
}