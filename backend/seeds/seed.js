
exports.seed = function(knex) {
  return knex('incoming_message_audit').del()
    .then(function () {
      return knex('incoming_message_audit').insert([
        {
          train_id: '94',
          nominal_date: '2021-08-23',
          country: 'SE',
          timestamp: '2021-08-24 08:34:12.159891+00',
          message: '<TrainRunningInformation><trainIdent><pathIdent>000094</pathIdent><scheduledDepartureDateTime>2021-08-23T17:27:00</scheduledDepartureDateTime><pathDepartureLocation><countryCode>SE</countryCode><locationPrimaryCode>99999</locationPrimaryCode><locationSubsidiaryCode><locationSubsidiaryCodeType>05</locationSubsidiaryCodeType><value>CST</value></locationSubsidiaryCode></pathDepartureLocation></trainIdent><trainLocationReport><locationIdent><countryCode>SE</countryCode><locationPrimaryCode>99999</locationPrimaryCode><locationSubsidiaryCode><locationSubsidiaryCodeType>05</locationSubsidiaryCodeType><value>Kmb</value></locationSubsidiaryCode></locationIdent><trainLocationStatusReport><trainLocationStatus>04</trainLocationStatus><timeAtLocation>2021-08-24T10:34:00</timeAtLocation><trainDelayAgainstBooked>63</trainDelayAgainstBooked></trainLocationStatusReport></trainLocationReport><trainId>94</trainId><nominalDate>2021-08-23</nominalDate></TrainRunningInformation>'
        },
        {
          train_id: '94',
          nominal_date: '2021-08-23',
          country: 'SE',
          timestamp: '2021-08-24 08:34:12.260923+00',
          message: '<AnnoInformationMessage><report/><changeReport><scheduledDepartureDateTime>2021-08-23</scheduledDepartureDateTime><activity><locationCode>Kmb</locationCode><track>11</track><otn>94</otn></activity></changeReport><trainId>94</trainId><nominalDate>2021-08-23</nominalDate></AnnoInformationMessage>'
        },
        {
          train_id: '94',
          nominal_date: '2021-08-24',
          country: 'SE',
          timestamp: '2021-08-24 08:34:12.551609+00',
          message: '<AnnoInformationMessage><report><reportType>ArrivalDeparture</reportType><reportInfo><activityId>1500adde-0a5d-1766-08d9-5a0250bc2b08</activityId><locationCode>Kmb</locationCode><activityType>Departure</activityType><operativeTrain><departureDateOTN>2021-08-24</departureDateOTN><trainBusinessIdent>94</trainBusinessIdent><departureDateBusinessIdent>2021-08-23</departureDateBusinessIdent><otn>94</otn></operativeTrain><informationOwner>VY</informationOwner><informationOwnerId/><trainOwner>VY</trainOwner><operator>VY</operator><reportActivityType>Departure</reportActivityType><automatic>true</automatic></reportInfo><timeAtLocationReport/><trackReport/><changeOfTrackReport/><arrivalDepartureReport><dateTime>2021-08-24T10:34:11.483+02:00</dateTime></arrivalDepartureReport></report><changeReport/><trainId>94</trainId><nominalDate>2021-08-24</nominalDate></AnnoInformationMessage>'
        },
        {
          train_id: '94',
          nominal_date: '2021-08-24',
          country: 'SE',
          timestamp: '2021-08-24 08:34:12.553547+00',
          message: '<AnnoInformationMessage><report><reportType>Time</reportType><reportInfo><activityId>1500adde-0a5d-1766-08d9-5a0250bc2b08</activityId><locationCode>Kmb</locationCode><activityType>Departure</activityType><operativeTrain><departureDateOTN>2021-08-24</departureDateOTN><trainBusinessIdent>94</trainBusinessIdent><departureDateBusinessIdent>2021-08-23</departureDateBusinessIdent><otn>94</otn></operativeTrain><informationOwner>VY</informationOwner><informationOwnerId/><trainOwner>VY</trainOwner><operator>VY</operator><reportActivityType>Departure</reportActivityType><automatic>true</automatic></reportInfo><timeAtLocationReport><relativeTime>63</relativeTime><dateTime>2021-08-24T10:34:00</dateTime><dateTimeWithSeconds>2021-08-24T10:34:11</dateTimeWithSeconds></timeAtLocationReport><trackReport/><changeOfTrackReport/><arrivalDepartureReport/></report><changeReport/><trainId>94</trainId><nominalDate>2021-08-24</nominalDate></AnnoInformationMessage>'
        },
        {
          train_id: '94',
          nominal_date: '2021-08-24',
          country: 'SE',
          timestamp: '2021-08-24 08:34:12.555136+00',
          message: '<AnnoInformationMessage><report><reportType>ArrivalDeparture</reportType><reportInfo><activityId>1500adde-0a5d-1766-08d9-5a0250bc2b08</activityId><locationCode>Kmb</locationCode><activityType>Departure</activityType><operativeTrain><departureDateOTN>2021-08-24</departureDateOTN><trainBusinessIdent>94</trainBusinessIdent><departureDateBusinessIdent>2021-08-23</departureDateBusinessIdent><otn>94</otn></operativeTrain><informationOwner>VY</informationOwner><informationOwnerId/><trainOwner>VY</trainOwner><operator>VY</operator><reportActivityType>Departure</reportActivityType><automatic>true</automatic></reportInfo><timeAtLocationReport/><trackReport/><changeOfTrackReport/><arrivalDepartureReport><dateTime>2021-08-24T10:34:11.513+02:00</dateTime></arrivalDepartureReport></report><changeReport/><trainId>94</trainId><nominalDate>2021-08-24</nominalDate></AnnoInformationMessage>'
        },
      ]);
    });
};
