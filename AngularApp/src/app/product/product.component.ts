import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Products: any
  constructor(private service:ProductService) { }

  ngOnInit() 
  {
    console.log("ngOn");
    
    this.service.getProduct().subscribe(response=>{
      if(response['status'] === 'success')
      {
        console.log("success");
        
        console.log(response['data']);
        
             this.Products=response['data']
      }
      else
      {
        console.log("inside error");
        
      console.log('error',response['error']);
 
      }
    })
  }

}
