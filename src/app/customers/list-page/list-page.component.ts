import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SeoService } from './../../services/seo.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  customers;

  constructor(private seo: SeoService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Customer List',
      description: 'A list filled with customers'
    });

    this.customers = this.db.collection('customers').valueChanges({ idField: 'id' });
  }

}
