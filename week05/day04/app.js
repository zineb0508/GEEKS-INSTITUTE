import { readFile  , writeFile }  from './fileManager.js';
const test = async () => {
    await writeFile("helloWorld.txt", 'Hello, world!');
    console.log(' file written:helloworld.txt');
    

    const content = await readFile('helloWorld.txt');
    console.log('file content', content);


}
test();