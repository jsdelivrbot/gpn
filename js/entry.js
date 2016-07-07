import styles from '../stylus';
import { twitter } from './twitter';
import { facebook } from './facebook';
import { pinterest } from './pinterest';
import sharing from './sharing';
window.twttr = twitter();
facebook();
pinterest();
sharing(document);
