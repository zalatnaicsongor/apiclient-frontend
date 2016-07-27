/// <reference path="../typings/index.d.ts" />

import * as angular from "angular";
import "angular-mocks";
import {FsaRatings} from "./FsaRatings";

describe('FsaRatings component', () => {
    beforeEach(() => {
        angular
            .module('fsaRatingsModule', ['fsa-ratings.html'])
            .component('fsaRatings', new FsaRatings());
        angular.mock.module('fsaRatingsModule');
    });

    it('renders an FsaAuthoritiesList and an FsaRatingsDistributionTable component',
        angular.mock.inject(($rootScope:ng.IRootScopeService, $compile:ng.ICompileService) => {
            const element = $compile('<fsa-ratings></fsa-ratings>')($rootScope);
            $rootScope.$digest();
            const fsaAuthoritiesList = element.find('fsa-authorities-list');
            const fsaRatingsDistributionTable = element.find('fsa-ratings-distribution-table');
            expect(fsaAuthoritiesList).not.toEqual({});
            expect(fsaRatingsDistributionTable).not.toEqual({});
        })
    );
});
