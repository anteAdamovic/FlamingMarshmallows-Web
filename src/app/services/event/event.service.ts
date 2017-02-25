import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventService {
    private loginEvents: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    getLoginEmitter(): EventEmitter<any> {
        return this.loginEvents;
    }

    emitLoginEvent(): void {
        this.loginEvents.emit();
    }

}
