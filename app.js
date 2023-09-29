

const LinkedList = ()=>{
    let head = null;
    let current;
    let tail = Node(null, null);
    let length = 0;

    const append = function(value){
        if (head === null) {
            head = Node(value, tail)
            current = head;
            length++
        } else if(length ===1) {
            let newNode = Node(value, tail)
            head.nextNode = newNode
            current = newNode
            length ++
        } else if (length > 1){
            let newNode = Node(value, tail)
            current.nextNode = newNode
            current = newNode
            length ++
        }
    }

    const prepend = function(value){
        if (head === null) {
            head = Node(value, tail)
            current = head;
            length++
        } else {
            head = Node(value, head)
            length ++
        }
    }

    const size = function(){
        return length
    }

    const whatIsHead = function(){
        return head
    }
    
    const whatIsTail = function(){
        return tail
    }
    
    const at = function(index){
        let nodeAtIndex = head;
        while (head !== null){
            for (let i = 0; i < index-1; i++){
                nodeAtIndex = nodeAtIndex.nextNode
            }
            return nodeAtIndex
        }
    }

    const pop = function(){
        at(length-1).nextNode = tail
        current = at(length-1)
        length -- 
    }
    const contains = function(value){
        let nodeContains = head;
        while(head !== null){
            if (head.value === value){
                nodeContains = head;
                return true
            } else {
                for (let i = 0; i < length; i++){
                    if(nodeContains.value === value){
                        return true
                    }else {
                        nodeContains = nodeContains.nextNode
                    }                
                }
                return false
            }
        }
       return false
    }

    const find = function(value){
        let nodeContains = head;
        let indexContains = 0;
        while(head !== null){
            if (head.value === value){
                nodeContains = head;
                return indexContains
            } else {
                for (let i = 0; i < length; i++){
                    if(nodeContains.value === value){
                        return indexContains
                    } else 
                    nodeContains = nodeContains.nextNode
                    indexContains++
                }
                return null
            }
        }
        return null
        
    }

    const toString = function(){
        let toStringObjects;
        if (length === 0) { toStringObjects = "Empty"}
        else {           
            toStringObjects = `( ${head.value} )`
            let next = head.nextNode
            for (let i = 0; i < length; i++){
                toStringObjects += `-> ( ${next.value} )`
                next = next.nextNode
            }
        }
        console.log(toStringObjects) 
    }

    const insertAt = function (value, index) {
        let nextIndex = at(index+1);
        let atIndex = at(index)
        let newNode = Node(value, nextIndex)
        atIndex.nextNode = newNode
        length ++
    }

    const removeAt = function(index) {
        let atIndex = at(index)
        let nextIndex = at(index+2)
        atIndex.nextNode = nextIndex
        length --
    }

    return { append, prepend, whatIsHead, whatIsTail, size, at, pop, contains, find, toString, insertAt, removeAt}
}

function Node (value = null, nextNode = null){
    return {
       value, nextNode
    }
}


const ll = LinkedList();
ll.append(100);
ll.append(300);
ll.append(499);
ll.append(533);
ll.prepend(88);
ll.prepend(55);
ll.append(666);

ll.pop();
ll.insertAt(999, 3)
ll.toString();


console.log(ll.find(534))
console.log(ll.contains(499))
console.log(ll.size())
console.log(ll.at(3))
console.log(ll.whatIsHead())

ll.removeAt(6);
ll.toString();
console.log(ll.size())