import { Component, Input, Output,EventEmitter } from "@angular/core";


@Component({
    selector: 'generic-table',
    template: `
        <h2>Directive Generic Table Data</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <td *ngFor="let item of dataTableConfig">
                        {{item.fieldName}}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of data">
                    <td *ngFor="let field of dataTableConfig">
                        <div (click)="sendMessage(item[field.fieldName])">
                            {{item[field.fieldName]}}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    `
})

export class GenericDataTableComponent{

    message: string = "Hola Mundo!"

    @Output() messageEvent = new EventEmitter<string>();

    @Input() data: any = null
    @Input() dataTableConfig: any = null

    constructor() { }

    sendMessage(msg) {
        this.messageEvent.emit(msg)
    }

}