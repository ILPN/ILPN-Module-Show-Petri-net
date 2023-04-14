import {Component} from '@angular/core';
import {DropFile, FD_PETRI_NET, PetriNet, PetriNetParserService} from "ilpn-components";
import {ReplaySubject} from "rxjs";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public FD_PN = FD_PETRI_NET;

    public svgHeight = '800px';

    public net$: ReplaySubject<PetriNet>;

    constructor(private parser: PetriNetParserService) {
        this.net$ = new ReplaySubject<PetriNet>(1);
    }

    public onNetUpload(files: Array<DropFile>) {
        if (files.length === 0) {
            console.debug('no files');
            return;
        }

        const net = this.parser.parse(files[0].content);
        if (net !== undefined) {
            console.debug(net);
            this.net$.next(net);
        }
    }
}
