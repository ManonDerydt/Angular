import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @Input() contactProfil = null;

  constructor() { }

  ngOnInit(): void {
  }

}
