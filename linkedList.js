class LinkedList{
    constructor(){
        this.list = [];
    }



    append(value){
        var lastNode = new Node(value, null);
        if(this.tail() == undefined){
            this.list.push(lastNode);
        } else {
            this.list.push(lastNode);
            this.tail().nextNode = lastNode; 
        }

 
    }

    tail(){
        return this.list[this.list.length - 1]; 
    }

    head(){
        return this.list[0]; 
    }

    prepend(value){
        var firstNode = new Node(value, this.head());
        this.list.unshift(firstNode);  
    }

    size(){
        return this.list.length; 
    }

    at(index){
        return this.list[index]; 
    }

    pop(){
        this.list.splice(-1); 
    }

    contains(value){
        for(let i=0; i<this.size(); i++){
            if(this.list[i].value == value){
                return true; 
            }
        }
        return false; 
    }

    find(value){
        for(let i=0; i<this.size(); i++){
            if(this.list[i].value == value){
                return i; 
            }
        }
        return null; 
    }

    toString(){
        let printString =''; 
        for(let i=0; i<this.list.length; i++){ 
            printString = printString + '(' + this.list[i].value + ') -> '
        }
        printString = printString + 'null'; 
        return printString; 
    }

    insertAt(value, index){
        let nextNodeLinkNewNode = this.list.at(index-1).nextNode; 
        var nodeToInsert = new Node(value, nextNodeLinkNewNode);
        this.list.at(index - 1).nextNode = nodeToInsert; 
        this.list.splice(index, 0, nodeToInsert); 
    }

    removeAt(index){
        this.list.at(index-1).nextNode = this.list.at(index+1); 
        this.list.splice(index, 1);
    }
}

class Node {
    constructor(value=null, nextNode=null){
        this.value = value; 
        this.nextNode = nextNode; 
    }
}

var testList = new LinkedList; 
testList.append('testValueEnd'); 
testList.prepend('testValueContains'); 
testList.prepend('whateverElement'); 
testList.prepend('testValueHead');
console.log(testList); 
testList.insertAt('nodeInserted', 2); 
console.log(testList); 
testList.removeAt(2); 
console.log(testList); 

