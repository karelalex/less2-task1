import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'less2-task1';
  colors = {
    red: 'rgb(255, 0, 0)',
    orange: 'rgb(255, 127, 0)',
    yellow: 'rgb(255, 255, 0)',
    green: 'rgb(0, 255, 0)',
    blue: 'rgb(0, 0, 255)',
    indigo: 'rgb(46, 43, 95)',
    violet: 'rgb(139, 0, 255)'
  };
  tableClass = 'normal-table';
  changeClass = () => {
    this.tableClass = this.tableClass === 'normal-table' ? 'hidden-table' : 'normal-table';
  }

}
