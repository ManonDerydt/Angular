import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {outputPath} from '@angular-devkit/build-angular/src/test-utils';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  @Output() newContactEvent = new EventEmitter();

  // -- On déclare un nouvel objet vide
  nouveauContact = {
    name:null,
    email: null,
    tel:null
  };

  constructor() { }

  ngOnInit(): void {
  }
  // Cette fonction se déclenche à la soumission du formulaire
  submitContact(): void {
    // console.log(this.nouveauContact);

    /** Lorsque le formulaire est soumis,
     * j'emet un évenement qui sera écouté
     * par mon application et qui récuperera
     * les données du nouveau contact
     */

    this.newContactEvent.emit(this.nouveauContact);

    this.nouveauContact = {
      name: null,
      email: null,
      tel: null
    };
  }
}
