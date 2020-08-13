// CREATE A CLASS
class queue {
    constructor(){
        this.data=[];   // data is the list in which we store our elements
        this.rear=0;    // rear stores the position in which the next element will be stored
        this.size=10;   // size is the Maximum number of elements a queue can have
    }
}

// INSERTING AN ELEMENT OF THE QUEUE
enqueue(Element){
    if(this.rear<this.size){            // checks if the queue is full or not 
        this.data[this.rear]=Element;
        this.rear=this.rear+1;
    }
}