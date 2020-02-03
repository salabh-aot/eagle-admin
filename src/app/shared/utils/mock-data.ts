
import { ISearchResults, SearchResults } from 'app/models/search';
import { FullProject } from 'app/models/fullProject';

export const AjaxData: SearchResults[] = [{
         _schemaName: '0',
         data: {
           searchResults: [
             {
               _id: '58851197aaecd9001b8227cc',
               currentPhase: '58851198aaecd9001b822966',
               _schemaName: 'Project',
               dateCompletedEst: null,
               dateStartedEst: null,
               dateCompleted: null,
               dateStarted: null,
               isPublished: true,
               delete: ['project-system-admin', 'project-intake'],
               write: [
                 'project-admin',
                 'project-intake',
                 'project-team',
                 'project-system-admin'
               ],
               read: [
                 'project-proponent',
                 'project-admin',
                 'system-eao',
                 'project-intake',
                 'project-team',
                 'project-system-admin',
                 'public'
               ],
               updatedBy: '58850fa2aaecd9001b8088a7',
               epicStream: '',
               tailingsImpoundments: '',
               memPermitID: '',
               ownership: '',
               projectNotes: '',
               eaNotes: '',
               eaIssues: '',
               eaActive: '',
               teamNotes: '',
               administrativeAssistant: '',
               projectAssistant: '',
               projectAnalyst: '',
               proponentInviteeRole: '',
               eaoInviteeRole: '',
               sectorRole: 'mines',
               proponentAdminRole: 'proponent-lead',
               adminRole: 'project-system--admin',
               stream: null,
               phases: [
                 '58851198aaecd9001b822961',
                 '58851198aaecd9001b822962',
                 '58851198aaecd9001b822963',
                 '58851198aaecd9001b822964',
                 '58851198aaecd9001b822965',
                 '58851198aaecd9001b822966'
               ],
               locSpatial: '',
               __v: 10,
               currentPhaseCode: 'decision',
               orgCode: '',
               currentLegislationYear: 'legislation_2002',
               legislationYearList: [2002, 2018],
               legislation_2002: {
                 CEAAInvolvement: {
                   _id: '5e1faae464a88e5b703c4d9f',
                   _schemaName: 'List',
                   type: 'ceaaInvolvements',
                   legislation: 2002,
                   name: 'Coordinated',
                   listOrder: 30,
                   read: ['public', 'staff', 'sysadmin'],
                   write: ['staff', 'sysadmin']
                 },
                 CELead: 'Compliance & Enforcement Branch',
                 CELeadEmail: 'eao.compliance@gov.bc.ca',
                 CELeadPhone: '250-387-0131',
                 centroid: [-120.4667, 50.6333],
                 description:
                   'KGHM Ajax Mining Inc.  proposes to develop a new open-pit copper and gold mine with a production capacity of up to 24 million tonnes of ore per year. The mine\'s life expectancy is 23 years.',
                 eacDecision: {
                   _id: '5e1faae464a88e5b703c4db2',
                   _schemaName: 'List',
                   type: 'eaDecisions',
                   legislation: 2002,
                   name: 'Certificate Refused',
                   listOrder: 20,
                   read: ['public', 'staff', 'sysadmin'],
                   write: ['staff', 'sysadmin']
                 },
                 location: 'Southern Interior BC',
                 projectLeadId: '5c33a481c99e4d002498eeee',
                 projectLead: 'Nathan Braun',
                 projectLeadEmail: 'Nathan.Braun@gov.bc.ca',
                 projectLeadPhone: '778-698-9280',
                 proponent: {
                   _id: '58850f69aaecd9001b8085cd',
                   _schemaName: 'Organization',
                   description: '',
                   name: 'KGHM Ajax Mining Incorporated',
                   code: 'kghm-ajax-mining-incorporated',
                   updatedBy: '58850f2faaecd9001b8083b6',
                   addedBy: '58850f2faaecd9001b8083b6',
                   dateUpdated: '2017-01-22T20:00:41.558Z',
                   dateAdded: '2017-01-22T20:00:41.558Z',
                   users: [],
                   country: '',
                   postal: '',
                   province: '',
                   city: '',
                   address2: '',
                   address1: '',
                   companyType: 'Proponent/Certificate Holder',
                   parentCompany: '',
                   registeredIn: '',
                   companyLegal: '',
                   website: '',
                   company: 'KGHM Ajax Mining Incorporated',
                   __v: 0
                 },
                 region: 'Thompson-Nicola',
                 responsibleEPDId: '5c33a481c99e4d002498eeee',
                 responsibleEPD: 'Nathan Braun',
                 responsibleEPDEmail: 'Nathan.Braun@gov.bc.ca',
                 responsibleEPDPhone: '778-698-9280',
                 type: 'Mines',
                 legislation: '2002 Environmental Assessment Act',
                 addedBy: '58850f2faaecd9001b8083b6',
                 build: 'new',
                 CEAALink:
                   'http://www.ceaa-acee.gc.ca/050/details-eng.cfm?evaluation=62225',
                 code: 'ajax-mine',
                 commodity: '',
                 currentPhaseName: 'Decision',
                 dateAdded:
                   'Sun Jan 22 2017 12:10:00 GMT-0800 (Pacific Standard Time)',
                 dateCommentsClosed: null,
                 dateCommentsOpen: null,
                 dateUpdated: '2019-01-10T21:03:15.945Z',
                 decisionDate: '2017-12-13T08:00:00.000Z',
                 duration: '90',
                 eaoMember: 'project-eao-staff',
                 fedElecDist: '',
                 intake: {
                   section7optin: '',
                   operatingjobsNotes: '',
                   operatingjobs: '',
                   meetsrprcriteria: '',
                   meetsCEAACriteria: '',
                   lifespan: '',
                   investmentNotes: '',
                   investment: '795000000',
                   contactedFirstNations: '',
                   contactedCEAA: '',
                   constructionjobsNotes: '',
                   constructionjobs: '',
                   affectedFirstNations: ''
                 },
                 isTermsAgreed: false,
                 primaryContact: null,
                 proMember: 'proponent-team',
                 provElecDist: 'FRN; KAS',
                 sector: 'Mineral Mines',
                 shortName: 'ajax-mine',
                 status: 'In Progress',
                 substitution: false,
                 eaStatusDate: null,
                 eaStatus: null,
                 projectStatusDate: null,
                 substantiallyDate: null,
                 substantially: null,
                 disputeDate: null,
                 dispute: false,
                 activeDate: null,
                 activeStatus: null,
                 review180Start: null,
                 review45Start: null,
                 reviewSuspensions: [],
                 reviewExtensions: [],
                 projLead: null,
                 execProjectDirector: null,
                 complianceLead: null,
                 groups: null,
                 name: 'Ajax Mine',
                 legislationYear: 2002,
                 overallProgress: 0,
                 nameSearchTerms: ['Aj', 'Aja', 'Ajax', 'Mi', 'Min', 'Mine'],
                 nature: 'New Construction'
               },
               pins: [],
               pinsHistory: null,
               legislation_1996: {
                 CELead: '',
                 CELeadEmail: '',
                 CELeadPhone: '',
                 centroid: [],
                 description: '',
                 location: '',
                 projectLeadId: null,
                 projectLead: '',
                 projectLeadEmail: '',
                 projectLeadPhone: '',
                 region: '',
                 responsibleEPDId: null,
                 responsibleEPD: '',
                 responsibleEPDEmail: '',
                 responsibleEPDPhone: '',
                 type: '',
                 legislation: '',
                 addedBy: '',
                 build: '',
                 CEAALink: '',
                 code: '',
                 commodity: '',
                 currentPhaseName: '',
                 dateAdded: '',
                 dateCommentsClosed: '',
                 dateCommentsOpen: '',
                 dateUpdated: null,
                 decisionDate: null,
                 duration: '',
                 eaoMember: '',
                 fedElecDist: '',
                 intake:  {},
                 isTermsAgreed: false,
                 primaryContact: '',
                 proMember: '',
                 provElecDist: '',
                 sector: '',
                 shortName: '',
                 status: '',
                 substitution: false,
                 eaStatusDate: null,
                 eaStatus: '',
                 projectStatusDate: null,
                 substantiallyDate: null,
                 substantially: false,
                 disputeDate: null,
                 dispute: false,
                 activeDate: null,
                 activeStatus: '',
                 review180Start: null,
                 review45Start: null,
                 reviewSuspensions: [],
                 reviewExtensions: [],
                 projLead: null,
                 execProjectDirector: null,
                 complianceLead: null,
                 groups: [],
                 nameSearchTerms: null
               },
               legislation_2018: {
                 CEAAInvolvement: {
                   _id: '5e1faae464a88e5b703c4d9f',
                   _schemaName: 'List',
                   type: 'ceaaInvolvements',
                   legislation: 2002,
                   name: 'Coordinated',
                   listOrder: 30,
                   read: ['public', 'staff', 'sysadmin'],
                   write: ['staff', 'sysadmin']
                 },
                 CELead: '',
                 CELeadEmail: '',
                 CELeadPhone: '',
                 centroid: [-120.4667, 50.6333],
                 description:
                   'KGHM Ajax Mining Inc.  proposes to develop a new open-pit copper and gold mine with a production capacity of up to 24 million tonnes of ore per year. The mine\'s life expectancy is 23 years.',
                 eacDecision: {
                   _id: '5e1faae464a88e5b703c4db2',
                   _schemaName: 'List',
                   type: 'eaDecisions',
                   legislation: 2002,
                   name: 'Certificate Refused',
                   listOrder: 20,
                   read: ['public', 'staff', 'sysadmin'],
                   write: ['staff', 'sysadmin']
                 },
                 location: 'Southern Interior BC',
                 projectLeadId: '5d8d48c7aae358f02271fbc0',
                 projectLead: '',
                 projectLeadEmail: '',
                 projectLeadPhone: '',
                 proponent: {
                   _id: '58850f68aaecd9001b808530',
                   _schemaName: 'Organization',
                   description: '',
                   name: '445026 BC Limited',
                   code: '445026-bc-limited',
                   updatedBy: '58850f2faaecd9001b8083b6',
                   addedBy: '58850f2faaecd9001b8083b6',
                   dateUpdated: '2017-01-22T20:00:40.266Z',
                   dateAdded: '2017-01-22T20:00:40.266Z',
                   users: [],
                   country: 'Canada',
                   postal: '',
                   province: 'British Columbia',
                   city: '',
                   address2: '',
                   address1: '',
                   companyType: 'Proponent/Certificate Holder',
                   parentCompany: '',
                   registeredIn: '',
                   companyLegal: '',
                   website: '',
                   company: '445026 BC Limited',
                   __v: 0,
                   read: ['sysadmin', 'staff']
                 },
                 region: 'Thompson-Nicola',
                 responsibleEPDId: '58d1786001d23400196a5736',
                 responsibleEPD: '',
                 responsibleEPDEmail: '',
                 responsibleEPDPhone: '',
                 type: 'Mines',
                 legislation: '2018 Environmental Assessment Act',
                 addedBy: '',
                 build: 'new',
                 CEAALink:
                   'http://www.ceaa-acee.gc.ca/050/details-eng.cfm?evaluation=62225',
                 code: '',
                 commodity: '',
                 currentPhaseName: '',
                 dateAdded: '',
                 dateCommentsClosed: '',
                 dateCommentsOpen: '',
                 dateUpdated: null,
                 decisionDate: '2017-12-13T08:00:00.000Z',
                 duration: '',
                 eaoMember: '',
                 fedElecDist: '',
                 intake: { investment: '795000000', investmentNotes: '' },
                 isTermsAgreed: false,
                 primaryContact: '',
                 proMember: '',
                 provElecDist: '',
                 sector: 'Mineral Mines',
                 shortName: '',
                 status: 'In Progress',
                 substitution: false,
                 projectStatusDate: null,
                 substantially: true,
                 activeDate: null,
                 activeStatus: '',
                 review180Start: null,
                 review45Start: null,
                 reviewSuspensions: [],
                 reviewExtensions: [],
                 projLead: null,
                 execProjectDirector: null,
                 complianceLead: null,
                 groups: [],
                 name: 'Ajax Mine',
                 legislationYear: 2018,
                 nameSearchTerms: ['Aj', 'Aja', 'Ajax', 'Mi', 'Min', 'Mine'],
                 nature: 'New Construction',
                 responsibleEPDObj: {
                   _id: '58d1786001d23400196a5736',
                   userGuid: 'esm-pum2znw7fk51f_pemt_fhwuj',
                   username: 'allen-nicholas',
                   displayName: 'Allen Nicholas',
                   _schemaName: 'User',
                   updatedBy: '58850fa2aaecd9001b8088a7',
                   addedBy: '58850fa2aaecd9001b8088a7',
                   dateUpdated: '2017-03-21T19:04:36.165Z',
                   dateAdded: '2017-03-21T19:04:36.165Z',
                   userType: '',
                   viaMail: false,
                   viaEmail: true,
                   signature: null,
                   notes: '',
                   postalCode: 'V0B 2L2',
                   country: 'Canada',
                   province: 'British Columbia',
                   city: 'Windermere',
                   address2: '',
                   address1: '3050 Highway 93/95',
                   cellPhoneNumber: '',
                   faxNumber: '',
                   department: '',
                   salutation: '',
                   proponentFlag: false,
                   eaoStaffFlag: false,
                   phoneNumber: '250-342-6301',
                   homePhoneNumber: '',
                   title: 'Councillor',
                   personId: null,
                   orgName: '?Akisq\'nuk First Nation',
                   org: '58850f68aaecd9001b80852f',
                   created: '2017-03-21T19:00:48.557Z',
                   oldroles: [],
                   roles: [],
                   password: '',
                   email: 'anicholas@akisqnuk.org',
                   lastName: 'Nicholas',
                   middleName: null,
                   firstName: 'Allen',
                   __v: 0,
                   read: ['staff', 'sysadmin'],
                   write: ['staff', 'sysadmin']
                 },
                 projectLeadObj: {
                   _id: '5d8d48c7aae358f02271fbc0',
                   displayName: 'Allen Courtoreille',
                   firstName: 'Allen',
                   middleName: '',
                   lastName: 'Courtoreille',
                   _schemaName: 'User',
                   title: 'Mayor',
                   department: '',
                   orgName: 'Municipality of Chetwynd',
                   org: '5d8d48baaae358f02271fa91',
                   address1: '',
                   address2: '',
                   city: '',
                   province: '',
                   postalCode: '',
                   phoneNumber: '250-401-4102',
                   faxNumber: '',
                   email: 'ACourtoreille@gochetwynd.com',
                   notes: '',
                   country: 'Canada',
                   cellPhoneNumber: '',
                   salutation: '',
                   delete: ['staff', 'sysadmin'],
                   write: ['staff', 'sysadmin'],
                   read: ['staff', 'sysadmin']
                 }
               },
               pinsRead: []
             }
           ],
           meta: [{ searchResultsTotal: 1 }]
         }
       }];

