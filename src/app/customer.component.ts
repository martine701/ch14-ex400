import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-customer',
  template: `
    <div class="customer">{{ customer.name }} | {{ customer.city }}</div>
  `,
  styles: ['.customer {background-color:#fefbd8;margin:10px;padding:10px}'],
})
export class CustomerComponent {
  @Input() customer:any;
}

