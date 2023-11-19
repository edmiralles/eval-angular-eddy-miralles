import { Component } from '@angular/core';
import { LISTDESBIENS } from '../bd/list.biens';
import { Model } from '../model/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  allBiens = LISTDESBIENS;
  logementSelected: Model = new Model();
  dateStart!: string;
  dateEnd!: string;
  dateToday: string;
  quantity: number = 0;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.dateToday = this.getDateActuelle();
  }

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

  getDateActuelle(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onSelectionDate() {
    if (this.dateStart && this.dateEnd) {
      const dateDebut = new Date(this.dateStart);
      const dateFin = new Date(this.dateEnd);
      
      if (dateDebut < new Date(this.dateToday)) {
        this.dateStart = this.dateToday;
      }
      if (dateFin < dateDebut) {
        this.dateEnd = this.dateStart;
      }

      const differenceTemps = dateFin.getTime() - dateDebut.getTime();
      const differenceJours = differenceTemps / (1000 * 3600 * 24);
      this.quantity = differenceJours;
    }
  }

  updateLogement() {
    this.router.navigate(['']);
    this.logementSelected.reserved = true;
  }

  calculatePrice() {
    return this.quantity * this.logementSelected.price;
  }
}