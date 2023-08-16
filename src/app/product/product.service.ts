import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "./products/products";
import { environment } from "src/environments/environment.development";


@Injectable({
    providedIn: 'root'
})

export class ProductService {
    
    private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    products$: Observable<Product[]> = this.productsSubject.asObservable();
    
    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>('https://localhost:7207/api/Product/GetAllProducts')

    }

    addEditProducts(postData : any,modalType: string){

       if(modalType== 'Add'){
        return this.http.post('https://localhost:7207/api/Product/Create',postData)
       }else {
        return this.http.put(`https://localhost:7207/api/Product/Update?${postData.product_Id}`,postData)
       }
    }

   deleteProduct(productId: number){

    return this.http.delete(`https://localhost:7207/api/Product/Remove?${productId}`)
   }


}