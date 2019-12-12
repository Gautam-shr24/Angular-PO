import { Component, OnInit } from '@angular/core';
import { SellerService } from './seller.service';
import { ViewPO } from '../models/ViewPO';

@Component({
  selector: 'app-view-po',
  templateUrl: './view-po.component.html',
  styleUrls: ['./view-po.component.css']
})
export class ViewPOComponent implements OnInit {

  constructor(private sellerService:SellerService) { }

  public poArray:[ViewPO];
  ngOnInit() {

    this.sellerService.getAllPOs().subscribe(data=>
      this.poArray=data);
  }

}
