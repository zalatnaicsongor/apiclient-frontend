export abstract class RatingsDistribution {
    static fromJSON(jsonData):RatingsDistribution {
        const data = jsonData.distribution;
        if (Object.keys(data)[0].substr(0, 4) === "fhis") {
            return new FHISRatingsDistribution(
                data['fhis_pass_en-gb'],
                data['fhis_improvement_required_en-gb'],
                data['fhis_exempt_en-gb'],
                data['fhis_awaiting_inspection_en-gb'],
                data['fhis_awaiting_publication_en-gb'],
                data['fhis_pass_and_eat_safe_en-gb']
            )
        } else {
            return new FHRSRatingsDistribution(
                data['fhrs_5_en-gb'],
                data['fhrs_4_en-gb'],
                data['fhrs_3_en-gb'],
                data['fhrs_2_en-gb'],
                data['fhrs_1_en-gb'],
                data['fhrs_0_en-gb'],
                data['fhrs_exempt_en-gb']
            )
        }
    }
}

export class FHISRatingsDistribution extends RatingsDistribution {
    pass:number = 0;
    improvementRequired:number = 0;
    exempt:number = 0;
    awaitingInspection:number = 0;
    awaitingPublication:number = 0;
    passAndEatSafe:number = 0;

    constructor(
        pass:number,
        improvementRequired:number,
        exempt:number,
        awaitingInspection:number,
        awaitingPublication:number,
        passAndEatSafe:number
    ) {
        super();
        if (pass > 0) {
            this.pass = pass;
        }
        if (improvementRequired > 0) {
            this.improvementRequired = improvementRequired;
        }
        if (exempt > 0) {
            this.exempt = exempt;
        }
        if (awaitingInspection > 0) {
            this.awaitingInspection = awaitingInspection;
        }
        if (awaitingPublication > 0) {
            this.awaitingPublication = awaitingPublication;
        }
        if (passAndEatSafe > 0) {
            this.passAndEatSafe = passAndEatSafe;
        }
    }
}

export class FHRSRatingsDistribution extends RatingsDistribution {
    fiveStars:number = 0;
    fourStars:number = 0;
    threeStars:number = 0;
    twoStars:number = 0;
    oneStar:number = 0;
    zeroStars:number = 0;
    exempt:number = 0;

    constructor(
        fiveStars:number,
        fourStars:number,
        threeStars:number,
        twoStars:number,
        oneStar:number,
        zeroStars:number,
        exempt:number
    ) {
        super();
        if (fiveStars > 0) {
            this.fiveStars = fiveStars;
        }
        if (fourStars > 0) {
            this.fourStars = fourStars;
        }
        if (threeStars > 0) {
            this.threeStars = threeStars;
        }
        if (twoStars > 0) {
            this.twoStars = twoStars;
        }
        if (oneStar > 0) {
            this.oneStar = oneStar;
        }
        if (zeroStars > 0) {
            this.zeroStars = zeroStars;
        }
        if (exempt > 0) {
            this.exempt = exempt;
        }
    }
}