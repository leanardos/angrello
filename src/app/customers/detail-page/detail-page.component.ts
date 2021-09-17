import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SeoService } from './../../services/seo.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  customerId: string;
  customer: Observable<any>;

  constructor(private route: ActivatedRoute, private db: AngularFirestore, private seo: SeoService) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id');

    this.customer = this.db
      .collection('customers')
      .doc<any>(this.customerId)
      .valueChanges()
      .pipe(
        tap(customer => this.seo.generateTags({
          title: customer.name,
          description: customer.bio,
          image: customer.image
        }))
      );
  }

}
