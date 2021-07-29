import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { PoDynamicField } from '@po-ui/ng-components/lib/components/po-dynamic/po-dynamic-field.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [   
    {
      label: 'Room', subItems: [
        {label: "Create", link: "/create"},
        {label: "List Rooms", link: "/rooms"}
      ]
    }
  ];

  fields: PoDynamicField[] = [

  ];

  private onClick() {

  }

}
