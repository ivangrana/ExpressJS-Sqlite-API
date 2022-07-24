class Node {
    constructor(data = null) {
        this.data = data
        this.next = null
    }
}

class queue { //class queue declaration
    constructor() {
        this.head = null
        this.tail = null
        this.count = 0
    }

    enqueue(data) {
        var node = new Node(data)
        if (this.head == null) {
            this.head = node
            this.tail = this.head
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.count += 1
    }
}

q1 = new queue
q1.enqueue(5)
q1.enqueue(3)
q1.enqueue(2)
