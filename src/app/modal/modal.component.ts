import { Component, Input } from '@angular/core';
import { LISTDESBIENS } from '../bd/list.biens';
import { Model } from '../model/model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Input() logementSelected: any;
  allBiens = LISTDESBIENS;

}
