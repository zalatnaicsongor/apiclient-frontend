/// <reference path="../typings/index.d.ts" />

import * as angular from "angular";
import {FsaRatings} from "./FsaRatings.ts";
import {AuthoritiesService} from "./AuthoritiesService";
import {FsaAuthoritiesList} from "./FsaAuthoritiesList";
import {FsaRatingsDistributionTable} from "./FsaRatingsDistributionTable";
import {RatingsDistributionService} from "./RatingsDistributionService";
import {FHISRatingsDistributionTable} from "./FHISRatingsDistributionTable";
import {FHRSRatingsDistributionTable} from "./FHRSRatingsDistributionTable";

export let app = angular
    .module('fsa', [])
    .constant('apiUrl', 'http://localhost:8080')
    .service('authoritiesService', AuthoritiesService)
    .service('ratingsDistributionService', RatingsDistributionService)
    .component('fsaRatings', new FsaRatings())
    .component('fsaAuthoritiesList', new FsaAuthoritiesList())
    .component('fsaRatingsDistributionTable', new FsaRatingsDistributionTable())
    .component('fhisRatingsDistributionTable', new FHISRatingsDistributionTable())
    .component('fhrsRatingsDistributionTable', new FHRSRatingsDistributionTable());