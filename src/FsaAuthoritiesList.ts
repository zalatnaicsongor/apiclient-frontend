import {AuthoritiesService} from "./AuthoritiesService";
import {Authority} from "./Authority";
class FsaAuthoritiesListController {
    private onChange:Function;
    private loaded = false;
    private authorities:Array<Authority>;
    private selectedAuthority:Authority;

    constructor(authoritiesService:AuthoritiesService) {
        authoritiesService.getAuthorities().then((data) => {
            this.authorities = data;
            this.selectedAuthority = data[0];
            this.loaded = true;
            this.change();
        })
    }

    change():void {
        this.onChange({selectedAuthority: this.selectedAuthority});
    }
}

export class FsaAuthoritiesList implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            onChange: '&'
        };
        this.controller = FsaAuthoritiesListController;
        this.templateUrl = 'fsa-authorities-list.html';
    }
}