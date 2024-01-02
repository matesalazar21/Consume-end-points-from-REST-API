import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.page.html',
  styleUrls: ['./page01.page.scss'],
})
export class Page01Page implements OnInit {
  @ViewChild(IonList) ionList: IonList | undefined; //decorador de angular

  users: Observable<any> | undefined;
  constructor(private dataService: DataService) {} //los servicios se inyectan en el constructor

  ngOnInit() {
    this.users = this.dataService.getUsers(); //recoge la info del getUsuarios
  }
}
