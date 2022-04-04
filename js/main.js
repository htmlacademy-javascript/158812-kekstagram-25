import './render-big-pictures.js';
import './form-validation.js';
import './upload-file.js';
import './editor-picture.js';
import {createPicturesFragment} from './pictures.js';
import {showAlertMessage} from './message.js';
import {getServerData} from './api.js';

getServerData(createPicturesFragment, showAlertMessage);
