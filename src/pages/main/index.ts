import { MainPage } from './component';
import { rootReducer } from './reducer';
import { pageBuilder } from '../../pageBuilder';

const el = pageBuilder(MainPage, rootReducer)
export default el;

