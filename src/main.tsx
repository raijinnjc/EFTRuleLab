import React from 'react';
import {createRoot} from 'react-dom/client';
import {EvidenceUnavailable} from './components/primitives';
import './styles/tokens.css';
import './styles/app.css';
const root=createRoot(document.getElementById('root')!);
// Import the validated package behind a catch boundary: malformed bundled data
// must not leave a blank page before React has mounted.
import('./App').then(({App})=>root.render(<React.StrictMode><App/></React.StrictMode>)).catch(()=>{
 root.render(<main className="container"><EvidenceUnavailable reason="The bundled evidence package could not be loaded or validated. No calculation result is available."/></main>);
});
