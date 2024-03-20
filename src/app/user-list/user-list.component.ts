import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any>('https://reqres.in/api/users?page=1').subscribe(response => {
      this.users = response.data;
    });
  }

  goToUserDetails(userId: number) {
    this.router.navigate(['/user-details', userId]);
  }
}
