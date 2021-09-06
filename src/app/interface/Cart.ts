export class Cart implements iCart{
  name: string ='';
  address: string='';
  phone: string='';
  date: string ='';
  note: string='';

}
export interface iCart{
  name: string;
  address: string;
  phone: string;
  date: string;
  note: string;
}
