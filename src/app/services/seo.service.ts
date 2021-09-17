import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta, private router: Router) { }

  generateTags({ title = '', description = '', image = ''}) {
    this.title.setTitle(title);
    this.meta.addTags([
      // These for the open graph
      { name: 'og:url', content: `https://firestarter.fireship.io${this.router.url}` },
      { name: 'og:url', content: title },
      { name: 'og:url', content: description },
      { name: 'og:url', content: image },
      // These for Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@fireship_dev' },

    ])
  }
}
