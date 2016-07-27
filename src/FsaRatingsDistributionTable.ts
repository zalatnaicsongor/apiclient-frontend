import {Authority} from "./Authority";
import {RatingsDistributionService} from "./RatingsDistributionService";
import {RatingsDistribution, FHISRatingsDistribution} from "./RatingsDistribution";
import IScope = angular.IScope;

class FsaRatingsDistributionTableController {
    private selectedAuthority:Authority;
    private loaded = false;
    private ratingsDistribution:RatingsDistribution;
    private isFHIS = false;

    constructor(ratingsDistributionService:RatingsDistributionService, $scope:IScope) {
        $scope.$watch('$ctrl.selectedAuthority', (newValue) => {
            if (newValue != null) {
                this.loaded = false;
                this.isFHIS = false;
                ratingsDistributionService.getRatingsDistribution(this.selectedAuthority.id).then((data) => {
                    if (data instanceof FHISRatingsDistribution) {
                        this.isFHIS = true;
                    }
                    this.loaded = true;
                    this.ratingsDistribution = data;
                })
            }
        }, true);
    }
}

export class FsaRatingsDistributionTable implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            selectedAuthority: '<'
        };
        this.controller = FsaRatingsDistributionTableController;
        this.templateUrl = 'fsa-ratings-distribution-table.html';
    }
}