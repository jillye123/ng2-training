import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-ngswitch',
  template: `
      <div>
        <p>Viewing content of first page</p>
        <p>Viewing content of second page</p>
        <p>Viewing content of third page</p>
        <p>No page selected</p>
      </div>
      <div>
        <button>Page 1</button>
        <button>Page 2</button>
        <button>Page 3</button>
      </div>
  `
})
export class NgswitchComponent {

  page : String = null;

}