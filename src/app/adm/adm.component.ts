import { Component } from '@angular/core';
import { LISTDESBIENS } from '../bd/list.biens';
import { Model } from '../model/model';
import Swal from 'sweetalert2';
import { EditComponent } from '../edit/edit.component';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {
  allBiens = LISTDESBIENS;
  logementSelected: Model = new Model();
  constructor( private router:Router){}
  
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
  
  deleteProperty():void{
    const index = this.allBiens.indexOf(this.logementSelected); 
    if (index !== -1){ 
      this.allBiens.splice(index, 1); 
    }
  }

  cancelBooking(){
    this.logementSelected.reserved = false;
  }
}
