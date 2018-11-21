import Article from './component';
import { rootReducer } from './reducer';
import { pageBuilder } from '../../pageBuilder';

const el = pageBuilder(Article, rootReducer)
export default el;

