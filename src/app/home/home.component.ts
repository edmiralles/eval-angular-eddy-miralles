import { Component, NgModule, Optional, SkipSelf } from '@angular/core';
import { Model } from '../model/model';
import { LISTDESBIENS } from '../bd/list.biens';
import Swal from 'sweetalert2';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

allBiens = LISTDESBIENS;
logementSelected: Model = new Model();
motDansUrl: boolean = false;

constructor(private route: ActivatedRoute){}

viewModel(arg: Model){
  this.logementSelected = arg;
}

searchFilter(value:string){
    this.allBiens = LISTDESBIENS;
    this.allBiens = this.allBiens.filter(logement => {
    const nameMatches = logement.name.toLocaleLowerCase().includes(value.toLowerCase());
    const localisationMatches = logement.localisation.toLocaleLowerCase().includes(value.toLowerCase());
    
    return nameMatches || localisationMatches
    })
 
  if(this.allBiens.length === 0){
    this.info('aucun résultat', 'aucun logement ne correspond à votre recherche');
  }
  }

info(title:string, mess:string){

  Swal.fire({
    title: title,
    text: mess,
    icon: 'info',
    width: 600,
    timer:3000,
    padding: '3em',
    backdrop: false,
    showConfirmButton: false,
  })
}

ngOnInit(): void {
const url = this.route.snapshot.url.join('/');
this.motDansUrl = url.includes('adm')
  
}
}
