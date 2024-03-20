import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent {
  searchQuery: string = '';

  constructor(private searchService: SearchService, private router: Router) { }

  search() {
    const userId = parseInt(this.searchQuery);
    if (!isNaN(userId)) {
      this.searchService.searchUserById(userId).subscribe(
        user => {
          this.router.navigate(['/user-details', user.id]);
        },
        error => {
          console.error('User not found:', error);
        }
      );
    }
  }
}
