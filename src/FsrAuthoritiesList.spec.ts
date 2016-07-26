/// <reference path="../typings/index.d.ts" />

import * as angular from "angular";
import "angular-mocks";
import IQService = angular.IQService;
import {Authority} from "./Authority";
import {FsrAuthoritiesList} from "./FsrAuthoritiesList";
import * as sinon from 'sinon';

describe('FsrAuthoritiesList component', () => {
    var getAuthoritiesDeferred:ng.IDeferred<Array<Authority>>;
    var $q:ng.IQService;
    var authorities = [new Authority(1, "name1"), new Authority(2, "name2")];

    beforeEach(() => {
        angular.module('fsrAuthoritiesListModule', ['fsr-authorities-list.html']);
        angular.mock.module('fsrAuthoritiesListModule');
        angular.mock.module({
            authoritiesService: {
                getAuthorities: () => {
                    return getAuthoritiesDeferred.promise;
                }
            }
        });


        angular.module('fsrAuthoritiesListModule').component('fsrAuthoritiesList', new FsrAuthoritiesList());
    });

    beforeEach(angular.mock.inject((_$q_:ng.IQService) => {
        $q = _$q_;
        getAuthoritiesDeferred = $q.defer();
    }));


    it('does not show the list until the results are loaded',
        angular.mock.inject(($rootScope:ng.IRootScopeService, $compile:ng.ICompileService) => {
            const element = $compile('<fsr-authorities-list></fsr-authorities-list>')($rootScope);
            $rootScope.$digest();
            const fsrAuthoritiesList = element.find('#fsrAuthoritiesList');
            expect(fsrAuthoritiesList.length).toEqual(0);
        })
    );

    it('the list is shown after the results has been loaded',
        angular.mock.inject(($rootScope:ng.IRootScopeService, $compile:ng.ICompileService) => {
            const element = $compile('<fsr-authorities-list></fsr-authorities-list>')($rootScope);
            $rootScope.$digest();
            getAuthoritiesDeferred.resolve(authorities);
            $rootScope.$digest();
            const fsrAuthoritiesList = element.find('select');
            expect(fsrAuthoritiesList.length).toEqual(1);
        })
    );

    it('the parent is notified that the selected local authority has changed when the select is initially rendered',
        angular.mock.inject(($rootScope, $compile:ng.ICompileService) => {
            $rootScope.do = sinon.stub();

            const element = $compile('<fsr-authorities-list on-change="do(selectedAuthority)"></fsr-authorities-list>')($rootScope);
            $rootScope.$digest();
            getAuthoritiesDeferred.resolve(authorities);
            $rootScope.$digest();
            sinon.assert.calledWith($rootScope.do, authorities[0]);
        })
    );
});
