class Node{
    constructor(data = null){
    this.data = data
    this.next = null
    }
}

class stack{
    constructor(){
        this.top = null
        this.size = 0
    }
    push(data){
        var node = new Node(data)
        if(this.top){
            node.next = this.top
            this.top = node
        }
        else{
            this.top = node
        }
        this.size += 1
         }
    
    pop(){
        if(this.top){
            data = this.top.data
            this.size -= 1
            if(this.top.next){
                this.top = this.top.next
            }
            else{
                this.top = null
            }
        }
    }
}