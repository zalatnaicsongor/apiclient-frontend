/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {FsrRatings} from './FsrRatings';

describe('FsrRatings component', () => {
    beforeEach(() => {
        angular
            .module('fsrRatingsModule', ['fsr-ratings.html'])
            .component('fsrRatings', new FsrRatings());
        angular.mock.module('fsrRatingsModule');
    });

    it('renders an FsrAuthorityList and an FsrRatingsDistributionTable component',
        angular.mock.inject(($rootScope:ng.IRootScopeService, $compile:ng.ICompileService) => {
            const element = $compile('<fsr-ratings></fsr-ratings>')($rootScope);
            $rootScope.$digest();
            const fsrAuthorityList = element.find('fsr-authority-list');
            const fsrRatingsDistributionTable = element.find('fsr-ratings-distribution-table');
            expect(fsrAuthorityList).not.toEqual({});
            expect(fsrRatingsDistributionTable).not.toEqual({});
        })
    );
});
