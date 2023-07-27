import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sampleFoods, sampleTags } from 'src/data';
import { StarRatingComponent } from 'ng-starrating';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods():Food[]{
    return sampleFoods;
  }

  getAllFoodsBySearchName(searchName:string):Food[]{
    return this.getAllFoods().filter(food=>food.name.toLowerCase().includes(searchName.toLowerCase()))
  }


  getAlltags():Tag[]
  {
    return sampleTags;
  }

  getFoodsByTagName(tag:string)
  {
    return tag ==='All'?
    this.getAllFoods():
    this.getAllFoods().filter(food=>food.tags?.includes(tag))
  }
}
