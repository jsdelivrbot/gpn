import styles from '../stylus';
import { twitter } from './twitter';
import { facebook } from './facebook';
import sharing from './sharing';
window.twttr = twitter();
facebook();
sharing(document);
