import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.html',
  styleUrls: ['./app-list.css']
})
export class AppListComponent {
  apps: any = [
    {
      title: 'itau',
      image: 'itau'
    },
    {
      title: 'itau cartões',
      image: 'cartoes'
    },
    {
      title: 'íon',
      image: 'ion'
    },
    {
      title: 'itau personnalité',
      image: 'personnalite'
    },
    {
      title: 'empresas',
      image: 'empresas'
    }
  ]
}
