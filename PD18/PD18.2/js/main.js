const student = {
  name: 'Alan',
  lastName: 'Liutkevic',
  age: '100',
  getFullName: function(){
console.log(this.name + '' + this.lastName + this.adress);
  }
};
 student.adress = 'Vilnius';
 student.getFullName();