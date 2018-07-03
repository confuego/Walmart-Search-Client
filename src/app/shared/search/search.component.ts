import { Component, OnInit, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ControlValueAccessor, FormBuilder, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements ControlValueAccessor, OnInit {

  public value: string;
  public disabled: boolean;
  @Input() placeholder: string;

  private onChange: (value: string) => void;
  private onTouch: (value: string) => void;
  private searchControl: FormControl = this.formBuilder.control(null);

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: string) => void): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = coerceBooleanProperty(isDisabled);
  }


  ngOnInit() {
    this.searchControl
      .valueChanges
      .pipe(debounceTime(400))
      .subscribe((searchText: string) => {
        this.writeValue(searchText);

        if (this.onChange && this.onTouch) {
          this.onChange(this.value);
          this.onTouch(this.value);
        }
      });
  }

  constructor(private formBuilder: FormBuilder) { }

}
