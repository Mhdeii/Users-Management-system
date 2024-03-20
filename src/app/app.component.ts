import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];
  totalUsers: number = 0;
  pageSize: number = 6;
  loading: boolean = false;
  searchQuery: string = '';

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUsers();
    this.route.queryParams.subscribe(params => {
      const userId = params['id'];
      if (userId) {
        this.router.navigate(['user-details', userId]);
      }
    });
  }

  getUsers(page: number = 1) {
    this.loading = true;
    this.userService.getUsers(page).subscribe((data: any) => {
      this.users = data.data;
      this.totalUsers = data.total;
      this.loading = false;
    });
  }

  navigateToUserDetails(userId: number) {
    this.router.navigate(['user-details', userId]);
  }

  searchUser() {
    if (this.searchQuery) {
      this.router.navigate([], { queryParams: { id: this.searchQuery } });
    }
  }
}
