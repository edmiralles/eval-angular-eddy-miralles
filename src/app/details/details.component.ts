import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTDESBIENS } from '../bd/list.biens';
import { Model } from '../model/model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  
  allBiens = LISTDESBIENS;

    itemId: number| undefined;
    item: any;
 
    logementSelected: Model = new Model();
  
    constructor(private activeRoute:ActivatedRoute, private router:Router){}
    ngOnInit(): void {
      let idUrl: number | any = this.activeRoute.snapshot.paramMap.get('id');
  
      if (idUrl !== null && idUrl !== undefined) {
        for (let i = 0; i < this.allBiens.length; i++) {
          if (this.allBiens[i].id == idUrl) {
            this.logementSelected = this.allBiens[i];
            break;
          }
        }
      } else {
        console.error('ID non défini dans l\'URL.');
      }
    }

    selectedImageIndex: number | null = null;

    currentImageSource(): string {
      if (this.selectedImageIndex === null) {
        return this.logementSelected.picture;
      } else {
        return this.logementSelected.additionalImages[this.selectedImageIndex];
      }
    }

    toggleImage(index: number | null): void {
      this.selectedImageIndex = index;
  }
}