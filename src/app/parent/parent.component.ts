import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  @Input() value = '2';
  parentFood = [];
  constructor(private cd: ChangeDetectorRef) {
    if (this.value) {
      this.cd.detach();
    } else {
      this.cd.reattach();
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.parentFood = ['test'];
      this.cd.detectChanges();
      // this.cd.markForCheck();
    }, 2000);
  }
  triggerParent() {
    console.log('triggerParent');
  }
}
