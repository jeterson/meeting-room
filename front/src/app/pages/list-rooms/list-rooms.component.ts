import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoDialogService, PoNotificationService, PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { MeetingRoomService } from 'src/app/services/meeting-room.service';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  constructor(private poNotificationServic: PoNotificationService, private poDialogService: PoDialogService, private router: Router, private service: MeetingRoomService) { }

  rooms: any[] = []

  public readonly actions: Array<PoPageAction> = [
    { label: 'Create', url: '/create' },
  ];

  tableActions: Array<PoTableAction> = [
    {
      action: this.edit.bind(this),
      label: 'Edit',
    },
    {
      action: this.dialogRemove.bind(this),
      label: 'Remove',
    },
  ];


  ngOnInit(): void {
    this.listAllRooms();
  }


  edit(row: any) {
    this.router.navigateByUrl('/create/' + row.id)
  }

  remove(row: any) {
    this.service.delete(row.id).subscribe(res => {
      this.poNotificationServic.success('Register has been deleted');
      this.listAllRooms();
    })
  }

  dialogRemove(row: any) {
    this.poDialogService.confirm({
      confirm: this.remove.bind(this, row),
      message: 'Desire remove that register ?',
      title: 'Warning'
    })
  }

  listAllRooms() {
    this.service.findAll().subscribe((res: any) => {
      this.rooms = res._embedded.room.map((room: any) => {

        const response = this.service.formatResponse(room)
        return response;
      })
    })
  }

}
