import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() contactDetails = {
    name: 'Sajith M',
    city: 'Malappuram',
  };

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('ngOnChanges:', simpleChanges.contactDetails.currentValue);
    console.log('ngOnChanges:', this.contactDetails);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    console.log('ngDoCheck:', this.contactDetails);
    console.log(this.contactDetails === this.contactDetails);
    this.cdRef.markForCheck();
    console.log('\n');
  }
}
