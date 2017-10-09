import { Component, OnInit } from '@angular/core';
import { ChienService } from '../shared/chien/chien.service';
import { Chien } from '../shared/chien';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chien',
  templateUrl: './chien.component.html',
  styleUrls: ['./chien.component.css']
})
export class ChienComponent implements OnInit {
  chien:Chien;

  constructor(private route:ActivatedRoute, private chienService:ChienService) {}
  

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.chienService.getChien(params.id)
      .then((chienDB) => this.chien = chienDB);
      });
  }

}
