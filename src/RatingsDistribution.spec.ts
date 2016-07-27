/// <reference path="../typings/index.d.ts" />

import "angular-mocks";
import {RatingsDistribution, FHISRatingsDistribution, FHRSRatingsDistribution} from "./RatingsDistribution";

describe('RatingsDistribution initialization method', () => {
    it('construct an FHIS specific RatingsDistribution if the data was for a local authoirty where FHIS rates the establishments',() => {
        const result = RatingsDistribution.fromJSON({distribution: {'fhis_pass_en-gb': 100}});
        expect(result instanceof FHISRatingsDistribution).toBeTruthy();
    });

    it('construct an FHRS specific RatingsDistribution if the data was for a local authoirty where FHRS rates the establishments',() => {
        const result = RatingsDistribution.fromJSON({distribution: {'fhrs_5_en-gb': 100}});
        expect(result instanceof FHRSRatingsDistribution).toBeTruthy();
    });
});
