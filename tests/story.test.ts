import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect,it} from 'vitest';
import {App} from '../src/App';
it('presents three approved research questions with proposed verification in the main journey',()=>{const html=renderToStaticMarkup(createElement(App));expect(html).toContain('01 What we can prove');expect(html).toContain("02 What&#x27;s missing");expect(html).toContain('03 Proposed verification');expect(html).toContain('What can we prove?');expect(html).toContain("What can&#x27;t we reproduce?");expect(html).toContain('How could verification improve?');expect(html).toContain('ecology-related performance-allocation case');});
