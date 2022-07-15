export interface IBook {
    title: string;
    price?: number;
    author?: {
        name: string;
        age: number;
    };
}