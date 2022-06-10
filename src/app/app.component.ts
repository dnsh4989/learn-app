import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //variables and functions..
  title: string = this.dataService.title;
  showSection: boolean = false;
  peopleData: any = [];

  constructor(public dataService: DataService) {
    console.log('constructor..');
  }

  ngOnInit(): void {
    console.log(this.dataService.getData());
    this.peopleData = this.dataService.getData();
  }

  learnMore() {
    console.log('function running');
    this.showSection = !this.showSection;
  }
}
