## 1.What is the use of the keyof keyword in TypeScript? Provide an example.

## Answer:
The TypeScript keyof operator returns a union of all keys in an object type.when you want to work with the property names of an object in a type-safe way.We can use it to define generic functions for any object type without knowing it's key. Example:
```
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;  // PersonKeys is now "name" | "age" ; which is a union type.


function getUser<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Tamim", age: 33 };
const name = getUser(person, "name"); //  returns string
const age = getUser(person, "age");   // returns number
```

## 2.Provide an example of using union and intersection types in TypeScript.

## Answer: 
### Union Type:

  ```
        type Person = { name: string };
        type UserId = { id: number };

        type User = Person | UserId;

        const user1: User = {name: Tamim"}; // ok.A union type allows a variable to be one of several types.

 ```

### Intersection Type:
       
```
     type Person = { name: string };
     type UserId = { id: number };

     type User = Person & UserId;

    const user2: User = {name: "Miraz"};  // Error,Missing id.Because an intersection type means a  value must satisfy all types at once.So we have to add id other wise it will be error.

     const user2: User ={name:"Miraz" & id:27}; //ok.
```   
           
