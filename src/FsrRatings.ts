import {AuthoritiesService} from "./AuthoritiesService";
class FsrRatingsController {

    constructor() {
    }
}

export class FsrRatings implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {};
        this.controller = FsrRatingsController;
        this.templateUrl = 'fsr-ratings.html';
    }
}


