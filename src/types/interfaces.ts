export interface product {
  id: number
  name: string
  category: string
  price: number 
  stock: number
  rating:{
    rate:number
    count:number
  }
};
export type client = {
  id: number
  username: string
  email: string
  phone: string
  country:string
  city:string
};
