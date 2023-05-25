let obj = {
    arr :[1,4,8,16],
    remove : function(){
       this.arr.length--
    }
}
obj.remove()
console.log(obj.arr);