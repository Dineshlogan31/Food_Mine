import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sampleFoods, sampleTags } from 'src/data';
import { StarRatingComponent } from 'ng-starrating';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { FOODS_BY_SEARCH_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAllFoods():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL)
  }

  getAllFoodsBySearchName(searchName:string):Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL+searchName)
  }


  getAlltags():Observable<Tag[]>
  {
    return this.http.get<Tag[]>(FOODS_TAGS_URL)
  }

  getFoodsByTagName(tag:string):Observable<Food[]>
  {
    return tag ==='All'?
    this.getAllFoods():
    this.http.get<Food[]>(FOODS_TAGS_URL+tag)
  }

  getFood(FoodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL+FoodId)
  }

  
}
