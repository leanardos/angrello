import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-shell-navigation',
  templateUrl: './shell-navigation.component.html',
  styleUrls: ['./shell-navigation.component.scss']
})
export class ShellNavigationComponent implements OnInit {

  // "Handset" breakpoint is pretty usefull one if you are targeting Desktop and Mobile
  isHandset$: Observable<boolean> = this.breakepointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches), // as a result we get additional info other than the matches but in our case we only need this matches 
      shareReplay() // we will be going to subscribe to this observable multiple times using async pipe and we want to make sure that all those
      // subscribtions are listening to the SAME, most recent value from this observable
    )


  // BreakpointObserver: this will give us access to an observable that listens to different breakpoints 
  // depending on how you want to react to different viewport sizes
  constructor(private breakepointObserver: BreakpointObserver) { 
    this.breakepointObserver.observe([Breakpoints.Handset])
        .subscribe(result => console.log(result))
  }

  ngOnInit(): void {
  }

}
