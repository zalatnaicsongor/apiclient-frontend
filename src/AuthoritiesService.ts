import {Authority} from "./Authority";
import IPromise = angular.IPromise;
export class AuthoritiesService {
    static $inject=['$http', 'apiUrl'];

    constructor(private $http:ng.IHttpService, private apiUrl:string) {
    }

    public getAuthorities():IPromise<Authority[]> {
        return this.$http({
            method: 'get',
            url: this.apiUrl + '/authorities'
        }).then(resp => {
            return resp.data;
        });
    }
}
