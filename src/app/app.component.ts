import { Component, OnInit } from '@angular/core';
import { PicsumService } from './services/picsum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'toolsets';

  constructor(private picsumService: PicsumService) {}

  ngOnInit(): void {
    this.picsumService.getPicsum().subscribe((d) => {
      console.log(d);
    });
  }
}
