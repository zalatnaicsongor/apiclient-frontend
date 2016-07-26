/// <reference path="../typings/index.d.ts" />

import * as angular from "angular";
import {FsrRatings} from "./FsrRatings.ts";
import {AuthoritiesService} from "./AuthoritiesService";
import {FsrAuthoritiesList} from "./FsrAuthoritiesList";

export let app = angular
    .module('fsr', [])
    .constant('apiUrl', 'http://localhost:8080')
    .service('authoritiesService', AuthoritiesService)
    .component('fsrRatings', new FsrRatings())
    .component('fsrAuthoritiesList', new FsrAuthoritiesList());