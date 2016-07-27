import {FHISRatingsDistribution} from "./RatingsDistribution";

class FHISRatingsDistributionTableController {
    private distribution:FHISRatingsDistribution;
}

export class FHISRatingsDistributionTable implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            distribution: '<'
        };
        this.controller = FHISRatingsDistributionTableController;
        this.templateUrl = 'fhis-ratings-distribution-table.html';
    }
}