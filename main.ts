// object with type define
// Exaple 1
type Book = {
    title: string;
    author: string;
    year: number;
};

const book1: Book = {
    title: "The Great Gatsby",
    author: "F.Sott Fitzgerald",
    year: 1925
};
console.log(book1);

//Example 2
type Product = {
    id: number;
    name: string;
    inStock: boolean;
    price: number;
};
const product1: Product = {
    id: 15,
    name: "Latop",
    inStock: true,
    price: 45000,
};
console.log(product1);