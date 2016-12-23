import dbManager from '../managers/db';

let haveBeenSynced = false;

async function ensureSyncDb(req, res, next) {
    if (haveBeenSynced) next();
    await dbManager.sync();
    haveBeenSynced = true;
    next();
}

export default ensureSyncDb;
