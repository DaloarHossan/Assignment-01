function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        console.log(input.toLowerCase());
        return input.toLowerCase();
    }
    
    console.log(input.toUpperCase());
    return input.toUpperCase();
}


 function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filterItems=items.filter(item=>item.rating >= 4)
    console.log(filterItems)
    return filterItems
 
 }

 const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  filterByRating(books)


  function concatenateArrays<T>(...arrays: T[][]):T[]{
   let result:T[]=[]
   for(const arr of arrays){
    result=result.concat(arr)
   }
  console.log(result)
  return result
    

  }
  concatenateArrays(["a", "b"], ["c"]);       
  concatenateArrays([1, 2], [3, 4], [5]);   
  


  class Vehicle{
   private make:string;
    year:number;
    
    constructor( make:string,year:number,){
        this.make=make;
        this.year=year
    }
    getInfo(){
        console.log(`Make:${this.make}, Year:${this.year}`) 
    }
  }
   class Car extends Vehicle{
    private model:string
    
    constructor( make: string, year: number,model: string) {
        super(make, year);
        this.model = model;
    }
    getModel(){
        console.log(`Model:${this.model}`)
    }
   }

    const myCar = new Car("Toyota", 2020, "Corolla");
     myCar.getInfo();   
     myCar.getModel();  
     
    
     function processValue(value: string | number): number{
        if(typeof value === "string"){
            console.log(value.length)
            return value.length
        }else{
            console.log(value*2)
            return value*2
        }
     }
     processValue("hello"); 
     processValue(10);  
    

     interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null{
        if(products.length === null){
            console.log(null)
            return null
        }
        let highestPrice=products[0]
        for(const product of products){
            if(product.price>highestPrice.price){
                highestPrice=product
            }
        }
        console.log(highestPrice)
        return highestPrice
      }
      const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
      getMostExpensiveProduct(products);  
    


      enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string{
        if(day===Day.Saturday || day===Day.Sunday){
            return "Weekend"
        }else{
            return "Weekday"
        }
      }
     

      async function squareAsync(n: number): Promise<number>{
        return new Promise((resolve,rejecct)=>{
            setTimeout(()=>{
                if(n<0){
                    rejecct(new Error("Negative number not allowed"))
                }
                else{
                    resolve (n*n)
                }
            },1000)
        })
      }
      