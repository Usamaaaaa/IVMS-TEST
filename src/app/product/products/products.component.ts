import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from './products';
import { ProductService } from '../product.service';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private fb:FormBuilder){}

  products: Product[]= [];
  selectedProduct: any
  displayAddModal=false
  editselectedProduct:any=null
  modalType="Add"

  productForm= this.fb.group({
    product_Id:[],
    title:[""],
    price:[0],
    description:[""],
    quantity:[0],
    category:[""]
  })
  ngOnInit() {
   this.getProductList();
  }

  getProductList(){

    this.productService.getProducts().subscribe(
      res =>{
        this.products=res
        console.log(this.products)
      }
    )

  }

  onRowSelect(event: any): void {
    this.selectedProduct = event.data;
    console.log('Selected Product:', this.selectedProduct);
    // Perform actions based on the selected product
  }
  showAddModal(){
    this.modalType="Add"
    this.productForm.reset()
   this.displayAddModal=true
}

 AddEditProduct(){

this.productService.addEditProducts(this.productForm.value,this.modalType).subscribe(
  res=>{
    console.log(res)
    this.productForm.reset();
    this.displayAddModal=false
  }
)
}

 deleteProduct(product:Product){

console.log('delete'+ product.product_Id)
this.productService.deleteProduct(product.product_Id)
}

 EditProduct(product:Product){

 this.displayAddModal=true;
 this.editselectedProduct=product
 this.modalType="Edit"
 if(this.editselectedProduct){
  this.productForm.patchValue(this.editselectedProduct)
   }else {
   this.productForm.reset()
   this.modalType=""
  }
  console.log(this.productForm)
}

 
}
