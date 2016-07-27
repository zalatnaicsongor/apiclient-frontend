;import IPromise = angular.IPromise;
import {RatingsDistribution} from "./RatingsDistribution";

export class RatingsDistributionService {
    static $inject=['$http', 'apiUrl'];

    constructor(private $http:ng.IHttpService, private apiUrl:string) {
    }

    public getRatingsDistribution(authorityId:number):IPromise<RatingsDistribution> {
        return this.$http({
            method: 'get',
            url: this.apiUrl + '/authorities/' + authorityId + "/ratings_distribution"
        }).then(resp => {
            return RatingsDistribution.fromJSON(resp.data);
        });
    }
}
