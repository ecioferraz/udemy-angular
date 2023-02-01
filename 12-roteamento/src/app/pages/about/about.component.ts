import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (res) => console.log(res['id'], res['username'], res),
    });

    this.activatedRoute.queryParams.subscribe({
      next: (res) => console.log(res),
    });

    setInterval(() => {
      this.router.navigate(['not-found']);
      // this.router.navigateByUrl('not-found');
    }, 5000);
  }
}
