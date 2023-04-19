"use strict";
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = ""
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const ed = new User('ed@email.com', "ed")
// ed.city = "Plattsmouth"
// private only allows it to be seen in the class
// everything defaults as public
// '#name' is same as 'private name'
// private is not a javascript word
// class User {
//   protected _courseCount = 1
//   readonly city: string = "LA"
//   constructor(
//     public email: string,
//     public name: string,
//     // private userId: string
//   ) {
//   }
//   private deleteToken() {
//     console.log('Token deleted')
//   }
//   get getAppleEmail(): string {
//     return `apple${this.email}`
//   }
//   get courseCount(): number {
//     return this._courseCount
//   }
//   // setter doesn't get a data type assigned
//   // it already has the properties of the key it's refrencing
//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Course count should be more than one")
//     }
//     this._courseCount = courseNum
//   }
// }
// class SubUser extends User {
//   // can not extend private properties
//   // protected can be inherited 
//   isFamily: boolean = true;
//   changeCourseCount() {
//     this._courseCount = 4
//   }
// }
// const ed = new User("ed@ed.com", "ed")
// // ed.deleteToken()
