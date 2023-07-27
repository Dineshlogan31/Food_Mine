import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public serachTerm:string='';
  constructor (activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe(params=>{
      if(params.searchName)
      {
        this.serachTerm=params.searchName
      }
    })
  }

  ngOnInit():void{

  }
  search(searchTerm:string)
  {
    this.router.navigateByUrl('/search/'+searchTerm)
  }

}
