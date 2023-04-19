// const score: Array<number> = []
// const names: Array<string> = []

// function identityOne(value: boolean | number): boolean | number {
//   return value 
// }

// function identityTwo(value: any): any {
//   return value
// }

// this doesn't mean 'any' the return type has to the value passed though
// function identityThree<Type>(value: Type): Type {
//   return value
// }

// identityThree(3)

// you can use T instead of type...it can be anything. 
// it just has to be the same

// function identityFour<T>(value: T): T {
//   return value
// }

// interface Bootle{ 
//   brand: string,
//   type: number, 
// }


// identityFour<Bootle>({brand: "water", type: 4})

// function getSearchProducts<T>(products: T[]): T {
//   // do some database operations
//   const myIndex = 3
//   return products[myIndex]
// }

// // make an arrow function

// const getMoreSearchProducts = <T>(products: T[]): T => {
//   // do some database operations
//   const myIndex = 4
//   return products[myIndex]
// }

// interface Database {
//   connection: string,
//   username: string,
//   password: string
// }

// function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object{
//   return {
//     valOne,
//     valTwo
//   }
// }

// anotherFunction(3, {connection: "Ed", username: "ed", password: "asdfas"})


interface Quiz{ 
  name: string,
  type: string
}

interface Course{
  name: string,
  author: string,
  subject: string
}

class Sellable<T>{
  public cart: T[] = [];

  addToCard(product: T){
    this.cart.push(product)
  }
}