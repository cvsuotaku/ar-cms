import { Component, OnInit } from '@angular/core';
import { ArService } from 'src/app/service/ar.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  items: any = [];
  constructor(private arService: ArService) { }

  ngOnInit(): void {
    this.arService.retrieveProducts().subscribe(data=> {
      console.log(data);
      this.items = data;
    });
  }

  updateARView(event: any, arId: string): void {
    this.arService.updateProduct(arId, event.currentTarget.checked).subscribe(data=> {
      console.log(data);
    });
  }
}
