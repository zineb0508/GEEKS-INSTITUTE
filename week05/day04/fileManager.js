import {readFile as fsReadFile, writeFile as fsWriteFile} from 'fs/promises'

export async function readFile(filePath) {
    const data = await fsReadFile(filePath, 'utf-8');
    return  data;
    
}
export async function writeFile(filePath, content){
    await fsWriteFile(filePath, content, 'utf-8');
}