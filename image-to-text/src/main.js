import './style.css'
import javascriptLogo from './assets/javascript.svg'

c// Import statement in browser:
import scribe from 'node_modules/scribe.js-ocr/scribe.js';
// Import statement for Node.js:
import scribe from 'scribe.js-ocr';

// Basic usage
scribe.extractText(['https://tesseract.projectnaptha.com/img/eng_bw.png'])
	.then((res) => console.log(res))