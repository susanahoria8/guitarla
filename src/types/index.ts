export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = Guitar & {
  quantity: number;
};

//Utilities type
//Pick coloca los atributos
/*
export type CartItem = Pick<Guitar, "id" | "name" | "price"> & {
  quantity: number;
};
*/
//omit quita lo atributos
