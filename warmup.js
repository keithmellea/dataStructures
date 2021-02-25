class myArray {

    constructor() {
        this.store = newArray
        this.length = 0;
    }

 myIndexOf(ele) {

    for (let i = 0; i < this.length; i++) {
        if (this.Store[i] === ele) {
            return i;
        }
    }
    return null;
 }

 myIncludes(ele) {
     for (let i = 0; i < this.length; i++) {
       if (this.Store[i] === ele) {
         return true;
       }
     }
     return false;
 }

 myForEach(callback) {
     
    for (let i = 0; i < this.length; i++) {
        this.Store[i] = callback(this.Store[i]);
     }
 }

 myFilter(callback) {
let newArr = [];
    for (let index = 0; index < array.length; index++) {
        const el = array[index];

        if (callback(el)) {
            newArr.push(el);
        }
    }
     return newArr;
 }

 mySlice(start, [end]) {
let newArr = [];
for (let index = 0; index < array.length; index++) {
  const el = array[index];

  if (start === i) {
    newArr.push(el[i]);
  }
  if (el[end]) {
      break;
  }
}
return newArr;

 }

}