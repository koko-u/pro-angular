import { FormControl } from '@angular/forms'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-toggle-list',
  templateUrl: './toggle-list.component.html',
  styleUrls: ['./toggle-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleListComponent implements OnInit, OnDestroy {
  showComplete = new FormControl<boolean>(false)

  @Output()
  toggle = new EventEmitter<boolean>()

  private _subscription: Subscription | undefined

  constructor() {}

  ngOnInit(): void {
    this._subscription = this.showComplete.valueChanges.subscribe(
      (showComplete) => this.toggle.emit(showComplete ?? false)
    )
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe()
    }
  }
}
