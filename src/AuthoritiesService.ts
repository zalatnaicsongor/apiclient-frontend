import {Authority} from "./Authority";
export class AuthoritiesService {
    static $inject=['$http'];

    constructor(private $http:ng.IHttpService) {

    }

    public getAuthorities():Authority[] {
        return [];
    }
}