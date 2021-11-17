import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  users = [
    {
      nom: 'nomuser1',
      prenom: 'nicolas',
      enfants: [],
    },
    {
      nom: 'nomuser2',
      prenom: 'Alexandra',
      enfants: ['2021-11-03', '2021-11-03'],
    },
  ];

  ajouterUser(user: any) {
    this.users.push(user);
  }
  ngOnInit(): void {}
}
