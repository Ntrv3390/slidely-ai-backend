import fs from 'fs'

function writeUsersToDb(user : any, fileName : string) {
    try {
        fs.writeFileSync(fileName, JSON.stringify(user, null, 2));
    } catch (err : Error | any) {
        return { message: err.message }
    }
}

export {
    writeUsersToDb
}