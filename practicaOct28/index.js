class Object{
    constructor(id, name, price){
        this.id = parseInt(id)
        this.name = name.toUpperCase()
        this.price = parseInt(price)
        this.sold = false
    }

    plusIva(){
        this.price = this.price * 1.21
    }

    sold(){
        this.sold = true
    }
}

let object1 = new Object(1, 'skateboard', 70)
let object2 = new Object(2, 'skate trucks', 100)
let object3 = new Object(3,'skate wheels', 80)

let array = []

array.push(object1)
array.push(object2)
array.push(object3)

console.log(array)