export const AjaxDefaultData = {
  CEAAInvolvement: {
    _id: '5e22061d50d1b9ca776bc690',
    _schemaName: 'List',
    type: 'ceaaInvolvements',
    legislation: 2002,
    name: 'Coordinated',
    listOrder: 30,
    read: [
      'public',
      'staff',
      'sysadmin'
    ],
    write: [
      'staff',
      'sysadmin'
    ]
  },
  CELead: 'Compliance & Enforcement Branch',
  CELeadEmail: 'eao.compliance@gov.bc.ca',
  CELeadPhone: '250-387-0131',
  centroid: [
    -120.4667,
    50.6333
  ],
  description: 'KGHM Ajax Mining Inc.  proposes to develop a new open-pit copper and gold mine with a production capacity of up to 24 million tonnes of ore per year. The mine\'s life expectancy is 23 years.',
  eacDecision: {
    _id: '5e22061d50d1b9ca776bc6a3',
    _schemaName: 'List',
    type: 'eaDecisions',
    legislation: 2002,
    name: 'Certificate Refused',
    listOrder: 20,
    read: [
      'public',
      'staff',
      'sysadmin'
    ],
    write: [
      'staff',
      'sysadmin'
    ]
  },
  location: 'Southern Interior BC',
  name: 'Ajax Mine',
  projectLeadId: null,
  projectLead: 'Nathan Braun',
  projectLeadEmail: 'Nathan.Braun@gov.bc.ca',
  projectLeadPhone: '778-698-9280',
  proponent: {
    _id: '58850f69aaecd9001b8085cd',
    _schemaName: 'Organization',
    description: '',
    name: 'KGHM Ajax Mining Incorporated',
    updatedBy: '58850f2faaecd9001b8083b6',
    addedBy: '58850f2faaecd9001b8083b6',
    dateUpdated: '2017-01-22T20:00:41.558Z',
    dateAdded: '2017-01-22T20:00:41.558Z',
    country: '',
    postal: '',
    province: '',
    city: '',
    address2: '',
    address1: '',
    companyType: 'Proponent/Certificate Holder',
    parentCompany: '',
    companyLegal: '',
    company: 'KGHM Ajax Mining Incorporated',
    __v: 0
  },
  region: 'Thompson-Nicola',
  responsibleEPDId: null,
  responsibleEPD: 'Nathan Braun',
  responsibleEPDEmail: 'Nathan.Braun@gov.bc.ca',
  responsibleEPDPhone: '778-698-9280',
  type: 'Mines',
  legislation: '2002 Environmental Assessment Act',
  legislationYear: 2002,
  addedBy: '58850f2faaecd9001b8083b6',
  build: 'new',
  CEAALink: 'http://www.ceaa-acee.gc.ca/050/details-eng.cfm?evaluation=62225',
  code: 'ajax-mine',
  commodity: '',
  currentPhaseName: {
    _id: '5df79dd77b5abbf7da6f51e7',
    type: 'projectPhase',
    _schemaName: 'List',
    legislation: 2018,
    name: 'Complete',
    read: [
      'public',
      'staff',
      'sysadmin'
    ],
    write: [
      'staff',
      'sysadmin'
    ],
    'listOrder': 16
  },
  dateAdded: '2017-01-22T20:10:00.521Z',
  dateCommentsClosed: null,
  dateCommentsOpen: null,
  dateUpdated: '2019-01-10T21:03:15.945Z',
  decisionDate: '2017-12-13T08:00:00.000Z',
  duration: 90,
  eaoMember: 'project-eao-staff',
  epicProjectID: null,
  fedElecDist: '',
  intake: {
    section7optin: '',
    operatingjobsNotes: '',
    operatingjobs: '',
    meetsrprcriteria: '',
    meetsCEAACriteria: '',
    lifespan: '',
    investmentNotes: '',
    investment: '795000000',
    contactedFirstNations: '',
    contactedCEAA: '',
    constructionjobsNotes: '',
    constructionjobs: '',
    affectedFirstNations: ''
  },
  isTermsAgreed: false,
  overallProgress: 0,
  primaryContact: null,
  proMember: 'proponent-team',
  provElecDist: 'FRN; KAS',
  sector: 'Mineral Mines',
  shortName: 'ajax-mine',
  status: 'In Progress',
  substitution: false,
  eaStatusDate: null,
  eaStatus: null,
  projectStatusDate: null,
  substantiallyDate: null,
  substantially: null,
  activeDate: null,
  activeStatus: null,
  projLead: null,
  execProjectDirector: null,
  complianceLead: null,
  groups: null,
  phaseHistory: [
    '5d3f6c7eda7a38421829602f',
    '5d3f6c7eda7a384218296031'
  ],
  nameSearchTerms: [
    'Aj',
    'Aja',
    'Ajax',
    'Mi',
    'Min',
    'Mine'
  ],
  _id: '58851197aaecd9001b8227cc',
  read: [
    'project-proponent',
    'project-admin',
    'system-eao',
    'project-intake',
    'project-team',
    'project-system-admin',
    'public'
  ],
  pins: [],
  pinsHistory: null,
  pinsRead: [
    'sysadmin',
    'staff'
  ]
};

export const regionsData = [
  'Cariboo',
  'Kootenay',
  'Okanagan',
  'Lower Mainland',
  'Omineca',
  'Peace',
  'Skeena',
  'Vancouver Island',
  'Thompson-Nicola'
];
