import { Component } from '@angular/core';
import { LISTDESBIENS } from '../bd/list.biens';
import { Model } from '../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  allBiens = LISTDESBIENS;
  newLogement:Model = new Model();
  
  constructor(private router:Router){}

  addLogement(){ 
    this.newLogement.id = this.allBiens.length+1
    this.allBiens.unshift(this.newLogement);
    this.router.navigate(['']);
  }
}
