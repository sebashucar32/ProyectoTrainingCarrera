import { Injectable } from '@angular/core';
import { map, Observable, Observer } from 'rxjs';
import { AnonymousSubject, Subject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;
const WEBSOCKET_URL = `${base_url}/retrieve`;

@Injectable({
  providedIn: 'root'
})

export class WebsocketServiceService {
  private subject: AnonymousSubject<MessageEvent> | undefined;
  public messages: Subject<any> | undefined;
  constructor() {}

  public iniciar(aggregateId: String) {
    this.messages = <Subject<any>>this.connect(aggregateId).pipe(
      map((response: MessageEvent): any => {
        return JSON.parse(response.data);
      })
    );
  }

  public connect(aggregateId: String) {
    if (!this.subject) {
      this.subject = this.create(`${WEBSOCKET_URL}/${aggregateId}`);
      console.log('Successfully connected: ' + `${WEBSOCKET_URL}/${aggregateId}`);
    }
    return this.subject;
  }

  private create(base_url: string): AnonymousSubject<MessageEvent> {
    let ws = new WebSocket(base_url);
    let observable = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });

    let observer:any = {
      error: null,
      complete: null,
      next: (data: Object) => {
        console.log('Message sent to websocket: ', data);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
    };
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}
