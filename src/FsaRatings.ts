import {Authority} from "./Authority";

class FsaRatingsController {
    private selectedAuthority:Authority;

    constructor() {
    }

    updateSelectedAuthority(authority:Authority) {
        this.selectedAuthority = authority;
    }
}

export class FsaRatings implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {};
        this.controller = FsaRatingsController;
        this.templateUrl = 'fsa-ratings.html';
    }
}


