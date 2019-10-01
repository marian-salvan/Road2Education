import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image-selector-field',
  templateUrl: './image-selector-field.component.html',
  styleUrls: ['./image-selector-field.component.css',
      '../../../shared/styles/commons.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageSelectorFieldComponent,
      multi: true
    }
  ]
})
export class ImageSelectorFieldComponent implements OnInit, ControlValueAccessor {

  @Input() buttonText: string;

  onChange: (file: File) => void;
  file: File | null = null;
  imgURI: string | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }

  constructor() { }

  ngOnInit() {
  }

  onImageSelected(event: any) {
    console.log('Driving license selected');

    const reader = new FileReader();
    if (!event.target.files || !event.target.files.length) {
      return ;
    }

    const [files] = event.target.files;
    this.file = files[0];
    reader.readAsDataURL(files);

    reader.onloadend = (_) => {
      this.imgURI = reader.result as string;
    };
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: (file: File) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

}
