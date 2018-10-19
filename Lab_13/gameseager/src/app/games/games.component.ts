import { Component, OnInit, OnDestroy } from '@angular/core';
import { DbService } from '../myServices/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  data;
  id: number;
  constructor(private db: DbService, private route: ActivatedRoute, private router: Router) {
    this.subscription = route.params.subscribe(params => { this.id = params['id'] })
    this.router.navigate(['game'], { queryParams: { id: this.id } });
  }

  ngOnInit() {
    this.data = this.db.getData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
