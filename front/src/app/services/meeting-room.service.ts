import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {

  constructor(private http: HttpClient) { }

  create(room: any) {
    room.startHour = `${room.date} ${room.startHour}`
    room.endHour = `${room.date} ${room.endHour}`
    return this.http.post(`${env.baseApiUrl}/room`, room);
  }
  update(room: any) {
    room.startHour = `${room.date} ${room.startHour}`
    room.endHour = `${room.date} ${room.endHour}`
    return this.http.put(`${env.baseApiUrl}/room/${room.id}`, room);
  }
  delete(id: any) {
    return this.http.delete(`${env.baseApiUrl}/room/${id}`);
  }
  findById(id: any) {
    return this.http.get(`${env.baseApiUrl}/room/${id}`).pipe(
      map((res: any) => {
        return this.formatResponse(res);
      })
    )
  }
  findAll() {
    return this.http.get(`${env.baseApiUrl}/room`)
  }

  formatResponse(res: any) {
    const startTime = new Date(res.startHour);
    const endTime = new Date(res.endHour);

    const startHour = startTime.getHours().toString().padStart(2, '0')
    const startMinute = startTime.getMinutes().toString().padStart(2, '0');

    const endHour = endTime.getHours().toString().padStart(2, '0')
    const endMinute = endTime.getMinutes().toString().padStart(2, '0');

    return {id: res.id,name: res.name, date: res.date, startHour: `${startHour}:${startMinute}`, endHour: `${endHour}:${endMinute}` };
  }
}
