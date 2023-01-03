import { fileURLToPath } from 'url';
import path, {dirname} from 'path';
import { url } from 'inspector';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const config = {
    db: {
        client: 'better-sqlite3',
        connection: {
            filename: path.join(__dirname, '../../DB/clase16.db3')
        },
        useNullsAsDefault: true
    }
}