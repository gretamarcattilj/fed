import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent implements OnInit {
  colore2: string;
  groups: string[] = ["red", "blue", "green", "yellow"];
  personeRed: string[] = ["Albs", "Grace", "Mauritius"];
  personeBlue: string[] = ["Rosalba", "Auròra", "Luca"];
  personeGreen: string[] = ["Skeet", "Nadia", "  Yun", "Nigiol"];
  personeYellow: string[] = ["Marco", "Jacopo", "Scimmi"];
  constructor() {
  }

  ngOnInit() {
  }

  assegna(colore: HTMLInputElement) {
    this.colore2 = colore.value;
  }
}
