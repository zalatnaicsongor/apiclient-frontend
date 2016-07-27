import {FHRSRatingsDistribution} from "./RatingsDistribution";

class FHRSRatingsDistributionTableController {
    private distribution:FHRSRatingsDistribution;
}

export class FHRSRatingsDistributionTable implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            distribution: '<'
        };
        this.controller = FHRSRatingsDistributionTableController;
        this.templateUrl = 'fhrs-ratings-distribution-table.html';
    }
}