import { v4 as uuidv4 } from 'uuid';

export interface IBasket {
  id: string;
  items: IBasketItem[];
}
export interface IBasketItem{
  id: number;
  title: string;
  price: number,
  photo:string;
  quantity: number;
}

export class Basket implements IBasket{
  id= uuidv4();
  items: IBasketItem[] = [];
}

export interface IBasketTotals{
   subtotal: number;
}
