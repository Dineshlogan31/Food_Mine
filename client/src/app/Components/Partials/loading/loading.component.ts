import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoading!:boolean

  constructor (private loadingService:LoadingService) {
    this.loadingService.isLoading.subscribe((isloading)=>{
      this.isLoading=isloading;
    })
   this.loadingService.showLoading()
  }
  ngOnInit(): void {
    
  }
}
