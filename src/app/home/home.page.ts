
import { Component, OnInit} from '@angular/core';

import {MATCH} from '../../assets/data';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor( ) {}
  public match = MATCH;
  


  ngOnInit(): void {



  }

}
