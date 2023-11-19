import { Component, OnInit } from '@angular/core';
import { LISTDESBIENS } from '../bd/list.biens';
import { Model } from '../model/model';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmComponent } from '../adm/adm.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

 allBiens = LISTDESBIENS;
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

    updateLogement(){
      this.router.navigate(['/adm']);
    }

     
}
