import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId!: number; 
  searchQuery: string = ''; // Declare the searchQuery property

  userDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.fetchUserDetails(this.userId);
    });
  }

  fetchUserDetails(userId: number) {
    this.http.get<any>('https://reqres.in/api/users/' + userId).subscribe(response => {
      this.userDetails = response.data;
    });
  }

}
