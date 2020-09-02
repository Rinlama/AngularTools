import { Component, OnInit } from '@angular/core';
import { PicsumService } from '../services/picsum.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-picsum',
  templateUrl: './picsum.component.html',
  styleUrls: ['./picsum.component.css'],
})
export class PicsumComponent implements OnInit {
  picsum: Observable<any>;

  constructor(private picsumService: PicsumService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.picsum = this.picsumService.getPicsum();
  }
}
