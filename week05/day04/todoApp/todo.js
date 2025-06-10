export class TodoList{
    constructor( date, task){
        this.date = date;
        this.task = task ;
        this.completed = false;
    }
    markAsDone(){
        this.completed = true;
    }

    toString(){
        return `${this.date} [${this.completed? '✓' : '✗'}]`;
    }
}