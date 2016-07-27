/// <reference path="../typings/index.d.ts" />

import * as angular from "angular";
import "angular-mocks";
import IQService = angular.IQService;
import {Authority} from "./Authority";
import {FsaRatingsDistributionTable} from "./FsaRatingsDistributionTable";
import {FHISRatingsDistribution, RatingsDistribution, FHRSRatingsDistribution} from "./RatingsDistribution";

describe('FsaRatingsDistributionTable component', () => {
    var getRatingsDistributionDeferred:ng.IDeferred<RatingsDistribution>;
    var $q:ng.IQService;
    var selectedAuthority = new Authority(5, "name");

    beforeEach(() => {
        angular.module('fsaRatingsDistributionTableModule', ['fsa-ratings-distribution-table.html']);
        angular.mock.module('fsaRatingsDistributionTableModule');
        angular.mock.module({
            ratingsDistributionService: {
                getRatingsDistribution: (authorityId:number) => {
                    return getRatingsDistributionDeferred.promise;
                }
            }
        });


        angular.module('fsaRatingsDistributionTableModule').component('fsaRatingsDistributionTable', new FsaRatingsDistributionTable());
    });

    beforeEach(angular.mock.inject((_$q_:ng.IQService) => {
        $q = _$q_;
        getRatingsDistributionDeferred = $q.defer();
    }));


    it('shows a loading message while the ratings distribution is being loaded from the back-end',
        angular.mock.inject(($rootScope, $compile:ng.ICompileService) => {
            $rootScope.selectedAuthority = selectedAuthority;
            const element = $compile('<fsa-ratings-distribution-table selected-authority="selectedAuthority"></fsa-ratings-distribution-table>')($rootScope);
            $rootScope.$digest();
            const loadingMessage = element.find('h1');
            expect(loadingMessage.length).toEqual(1);
        })
    );

    it('renders the FHIS table if the retrieved ratings distribution was for a local authority where the FHIS rates establishments',
        angular.mock.inject(($rootScope, $compile:ng.ICompileService) => {
            $rootScope.selectedAuthority = selectedAuthority;
            const element = $compile('<fsa-ratings-distribution-table selected-authority="selectedAuthority"></fsa-ratings-distribution-table>')($rootScope);
            $rootScope.$digest();
            getRatingsDistributionDeferred.resolve(new FHISRatingsDistribution(40, 60, 0, 0, 0, 0));
            $rootScope.$digest();
            const fhisTable = element.find('fhis-ratings-distribution-table');
            expect(fhisTable.length).toEqual(1);
        })
    );

    it('renders the FHRS table if the retrieved ratings distribution was for a local authority where the FHRS rates establishments',
        angular.mock.inject(($rootScope, $compile:ng.ICompileService) => {
            $rootScope.selectedAuthority = selectedAuthority;
            const element = $compile('<fsa-ratings-distribution-table selected-authority="selectedAuthority"></fsa-ratings-distribution-table>')($rootScope);
            $rootScope.$digest();
            getRatingsDistributionDeferred.resolve(new FHRSRatingsDistribution(40, 60, 0, 0, 0, 0, 0));
            $rootScope.$digest();
            const fhrsTable = element.find('fhrs-ratings-distribution-table');
            expect(fhrsTable.length).toEqual(1);
        })
    );
});
