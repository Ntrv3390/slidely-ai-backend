import fs from 'fs'

function readUsersFromDb(fileName : string) {
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        return JSON.parse(data);
    } catch (err : Error | any) {
        return { users: [], message: err.message };
    }
}

export {
    readUsersFromDb
}