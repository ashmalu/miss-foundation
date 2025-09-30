import { FileHandle } from "./file-handle.model";

export interface Product {
    productId: number;
    productName: string;
    productDescription: string;
    productDiscountedPrice: number;
    productActualPrice: number;
    productDiscountedPercentage: number
    productImages: FileHandle[];
}