define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"List of Examples",
                    "href":"loe.html"
                },
                {
                    "title":"List of Figures",
                    "href":"lof.html"
                },
                {
                    "title":"List of Tables",
                    "href":"lot.html"
                },
                {
                    "title":"Title and Copyright Information",
                    "href":"index.html"
                },
                {
                    "title":"Preface",
                    "href":"preface.html#GUID-B65245D0-F8FD-4355-AD18-13A0AF411CDA",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-828E0137-6066-4F5C-B017-073015B71E30"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documentation",
                            "href":"preface.html#GUID-42300320-0154-41D0-9D63-14C335A012A8"
                        },
                        {
                            "title":"Syntax Diagrams",
                            "href":"preface.html#GUID-F7478A73-3A94-4959-8C4D-FDF08C05ABBC"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-74B066B8-EF3C-47A9-BECB-F22E0C6FEAC0"
                        }
                    ]
                },
                {
                    "title":"Changes in This Release for Oracle Database Utilities",
                    "href":"release-changes.html#GUID-F4EE2A42-3986-4597-9088-A506173ABABF",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database 12c Release 2 (12.2.0.1)",
                            "href":"release-changes.html#GUID-29A3CFCA-DC66-4AF5-AAA9-0C139ABD587E"
                        }
                    ]
                },
                {
                    "title":"Part I Oracle Data Pump",
                    "href":"oracle-data-pump.html#GUID-501A9908-BCC5-434C-8853-9A6096766B5A",
                    "topics":[
                        {
                            "title":"1 Overview of Oracle Data Pump",
                            "href":"oracle-data-pump-overview.html#GUID-17FAE261-0972-4220-A2E4-44D479F519D4",
                            "topics":[
                                {
                                    "title":"1.1 Data Pump Components",
                                    "href":"oracle-data-pump-overview.html#GUID-47B26B0B-3C95-4182-ACDF-2EEDD577FC9E"
                                },
                                {
                                    "title":"1.2 How Does Data Pump Move Data?",
                                    "href":"oracle-data-pump-overview.html#GUID-3F418F02-5FE2-455A-B5AD-C1910DB3B5E0",
                                    "topics":[
                                        {
                                            "title":"1.2.1 Using Data File Copying to Move Data",
                                            "href":"oracle-data-pump-overview.html#GUID-06B2DF71-2A66-498F-B659-1EF5859B1648"
                                        },
                                        {
                                            "title":"1.2.2 Using Direct Path to Move Data",
                                            "href":"oracle-data-pump-overview.html#GUID-F5790243-15A3-4932-9258-1A466985964D"
                                        },
                                        {
                                            "title":"1.2.3 Using External Tables to Move Data",
                                            "href":"oracle-data-pump-overview.html#GUID-EDB0DFE2-A20A-4FF6-B584-1D31583054AB"
                                        },
                                        {
                                            "title":"1.2.4 Using Conventional Path to Move Data",
                                            "href":"oracle-data-pump-overview.html#GUID-C746E643-C199-4746-AD16-13334734778F"
                                        },
                                        {
                                            "title":"1.2.5 Using Network Link Import to Move Data",
                                            "href":"oracle-data-pump-overview.html#GUID-3E1D4B46-E856-4ABE-ACC5-977A898BB0F1"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.3 Using Data Pump With CDBs",
                                    "href":"oracle-data-pump-overview.html#GUID-45B17B65-20F2-4128-9A39-B1B0F5E323BB",
                                    "topics":[
                                        {
                                            "title":"1.3.1 Using Data Pump to Move Databases Into a CDB",
                                            "href":"oracle-data-pump-overview.html#GUID-49A847B1-3193-4C45-B7F3-B7F514B75C71"
                                        },
                                        {
                                            "title":"1.3.2 Using Data Pump to Move PDBs Within Or Between CDBs",
                                            "href":"oracle-data-pump-overview.html#GUID-C1578FB6-216F-473E-A6D5-18453D4F9021"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.4 Required Roles for Data Pump Export and Import Operations",
                                    "href":"oracle-data-pump-overview.html#GUID-8B6975D3-3BEC-4584-B416-280125EEC57E"
                                },
                                {
                                    "title":"1.5 What Happens During Execution of a Data Pump Job?",
                                    "href":"oracle-data-pump-overview.html#GUID-6BDC1CC8-8596-402D-B016-602985B97AB6",
                                    "topics":[
                                        {
                                            "title":"1.5.1 Coordination of a Job",
                                            "href":"oracle-data-pump-overview.html#GUID-E4F373D6-0D0C-4FBD-AEC1-FDC91F46BD28"
                                        },
                                        {
                                            "title":"1.5.2 Tracking Progress Within a Job",
                                            "href":"oracle-data-pump-overview.html#GUID-B9A676E5-B3CB-417B-BC97-65FE33448C2F"
                                        },
                                        {
                                            "title":"1.5.3 Filtering Data and Metadata During a Job",
                                            "href":"oracle-data-pump-overview.html#GUID-DB178A4E-36D4-4ECF-932A-6DE26FE2C2EF"
                                        },
                                        {
                                            "title":"1.5.4 Transforming Metadata During a Job",
                                            "href":"oracle-data-pump-overview.html#GUID-15CF2160-0F2C-49D4-9FCC-8B60BD111331"
                                        },
                                        {
                                            "title":"1.5.5 Maximizing Job Performance",
                                            "href":"oracle-data-pump-overview.html#GUID-AE83786E-EFC9-4552-BF79-AC72CE063EB6"
                                        },
                                        {
                                            "title":"1.5.6 Loading and Unloading of Data",
                                            "href":"oracle-data-pump-overview.html#GUID-31DA185F-92E9-49F7-8431-B10354199C5A"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.6 Monitoring Job Status",
                                    "href":"oracle-data-pump-overview.html#GUID-E365D74E-12CD-495C-BA23-5A55F679C7E7",
                                    "topics":[
                                        {
                                            "title":"1.6.1 Monitoring the Progress of Executing Jobs",
                                            "href":"oracle-data-pump-overview.html#GUID-A4C5E6C1-28DE-45AF-B90C-B7FEEFF62069"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.7 File Allocation",
                                    "href":"oracle-data-pump-overview.html#GUID-FE7E746D-A343-463E-A4E2-A6AD1349FE4B",
                                    "topics":[
                                        {
                                            "title":"1.7.1 Specifying Files and Adding Additional Dump Files",
                                            "href":"oracle-data-pump-overview.html#GUID-8C1CD0EA-F6F8-4627-867E-956ABCB984F0"
                                        },
                                        {
                                            "title":"1.7.2 Default Locations for Dump, Log, and SQL Files",
                                            "href":"oracle-data-pump-overview.html#GUID-EEB32B50-8A00-40B0-8787-CC2C8BA05DC5",
                                            "topics":[
                                                {
                                                    "title":"1.7.2.1 Oracle RAC Considerations",
                                                    "href":"oracle-data-pump-overview.html#GUID-8E63A90B-8E72-4E94-B2F4-41CF0603293E"
                                                },
                                                {
                                                    "title":"1.7.2.2 Using Directory Objects When Oracle Automatic Storage Management Is Enabled",
                                                    "href":"oracle-data-pump-overview.html#GUID-1A269231-3365-4A3B-B838-649AAC2766CB"
                                                },
                                                {
                                                    "title":"1.7.2.3 The DATA_PUMP_DIR Directory Object and Pluggable Databases",
                                                    "href":"oracle-data-pump-overview.html#GUID-BB478188-0F26-44E3-99E6-C161ED5A2473"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"1.7.3 Using Substitution Variables",
                                            "href":"oracle-data-pump-overview.html#GUID-6F532CA9-CE90-47D6-84ED-AD10F1E18056"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.8 Exporting and Importing Between Different Database Releases",
                                    "href":"oracle-data-pump-overview.html#GUID-BAA3B679-A758-4D55-9820-432D9EB83C68"
                                },
                                {
                                    "title":"1.9 SecureFiles LOB Considerations",
                                    "href":"oracle-data-pump-overview.html#GUID-9030BC32-193B-4455-8DBB-4271DD44FA7A"
                                },
                                {
                                    "title":"1.10 Data Pump Exit Codes",
                                    "href":"oracle-data-pump-overview.html#GUID-34D0DEE7-3530-42DC-BE01-C2588CC73CE5"
                                },
                                {
                                    "title":"1.11 Auditing Data Pump Jobs",
                                    "href":"oracle-data-pump-overview.html#GUID-4443B80B-0446-4010-B8CA-2524659516BC"
                                },
                                {
                                    "title":"1.12 How Does Data Pump Handle Timestamp Data?",
                                    "href":"oracle-data-pump-overview.html#GUID-7EE60BAB-0D3D-46EB-8E11-4FDDA68EF14E",
                                    "topics":[
                                        {
                                            "title":"1.12.1 TIMESTAMP WITH TIME ZONE Restrictions",
                                            "href":"oracle-data-pump-overview.html#GUID-02A6F03E-7754-41B5-A579-93A6E171A61C",
                                            "topics":[
                                                {
                                                    "title":"1.12.1.1 Time Zone File Versions on the Source and Target",
                                                    "href":"oracle-data-pump-overview.html#GUID-4DABDB38-BEAA-471B-9026-F91CD22FD5C4"
                                                },
                                                {
                                                    "title":"1.12.1.2 Data Pump Support for TIMESTAMP WITH TIME ZONE Data",
                                                    "href":"oracle-data-pump-overview.html#GUID-EF3AF1D8-716B-4C3E-931D-52937A5175F1"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"1.12.2 TIMESTAMP WITH LOCAL TIME ZONE Restrictions",
                                            "href":"oracle-data-pump-overview.html#GUID-D8443A5E-BF6D-4329-AF11-8E5899356C64"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.13 Character Set and Globalization Support Considerations",
                                    "href":"oracle-data-pump-overview.html#GUID-72F01BF0-61F5-4775-8C7B-4E227F244866",
                                    "topics":[
                                        {
                                            "title":"1.13.1 Data Definition Language (DDL)",
                                            "href":"oracle-data-pump-overview.html#GUID-7B94D834-313B-4BA7-80F2-A29C1870DF27"
                                        },
                                        {
                                            "title":"1.13.2 Single-Byte Character Sets and Export and Import",
                                            "href":"oracle-data-pump-overview.html#GUID-A786A4B1-A913-4765-81F9-C877A6566F9C"
                                        },
                                        {
                                            "title":"1.13.3 Multibyte Character Sets and Export and Import",
                                            "href":"oracle-data-pump-overview.html#GUID-5F23F5CF-82F0-4254-B865-20ED68F4AE31"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.14 Oracle Data Pump Behavior with Data-Bound Collation",
                                    "href":"oracle-data-pump-overview.html#GUID-B1A6BBA2-0269-48CC-8A0E-8E3955A231C0"
                                }
                            ]
                        },
                        {
                            "title":"2 Data Pump Export",
                            "href":"oracle-data-pump-export-utility.html#GUID-5F7380CE-A619-4042-8D13-1F7DDE429991",
                            "topics":[
                                {
                                    "title":"2.1 What Is Data Pump Export?",
                                    "href":"oracle-data-pump-export-utility.html#GUID-FCB1FA15-5798-48C0-85ED-08E9DAC5E687"
                                },
                                {
                                    "title":"2.2 Invoking Data Pump Export",
                                    "href":"oracle-data-pump-export-utility.html#GUID-D5455260-C28C-475F-9E0E-2BE227E7F0E3",
                                    "topics":[
                                        {
                                            "title":"2.2.1 Data Pump Export Interfaces",
                                            "href":"oracle-data-pump-export-utility.html#GUID-5848FF98-20A7-4F01-B68C-FA0D2E52BC46"
                                        },
                                        {
                                            "title":"2.2.2 Data Pump Export Modes",
                                            "href":"oracle-data-pump-export-utility.html#GUID-8E497131-6B9B-4CC8-AA50-35F480CAC2C4",
                                            "topics":[
                                                {
                                                    "title":"2.2.2.1 Full Mode",
                                                    "href":"oracle-data-pump-export-utility.html#GUID-079769D8-40F4-432F-88AD-E7264D7A2E2D"
                                                },
                                                {
                                                    "title":"2.2.2.2 Schema Mode",
                                                    "href":"oracle-data-pump-export-utility.html#GUID-2BBE8F6C-6D58-4C99-8A49-ED4DA53BECD2"
                                                },
                                                {
                                                    "title":"2.2.2.3 Table Mode",
                                                    "href":"oracle-data-pump-export-utility.html#GUID-0AA240BE-DBF3-452B-9F62-59CD2C2346D9"
                                                },
                                                {
                                                    "title":"2.2.2.4 Tablespace Mode",
                                                    "href":"oracle-data-pump-export-utility.html#GUID-90597B1B-9901-41A5-AE20-B36F6CEF6B50"
                                                },
                                                {
                                                    "title":"2.2.2.5 Transportable Tablespace Mode",
                                                    "href":"oracle-data-pump-export-utility.html#GUID-BBDE50A3-4B7C-4A0A-8964-F689EF95651F"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"2.2.3 Network Considerations",
                                            "href":"oracle-data-pump-export-utility.html#GUID-72973E3D-FC0A-47E8-A62A-6DF8AD83138D"
                                        }
                                    ]
                                },
                                {
                                    "title":"2.3 Filtering During Export Operations",
                                    "href":"oracle-data-pump-export-utility.html#GUID-1F85C939-E439-4436-BFEF-6DC7E167C912",
                                    "topics":[
                                        {
                                            "title":"2.3.1 Data Filters",
                                            "href":"oracle-data-pump-export-utility.html#GUID-54290A94-5D1D-47DB-93EF-FD227BC660E1"
                                        },
                                        {
                                            "title":"2.3.2 Metadata Filters",
                                            "href":"oracle-data-pump-export-utility.html#GUID-726F5DFF-12A6-4399-B51C-405103DDE785"
                                        }
                                    ]
                                },
                                {
                                    "title":"2.4 Parameters Available in Export's Command-Line Mode",
                                    "href":"oracle-data-pump-export-utility.html#GUID-33880357-06B1-4CA2-8665-9D41347C6705",
                                    "topics":[
                                        {
                                            "title":"2.4.1 ABORT_STEP",
                                            "href":"oracle-data-pump-export-utility.html#GUID-1611C85D-CBB9-40B7-8C41-2C9AED481A72"
                                        },
                                        {
                                            "title":"2.4.2 ACCESS_METHOD",
                                            "href":"oracle-data-pump-export-utility.html#GUID-CC93E4A7-EAC5-4EE9-94C0-3ADEA925DB0C"
                                        },
                                        {
                                            "title":"2.4.3 ATTACH",
                                            "href":"oracle-data-pump-export-utility.html#GUID-E1F27926-E038-4815-98E3-22399375F1CC"
                                        },
                                        {
                                            "title":"2.4.4 CLUSTER",
                                            "href":"oracle-data-pump-export-utility.html#GUID-B2A40B7E-D4EA-4FF1-82A2-33387D9ADF25"
                                        },
                                        {
                                            "title":"2.4.5 COMPRESSION",
                                            "href":"oracle-data-pump-export-utility.html#GUID-C0122FE3-71EE-4E10-8F2A-03687227292C"
                                        },
                                        {
                                            "title":"2.4.6 COMPRESSION_ALGORITHM",
                                            "href":"oracle-data-pump-export-utility.html#GUID-F81B5F5F-9F40-4EB0-99B8-47C45179DE5E"
                                        },
                                        {
                                            "title":"2.4.7 CONTENT",
                                            "href":"oracle-data-pump-export-utility.html#GUID-F7994C75-CC86-4A5D-AA9A-361A94FD9C03"
                                        },
                                        {
                                            "title":"2.4.8 DATA_OPTIONS",
                                            "href":"oracle-data-pump-export-utility.html#GUID-4C789FC4-F600-4E6A-A8DA-508230BCB667"
                                        },
                                        {
                                            "title":"2.4.9 DIRECTORY",
                                            "href":"oracle-data-pump-export-utility.html#GUID-D7F1C0E8-E3CF-495E-9596-E08AEE36BB6B"
                                        },
                                        {
                                            "title":"2.4.10 DUMPFILE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-A6300021-419F-4C1D-AFF1-38FE1123326B"
                                        },
                                        {
                                            "title":"2.4.11 ENCRYPTION",
                                            "href":"oracle-data-pump-export-utility.html#GUID-16EEA783-A7E8-4FD3-A7B1-C92428C94C66"
                                        },
                                        {
                                            "title":"2.4.12 ENCRYPTION_ALGORITHM",
                                            "href":"oracle-data-pump-export-utility.html#GUID-A722730A-4C8C-4178-A63B-4B80404E48C4"
                                        },
                                        {
                                            "title":"2.4.13 ENCRYPTION_MODE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-F0A139F0-2357-4388-9660-59EF1E6B1E8C"
                                        },
                                        {
                                            "title":"2.4.14 ENCRYPTION_PASSWORD",
                                            "href":"oracle-data-pump-export-utility.html#GUID-CB4ABB85-AA7B-4C8C-BC1E-AD41E9EE21C9"
                                        },
                                        {
                                            "title":"2.4.15 ENCRYPTION_PWD_PROMPT",
                                            "href":"oracle-data-pump-export-utility.html#GUID-A9C3C356-A6B4-45D0-9599-763F5B24E140"
                                        },
                                        {
                                            "title":"2.4.16 ESTIMATE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-C04D8927-DB81-4BC3-A41C-181ED85FC6F7"
                                        },
                                        {
                                            "title":"2.4.17 ESTIMATE_ONLY",
                                            "href":"oracle-data-pump-export-utility.html#GUID-3DF4A0F1-385B-4749-99D3-A9C3F9706C0B"
                                        },
                                        {
                                            "title":"2.4.18 EXCLUDE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-64249296-2AFF-40EA-AA44-BC0A1B5A1E7C"
                                        },
                                        {
                                            "title":"2.4.19 FILESIZE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-C11CA2A6-367A-40E6-A2D3-9E3775B1D4A2"
                                        },
                                        {
                                            "title":"2.4.20 FLASHBACK_SCN",
                                            "href":"oracle-data-pump-export-utility.html#GUID-D408B112-1A81-4F68-BEFF-7403A9588DDB"
                                        },
                                        {
                                            "title":"2.4.21 FLASHBACK_TIME",
                                            "href":"oracle-data-pump-export-utility.html#GUID-CB8386E5-CA76-4D4A-884E-F97BFC58B230"
                                        },
                                        {
                                            "title":"2.4.22 FULL",
                                            "href":"oracle-data-pump-export-utility.html#GUID-BA07401C-6261-4B07-AD2C-06CD0A6E0BE9"
                                        },
                                        {
                                            "title":"2.4.23 HELP",
                                            "href":"oracle-data-pump-export-utility.html#GUID-A9233625-FD1C-4F2C-AB91-80B2C842D793"
                                        },
                                        {
                                            "title":"2.4.24 INCLUDE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-A3C5241C-098C-42FF-B7D1-6018B2ABC282"
                                        },
                                        {
                                            "title":"2.4.25 JOB_NAME",
                                            "href":"oracle-data-pump-export-utility.html#GUID-C146E99F-CBAB-43B4-A802-A8D5AD5898AE"
                                        },
                                        {
                                            "title":"2.4.26 KEEP_MASTER",
                                            "href":"oracle-data-pump-export-utility.html#GUID-CAD6E280-4596-47F8-9236-96C422ED3334"
                                        },
                                        {
                                            "title":"2.4.27 LOGFILE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-3536160E-68D8-4455-8A64-F1A44032EABD"
                                        },
                                        {
                                            "title":"2.4.28 LOGTIME",
                                            "href":"oracle-data-pump-export-utility.html#GUID-56B6B4EA-5A2B-45B8-9B41-8966378C2C3D"
                                        },
                                        {
                                            "title":"2.4.29 METRICS",
                                            "href":"oracle-data-pump-export-utility.html#GUID-2E7A8123-F8D8-4C62-AE4D-8A3F1753E6D3"
                                        },
                                        {
                                            "title":"2.4.30 NETWORK_LINK",
                                            "href":"oracle-data-pump-export-utility.html#GUID-23E58D59-A477-4A87-BD0E-C82447581D0A"
                                        },
                                        {
                                            "title":"2.4.31 NOLOGFILE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-6605A372-AD82-4F48-AF6E-41FBC6BCBC67"
                                        },
                                        {
                                            "title":"2.4.32 PARALLEL",
                                            "href":"oracle-data-pump-export-utility.html#GUID-55E6AC71-5CDE-410E-AB02-798AEC54F411"
                                        },
                                        {
                                            "title":"2.4.33 PARFILE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-7A045C82-5993-44EB-AFAD-B7D39C34BCCD"
                                        },
                                        {
                                            "title":"2.4.34 QUERY",
                                            "href":"oracle-data-pump-export-utility.html#GUID-CDA1477D-4710-452A-ABA5-D29A0F3E3852"
                                        },
                                        {
                                            "title":"2.4.35 REMAP_DATA",
                                            "href":"oracle-data-pump-export-utility.html#GUID-B1D13216-93D3-4FFC-A0BB-082E133FD2B9"
                                        },
                                        {
                                            "title":"2.4.36 REUSE_DUMPFILES",
                                            "href":"oracle-data-pump-export-utility.html#GUID-65DCC12E-E370-46E0-86C0-4EDFDD78DF25"
                                        },
                                        {
                                            "title":"2.4.37 SAMPLE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-29EEAD6A-02BF-4053-98F6-43BE8BE187AA"
                                        },
                                        {
                                            "title":"2.4.38 SCHEMAS",
                                            "href":"oracle-data-pump-export-utility.html#GUID-8B512637-E259-4F20-B7C9-DCD0BB501D09"
                                        },
                                        {
                                            "title":"2.4.39 SERVICE_NAME",
                                            "href":"oracle-data-pump-export-utility.html#GUID-5A6ED839-EEDF-429D-A710-10CBDEA8114D"
                                        },
                                        {
                                            "title":"2.4.40 SOURCE_EDITION",
                                            "href":"oracle-data-pump-export-utility.html#GUID-9BCE2098-A930-4547-8758-E3A9C2A7A20B"
                                        },
                                        {
                                            "title":"2.4.41 STATUS",
                                            "href":"oracle-data-pump-export-utility.html#GUID-F5D2E607-768B-4E07-B935-1FDB77CA4446"
                                        },
                                        {
                                            "title":"2.4.42 TABLES",
                                            "href":"oracle-data-pump-export-utility.html#GUID-9D052182-6BD8-4167-B528-2E352C9CDBDB"
                                        },
                                        {
                                            "title":"2.4.43 TABLESPACES",
                                            "href":"oracle-data-pump-export-utility.html#GUID-C0B3C76F-B4A2-4A16-86C4-103EE04D00D1"
                                        },
                                        {
                                            "title":"2.4.44 TRANSPORT_FULL_CHECK",
                                            "href":"oracle-data-pump-export-utility.html#GUID-4996A8CA-E00C-448E-9800-E18C822D32C2"
                                        },
                                        {
                                            "title":"2.4.45 TRANSPORT_TABLESPACES",
                                            "href":"oracle-data-pump-export-utility.html#GUID-206EC89B-5E43-4CCF-8B78-2C7F91FC5D7D"
                                        },
                                        {
                                            "title":"2.4.46 TRANSPORTABLE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-A697AD50-B366-4989-AA40-151D7089E810"
                                        },
                                        {
                                            "title":"2.4.47 VERSION",
                                            "href":"oracle-data-pump-export-utility.html#GUID-2877B4DB-0082-438F-AC9B-18D1686F5DDC"
                                        },
                                        {
                                            "title":"2.4.48 VIEWS_AS_TABLES",
                                            "href":"oracle-data-pump-export-utility.html#GUID-E4E45E81-5391-43BE-B27D-B763EF79A885"
                                        }
                                    ]
                                },
                                {
                                    "title":"2.5 Commands Available in Export's Interactive-Command Mode",
                                    "href":"oracle-data-pump-export-utility.html#GUID-EBC54840-22B7-486C-B1FD-CAFFB5FC2344",
                                    "topics":[
                                        {
                                            "title":"2.5.1 ADD_FILE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-1A2BF459-680D-4D2B-B35F-9A3F4EE72530"
                                        },
                                        {
                                            "title":"2.5.2 CONTINUE_CLIENT",
                                            "href":"oracle-data-pump-export-utility.html#GUID-64B5616E-7A7A-4012-AA9C-CA89A12846D5"
                                        },
                                        {
                                            "title":"2.5.3 EXIT_CLIENT",
                                            "href":"oracle-data-pump-export-utility.html#GUID-A6C2B758-2832-461F-8B3A-600D1CBB465A"
                                        },
                                        {
                                            "title":"2.5.4 FILESIZE",
                                            "href":"oracle-data-pump-export-utility.html#GUID-3A52BB37-BFA8-43E8-897B-515EA991B337"
                                        },
                                        {
                                            "title":"2.5.5 HELP",
                                            "href":"oracle-data-pump-export-utility.html#GUID-15BE7A31-7944-4DD7-BA21-7EAA5A682ED1"
                                        },
                                        {
                                            "title":"2.5.6 KILL_JOB",
                                            "href":"oracle-data-pump-export-utility.html#GUID-9DA12603-B6FA-4631-8DFA-B75466CAF178"
                                        },
                                        {
                                            "title":"2.5.7 PARALLEL",
                                            "href":"oracle-data-pump-export-utility.html#GUID-6097E6AE-CC65-4012-8A06-F00585357000"
                                        },
                                        {
                                            "title":"2.5.8 START_JOB",
                                            "href":"oracle-data-pump-export-utility.html#GUID-2565CDB9-27D4-435A-86A1-9D8835BA5826"
                                        },
                                        {
                                            "title":"2.5.9 STATUS",
                                            "href":"oracle-data-pump-export-utility.html#GUID-9582CC68-6ACC-49C0-9511-010643161725"
                                        },
                                        {
                                            "title":"2.5.10 STOP_JOB",
                                            "href":"oracle-data-pump-export-utility.html#GUID-51E3C354-0ACE-448F-933E-5EBD9D0B151C"
                                        }
                                    ]
                                },
                                {
                                    "title":"2.6 Examples of Using Data Pump Export",
                                    "href":"oracle-data-pump-export-utility.html#GUID-343B1CF7-0AE2-49BB-A694-CF2A5BAB1909",
                                    "topics":[
                                        {
                                            "title":"2.6.1 Performing a Table-Mode Export",
                                            "href":"oracle-data-pump-export-utility.html#GUID-747AD92A-0E15-4F22-ABF2-B768D29074B1"
                                        },
                                        {
                                            "title":"2.6.2 Data-Only Unload of Selected Tables and Rows",
                                            "href":"oracle-data-pump-export-utility.html#GUID-28406EEF-83C1-452A-B7F5-6792F30635DE"
                                        },
                                        {
                                            "title":"2.6.3 Estimating Disk Space Needed in a Table-Mode Export",
                                            "href":"oracle-data-pump-export-utility.html#GUID-4B38AA2E-7E49-4B29-8FA0-1D4C16CBEC32"
                                        },
                                        {
                                            "title":"2.6.4 Performing a Schema-Mode Export",
                                            "href":"oracle-data-pump-export-utility.html#GUID-3A777F32-7B26-410D-A619-CB84ADBF62E9"
                                        },
                                        {
                                            "title":"2.6.5 Performing a Parallel Full Database Export",
                                            "href":"oracle-data-pump-export-utility.html#GUID-1E134053-692A-4386-BB77-153CB4A6071A"
                                        },
                                        {
                                            "title":"2.6.6 Using Interactive Mode to Stop and Reattach to a Job",
                                            "href":"oracle-data-pump-export-utility.html#GUID-B8F3419F-6ECF-4F6A-B57B-938E4941C6BA"
                                        }
                                    ]
                                },
                                {
                                    "title":"2.7 Syntax Diagrams for Data Pump Export",
                                    "href":"oracle-data-pump-export-utility.html#GUID-EFF3F271-9C22-4ED2-B325-41C0D12C5477"
                                }
                            ]
                        },
                        {
                            "title":"3 Data Pump Import",
                            "href":"datapump-import-utility.html#GUID-D11E340E-14C6-43B8-AB09-6335F0C1F71B",
                            "topics":[
                                {
                                    "title":"3.1 What Is Data Pump Import?",
                                    "href":"datapump-import-utility.html#GUID-0C84800A-A295-44B6-8D34-C0E3A7BBB1C6"
                                },
                                {
                                    "title":"3.2 Invoking Data Pump Import",
                                    "href":"datapump-import-utility.html#GUID-D34AA2AC-DD27-4557-98AC-CE9A3AC21E35",
                                    "topics":[
                                        {
                                            "title":"3.2.1 Data Pump Import Interfaces",
                                            "href":"datapump-import-utility.html#GUID-31BA2802-EEC2-417D-BAEB-B4D769CC8356"
                                        },
                                        {
                                            "title":"3.2.2 Data Pump Import Modes",
                                            "href":"datapump-import-utility.html#GUID-AAA85047-A8DD-4F21-9EA2-9363D290648D",
                                            "topics":[
                                                {
                                                    "title":"3.2.2.1 Full Import Mode",
                                                    "href":"datapump-import-utility.html#GUID-E27D2DC9-A6D8-4F0B-AB72-6BF526B3AA18"
                                                },
                                                {
                                                    "title":"3.2.2.2 Schema Mode",
                                                    "href":"datapump-import-utility.html#GUID-4F335D0F-00DE-4AA1-A2BB-8ED2F5D8E59B"
                                                },
                                                {
                                                    "title":"3.2.2.3 Table Mode",
                                                    "href":"datapump-import-utility.html#GUID-81B00832-684D-477D-8C4F-D5F281DDEFFE"
                                                },
                                                {
                                                    "title":"3.2.2.4 Tablespace Mode",
                                                    "href":"datapump-import-utility.html#GUID-99A80D77-A155-4CBD-A723-C7730B229810"
                                                },
                                                {
                                                    "title":"3.2.2.5 Transportable Tablespace Mode",
                                                    "href":"datapump-import-utility.html#GUID-CF096FC3-D15D-42BB-A371-106F0EA241AB"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"3.2.3 Network Considerations",
                                            "href":"datapump-import-utility.html#GUID-AF614D9B-71B1-4234-AD0D-D33B53A16A6E"
                                        }
                                    ]
                                },
                                {
                                    "title":"3.3 Filtering During Import Operations",
                                    "href":"datapump-import-utility.html#GUID-107CA775-350C-4CCE-9601-E1E810589B40",
                                    "topics":[
                                        {
                                            "title":"3.3.1 Data Filters",
                                            "href":"datapump-import-utility.html#GUID-4EF4EDB4-A09A-4F3A-B530-D68FF6C535ED"
                                        },
                                        {
                                            "title":"3.3.2 Metadata Filters",
                                            "href":"datapump-import-utility.html#GUID-2AB1F3EF-0311-4CCA-87E0-13682B0D2386"
                                        }
                                    ]
                                },
                                {
                                    "title":"3.4 Parameters Available in Import's Command-Line Mode",
                                    "href":"datapump-import-utility.html#GUID-BA74D4F6-2840-4002-A673-0A7D9CBB3D78",
                                    "topics":[
                                        {
                                            "title":"3.4.1 ABORT_STEP",
                                            "href":"datapump-import-utility.html#GUID-0CB0C4E9-54E7-49DB-AEBC-AA3ACC074F74"
                                        },
                                        {
                                            "title":"3.4.2 ACCESS_METHOD",
                                            "href":"datapump-import-utility.html#GUID-F48336E3-AB4C-4E95-B181-E3D349570BB0"
                                        },
                                        {
                                            "title":"3.4.3 ATTACH",
                                            "href":"datapump-import-utility.html#GUID-ADF15D47-FD19-4794-A5C4-685740AA04F9"
                                        },
                                        {
                                            "title":"3.4.4 CLUSTER",
                                            "href":"datapump-import-utility.html#GUID-57D329F0-05D6-42BD-888B-BCA0909D90DF"
                                        },
                                        {
                                            "title":"3.4.5 CONTENT",
                                            "href":"datapump-import-utility.html#GUID-1609551D-212C-4DB1-B9D7-508FB75DD20C"
                                        },
                                        {
                                            "title":"3.4.6 DATA_OPTIONS",
                                            "href":"datapump-import-utility.html#GUID-5FFA128D-B7F5-41D0-A72C-EB2CE384765D"
                                        },
                                        {
                                            "title":"3.4.7 DIRECTORY",
                                            "href":"datapump-import-utility.html#GUID-DA339AA4-C040-4D3B-A85F-DD3E470D452A"
                                        },
                                        {
                                            "title":"3.4.8 DUMPFILE",
                                            "href":"datapump-import-utility.html#GUID-DE156692-2955-4D5B-A327-C421F9E45FEB"
                                        },
                                        {
                                            "title":"3.4.9 ENCRYPTION_PASSWORD",
                                            "href":"datapump-import-utility.html#GUID-8AEBB3F9-05FB-4217-BB0F-98A4701CFA37"
                                        },
                                        {
                                            "title":"3.4.10 ENCRYPTION_PWD_PROMPT",
                                            "href":"datapump-import-utility.html#GUID-B0E075BF-C2AD-4D1A-BE93-CA299C1C254A"
                                        },
                                        {
                                            "title":"3.4.11 ESTIMATE",
                                            "href":"datapump-import-utility.html#GUID-01283FD4-DC70-45C6-8F42-2CB4621DC98D"
                                        },
                                        {
                                            "title":"3.4.12 EXCLUDE",
                                            "href":"datapump-import-utility.html#GUID-DC7668E1-C846-48C5-A0D5-F4659EC119BB"
                                        },
                                        {
                                            "title":"3.4.13 FLASHBACK_SCN",
                                            "href":"datapump-import-utility.html#GUID-359ED2A4-096D-441F-B484-00CE7F9DAB15"
                                        },
                                        {
                                            "title":"3.4.14 FLASHBACK_TIME",
                                            "href":"datapump-import-utility.html#GUID-A2E9A908-1717-4435-B727-364D7A4A5F62"
                                        },
                                        {
                                            "title":"3.4.15 FULL",
                                            "href":"datapump-import-utility.html#GUID-51C1AFCB-F56E-4BA3-8806-2FB03F35DCD3"
                                        },
                                        {
                                            "title":"3.4.16 HELP",
                                            "href":"datapump-import-utility.html#GUID-69818A24-4603-4392-B878-F747DD201A7E"
                                        },
                                        {
                                            "title":"3.4.17 INCLUDE",
                                            "href":"datapump-import-utility.html#GUID-F566917E-9E9A-442F-8938-77CE78B5EAFE"
                                        },
                                        {
                                            "title":"3.4.18 JOB_NAME",
                                            "href":"datapump-import-utility.html#GUID-69B04657-3059-43F9-81E8-53D002633943"
                                        },
                                        {
                                            "title":"3.4.19 KEEP_MASTER",
                                            "href":"datapump-import-utility.html#GUID-A9F992C3-9E5E-4619-8652-41D01898F37A"
                                        },
                                        {
                                            "title":"3.4.20 LOGFILE",
                                            "href":"datapump-import-utility.html#GUID-363F6A16-596B-4110-B5A7-9F2691BE9604"
                                        },
                                        {
                                            "title":"3.4.21 LOGTIME",
                                            "href":"datapump-import-utility.html#GUID-602BF900-AFB3-43D6-BE86-06BFB5BAD0FE"
                                        },
                                        {
                                            "title":"3.4.22 MASTER_ONLY",
                                            "href":"datapump-import-utility.html#GUID-2E79AA42-C6C5-40F7-9437-A611EAF465BE"
                                        },
                                        {
                                            "title":"3.4.23 METRICS",
                                            "href":"datapump-import-utility.html#GUID-02545263-7E0B-4314-AC93-80D3F28DF6AA"
                                        },
                                        {
                                            "title":"3.4.24 NETWORK_LINK",
                                            "href":"datapump-import-utility.html#GUID-0871E56B-07EB-43B3-91DA-D1F457CF6182"
                                        },
                                        {
                                            "title":"3.4.25 NOLOGFILE",
                                            "href":"datapump-import-utility.html#GUID-71387882-6103-47B9-8EC3-8E84A96BCF7D"
                                        },
                                        {
                                            "title":"3.4.26 PARALLEL",
                                            "href":"datapump-import-utility.html#GUID-3081A258-0C23-40B0-8487-9C7A0D248E23"
                                        },
                                        {
                                            "title":"3.4.27 PARFILE",
                                            "href":"datapump-import-utility.html#GUID-F703B422-4584-493B-A5B3-651B40CDB765"
                                        },
                                        {
                                            "title":"3.4.28 PARTITION_OPTIONS",
                                            "href":"datapump-import-utility.html#GUID-0271FAC1-3238-49AD-B317-7A018D359740"
                                        },
                                        {
                                            "title":"3.4.29 QUERY",
                                            "href":"datapump-import-utility.html#GUID-B00723CC-C649-49FC-8C3F-CA5925045F4F"
                                        },
                                        {
                                            "title":"3.4.30 REMAP_DATA",
                                            "href":"datapump-import-utility.html#GUID-B831E91E-E720-4492-B9FD-E5DA78CC3E36"
                                        },
                                        {
                                            "title":"3.4.31 REMAP_DATAFILE",
                                            "href":"datapump-import-utility.html#GUID-7C9DDBED-91AC-4FA2-AB91-1FF214DA89B0"
                                        },
                                        {
                                            "title":"3.4.32 REMAP_DIRECTORY",
                                            "href":"datapump-import-utility.html#GUID-5DA84A72-B71C-4491-9DD8-7075D9A4B04F"
                                        },
                                        {
                                            "title":"3.4.33 REMAP_SCHEMA",
                                            "href":"datapump-import-utility.html#GUID-619809A6-1966-42D6-9ACC-A3E0ADC36523"
                                        },
                                        {
                                            "title":"3.4.34 REMAP_TABLE",
                                            "href":"datapump-import-utility.html#GUID-55EA54B5-BC13-48F1-AF14-485C16170274"
                                        },
                                        {
                                            "title":"3.4.35 REMAP_TABLESPACE",
                                            "href":"datapump-import-utility.html#GUID-F467946E-50B3-4CC0-937A-CC8C18AAF8C1"
                                        },
                                        {
                                            "title":"3.4.36 REUSE_DATAFILES",
                                            "href":"datapump-import-utility.html#GUID-5842DA01-AE79-4205-9FBA-9F65A9C61F3C"
                                        },
                                        {
                                            "title":"3.4.37 SCHEMAS",
                                            "href":"datapump-import-utility.html#GUID-6FEDE3AF-0ED5-46D6-BE91-C3F840291735"
                                        },
                                        {
                                            "title":"3.4.38 SERVICE_NAME",
                                            "href":"datapump-import-utility.html#GUID-60B2F9CC-352E-4FA0-85B9-23F3F8A992E3"
                                        },
                                        {
                                            "title":"3.4.39 SKIP_UNUSABLE_INDEXES",
                                            "href":"datapump-import-utility.html#GUID-EF98D4F5-6682-4D2C-9EAC-BF6CCAE5CBC9"
                                        },
                                        {
                                            "title":"3.4.40 SOURCE_EDITION",
                                            "href":"datapump-import-utility.html#GUID-FA8E655C-C942-45F1-B07F-49500F445B3D"
                                        },
                                        {
                                            "title":"3.4.41 SQLFILE",
                                            "href":"datapump-import-utility.html#GUID-8453D1F2-FDA9-4658-B42E-9D5B75AFEED9"
                                        },
                                        {
                                            "title":"3.4.42 STATUS",
                                            "href":"datapump-import-utility.html#GUID-BED8270E-9909-4B67-8CD5-569CB8BF24A6"
                                        },
                                        {
                                            "title":"3.4.43 STREAMS_CONFIGURATION",
                                            "href":"datapump-import-utility.html#GUID-EB97C99A-A245-4CDF-AAD8-52ED3969EE7B"
                                        },
                                        {
                                            "title":"3.4.44 TABLE_EXISTS_ACTION",
                                            "href":"datapump-import-utility.html#GUID-C9664F8C-19C5-4177-AC20-5682AEABA07F"
                                        },
                                        {
                                            "title":"3.4.45 TABLES",
                                            "href":"datapump-import-utility.html#GUID-E9D822CA-4EF7-4F61-9E88-6E3F25CFEAFC"
                                        },
                                        {
                                            "title":"3.4.46 TABLESPACES",
                                            "href":"datapump-import-utility.html#GUID-29D213EB-2E73-4827-BB55-766E9681FA54"
                                        },
                                        {
                                            "title":"3.4.47 TARGET_EDITION",
                                            "href":"datapump-import-utility.html#GUID-BBB3CB15-B136-423F-B1EA-BF93A935793F"
                                        },
                                        {
                                            "title":"3.4.48 TRANSFORM",
                                            "href":"datapump-import-utility.html#GUID-64FB67BD-EB67-4F50-A4D2-5D34518E6BDB"
                                        },
                                        {
                                            "title":"3.4.49 TRANSPORT_DATAFILES",
                                            "href":"datapump-import-utility.html#GUID-4F26914E-28D2-428C-9F20-256A3C861068"
                                        },
                                        {
                                            "title":"3.4.50 TRANSPORT_FULL_CHECK",
                                            "href":"datapump-import-utility.html#GUID-8C9D9D32-2284-475C-B27B-55E86983D0DF"
                                        },
                                        {
                                            "title":"3.4.51 TRANSPORT_TABLESPACES",
                                            "href":"datapump-import-utility.html#GUID-C1F60D28-28C2-474C-BBD9-7C74011C0194"
                                        },
                                        {
                                            "title":"3.4.52 TRANSPORTABLE",
                                            "href":"datapump-import-utility.html#GUID-6C68D323-988F-4A4D-9112-20EA2F53C5C2"
                                        },
                                        {
                                            "title":"3.4.53 VERSION",
                                            "href":"datapump-import-utility.html#GUID-A5B19146-2CAA-47E7-8AE5-57A05E3347F6"
                                        },
                                        {
                                            "title":"3.4.54 VIEWS_AS_TABLES (Network Import)",
                                            "href":"datapump-import-utility.html#GUID-DAB87784-6D0A-4CB7-A16F-DC3969133C88"
                                        },
                                        {
                                            "title":"3.4.55 VIEWS_AS_TABLES (Non-Network Import)",
                                            "href":"datapump-import-utility.html#GUID-D69908B3-298F-4DB2-B06C-88F6B683BC06"
                                        }
                                    ]
                                },
                                {
                                    "title":"3.5 Commands Available in Import's Interactive-Command Mode",
                                    "href":"datapump-import-utility.html#GUID-0FD688BF-A25E-40D3-B835-E2CBF069F26E",
                                    "topics":[
                                        {
                                            "title":"3.5.1 CONTINUE_CLIENT",
                                            "href":"datapump-import-utility.html#GUID-D982C013-7DBA-4FA0-902C-E63DB5E16D7A"
                                        },
                                        {
                                            "title":"3.5.2 EXIT_CLIENT",
                                            "href":"datapump-import-utility.html#GUID-6A345377-B405-4FEF-AACD-236DE8D0A700"
                                        },
                                        {
                                            "title":"3.5.3 HELP",
                                            "href":"datapump-import-utility.html#GUID-5AA2E825-108D-48F4-8A9E-2BC32F2F9BC9"
                                        },
                                        {
                                            "title":"3.5.4 KILL_JOB",
                                            "href":"datapump-import-utility.html#GUID-E4670F49-739C-48CD-AE6C-E98DBC467E36"
                                        },
                                        {
                                            "title":"3.5.5 PARALLEL",
                                            "href":"datapump-import-utility.html#GUID-BABFA516-2BB3-4AC0-BEEC-7B762DB4B6DF"
                                        },
                                        {
                                            "title":"3.5.6 START_JOB",
                                            "href":"datapump-import-utility.html#GUID-635F8AE6-A0AC-4BC0-BE31-0F9A649EF636"
                                        },
                                        {
                                            "title":"3.5.7 STATUS",
                                            "href":"datapump-import-utility.html#GUID-DDF7E228-B0F9-4112-96D2-DA7063B79730"
                                        },
                                        {
                                            "title":"3.5.8 STOP_JOB",
                                            "href":"datapump-import-utility.html#GUID-2BF78573-239C-4D56-8C40-B1F30F3E8609"
                                        }
                                    ]
                                },
                                {
                                    "title":"3.6 Examples of Using Data Pump Import",
                                    "href":"datapump-import-utility.html#GUID-5404703A-05B6-4E76-B58F-C52AB37BFFAF",
                                    "topics":[
                                        {
                                            "title":"3.6.1 Performing a Data-Only Table-Mode Import",
                                            "href":"datapump-import-utility.html#GUID-96AB8902-B838-43D2-95B0-D35C7589ADC6"
                                        },
                                        {
                                            "title":"3.6.2 Performing a Schema-Mode Import",
                                            "href":"datapump-import-utility.html#GUID-DCFE91B2-D1FE-495F-9C6E-57987F020389"
                                        },
                                        {
                                            "title":"3.6.3 Performing a Network-Mode Import",
                                            "href":"datapump-import-utility.html#GUID-56C36EAA-704E-42D7-9BF2-9FC8088DE773"
                                        }
                                    ]
                                },
                                {
                                    "title":"3.7 Syntax Diagrams for Data Pump Import",
                                    "href":"datapump-import-utility.html#GUID-4521C3CD-EE17-4836-9760-D11FC21CBB7F"
                                }
                            ]
                        },
                        {
                            "title":"4 Data Pump Legacy Mode",
                            "href":"oracle-data-pump-legacy-mode.html#GUID-B4A887AD-1E1D-4305-A6D8-DC16D3B28BA9",
                            "topics":[
                                {
                                    "title":"4.1 Parameter Mappings",
                                    "href":"oracle-data-pump-legacy-mode.html#GUID-595EE08A-0928-4262-BAF8-627B5BE5E3CE",
                                    "topics":[
                                        {
                                            "title":"4.1.1 Using Original Export Parameters with Data Pump",
                                            "href":"oracle-data-pump-legacy-mode.html#GUID-28EBC856-5EE8-4C66-8677-3D5723CC5CCF"
                                        },
                                        {
                                            "title":"4.1.2 Using Original Import Parameters with Data Pump",
                                            "href":"oracle-data-pump-legacy-mode.html#GUID-C36B6B69-E55C-4278-AF6D-C9E2306AAE06"
                                        }
                                    ]
                                },
                                {
                                    "title":"4.2 Management of File Locations in Data Pump Legacy Mode",
                                    "href":"oracle-data-pump-legacy-mode.html#GUID-514F8E50-3D5C-40B5-97A0-8B554C405719"
                                },
                                {
                                    "title":"4.3 Adjusting Existing Scripts for Data Pump Log Files and Errors",
                                    "href":"oracle-data-pump-legacy-mode.html#GUID-998125C5-D00F-4E04-9359-B4835696902E",
                                    "topics":[
                                        {
                                            "title":"4.3.1 Log Files",
                                            "href":"oracle-data-pump-legacy-mode.html#GUID-0E1DC195-6F4F-4E2D-ABEA-99CBD973C87C"
                                        },
                                        {
                                            "title":"4.3.2 Error Cases",
                                            "href":"oracle-data-pump-legacy-mode.html#GUID-1721DF7B-CFEA-4883-AC83-30BFD311D21B"
                                        },
                                        {
                                            "title":"4.3.3 Exit Status",
                                            "href":"oracle-data-pump-legacy-mode.html#GUID-448EEE9A-EAF1-404B-BDC0-B4A70E616D1F"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"5 Data Pump Performance",
                            "href":"oracle-data-pump-performance-tips.html#GUID-B41F187E-3613-48F8-B47E-CD9BC918424B",
                            "topics":[
                                {
                                    "title":"5.1 Data Performance Improvements for Data Pump Export and Import",
                                    "href":"oracle-data-pump-performance-tips.html#GUID-1AD6C874-13C2-4F5F-A83E-0848A789D786"
                                },
                                {
                                    "title":"5.2 Tuning Performance",
                                    "href":"oracle-data-pump-performance-tips.html#GUID-68EE06E4-FB26-4B56-86A9-1A93ACBE1454",
                                    "topics":[
                                        {
                                            "title":"5.2.1 Controlling Resource Consumption",
                                            "href":"oracle-data-pump-performance-tips.html#GUID-DB2A8AE4-B208-4C99-8F41-DCA28CDFE2D9"
                                        },
                                        {
                                            "title":"5.2.2 Effect of Compression and Encryption on Performance",
                                            "href":"oracle-data-pump-performance-tips.html#GUID-79E9B7AA-73F9-4025-AF95-127D96703C48"
                                        },
                                        {
                                            "title":"5.2.3 Memory Considerations When Exporting and Importing Statistics",
                                            "href":"oracle-data-pump-performance-tips.html#GUID-E9489161-120F-4823-95D6-B8B0742D5EB0"
                                        }
                                    ]
                                },
                                {
                                    "title":"5.3 Initialization Parameters That Affect Data Pump Performance",
                                    "href":"oracle-data-pump-performance-tips.html#GUID-421AF4A2-68FB-4638-AAC5-D1B676BF9364",
                                    "topics":[
                                        {
                                            "title":"5.3.1 Setting the Size Of the Buffer Cache In a Streams Environment",
                                            "href":"oracle-data-pump-performance-tips.html#GUID-10110DEF-C8CC-438C-9C7A-6C686180E6B4"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"6 The Data Pump API",
                            "href":"using-oracle_datapump-api.html#GUID-EAD7AE4B-778A-4369-9842-68E026409045",
                            "topics":[
                                {
                                    "title":"6.1 How Does the Client Interface to the Data Pump API Work?",
                                    "href":"using-oracle_datapump-api.html#GUID-176E03D9-83CF-449F-95D9-C580F1770C88",
                                    "topics":[
                                        {
                                            "title":"6.1.1 Job States",
                                            "href":"using-oracle_datapump-api.html#GUID-1622BCF2-2D0C-4FD5-9C52-E756CC81BA76"
                                        }
                                    ]
                                },
                                {
                                    "title":"6.2 What Are the Basic Steps in Using the Data Pump API?",
                                    "href":"using-oracle_datapump-api.html#GUID-22D4851C-4057-4BBB-B7F0-DB9091A30641"
                                },
                                {
                                    "title":"6.3 Examples of Using the Data Pump API",
                                    "href":"using-oracle_datapump-api.html#GUID-5AAC848B-5A2B-4FD1-97ED-D3A048263118"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part II SQL*Loader",
                    "href":"oracle-sql-loader.html#GUID-8D037494-07FA-4226-B507-E1B2ED10C144",
                    "topics":[
                        {
                            "title":"7 SQL*Loader Concepts",
                            "href":"oracle-sql-loader-concepts.html#GUID-DD843EE2-1FAB-4E72-A115-21D97A501ECC",
                            "topics":[
                                {
                                    "title":"7.1 SQL*Loader Features",
                                    "href":"oracle-sql-loader-concepts.html#GUID-A07484AF-4EE8-432F-A587-5E158FF0B4C1"
                                },
                                {
                                    "title":"7.2 SQL*Loader Parameters",
                                    "href":"oracle-sql-loader-concepts.html#GUID-15B4DC15-9065-495B-9666-8EBA47F892F4"
                                },
                                {
                                    "title":"7.3 SQL*Loader Control File",
                                    "href":"oracle-sql-loader-concepts.html#GUID-FC7D21D4-A3B4-4E4B-9C45-3090F029D03F"
                                },
                                {
                                    "title":"7.4 Input Data and Data Files",
                                    "href":"oracle-sql-loader-concepts.html#GUID-817B408D-57AA-49F0-A2AA-1DEE8C1A2D8F",
                                    "topics":[
                                        {
                                            "title":"7.4.1 Fixed Record Format",
                                            "href":"oracle-sql-loader-concepts.html#GUID-B88C4284-089D-4565-AFAF-6A73122AAA0B"
                                        },
                                        {
                                            "title":"7.4.2 Variable Record Format",
                                            "href":"oracle-sql-loader-concepts.html#GUID-0A3FE221-01B5-4CDD-9834-109B3BB3B16D"
                                        },
                                        {
                                            "title":"7.4.3 Stream Record Format",
                                            "href":"oracle-sql-loader-concepts.html#GUID-C6D10BF6-F6C0-476C-B924-7A081C70DBC2"
                                        },
                                        {
                                            "title":"7.4.4 Logical Records",
                                            "href":"oracle-sql-loader-concepts.html#GUID-F99250F9-F720-45EE-8159-9B8A8E5A77D6"
                                        },
                                        {
                                            "title":"7.4.5 Data Fields",
                                            "href":"oracle-sql-loader-concepts.html#GUID-B22B423B-909B-458B-8A66-EBDCE7BFE67F"
                                        }
                                    ]
                                },
                                {
                                    "title":"7.5 LOBFILEs and Secondary Data Files (SDFs)",
                                    "href":"oracle-sql-loader-concepts.html#GUID-BBD855DC-8B7B-4145-A76D-FFF3F9B7CD4A"
                                },
                                {
                                    "title":"7.6 Data Conversion and Data Type Specification",
                                    "href":"oracle-sql-loader-concepts.html#GUID-89F0C127-A3E1-42F9-916D-BDF629FDD0D8"
                                },
                                {
                                    "title":"7.7 Discarded and Rejected Records",
                                    "href":"oracle-sql-loader-concepts.html#GUID-69DBF6E4-1E0C-4D7A-B2F3-32736937ED86",
                                    "topics":[
                                        {
                                            "title":"7.7.1 The Bad File",
                                            "href":"oracle-sql-loader-concepts.html#GUID-CB709CE1-BA35-42C8-A6F5-23874A6C2968",
                                            "topics":[
                                                {
                                                    "title":"7.7.1.1 Records Rejected by SQL*Loader",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-1F19DD2A-C339-481D-BD4F-BAFC38B10A35"
                                                },
                                                {
                                                    "title":"7.7.1.2 Records Rejected by Oracle Database During a SQL*Loader Operation",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-6D52AD6E-5563-484F-9927-6E0F137DA226"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"7.7.2 The Discard File",
                                            "href":"oracle-sql-loader-concepts.html#GUID-33509A75-186E-4742-8FFA-C2430A51D968"
                                        }
                                    ]
                                },
                                {
                                    "title":"7.8 Log File and Logging Information",
                                    "href":"oracle-sql-loader-concepts.html#GUID-CEC7DC6F-02DF-4B64-AA7E-A77FA9E01E4F"
                                },
                                {
                                    "title":"7.9 Conventional Path Loads, Direct Path Loads, and External Table Loads",
                                    "href":"oracle-sql-loader-concepts.html#GUID-C4C1A6D6-4C85-478F-9A43-148E1812CCE8",
                                    "topics":[
                                        {
                                            "title":"7.9.1 Conventional Path Loads",
                                            "href":"oracle-sql-loader-concepts.html#GUID-6C59CC14-B1B4-463A-B7C6-706330266768"
                                        },
                                        {
                                            "title":"7.9.2 Direct Path Loads",
                                            "href":"oracle-sql-loader-concepts.html#GUID-817EE44A-D24C-4BB2-873A-6A4ACAA7689E",
                                            "topics":[
                                                {
                                                    "title":"7.9.2.1 Parallel Direct Path",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-6285DE2C-A69E-498E-8192-7C17934793BA"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"7.9.3 External Table Loads",
                                            "href":"oracle-sql-loader-concepts.html#GUID-309085A3-9D23-4ED8-9920-E243C6406286"
                                        },
                                        {
                                            "title":"7.9.4 Choosing External Tables Versus SQL*Loader",
                                            "href":"oracle-sql-loader-concepts.html#GUID-289C0B1B-96FE-430B-8525-AC077E434DA9"
                                        },
                                        {
                                            "title":"7.9.5 Behavior Differences Between SQL*Loader and External Tables",
                                            "href":"oracle-sql-loader-concepts.html#GUID-AC0DBDB3-BD68-45A4-ABA3-3DE38BB038ED",
                                            "topics":[
                                                {
                                                    "title":"7.9.5.1 Multiple Primary Input Data Files",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-CB98D671-ECEE-44C6-B8F4-6EFADB10701B"
                                                },
                                                {
                                                    "title":"7.9.5.2 Syntax and Data Types",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-7C5E1DE3-78B3-4991-8BD5-1C2293ACD5D9"
                                                },
                                                {
                                                    "title":"7.9.5.3 Byte-Order Marks",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-F0CA8BF4-7A9C-4435-A0AB-4BA7A8687E87"
                                                },
                                                {
                                                    "title":"7.9.5.4 Default Character Sets, Date Masks, and Decimal Separator",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-25925739-DB99-4BF0-90CF-37749E2149AE"
                                                },
                                                {
                                                    "title":"7.9.5.5 Use of the Backslash Escape Character",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-4626E5AA-FB07-4F09-B82E-64A5C099AF26"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"7.10 Loading Objects, Collections, and LOBs",
                                    "href":"oracle-sql-loader-concepts.html#GUID-6970C8C0-6EBC-4FC3-AABE-51EA2595850C",
                                    "topics":[
                                        {
                                            "title":"7.10.1 Supported Object Types",
                                            "href":"oracle-sql-loader-concepts.html#GUID-FE9D5297-F833-47FD-BFD6-C554989E51D4",
                                            "topics":[
                                                {
                                                    "title":"7.10.1.1 column objects",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-920AF739-3E44-46C6-9EF8-97B7B4BD3C04"
                                                },
                                                {
                                                    "title":"7.10.1.2 row objects",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-8FE69285-C515-401B-80B0-0E8ECA6C1413"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"7.10.2 Supported Collection Types",
                                            "href":"oracle-sql-loader-concepts.html#GUID-EEFF26E0-2722-44DB-A78D-B1B174C79611",
                                            "topics":[
                                                {
                                                    "title":"7.10.2.1 Nested Tables",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-E91CDDF4-825E-4EF7-85DE-3B3533A2F6E0"
                                                },
                                                {
                                                    "title":"7.10.2.2 VARRAYs",
                                                    "href":"oracle-sql-loader-concepts.html#GUID-1272FCFE-F3D0-4B5A-BD12-56D988B7EE6C"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"7.10.3 Supported LOB Data Types",
                                            "href":"oracle-sql-loader-concepts.html#GUID-68F9967D-6D20-4501-99C1-C87FCD1AF5F1"
                                        }
                                    ]
                                },
                                {
                                    "title":"7.11 Partitioned Object Support",
                                    "href":"oracle-sql-loader-concepts.html#GUID-08137A98-9FE9-43F5-B976-BE4EF18068F3"
                                },
                                {
                                    "title":"7.12 Application Development: Direct Path Load API",
                                    "href":"oracle-sql-loader-concepts.html#GUID-615F67C7-A02E-425B-AFB8-2843082AF4D9"
                                },
                                {
                                    "title":"7.13 SQL*Loader Case Studies",
                                    "href":"oracle-sql-loader-concepts.html#GUID-96DDFFBB-7BFD-4370-A43C-0211A24FA323",
                                    "topics":[
                                        {
                                            "title":"7.13.1 Case Study Files",
                                            "href":"oracle-sql-loader-concepts.html#GUID-79CAAF8B-0DAA-413A-9AEA-AA01F8121A75"
                                        },
                                        {
                                            "title":"7.13.2 Running the Case Studies",
                                            "href":"oracle-sql-loader-concepts.html#GUID-EC342EAB-7C67-4D89-99AF-50D8B14EE4E9"
                                        },
                                        {
                                            "title":"7.13.3 Case Study Log Files",
                                            "href":"oracle-sql-loader-concepts.html#GUID-6FD9A3AD-4A0E-49AA-912D-9BCA8B16B5EE"
                                        },
                                        {
                                            "title":"7.13.4 Checking the Results of a Case Study",
                                            "href":"oracle-sql-loader-concepts.html#GUID-20FBD23C-0D58-40A7-AB6E-719837089870"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"8 SQL*Loader Command-Line Reference",
                            "href":"oracle-sql-loader-commands.html#GUID-CD662CD8-DAA7-4A30-BC84-546E4C40DB31",
                            "topics":[
                                {
                                    "title":"8.1 Invoking SQL*Loader",
                                    "href":"oracle-sql-loader-commands.html#GUID-C7E17903-E4AA-4330-A715-461000289AF6",
                                    "topics":[
                                        {
                                            "title":"8.1.1 Specifying Parameters on the Command Line",
                                            "href":"oracle-sql-loader-commands.html#GUID-67CED904-5084-47B4-B413-6B835C46B1A1"
                                        },
                                        {
                                            "title":"8.1.2 Alternative Ways to Specify SQL*Loader Parameters",
                                            "href":"oracle-sql-loader-commands.html#GUID-660CA352-D5D9-4F7E-A958-7003CF2F0E3D"
                                        },
                                        {
                                            "title":"8.1.3 Using SQL*Loader to Load Data Across a Network",
                                            "href":"oracle-sql-loader-commands.html#GUID-82F40559-A637-4AAE-B486-7D0E34F3513B"
                                        }
                                    ]
                                },
                                {
                                    "title":"8.2 Command-Line Parameters for SQL*Loader",
                                    "href":"oracle-sql-loader-commands.html#GUID-D7A661F1-5EE3-43DF-B3A5-050B2CF66844",
                                    "topics":[
                                        {
                                            "title":"8.2.1 BAD",
                                            "href":"oracle-sql-loader-commands.html#GUID-858A7877-544A-4D49-B499-769603D2424D"
                                        },
                                        {
                                            "title":"8.2.2 BINDSIZE",
                                            "href":"oracle-sql-loader-commands.html#GUID-15D32D8B-93AD-46B7-8D5F-8736289A9803"
                                        },
                                        {
                                            "title":"8.2.3 COLUMNARRAYROWS",
                                            "href":"oracle-sql-loader-commands.html#GUID-7FD5293A-B69A-4873-A030-694B7C36C3B2"
                                        },
                                        {
                                            "title":"8.2.4 CONTROL",
                                            "href":"oracle-sql-loader-commands.html#GUID-5F005A0B-D66E-4CF9-967B-908F771EB2C8"
                                        },
                                        {
                                            "title":"8.2.5 DATA",
                                            "href":"oracle-sql-loader-commands.html#GUID-4F0321D7-B141-453B-B5D2-2553230CDFBF"
                                        },
                                        {
                                            "title":"8.2.6 DATE_CACHE",
                                            "href":"oracle-sql-loader-commands.html#GUID-4EB08318-8317-476C-B03E-7D6F64922663"
                                        },
                                        {
                                            "title":"8.2.7 DEFAULTS",
                                            "href":"oracle-sql-loader-commands.html#GUID-EBCC317C-E9B3-4E50-837B-A4A955788D29"
                                        },
                                        {
                                            "title":"8.2.8 DEGREE_OF_PARALLELISM",
                                            "href":"oracle-sql-loader-commands.html#GUID-66052D39-A805-4919-A9B2-BCD853C98AB9"
                                        },
                                        {
                                            "title":"8.2.9 DIRECT",
                                            "href":"oracle-sql-loader-commands.html#GUID-22130581-8C22-42A7-AFC0-4F5DCDE5445A"
                                        },
                                        {
                                            "title":"8.2.10 DIRECT_PATH_LOCK_WAIT",
                                            "href":"oracle-sql-loader-commands.html#GUID-E2BA2533-3CC8-4E91-8440-6A6ED0D66E51"
                                        },
                                        {
                                            "title":"8.2.11 DISCARD",
                                            "href":"oracle-sql-loader-commands.html#GUID-14065025-0E02-40FA-A069-527556226D42"
                                        },
                                        {
                                            "title":"8.2.12 DISCARDMAX",
                                            "href":"oracle-sql-loader-commands.html#GUID-4D3E6DF7-2759-4E35-B5E8-FFE4AFDD95DC"
                                        },
                                        {
                                            "title":"8.2.13 DNFS_ENABLE",
                                            "href":"oracle-sql-loader-commands.html#GUID-422BD319-998F-47AE-BDB9-EC9BC1DE9605"
                                        },
                                        {
                                            "title":"8.2.14 DNFS_READBUFFERS",
                                            "href":"oracle-sql-loader-commands.html#GUID-9D12C4C5-339D-48F3-BB1F-7523BE86C13F"
                                        },
                                        {
                                            "title":"8.2.15 EMPTY_LOBS_ARE_NULL",
                                            "href":"oracle-sql-loader-commands.html#GUID-22D420E1-8E77-4C2F-942A-45B240EC325D"
                                        },
                                        {
                                            "title":"8.2.16 ERRORS",
                                            "href":"oracle-sql-loader-commands.html#GUID-6DAE53EE-0A36-478C-B7C4-5C5F75E4B134"
                                        },
                                        {
                                            "title":"8.2.17 EXTERNAL_TABLE",
                                            "href":"oracle-sql-loader-commands.html#GUID-E73713AB-7204-4158-BE85-18D7DC313F87"
                                        },
                                        {
                                            "title":"8.2.18 FILE",
                                            "href":"oracle-sql-loader-commands.html#GUID-F3234299-F164-4BF1-81F3-8EBA52E757B0"
                                        },
                                        {
                                            "title":"8.2.19 HELP",
                                            "href":"oracle-sql-loader-commands.html#GUID-D7FFF8EC-AEBD-4330-8B18-349DD1F213CB"
                                        },
                                        {
                                            "title":"8.2.20 LOAD",
                                            "href":"oracle-sql-loader-commands.html#GUID-AD23A887-D24F-4A7D-8FF1-C7388E24AC9D"
                                        },
                                        {
                                            "title":"8.2.21 LOG",
                                            "href":"oracle-sql-loader-commands.html#GUID-337E9687-12AF-4D27-B6AD-76517489A90C"
                                        },
                                        {
                                            "title":"8.2.22 MULTITHREADING",
                                            "href":"oracle-sql-loader-commands.html#GUID-C6BCD707-05B2-4D19-BD20-97F8C1137864"
                                        },
                                        {
                                            "title":"8.2.23 NO_INDEX_ERRORS",
                                            "href":"oracle-sql-loader-commands.html#GUID-24205A60-E16F-4DBA-AD82-376C401013DF"
                                        },
                                        {
                                            "title":"8.2.24 PARALLEL",
                                            "href":"oracle-sql-loader-commands.html#GUID-AFC9087A-C55A-43C0-B5D8-FE9BC1BCE7BA"
                                        },
                                        {
                                            "title":"8.2.25 PARFILE",
                                            "href":"oracle-sql-loader-commands.html#GUID-958AD711-DAAA-4185-9055-FD7535CF413D"
                                        },
                                        {
                                            "title":"8.2.26 PARTITION_MEMORY",
                                            "href":"oracle-sql-loader-commands.html#GUID-16D0F94E-2C3A-4E9F-B4CB-13570B8C992A"
                                        },
                                        {
                                            "title":"8.2.27 READSIZE",
                                            "href":"oracle-sql-loader-commands.html#GUID-846265A6-3B66-45FD-99AE-009EC9380490"
                                        },
                                        {
                                            "title":"8.2.28 RESUMABLE",
                                            "href":"oracle-sql-loader-commands.html#GUID-533CAB0F-51EB-4BFD-BF33-572E749DF443"
                                        },
                                        {
                                            "title":"8.2.29 RESUMABLE_NAME",
                                            "href":"oracle-sql-loader-commands.html#GUID-0D9042A4-A9D9-4925-8054-1CBA2E2E0871"
                                        },
                                        {
                                            "title":"8.2.30 RESUMABLE_TIMEOUT",
                                            "href":"oracle-sql-loader-commands.html#GUID-5DD2B4F1-D3C4-450A-9C6E-525BC14D8E0B"
                                        },
                                        {
                                            "title":"8.2.31 ROWS",
                                            "href":"oracle-sql-loader-commands.html#GUID-33691596-F8CB-470D-A335-676B5F2A8FD2"
                                        },
                                        {
                                            "title":"8.2.32 SDF_PREFIX",
                                            "href":"oracle-sql-loader-commands.html#GUID-69737A28-EC8E-4087-961C-4092BD825D73"
                                        },
                                        {
                                            "title":"8.2.33 SILENT",
                                            "href":"oracle-sql-loader-commands.html#GUID-97835EEB-BC07-4607-8527-241B36A737D3"
                                        },
                                        {
                                            "title":"8.2.34 SKIP",
                                            "href":"oracle-sql-loader-commands.html#GUID-84244C46-6AFD-412D-9240-BEB0B5C2718B"
                                        },
                                        {
                                            "title":"8.2.35 SKIP_INDEX_MAINTENANCE",
                                            "href":"oracle-sql-loader-commands.html#GUID-1CF1975A-7569-4C58-BFF6-1D34352B6631"
                                        },
                                        {
                                            "title":"8.2.36 SKIP_UNUSABLE_INDEXES",
                                            "href":"oracle-sql-loader-commands.html#GUID-F1992092-32BE-462B-9E4E-271F571FCAC4"
                                        },
                                        {
                                            "title":"8.2.37 STREAMSIZE",
                                            "href":"oracle-sql-loader-commands.html#GUID-20075E73-BF09-4740-BFEC-24A051FEF9F2"
                                        },
                                        {
                                            "title":"8.2.38 TRIM",
                                            "href":"oracle-sql-loader-commands.html#GUID-C2B36FCB-036E-4BBF-8DC6-751F68896C17"
                                        },
                                        {
                                            "title":"8.2.39 USERID",
                                            "href":"oracle-sql-loader-commands.html#GUID-B20D828D-2BF2-44C2-BD65-761D7B3E072D"
                                        }
                                    ]
                                },
                                {
                                    "title":"8.3 Exit Codes for Inspection and Display",
                                    "href":"oracle-sql-loader-commands.html#GUID-FDC9B490-7C23-4DEF-B826-9FDAEAF0FA64"
                                }
                            ]
                        },
                        {
                            "title":"9 SQL*Loader Control File Reference",
                            "href":"oracle-sql-loader-control-file-contents.html#GUID-7F8983A0-CA5D-41D9-A096-CB1858CEDB4C",
                            "topics":[
                                {
                                    "title":"9.1 Control File Contents",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-413DEE17-FA16-4AD7-A5E6-0A6D8BFE0057",
                                    "topics":[
                                        {
                                            "title":"9.1.1 Comments in the Control File",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-E66EB53D-F641-45C2-9B92-6946D695CD71"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.2 Specifying Command-Line Parameters in the Control File",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-34A050B6-3FD7-4B77-97D2-04C03D359D16",
                                    "topics":[
                                        {
                                            "title":"9.2.1 OPTIONS Clause",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-2BB41EA6-C94D-41C1-94DE-966B291943E6"
                                        },
                                        {
                                            "title":"9.2.2 Specifying the Number of Default Expressions to Be Evaluated At One Time",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-C4120663-55C9-4DFB-BA4D-823271F77CA4"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.3 Specifying File Names and Object Names",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-F1F2C271-0E34-4247-A833-3D02374CBFD7",
                                    "topics":[
                                        {
                                            "title":"9.3.1 File Names That Conflict with SQL and SQL*Loader Reserved Words",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-D757BB27-2130-4859-9F0A-194DED6888BA"
                                        },
                                        {
                                            "title":"9.3.2 Specifying SQL Strings",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-C081F7E1-F0CB-4E10-A22B-2CBF0F062A77"
                                        },
                                        {
                                            "title":"9.3.3 Operating System Considerations",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-0BAFDC4F-A289-4E0D-BA4B-59C1757F3D38",
                                            "topics":[
                                                {
                                                    "title":"9.3.3.1 Specifying a Complete Path",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-4E29DF12-771C-4958-8A2C-FBB89B9F46EF"
                                                },
                                                {
                                                    "title":"9.3.3.2 Backslash Escape Character",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-8CAEDEB8-F1D1-4C67-8870-27C365DDA2C4"
                                                },
                                                {
                                                    "title":"9.3.3.3 Nonportable Strings",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-9A4B0DC0-9D59-4730-87F8-3D85BBFF99F7"
                                                },
                                                {
                                                    "title":"9.3.3.4 Using the Backslash as an Escape Character",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-7E341F15-66BF-4FAF-9E0B-54E1D3F4D544"
                                                },
                                                {
                                                    "title":"9.3.3.5 Escape Character Is Sometimes Disallowed",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-9809B526-76B6-4F7B-AC78-04224A86D4E4"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"9.4 Identifying XMLType Tables",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-1E8FD4B9-FDE3-4C37-9C86-E79DC9FE0BD5"
                                },
                                {
                                    "title":"9.5 Specifying Field Order",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-2FAAD351-7526-4A44-93FE-C43444DB83D8"
                                },
                                {
                                    "title":"9.6 Specifying Data Files",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-7EBEA709-4192-4B5A-A3FA-450D41BE2EC7",
                                    "topics":[
                                        {
                                            "title":"9.6.1 Examples of INFILE Syntax",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-8240E9DF-EE84-4E60-93FA-7EE6E92E4B5A"
                                        },
                                        {
                                            "title":"9.6.2 Specifying Multiple Data Files",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-C3A0A205-6265-4130-ABAB-DD277188E850"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.7 Specifying CSV Format Files",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-D1762699-8154-40F6-90DE-EFB8EB6A9AB0"
                                },
                                {
                                    "title":"9.8 Identifying Data in the Control File with BEGINDATA",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-3965BD1F-4450-4E78-B480-62EA27BAEFFE"
                                },
                                {
                                    "title":"9.9 Specifying Data File Format and Buffering",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-4C481785-1FFE-4EB8-837E-DCB5236B6222"
                                },
                                {
                                    "title":"9.10 Specifying the Bad File",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-5C9400BE-5321-4727-9D50-265AB620155D",
                                    "topics":[
                                        {
                                            "title":"9.10.1 Examples of Specifying a Bad File Name",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-CE28912A-3ABD-47D7-9AF2-BF268349E96D"
                                        },
                                        {
                                            "title":"9.10.2 How Bad Files Are Handled with LOBFILEs and SDFs",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-670AECF7-6E1C-44FD-B5E0-A21CAC8495D2"
                                        },
                                        {
                                            "title":"9.10.3 Criteria for Rejected Records",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-AA49F866-62FF-4A90-913B-57E35F0E75AE"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.11 Specifying the Discard File",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-0A8BB28E-96D3-4553-8345-D1EDCAF599E4",
                                    "topics":[
                                        {
                                            "title":"9.11.1 Specifying the Discard File in the Control File",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-C98D077F-3C60-4672-86AE-88986937E2D6",
                                            "topics":[
                                                {
                                                    "title":"9.11.1.1 Limiting the Number of Discard Records",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-E57E25AE-0D17-49E9-83F9-8382A3572E4F"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.11.2 Examples of Specifying a Discard File Name",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-7A14E235-B7F1-402C-84BD-8BC2B5B56821"
                                        },
                                        {
                                            "title":"9.11.3 Criteria for Discarded Records",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-ADD5D04C-BFD9-42B7-9D76-A605913D991A"
                                        },
                                        {
                                            "title":"9.11.4 How Discard Files Are Handled with LOBFILEs and SDFs",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-6B140264-A5EE-4C74-A057-CC126D38C736"
                                        },
                                        {
                                            "title":"9.11.5 Specifying the Discard File from the Command Line",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-4FE42E2C-8D84-4966-B150-A96CC83FA8B3"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.12 Specifying a NULLIF Clause At the Table Level",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-ACB5F2D6-4D15-4A36-A7B2-72D35C5440B3"
                                },
                                {
                                    "title":"9.13 Specifying Datetime Formats At the Table Level",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-5740B2F9-C5C3-4D44-BB3F-81484417F02D"
                                },
                                {
                                    "title":"9.14 Handling Different Character Encoding Schemes",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-E0D390F1-1078-4955-9B55-B19C971D616D",
                                    "topics":[
                                        {
                                            "title":"9.14.1 Multibyte (Asian) Character Sets",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-CA3A5703-2A9D-47F2-9243-E467033594F1"
                                        },
                                        {
                                            "title":"9.14.2 Unicode Character Sets",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-38D2D987-6740-49BB-B2FA-817DF0CB2868"
                                        },
                                        {
                                            "title":"9.14.3 Database Character Sets",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-A0836AD3-5897-419E-AE40-33B40DB19660"
                                        },
                                        {
                                            "title":"9.14.4 Data File Character Sets",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-B0CCE864-0CB2-4D6A-BAC6-F9C06C38844B"
                                        },
                                        {
                                            "title":"9.14.5 Input Character Conversion",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-5E050EBB-C889-48BE-8A30-524B20864317",
                                            "topics":[
                                                {
                                                    "title":"9.14.5.1 Considerations When Loading Data into VARRAYs or Primary-Key-Based REFs",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-C7CB0A64-C903-4AE3-8FEE-6FDE89E9AC97"
                                                },
                                                {
                                                    "title":"9.14.5.2 CHARACTERSET Parameter",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-AD74E528-D701-408F-A7AD-FCEDC39217B3"
                                                },
                                                {
                                                    "title":"9.14.5.3 Control File Character Set",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-8CFCF2A9-1F8F-4C9D-BB35-160E8C6ABA0D"
                                                },
                                                {
                                                    "title":"9.14.5.4 Character-Length Semantics",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-3DB632A7-BF43-40EF-AB2C-A1CC095854C2"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.14.6 Shift-sensitive Character Data",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-16B8A9FA-73F2-4303-A514-1E023D68B0AF"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.15 Interrupted Loads",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-C4FC7240-A461-4C03-A984-81D045DEE939",
                                    "topics":[
                                        {
                                            "title":"9.15.1 Discontinued Conventional Path Loads",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-80B5F24F-9FCE-4502-B8BD-2260F25036F0"
                                        },
                                        {
                                            "title":"9.15.2 Discontinued Direct Path Loads",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-7A1B84EC-5BCD-4601-9C4A-654F1987D94F",
                                            "topics":[
                                                {
                                                    "title":"9.15.2.1 Load Discontinued Because of Space Errors",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-7D59E251-13E8-4924-BA0A-B2B76993FDB9"
                                                },
                                                {
                                                    "title":"9.15.2.2 Load Discontinued Because Maximum Number of Errors Exceeded",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-0F9749BF-9A68-425E-908C-2D9E3A93C0CA"
                                                },
                                                {
                                                    "title":"9.15.2.3 Load Discontinued Because of Fatal Errors",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-DBD5A039-5618-44A8-8806-B0D1FC3A6056"
                                                },
                                                {
                                                    "title":"9.15.2.4 Load Discontinued Because a Ctrl+C Was Issued",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-A32053E9-0498-4173-9BC1-84FF3557E988"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.15.3 Status of Tables and Indexes After an Interrupted Load",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-ACDDF4B7-E640-4AF9-878C-B6588502A690"
                                        },
                                        {
                                            "title":"9.15.4 Using the Log File to Determine Load Status",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-3743E0E5-D16B-467C-9380-868021120E0D"
                                        },
                                        {
                                            "title":"9.15.5 Continuing Single-Table Loads",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-2D8296C4-0976-4BEF-820B-ADB91326ACF6"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.16 Assembling Logical Records from Physical Records",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-C582FC3E-EDF0-4200-8F99-4F9E679F178F",
                                    "topics":[
                                        {
                                            "title":"9.16.1 Using CONCATENATE to Assemble Logical Records",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-2F2DCBD4-CEEB-4479-AF6E-38F0BAF4499E"
                                        },
                                        {
                                            "title":"9.16.2 Using CONTINUEIF to Assemble Logical Records",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-8A07D429-7BF0-49F6-9329-91BC1AB80C98"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.17 Loading Logical Records into Tables",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-AF891AD0-AD88-4C9D-B322-4C87605DDDC0",
                                    "topics":[
                                        {
                                            "title":"9.17.1 Specifying Table Names",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-AE99BBF7-ED2E-4628-844E-703EEF8A5A5C",
                                            "topics":[
                                                {
                                                    "title":"9.17.1.1 INTO TABLE Clause",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-9E95D9E3-C554-495C-9400-A0B0840DCF35"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.17.2 Table-Specific Loading Method",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-227B995D-72A8-42EE-ADD9-350B8A229495",
                                            "topics":[
                                                {
                                                    "title":"9.17.2.1 Loading Data into Empty Tables",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-63D25923-62F8-41A4-8062-662744CB1C84",
                                                    "topics":[
                                                        {
                                                            "title":"9.17.2.1.1 INSERT",
                                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-A10DBE43-62C3-4E43-B2FE-A6C1FFBB28E8"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"9.17.2.2 Loading Data into Nonempty Tables",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-2F1B7E71-AE90-40CB-9A7F-B44187FD059C",
                                                    "topics":[
                                                        {
                                                            "title":"9.17.2.2.1 APPEND",
                                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-4786DB91-02BD-4CC1-9072-DA4E38191CC3"
                                                        },
                                                        {
                                                            "title":"9.17.2.2.2 REPLACE",
                                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-5D3BBCDE-29F9-4DCB-9EA7-4AB0F81A1E95"
                                                        },
                                                        {
                                                            "title":"9.17.2.2.3 Updating Existing Rows",
                                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-EC370BA2-58C5-45F5-B4F8-60F017311947"
                                                        },
                                                        {
                                                            "title":"9.17.2.2.4 TRUNCATE",
                                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-71132C0D-B8E7-4C7E-A15E-A0D1B8335B9E"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.17.3 Table-Specific OPTIONS Parameter",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-404354CB-A7B3-490E-9445-52E6F639F5A1"
                                        },
                                        {
                                            "title":"9.17.4 Loading Records Based on a Condition",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-81C21533-7B7F-4DE8-8C15-1FDD8D31B581",
                                            "topics":[
                                                {
                                                    "title":"9.17.4.1 Using the WHEN Clause with LOBFILEs and SDFs",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-2185CA61-15A1-40E6-80AC-D192F395C2EE"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.17.5 Specifying Default Data Delimiters",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-5B4F0E5F-6A30-443D-AEC5-75FB329F8ECB",
                                            "topics":[
                                                {
                                                    "title":"9.17.5.1 fields_spec",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-0A9A710C-6DBA-4485-836A-B60BCDE08E74"
                                                },
                                                {
                                                    "title":"9.17.5.2 termination_spec",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-A5760B10-81EF-4454-85A5-7D930CAA8851"
                                                },
                                                {
                                                    "title":"9.17.5.3 enclosure_spec",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-3D2B8550-8962-4A0D-B1C6-2BB87B257293"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.17.6 Handling Short Records with Missing Data",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-A95F46F6-A8FC-449A-BCB0-81B01858A73D",
                                            "topics":[
                                                {
                                                    "title":"9.17.6.1 TRAILING NULLCOLS Clause",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-6EF5C41B-9BB3-452B-96F4-068FDA0B529C"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"9.18 Index Options",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-717EBE8E-C972-4D2C-9E42-16440CF069AA",
                                    "topics":[
                                        {
                                            "title":"9.18.1 SORTED INDEXES Clause",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-64415618-F622-4C29-AF93-9572E356927F"
                                        },
                                        {
                                            "title":"9.18.2 SINGLEROW Option",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-95669C8F-F9A1-4CE4-A83E-DE636E12AE37"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.19 Benefits of Using Multiple INTO TABLE Clauses",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-7C0925AD-7156-4C30-BF19-3C3D3628A7DE",
                                    "topics":[
                                        {
                                            "title":"9.19.1 Extracting Multiple Logical Records",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-8983BBF5-5E9A-4C36-93DD-9B836C363347",
                                            "topics":[
                                                {
                                                    "title":"9.19.1.1 Relative Positioning Based on Delimiters",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-020837D3-0B49-4FBD-8A7F-DC4FCAAAF935"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.19.2 Distinguishing Different Input Record Formats",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-A9D687A3-1E00-428D-A638-FA4BEA0CD8BD",
                                            "topics":[
                                                {
                                                    "title":"9.19.2.1 Relative Positioning Based on the POSITION Parameter",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-11AFA933-7C01-4501-B8BA-39BB0CE85B1A"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.19.3 Distinguishing Different Input Row Object Subtypes",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-927369CC-D20E-4765-8125-52C4AE18FC82"
                                        },
                                        {
                                            "title":"9.19.4 Loading Data into Multiple Tables",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-3EBC76E8-FC89-4370-B528-FE34D4F63AE5"
                                        },
                                        {
                                            "title":"9.19.5 Summary of Using Multiple INTO TABLE Clauses",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-F0CB6842-C7AE-4B67-9BC1-1C52782A66FC"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.20 Bind Arrays and Conventional Path Loads",
                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-34765838-CECC-45D3-9533-92D821DB051B",
                                    "topics":[
                                        {
                                            "title":"9.20.1 Size Requirements for Bind Arrays",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-AC11835E-E72D-4EBF-8B84-91BBC0C1F0F2"
                                        },
                                        {
                                            "title":"9.20.2 Performance Implications of Bind Arrays",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-716355FB-8144-48AE-BF22-ACAE84EB9502"
                                        },
                                        {
                                            "title":"9.20.3 Specifying Number of Rows Versus Size of Bind Array",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-AD2C4114-D098-44C4-8B92-05115B854BF0"
                                        },
                                        {
                                            "title":"9.20.4 Calculations to Determine Bind Array Size",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-0ADAEFB5-43F2-444A-8A8F-3A82A03ED019",
                                            "topics":[
                                                {
                                                    "title":"9.20.4.1 Determining the Size of the Length Indicator",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-A803BD72-DEB0-4A92-B336-952D0FB5D44C"
                                                },
                                                {
                                                    "title":"9.20.4.2 Calculating the Size of Field Buffers",
                                                    "href":"oracle-sql-loader-control-file-contents.html#GUID-191ED7D1-290E-4968-A7FB-8E35C54B9DE8"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.20.5 Minimizing Memory Requirements for Bind Arrays",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-04C0BC43-70D4-40AF-97F8-8A9B4FC3C466"
                                        },
                                        {
                                            "title":"9.20.6 Calculating Bind Array Size for Multiple INTO TABLE Clauses",
                                            "href":"oracle-sql-loader-control-file-contents.html#GUID-C47636B2-848A-4179-A69A-7ED4DDDD24CF"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"10 SQL*Loader Field List Reference",
                            "href":"oracle-sql-loader-field-list-contents.html#GUID-DB309002-461D-42F7-8C94-727B32FA8B85",
                            "topics":[
                                {
                                    "title":"10.1 Field List Contents",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-46A9380D-3BFD-49E4-9DD5-0AC5785A6DB9"
                                },
                                {
                                    "title":"10.2 Specifying the Position of a Data Field",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-269CE049-91ED-41FD-A3A3-D471009E918D",
                                    "topics":[
                                        {
                                            "title":"10.2.1 Using POSITION with Data Containing Tabs",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-91A2821F-E9D0-4102-9766-C14825501BEA"
                                        },
                                        {
                                            "title":"10.2.2 Using POSITION with Multiple Table Loads",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-5363ACC6-C3A4-4174-8517-1689A702A7C7"
                                        },
                                        {
                                            "title":"10.2.3 Examples of Using POSITION",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-56B539CC-C78B-4D0D-9393-74C6B580CB8B"
                                        }
                                    ]
                                },
                                {
                                    "title":"10.3 Specifying Columns and Fields",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-5E7BAA31-B650-431B-9776-9B07AA631E47",
                                    "topics":[
                                        {
                                            "title":"10.3.1 Specifying Filler Fields",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-EAB9BE96-6F29-4623-9BEF-323C2FE05CB7"
                                        },
                                        {
                                            "title":"10.3.2 Specifying the Data Type of a Data Field",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-1C9801B0-4807-438F-81C8-6746827DD0D8"
                                        }
                                    ]
                                },
                                {
                                    "title":"10.4 SQL*Loader Data Types",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-68723CA2-4599-4A2F-9BAB-F71D31307877",
                                    "topics":[
                                        {
                                            "title":"10.4.1 Nonportable Data Types",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-8E1F2ACA-A40D-4E7C-B738-DC69A948432A",
                                            "topics":[
                                                {
                                                    "title":"10.4.1.1 INTEGER(n)",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-89EEFDF0-22B9-400B-B70A-45BACC41E911"
                                                },
                                                {
                                                    "title":"10.4.1.2 SMALLINT",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-F5D45492-1AB3-49DA-B812-BF4F3756009A"
                                                },
                                                {
                                                    "title":"10.4.1.3 FLOAT",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-06DC5AE2-8F5F-4EA2-A518-FC1FF375C3B1"
                                                },
                                                {
                                                    "title":"10.4.1.4 DOUBLE",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-48398863-D6F6-4613-882F-4BF1BE832A81"
                                                },
                                                {
                                                    "title":"10.4.1.5 BYTEINT",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-DB54C116-4CE7-43CC-91C3-F77CFC469BA3"
                                                },
                                                {
                                                    "title":"10.4.1.6 ZONED",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-9114BF40-C277-43B1-AF4B-E74370DBCB48"
                                                },
                                                {
                                                    "title":"10.4.1.7 DECIMAL",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-3DB34B3D-D36C-4C55-97CA-B5CC751DEFFA"
                                                },
                                                {
                                                    "title":"10.4.1.8 VARGRAPHIC",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-2F0FC8AD-60CB-41C8-93CD-E5E7F2164195"
                                                },
                                                {
                                                    "title":"10.4.1.9 VARCHAR",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-09CC8B3E-29FB-4236-BA30-D41DAC30E86B"
                                                },
                                                {
                                                    "title":"10.4.1.10 VARRAW",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-A0A73C1E-6D1C-45D1-A7C5-D53448037491"
                                                },
                                                {
                                                    "title":"10.4.1.11 LONG VARRAW",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-DBBBE5FA-E425-4948-85B6-22DA4CC78350"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.4.2 Portable Data Types",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-B0BD3615-3D05-493D-8085-E10180E906AF",
                                            "topics":[
                                                {
                                                    "title":"10.4.2.1 CHAR",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-34A526C6-C2E6-4D17-8F53-D0CDEF38874B"
                                                },
                                                {
                                                    "title":"10.4.2.2 Datetime and Interval Data Types",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-169DE9FB-36A5-4087-9857-7F03DCF8D3C6",
                                                    "topics":[
                                                        {
                                                            "title":"10.4.2.2.1 DATE",
                                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-79BAD970-F406-4D29-A78A-A23F63F4D360"
                                                        },
                                                        {
                                                            "title":"10.4.2.2.2 TIME",
                                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-45F40C7D-6BEE-49D7-8984-692F9BAEE9A7"
                                                        },
                                                        {
                                                            "title":"10.4.2.2.3 TIME WITH TIME ZONE",
                                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-B2A478FF-338A-49BF-B5F7-03846513F4AC"
                                                        },
                                                        {
                                                            "title":"10.4.2.2.4 TIMESTAMP",
                                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-E2DB6A6E-FBCA-49B1-B8F0-D13A5B8BCB14"
                                                        },
                                                        {
                                                            "title":"10.4.2.2.5 TIMESTAMP WITH TIME ZONE",
                                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-DBCD234A-8355-4130-A5B3-B8231F0088AF"
                                                        },
                                                        {
                                                            "title":"10.4.2.2.6 TIMESTAMP WITH LOCAL TIME ZONE",
                                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-CB5D2124-D9AE-4C71-A83D-DFE071FE3542"
                                                        },
                                                        {
                                                            "title":"10.4.2.2.7 INTERVAL YEAR TO MONTH",
                                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-539E497A-EDE0-4A37-BDF5-071ABAA34221"
                                                        },
                                                        {
                                                            "title":"10.4.2.2.8 INTERVAL DAY TO SECOND",
                                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-DCFA7A4D-4961-44DF-BDAE-D7CCD4DE24F1"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"10.4.2.3 GRAPHIC",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-BEC779E4-C453-4C57-8F85-7FBE6CC37E94"
                                                },
                                                {
                                                    "title":"10.4.2.4 GRAPHIC EXTERNAL",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-05D05654-312E-4BBF-85CF-A24FF9F8F9A1"
                                                },
                                                {
                                                    "title":"10.4.2.5 Numeric EXTERNAL",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-F47507D9-C188-41AE-B63E-6EBFF6D711B2"
                                                },
                                                {
                                                    "title":"10.4.2.6 RAW",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-779BA792-E114-45E4-B3C0-19E8ACB42181"
                                                },
                                                {
                                                    "title":"10.4.2.7 VARCHARC",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-CD99F1A1-CE5E-4E37-BD1D-9B2240F1F9FD"
                                                },
                                                {
                                                    "title":"10.4.2.8 VARRAWC",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-31D32448-83B0-44F3-9AD4-837D92BDCB53"
                                                },
                                                {
                                                    "title":"10.4.2.9 Conflicting Native Data Type Field Lengths",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-47864B55-32AC-4B01-A84F-8F8060E611C4"
                                                },
                                                {
                                                    "title":"10.4.2.10 Field Lengths for Length-Value Data Types",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-B6AEB378-4099-4D7C-AED8-A1EA6D21497A"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.4.3 Data Type Conversions",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-DCB847DD-D28B-457E-AE24-93DBC160494D"
                                        },
                                        {
                                            "title":"10.4.4 Data Type Conversions for Datetime and Interval Data Types",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-7D9AC560-BF3C-4FDD-A4CA-CCF3F5231017"
                                        },
                                        {
                                            "title":"10.4.5 Specifying Delimiters",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-0DE2F816-CF31-4806-891C-05D3C548B34B",
                                            "topics":[
                                                {
                                                    "title":"10.4.5.1 Syntax for Termination and Enclosure Specification",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-EBD307DD-E64F-4E16-9151-E85AAB59483B"
                                                },
                                                {
                                                    "title":"10.4.5.2 Delimiter Marks in the Data",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-F85C3BFF-8583-43C0-9AF6-1B0841124C88"
                                                },
                                                {
                                                    "title":"10.4.5.3 Maximum Length of Delimited Data",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-FADB6F40-8804-4A75-A886-725FE8354BB6"
                                                },
                                                {
                                                    "title":"10.4.5.4 Loading Trailing Blanks with Delimiters",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-6AA5716A-B645-49CC-A054-3ED3942486FA"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.4.6 How Delimited Data Is Processed",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-429C09AB-98FB-4A36-AA7E-5A5F537335C2",
                                            "topics":[
                                                {
                                                    "title":"10.4.6.1 Fields Using Only TERMINATED BY",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-173FF65A-B0C5-4272-B59F-FE5CFE2E2D26"
                                                },
                                                {
                                                    "title":"10.4.6.2 Fields Using ENCLOSED BY Without TERMINATED BY",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-11B352F4-DB49-4824-A9EA-04D2F54CCA2D"
                                                },
                                                {
                                                    "title":"10.4.6.3 Fields Using ENCLOSED BY With TERMINATED BY",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-0F519333-538D-430B-BDB2-F2F1E485E2C9"
                                                },
                                                {
                                                    "title":"10.4.6.4 Fields Using OPTIONALLY ENCLOSED BY With TERMINATED BY",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-AEBA1A45-2394-4947-81CB-37CD99BA5BA9"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.4.7 Conflicting Field Lengths for Character Data Types",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-5C8780C3-B77A-4FB9-8191-34F74DF60695",
                                            "topics":[
                                                {
                                                    "title":"10.4.7.1 Predetermined Size Fields",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-3BA6FBB2-A452-4857-99C2-1911B5BDACD6"
                                                },
                                                {
                                                    "title":"10.4.7.2 Delimited Fields",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-05C8F8F3-4E10-42C0-86F4-0B4AAE491E36"
                                                },
                                                {
                                                    "title":"10.4.7.3 Date Field Masks",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-9939B9B1-61E1-4479-A468-05886282F57E"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"10.5 Specifying Field Conditions",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-805F7263-D384-4C5D-BADD-2424324F3B90",
                                    "topics":[
                                        {
                                            "title":"10.5.1 Comparing Fields to BLANKS",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-85194782-B041-4649-B2F5-484379D6FC0A"
                                        },
                                        {
                                            "title":"10.5.2 Comparing Fields to Literals",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-27D0618C-3372-4866-BB7A-A3CD432C0D59"
                                        }
                                    ]
                                },
                                {
                                    "title":"10.6 Using the WHEN, NULLIF, and DEFAULTIF Clauses",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-30775EC3-8BC0-40F9-8F32-E785ACF028A0"
                                },
                                {
                                    "title":"10.7 Examples of Using the WHEN, NULLIF, and DEFAULTIF Clauses",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-B5C9D655-0E12-49C7-9628-EA6E96C12AA2"
                                },
                                {
                                    "title":"10.8 Loading Data Across Different Platforms",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-2619268F-5420-41D4-A4E8-97B91CECC087"
                                },
                                {
                                    "title":"10.9 Byte Ordering",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-D1D5D538-C27C-4E20-955F-90E546D417DC",
                                    "topics":[
                                        {
                                            "title":"10.9.1 Specifying Byte Order",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-4A500AAF-8BD9-4FE4-8924-80A1739CFC35"
                                        },
                                        {
                                            "title":"10.9.2 Using Byte Order Marks (BOMs)",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-CFEED713-D459-42F4-A777-7AAA654451AC",
                                            "topics":[
                                                {
                                                    "title":"10.9.2.1 Suppressing Checks for BOMs",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-4971622E-5A26-4BD4-ACBD-4E8D8A62CEDC"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"10.10 Loading All-Blank Fields",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-0D139047-5E23-4763-BBDC-603474BA3CCF"
                                },
                                {
                                    "title":"10.11 Trimming Whitespace",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-32F22C8C-9208-458D-989B-C0E3A38BB258",
                                    "topics":[
                                        {
                                            "title":"10.11.1 Data Types for Which Whitespace Can Be Trimmed",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-84765118-3731-4D76-BBAD-E481882B7BC6"
                                        },
                                        {
                                            "title":"10.11.2 Specifying Field Length for Data Types for Which Whitespace Can Be Trimmed",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-FBCCF3B9-BA9E-4392-8E28-4004E26AB81D",
                                            "topics":[
                                                {
                                                    "title":"10.11.2.1 Predetermined Size Fields",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-036272E7-632F-439F-ABE3-8F91387C68B7"
                                                },
                                                {
                                                    "title":"10.11.2.2 Delimited Fields",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-75B0F364-3137-48B3-A630-A5A509B8FA14"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.11.3 Relative Positioning of Fields",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-F2776528-90E6-4B33-B2AB-785DBF063527",
                                            "topics":[
                                                {
                                                    "title":"10.11.3.1 No Start Position Specified for a Field",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-9432C88D-F950-45B2-91BF-9B83CDCA85C0"
                                                },
                                                {
                                                    "title":"10.11.3.2 Previous Field Terminated by a Delimiter",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-A204D90C-16F1-465B-8ECB-24B82F993A3D"
                                                },
                                                {
                                                    "title":"10.11.3.3 Previous Field Has Both Enclosure and Termination Delimiters",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-F062638A-5369-4CB6-8918-8810849301CE"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.11.4 Leading Whitespace",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-F5C36154-BD02-4826-9B4F-35FF4ED6515D",
                                            "topics":[
                                                {
                                                    "title":"10.11.4.1 Previous Field Terminated by Whitespace ",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-94632591-B1C7-416D-A195-67FEE73E991A"
                                                },
                                                {
                                                    "title":"10.11.4.2 Optional Enclosure Delimiters",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-E285B887-67DB-4848-8FB7-EF2357028DB5"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.11.5 Trimming Trailing Whitespace",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-7DC92F30-BBC9-4314-B278-DD3CB1EB902B"
                                        },
                                        {
                                            "title":"10.11.6 Trimming Enclosed Fields",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-D7500072-8019-4616-AED2-451466024E8B"
                                        }
                                    ]
                                },
                                {
                                    "title":"10.12 How the PRESERVE BLANKS Option Affects Whitespace Trimming",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-AB1CCC89-7A79-4001-86C5-759D3E000D61"
                                },
                                {
                                    "title":"10.13 How [NO] PRESERVE BLANKS Works with Delimiter Clauses",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-658D9A9E-41A9-4BD7-BDD6-81B5A2ACC025"
                                },
                                {
                                    "title":"10.14 Applying SQL Operators to Fields",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-83FF6EDC-C7F8-4F29-8994-59153BE31924",
                                    "topics":[
                                        {
                                            "title":"10.14.1 Referencing Fields",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-5C36E962-A73D-4E1E-8696-73079CDE84EB"
                                        },
                                        {
                                            "title":"10.14.2 Common Uses of SQL Operators in Field Specifications",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-D975B5BB-1FC3-41A3-A358-0377A72FF7DE"
                                        },
                                        {
                                            "title":"10.14.3 Combinations of SQL Operators",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-48AD55A8-B668-4AE3-BB3A-1AE3516EB239"
                                        },
                                        {
                                            "title":"10.14.4 Using SQL Strings with a Date Mask",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-F22CD408-953F-4F25-A788-6F17DA635FBA"
                                        },
                                        {
                                            "title":"10.14.5 Interpreting Formatted Fields",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-38361CE0-6DBE-45D7-8FF7-1D0D475AB6E4"
                                        },
                                        {
                                            "title":"10.14.6 Using SQL Strings to Load the ANYDATA Database Type",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-B003B260-8A7A-4EDD-9AAC-78FB63DE420B"
                                        }
                                    ]
                                },
                                {
                                    "title":"10.15 Using SQL*Loader to Generate Data for Input",
                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-C1E8AF5A-3CEF-42D6-8A50-6D83F753D8A6",
                                    "topics":[
                                        {
                                            "title":"10.15.1 Loading Data Without Files",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-37603B5B-AC40-445F-AEE2-43B8A294734C"
                                        },
                                        {
                                            "title":"10.15.2 Setting a Column to a Constant Value",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-FFC2F5D1-1A95-4F76-969F-9007C464B327",
                                            "topics":[
                                                {
                                                    "title":"10.15.2.1 CONSTANT Parameter",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-65CF82C2-E07B-46EA-B530-E625CEE31C34"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.15.3 Setting a Column to an Expression Value",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-9D1D0548-E76F-4FFC-B4E9-E69BEF55FE0B",
                                            "topics":[
                                                {
                                                    "title":"10.15.3.1 EXPRESSION Parameter",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-9EAD47C8-C571-48C6-A70C-BC0FE9BC533E"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.15.4 Setting a Column to the Data File Record Number",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-1F722706-2A6A-4F60-AC91-D1466958BA55",
                                            "topics":[
                                                {
                                                    "title":"10.15.4.1 RECNUM Parameter",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-44FBB7E7-7A94-404E-943B-B0E8427EE595"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.15.5 Setting a Column to the Current Date",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-45248795-0503-4CFD-8199-B012CA4463FF",
                                            "topics":[
                                                {
                                                    "title":"10.15.5.1 SYSDATE Parameter",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-17AC2A05-C553-45EE-A7D4-29FA8DC5875A"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.15.6 Setting a Column to a Unique Sequence Number",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-6F6D25EE-D831-4599-A1AA-8832C39A32EB",
                                            "topics":[
                                                {
                                                    "title":"10.15.6.1 SEQUENCE Parameter",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-2E734D4B-1E1E-400A-8E68-340C0587D86C"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.15.7 Generating Sequence Numbers for Multiple Tables",
                                            "href":"oracle-sql-loader-field-list-contents.html#GUID-8B1B4DB0-19AE-4404-9930-1CE5AF1477E1",
                                            "topics":[
                                                {
                                                    "title":"10.15.7.1 Example: Generating Different Sequence Numbers for Each Insert",
                                                    "href":"oracle-sql-loader-field-list-contents.html#GUID-70B2D496-2246-4546-BBDB-44F9F9AB2D8F"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"11 Loading Objects, LOBs, and Collections",
                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-A1828462-FD32-457C-976F-C85BA3A995DA",
                            "topics":[
                                {
                                    "title":"11.1 Loading Column Objects",
                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-13D3C6B4-209C-46CA-B0CD-57FB3FA37776",
                                    "topics":[
                                        {
                                            "title":"11.1.1 Loading Column Objects in Stream Record Format",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-CB95C7C2-02B2-4E3C-80D0-26098ECE3B22"
                                        },
                                        {
                                            "title":"11.1.2 Loading Column Objects in Variable Record Format",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-6A23F378-18B9-4F60-848E-C367A9978166"
                                        },
                                        {
                                            "title":"11.1.3 Loading Nested Column Objects",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-0F36C8CB-3434-42F0-9C38-36278D0B4E6D"
                                        },
                                        {
                                            "title":"11.1.4 Loading Column Objects with a Derived Subtype",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-1DAF5614-EDCB-44AB-AEEC-DFFB2D678270"
                                        },
                                        {
                                            "title":"11.1.5 Specifying Null Values for Objects",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-C2940706-C809-4E42-886B-F13D35E54A43",
                                            "topics":[
                                                {
                                                    "title":"11.1.5.1 Specifying Attribute Nulls",
                                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-D2815897-D5DA-44EB-82DD-D5BC5817F357"
                                                },
                                                {
                                                    "title":"11.1.5.2 Specifying Atomic Nulls",
                                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-48C45979-0030-4DCC-8591-BCD8D2654BB3"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"11.1.6 Loading Column Objects with User-Defined Constructors",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-BB33C1CF-4EF5-40C8-8A2B-2A1DB9A213CB"
                                        }
                                    ]
                                },
                                {
                                    "title":"11.2 Loading Object Tables",
                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-6BA4C022-77C8-4738-9AFD-E52252036DE7",
                                    "topics":[
                                        {
                                            "title":"11.2.1 Loading Object Tables with a Subtype",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-FEBA5069-FB50-4662-8F14-ABFD7EB0D29E"
                                        }
                                    ]
                                },
                                {
                                    "title":"11.3 Loading REF Columns",
                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-ABA3F185-2E5A-421D-9F1F-E175926950B8",
                                    "topics":[
                                        {
                                            "title":"11.3.1 Specifying Table Names in a REF Clause",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-F5275B5B-8C65-462D-BA4E-E7FBCB342E02"
                                        },
                                        {
                                            "title":"11.3.2 System-Generated OID REF Columns",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-1531532E-0BED-484D-A7C7-B6A3454EF48E"
                                        },
                                        {
                                            "title":"11.3.3 Primary Key REF Columns",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-99A7B7BD-B555-4457-975C-C4E038632B54"
                                        },
                                        {
                                            "title":"11.3.4 Unscoped REF Columns That Allow Primary Keys",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-DB61E2AF-7589-465F-92D7-A9A8A6492C8E"
                                        }
                                    ]
                                },
                                {
                                    "title":"11.4 Loading LOBs",
                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-3637F462-436A-4F6B-B243-03FB3177CA80",
                                    "topics":[
                                        {
                                            "title":"11.4.1 Loading LOB Data from a Primary Data File",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-32E1B379-E889-438E-BA76-A7ECBF17BAD9",
                                            "topics":[
                                                {
                                                    "title":"11.4.1.1 LOB Data in Predetermined Size Fields",
                                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-F98F733A-E5D0-49A9-9042-FE39C9BF79C0"
                                                },
                                                {
                                                    "title":"11.4.1.2 LOB Data in Delimited Fields",
                                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-DC800D62-FC91-4CF6-ADC5-1D9CF00621BB"
                                                },
                                                {
                                                    "title":"11.4.1.3 LOB Data in Length-Value Pair Fields",
                                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-CBC3D610-BDF7-44E9-9979-D0AEB15BA200"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"11.4.2 Loading LOB Data from LOBFILEs",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-E02C2828-ABD1-4B8D-9561-124D221B4BE3",
                                            "topics":[
                                                {
                                                    "title":"11.4.2.1 Dynamic Versus Static LOBFILE Specifications",
                                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-E488305F-90E5-4FE8-B122-A9341F99C450"
                                                },
                                                {
                                                    "title":"11.4.2.2 Examples of Loading LOB Data from LOBFILEs",
                                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-FE58EA0F-F3F9-443F-8C64-47F13C5A6475",
                                                    "topics":[
                                                        {
                                                            "title":"11.4.2.2.1 One LOB per File",
                                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-C8C0CC51-2638-4FAA-9CB1-9E9B20EB852E"
                                                        },
                                                        {
                                                            "title":"11.4.2.2.2 Predetermined Size LOBs",
                                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-00E6ED60-8BE0-4315-9F40-82DC5C0656B6"
                                                        },
                                                        {
                                                            "title":"11.4.2.2.3 Delimited LOBs",
                                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-4AADD568-AB5C-4C56-8E3E-D497EF67DC84"
                                                        },
                                                        {
                                                            "title":"11.4.2.2.4 Length-Value Pair Specified LOBs",
                                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-C04366D7-247F-421E-BBFC-446A61C15258"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"11.4.2.3 Considerations When Loading LOBs from LOBFILEs",
                                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-4BD4BA87-BD69-4FA9-A6A6-ECA5CE2B6A60"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"11.4.3 Loading Data Files that Contain LLS Fields",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-F1AEEF0A-5E89-421E-8128-4A9DA7E948AB"
                                        }
                                    ]
                                },
                                {
                                    "title":"11.5 Loading BFILE Columns",
                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-CA3B8A38-0559-4E34-A8FB-B4627A2AAF40"
                                },
                                {
                                    "title":"11.6 Loading Collections (Nested Tables and VARRAYs)",
                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-B769A8EC-48F4-4E8E-8896-2D7A5463112C",
                                    "topics":[
                                        {
                                            "title":"11.6.1 Restrictions in Nested Tables and VARRAYs",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-0DD26C32-27F6-429B-A0BB-16AAE2E91553"
                                        },
                                        {
                                            "title":"11.6.2 Secondary Data Files (SDFs)",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-EB6B23EE-B2AB-4AC2-9032-0F9798F539BC"
                                        }
                                    ]
                                },
                                {
                                    "title":"11.7 Dynamic Versus Static SDF Specifications",
                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-9474C838-E6BF-4D4D-9EDF-56DBE0219737"
                                },
                                {
                                    "title":"11.8 Loading a Parent Table Separately from Its Child Table",
                                    "href":"loading-objects-using-oracle-sql-loader.html#GUID-2D079012-0733-4172-AD8B-E97690CDFA34",
                                    "topics":[
                                        {
                                            "title":"11.8.1 Memory Issues When Loading VARRAY Columns",
                                            "href":"loading-objects-using-oracle-sql-loader.html#GUID-199895FD-ADF8-4B17-8F86-B92F92DA68DA"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"12 Conventional and Direct Path Loads",
                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-321928FB-C86C-4F1F-9250-05111A988B7B",
                            "topics":[
                                {
                                    "title":"12.1 Data Loading Methods",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-9787AA3E-1640-4039-BB98-8374BE3553A2",
                                    "topics":[
                                        {
                                            "title":"12.1.1 Loading ROWID Columns",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-628A6D43-DA99-4677-9B88-445928933246"
                                        }
                                    ]
                                },
                                {
                                    "title":"12.2 Conventional Path Load",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-495C502D-4A1F-47B3-9E4D-F6F997EDAC4C",
                                    "topics":[
                                        {
                                            "title":"12.2.1 Conventional Path Load of a Single Partition",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-E05BB042-29A4-4861-9E21-C72D558E0C7B"
                                        },
                                        {
                                            "title":"12.2.2 When to Use a Conventional Path Load",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-A8911483-65C5-4348-886C-1C607CACA486"
                                        }
                                    ]
                                },
                                {
                                    "title":"12.3 Direct Path Load",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-26686C49-D768-4F55-8AED-771B9A8C6552",
                                    "topics":[
                                        {
                                            "title":"12.3.1 Data Conversion During Direct Path Loads",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-70EC05F4-1301-4CF3-A4DE-24011AC3F2A9"
                                        },
                                        {
                                            "title":"12.3.2 Direct Path Load of a Partitioned or Subpartitioned Table",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-777AE140-80AE-4A7F-B521-BF64A9E035F9"
                                        },
                                        {
                                            "title":"12.3.3 Direct Path Load of a Single Partition or Subpartition",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-85756D79-AA1E-444C-936E-2EB8A10BEFD9"
                                        },
                                        {
                                            "title":"12.3.4 Advantages of a Direct Path Load",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-67BAC65B-C80B-4E19-9AA3-00FBBDAC45F5"
                                        },
                                        {
                                            "title":"12.3.5 Restrictions on Using Direct Path Loads",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-993D209A-23CC-466D-B8C7-D508C17C921A"
                                        },
                                        {
                                            "title":"12.3.6 Restrictions on a Direct Path Load of a Single Partition",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-D9FFC2FB-796A-4CE9-AB35-91FAC0F88703"
                                        },
                                        {
                                            "title":"12.3.7 When to Use a Direct Path Load",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-7F0A089C-C98D-4B3B-9701-E1A3517C14DB"
                                        },
                                        {
                                            "title":"12.3.8 Integrity Constraints",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-54CA4890-5AC9-42F5-A9C7-9691E3565447"
                                        },
                                        {
                                            "title":"12.3.9 Field Defaults on the Direct Path",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-F991A526-09DC-4FE8-AFC4-4722A067FB8B"
                                        },
                                        {
                                            "title":"12.3.10 Loading into Synonyms",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-286C5734-EA71-4D76-A8A9-D1A4EC7E7F08"
                                        }
                                    ]
                                },
                                {
                                    "title":"12.4 Using Direct Path Load",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-1F89DC04-53CE-41FD-A2B4-1BBB3459C9F2",
                                    "topics":[
                                        {
                                            "title":"12.4.1 Setting Up for Direct Path Loads",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-E52F2F36-2CE9-4254-9A03-D0406EC621C1"
                                        },
                                        {
                                            "title":"12.4.2 Specifying a Direct Path Load",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-A491440D-63A4-4781-9292-B822DDDF9BF3"
                                        },
                                        {
                                            "title":"12.4.3 Building Indexes",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-81C3D461-09BA-4CAB-AB06-B2C7D51780EF",
                                            "topics":[
                                                {
                                                    "title":"12.4.3.1 Improving Performance",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-1A3DD268-4111-49C2-B0E8-9AE76FAC3685"
                                                },
                                                {
                                                    "title":"12.4.3.2 Temporary Segment Storage Requirements",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-CD74D1FF-E22E-4158-B10D-A06B01018488"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.4.4 Indexes Left in an Unusable State",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-C44AADF7-777D-4847-A5ED-75E36B40D0EB"
                                        },
                                        {
                                            "title":"12.4.5 Using Data Saves to Protect Against Data Loss",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-0E890CF3-C315-4FA5-AB8C-0ABD92084CA0",
                                            "topics":[
                                                {
                                                    "title":"12.4.5.1 Using the ROWS Parameter",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-CE79B0B3-10BB-417E-87DB-361428DC73F6"
                                                },
                                                {
                                                    "title":"12.4.5.2 Data Save Versus Commit",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-2562DE31-8745-40B0-AF3B-90048E5146A8"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.4.6 Data Recovery During Direct Path Loads",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-4DB99887-0E58-476A-9A81-4E865DF62C42",
                                            "topics":[
                                                {
                                                    "title":"12.4.6.1 Media Recovery and Direct Path Loads",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-EEE35D01-3975-4AEA-AC7F-C2E6554B2EDB"
                                                },
                                                {
                                                    "title":"12.4.6.2 Instance Recovery and Direct Path Loads",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-E1B67691-A33E-4B27-8A5A-A18B3E12D69C"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.4.7 Loading Long Data Fields",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-88000EF3-410E-49BC-931B-690B3444610A",
                                            "topics":[
                                                {
                                                    "title":"12.4.7.1 Loading Data As PIECED",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-FAEDD181-CFD9-40D8-9CB4-165C13063BBE"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.4.8 Auditing SQL*Loader Operations That Use Direct Path Mode",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-41D6AC8D-D076-4924-B2AB-916F38B755EF"
                                        }
                                    ]
                                },
                                {
                                    "title":"12.5 Optimizing Performance of Direct Path Loads",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-C9F61197-5786-402B-A592-02515AA30FFF",
                                    "topics":[
                                        {
                                            "title":"12.5.1 Preallocating Storage for Faster Loading",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-8A0852AD-A7A7-4FB6-B1A1-6F4E8B46BAB2"
                                        },
                                        {
                                            "title":"12.5.2 Presorting Data for Faster Indexing",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-571EC032-0C25-483A-BC0D-2C27A7B64D64",
                                            "topics":[
                                                {
                                                    "title":"12.5.2.1 SORTED INDEXES Clause",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-65D50809-CCB9-41BB-A72E-AFDF625234E5"
                                                },
                                                {
                                                    "title":"12.5.2.2 Unsorted Data",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-B1099A14-206F-4667-A451-1E030B21C288"
                                                },
                                                {
                                                    "title":"12.5.2.3 Multiple-Column Indexes",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-2AA59065-1131-4D5F-8535-456DF5CFEFE6"
                                                },
                                                {
                                                    "title":"12.5.2.4 Choosing the Best Sort Order",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-EB69C930-C47B-4DA0-BB77-8A2A786FEC25"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.5.3 Infrequent Data Saves",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-A2FC1A81-CFC0-410E-92FE-F3B4C07E36CE"
                                        },
                                        {
                                            "title":"12.5.4 Minimizing Use of the Redo Log",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-4F224723-D836-4713-9BEE-E7B88424EB8A",
                                            "topics":[
                                                {
                                                    "title":"12.5.4.1 Disabling Archiving",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-36F7E175-8B08-4F9F-8998-954ADDE4B0B3"
                                                },
                                                {
                                                    "title":"12.5.4.2 Specifying the SQL*Loader UNRECOVERABLE Clause",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-75EE26ED-6B2F-4A44-AC72-2AF0D326131B"
                                                },
                                                {
                                                    "title":"12.5.4.3 Setting the SQL NOLOGGING Parameter",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-C6F49A28-3318-4173-8488-81DF6F83D5E0"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.5.5 Specifying the Number of Column Array Rows and Size of Stream Buffers",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-CEBD2E84-5348-46B5-AAAD-0790109F6741"
                                        },
                                        {
                                            "title":"12.5.6 Specifying a Value for the Date Cache",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-B1815406-BBA4-4769-AFFE-E1FCBA10779F"
                                        }
                                    ]
                                },
                                {
                                    "title":"12.6 Optimizing Direct Path Loads on Multiple-CPU Systems",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-DD798855-A0A3-4676-800A-984FE8F7FDAF"
                                },
                                {
                                    "title":"12.7 Avoiding Index Maintenance",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-DD1AA9FC-B775-42E2-9BD9-5E43056A1418"
                                },
                                {
                                    "title":"12.8 Direct Path Loads, Integrity Constraints, and Triggers",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-973925DA-8F86-49C1-A707-4564DC3B57AE",
                                    "topics":[
                                        {
                                            "title":"12.8.1 Integrity Constraints",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-7E492DDC-BED3-4926-A3A1-20FC324CA100",
                                            "topics":[
                                                {
                                                    "title":"12.8.1.1 Enabled Constraints",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-7E25B949-757E-4924-AF51-2CB3BB1EFB24"
                                                },
                                                {
                                                    "title":"12.8.1.2 Disabled Constraints",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-20F804EE-5015-4899-9A64-64254BC9FDC1"
                                                },
                                                {
                                                    "title":"12.8.1.3 Reenable Constraints",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-B42C86CD-A41C-4F75-B8D6-6F9C8155E074"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.8.2 Database Insert Triggers",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-B5EA310B-FFB7-4CF0-8A2D-78E5E11EBC87",
                                            "topics":[
                                                {
                                                    "title":"12.8.2.1 Replacing Insert Triggers with Integrity Constraints",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-BC7676C1-E9DA-41B0-A993-A53E0D9C9A0D"
                                                },
                                                {
                                                    "title":"12.8.2.2 When Automatic Constraints Cannot Be Used",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-86536F29-ECAF-4E2A-B298-4047B7F99743"
                                                },
                                                {
                                                    "title":"12.8.2.3 Preparation",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-554DE348-8135-4E16-B483-111323535BC7"
                                                },
                                                {
                                                    "title":"12.8.2.4 Using an Update Trigger",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-A6733492-77CB-4C8E-93E8-5DA86AFE5612"
                                                },
                                                {
                                                    "title":"12.8.2.5 Duplicating the Effects of Exception Conditions",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-98C5B698-141D-449B-9938-CAA935D8B7EC"
                                                },
                                                {
                                                    "title":"12.8.2.6 Using a Stored Procedure",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-D9C8570B-CB5D-4566-A016-48256BE904CC"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.8.3 Permanently Disabled Triggers and Constraints",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-CDCE5FE6-09FB-489C-B4F5-C2D45D0FFA6F"
                                        },
                                        {
                                            "title":"12.8.4 Increasing Performance with Concurrent Conventional Path Loads",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-4686510F-DDCB-472D-BBDE-E8248452F46C"
                                        }
                                    ]
                                },
                                {
                                    "title":"12.9 Parallel Data Loading Models",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-ECBC6D01-4273-4102-983A-2139C5FB2887",
                                    "topics":[
                                        {
                                            "title":"12.9.1 Concurrent Conventional Path Loads",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-3BCEDA27-5150-48A7-B814-980D1804C2AC"
                                        },
                                        {
                                            "title":"12.9.2 Intersegment Concurrency with Direct Path",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-E766E9DD-344D-4B3B-80DC-8397BF8EF58D"
                                        },
                                        {
                                            "title":"12.9.3 Intrasegment Concurrency with Direct Path",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-22CCC6F3-8862-4F8D-BECF-C0BCE1F25669"
                                        },
                                        {
                                            "title":"12.9.4 Restrictions on Parallel Direct Path Loads",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-E017C707-5C79-4B4D-A5BA-1FCF403BC24B"
                                        },
                                        {
                                            "title":"12.9.5 Initiating Multiple SQL*Loader Sessions",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-41EE1642-2A28-49F1-92C0-6327FDFA167B"
                                        },
                                        {
                                            "title":"12.9.6 Parameters for Parallel Direct Path Loads",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-077F71AE-FB17-4233-B35F-ED611930C9BD",
                                            "topics":[
                                                {
                                                    "title":"12.9.6.1 Using the FILE Parameter to Specify Temporary Segments",
                                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-2C0957F1-1565-4BF4-B8B7-0EC428364F64",
                                                    "topics":[
                                                        {
                                                            "title":"12.9.6.1.1 Using the FILE Parameter",
                                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-E6F2E3CA-752D-4F64-A2F6-6C1A3392CC33"
                                                        },
                                                        {
                                                            "title":"12.9.6.1.2 Using the STORAGE Parameter",
                                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-1CCB7222-4167-4F10-B944-A7D3557B58DA"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.9.7 Enabling Constraints After a Parallel Direct Path Load",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-E2A3A8A3-78FF-45B6-90C0-14211621E77C"
                                        },
                                        {
                                            "title":"12.9.8 PRIMARY KEY and UNIQUE KEY Constraints",
                                            "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-AFEA0C77-BA3D-4E2D-B4C2-76468FC54AAD"
                                        }
                                    ]
                                },
                                {
                                    "title":"12.10 General Performance Improvement Hints",
                                    "href":"oracle-sql-loader-conventional-and-direct-loads.html#GUID-D2838CE7-9E98-42FD-A5B0-FACEB40AD98C"
                                }
                            ]
                        },
                        {
                            "title":"13 SQL*Loader Express",
                            "href":"oracle-sql-loader-express-mode.html#GUID-8C235861-2A8B-4196-9705-E6FFED0C0C99",
                            "topics":[
                                {
                                    "title":"13.1 What is SQL*Loader Express Mode?",
                                    "href":"oracle-sql-loader-express-mode.html#GUID-5ACBE942-C177-4ECA-BDFD-30D77920B4DE"
                                },
                                {
                                    "title":"13.2 Using SQL*Loader Express Mode",
                                    "href":"oracle-sql-loader-express-mode.html#GUID-C3A4DCCB-5499-4525-94C3-F1DE23F35F7F",
                                    "topics":[
                                        {
                                            "title":"13.2.1 Default Values Used by SQL*Loader Express Mode",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-0F35B551-861B-450D-8BF3-2312893A67D7",
                                            "topics":[
                                                {
                                                    "title":"13.2.1.1 How SQL*Loader Express Mode Handles Byte Order",
                                                    "href":"oracle-sql-loader-express-mode.html#GUID-539AAB61-90AD-4328-9BF8-A39970FBDFF2"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"13.3 SQL*Loader Express Mode Parameter Reference",
                                    "href":"oracle-sql-loader-express-mode.html#GUID-9F3BD8B7-BE9B-4CE9-8F68-7A1936E498BC",
                                    "topics":[
                                        {
                                            "title":"13.3.1 BAD",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-D6C2612D-5960-424B-955B-6212B1C57EF9"
                                        },
                                        {
                                            "title":"13.3.2 CHARACTERSET",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-DE43FA02-12DB-4A42-8D1C-796D0435F44D"
                                        },
                                        {
                                            "title":"13.3.3 CSV",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-4B16892B-824B-4C77-B8EF-F1D125D2AC28"
                                        },
                                        {
                                            "title":"13.3.4 DATA",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-B9E4314F-1CE2-4F7A-9C95-7A218021467A"
                                        },
                                        {
                                            "title":"13.3.5 DATE_FORMAT",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-082AA152-F5E0-492B-9DFB-50A47E0891EA"
                                        },
                                        {
                                            "title":"13.3.6 DEGREE_OF_PARALLELISM",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-B3EAC57A-3AEB-42F9-9438-4CB077BF7383"
                                        },
                                        {
                                            "title":"13.3.7 DIRECT",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-A1EFA56E-35FF-4581-8861-4EF7844149D7"
                                        },
                                        {
                                            "title":"13.3.8 DNFS_ENABLE",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-5B1FC3A1-6DC2-4749-8109-19AADDAF8D8C"
                                        },
                                        {
                                            "title":"13.3.9 DNFS_READBUFFERS",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-A7FC04ED-D624-4B9B-A200-3CFE240CC300"
                                        },
                                        {
                                            "title":"13.3.10 ENCLOSED_BY",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-A58EAA9D-AB1B-4F3F-8D80-6297F2CDAC4D"
                                        },
                                        {
                                            "title":"13.3.11 EXTERNAL_TABLE",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-51843558-56ED-4E6D-B100-5EB316D554E2"
                                        },
                                        {
                                            "title":"13.3.12 FIELD_NAMES",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-2582B104-2A27-4A2D-94F7-FFC572585C71"
                                        },
                                        {
                                            "title":"13.3.13 LOAD",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-E2132E3F-F0F1-4C85-8C84-F55539395420"
                                        },
                                        {
                                            "title":"13.3.14 NULLIF",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-CCE72650-7C00-4AD1-AC78-02007E61FB37"
                                        },
                                        {
                                            "title":"13.3.15 OPTIONALLY_ENCLOSED_BY",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-3C000956-3730-4D27-9A46-F7D12BC81540"
                                        },
                                        {
                                            "title":"13.3.16 PARFILE",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-A6A5E794-6184-44CA-9746-3C704DAB6DD7"
                                        },
                                        {
                                            "title":"13.3.17 SILENT",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-BF357B3C-A06F-4F94-91EB-6B3B5954F137"
                                        },
                                        {
                                            "title":"13.3.18 TABLE",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-5D02DA3B-334D-470F-AE48-2099FDE6B5F6"
                                        },
                                        {
                                            "title":"13.3.19 TERMINATED_BY",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-A8779EFE-D245-4E5A-953B-F384760F9054"
                                        },
                                        {
                                            "title":"13.3.20 TIMESTAMP_FORMAT",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-AE4A0EA9-F417-4E5F-87EF-A19CE68765C1"
                                        },
                                        {
                                            "title":"13.3.21 TRIM",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-9149B77F-8FE4-4988-A310-5ADCDB49D08A"
                                        },
                                        {
                                            "title":"13.3.22 USERID",
                                            "href":"oracle-sql-loader-express-mode.html#GUID-C58AB08F-A4C8-4085-AF5F-E10110CABEAA"
                                        }
                                    ]
                                },
                                {
                                    "title":"13.4 SQL*Loader Express Mode Syntax Diagrams",
                                    "href":"oracle-sql-loader-express-mode.html#GUID-E6C91A9F-06BE-4D63-972A-974FE752C065"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part III External Tables",
                    "href":"oracle-external-tables.html#GUID-038ED956-A6EE-4C6D-B7C9-0D406B8088B6",
                    "topics":[
                        {
                            "title":"14 External Tables Concepts",
                            "href":"oracle-external-tables-concepts.html#GUID-44323E01-7D72-45EC-915A-99E596769D9E",
                            "topics":[
                                {
                                    "title":"14.1 How Are External Tables Created?",
                                    "href":"oracle-external-tables-concepts.html#GUID-ACF1D3AA-1D61-4682-AEC5-42C944756E12",
                                    "topics":[
                                        {
                                            "title":"14.1.1 Location of Data Files and Output Files",
                                            "href":"oracle-external-tables-concepts.html#GUID-05AA7C84-2C2D-45CE-8F52-392D4A2B4864"
                                        },
                                        {
                                            "title":"14.1.2 Access Parameters",
                                            "href":"oracle-external-tables-concepts.html#GUID-07D30CE6-128D-426F-8B76-B13E1C53BD5A"
                                        }
                                    ]
                                },
                                {
                                    "title":"14.2 Data Type Conversion During External Table Use",
                                    "href":"oracle-external-tables-concepts.html#GUID-7AB423F1-C688-4A1C-A940-77C221839BCA"
                                }
                            ]
                        },
                        {
                            "title":"15 The ORACLE_LOADER Access Driver",
                            "href":"oracle_loader-access-driver.html#GUID-EA56D498-E8BB-4E02-8ABF-12E7083ED9D5",
                            "topics":[
                                {
                                    "title":"15.1 access_parameters Clause",
                                    "href":"oracle_loader-access-driver.html#GUID-00393686-44CB-4A4D-BD2C-C4AD174DACA5"
                                },
                                {
                                    "title":"15.2 record_format_info Clause",
                                    "href":"oracle_loader-access-driver.html#GUID-A077C3A6-B1AE-4D8B-98E6-E1C1AE34B63F",
                                    "topics":[
                                        {
                                            "title":"15.2.1 FIXED length",
                                            "href":"oracle_loader-access-driver.html#GUID-5624ED2A-6B77-4A51-BB62-BA6EBCCF9B1B"
                                        },
                                        {
                                            "title":"15.2.2 VARIABLE size",
                                            "href":"oracle_loader-access-driver.html#GUID-F352094B-D627-4643-8525-5F79622658B6"
                                        },
                                        {
                                            "title":"15.2.3 DELIMITED BY",
                                            "href":"oracle_loader-access-driver.html#GUID-91CC2060-FA18-4246-BC3F-82154FF4FA5B"
                                        },
                                        {
                                            "title":"15.2.4 XMLTAG",
                                            "href":"oracle_loader-access-driver.html#GUID-04134666-4940-484E-BD7C-0E5BAF057DB9"
                                        },
                                        {
                                            "title":"15.2.5 CHARACTERSET",
                                            "href":"oracle_loader-access-driver.html#GUID-EC46E538-5C3E-42D1-BCC8-4245D6682518"
                                        },
                                        {
                                            "title":"15.2.6 EXTERNAL VARIABLE DATA",
                                            "href":"oracle_loader-access-driver.html#GUID-0A09AA3E-7426-42DF-8BC3-30651429056B"
                                        },
                                        {
                                            "title":"15.2.7 PREPROCESSOR",
                                            "href":"oracle_loader-access-driver.html#GUID-73A6DA8D-EA78-4B9B-BAB3-0C99BF190A50",
                                            "topics":[
                                                {
                                                    "title":"15.2.7.1 Using Parallel Processing with the PREPROCESSOR Clause",
                                                    "href":"oracle_loader-access-driver.html#GUID-1E6D5C56-5AC5-4240-8ACF-A51BC4140FAD"
                                                },
                                                {
                                                    "title":"15.2.7.2 Restrictions When Using the PREPROCESSOR Clause",
                                                    "href":"oracle_loader-access-driver.html#GUID-A991C29F-5B6E-49E1-9654-6618E941B4B8"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"15.2.8 LANGUAGE",
                                            "href":"oracle_loader-access-driver.html#GUID-C5E88733-03AC-4222-B558-3DDEC0E64550"
                                        },
                                        {
                                            "title":"15.2.9 TERRITORY",
                                            "href":"oracle_loader-access-driver.html#GUID-481E44DC-0BCB-49D8-AB97-C0BE36BADDE4"
                                        },
                                        {
                                            "title":"15.2.10 DATA IS...ENDIAN",
                                            "href":"oracle_loader-access-driver.html#GUID-AB0648E3-073C-4371-A8C3-4397684100A8"
                                        },
                                        {
                                            "title":"15.2.11 BYTEORDERMARK (CHECK | NOCHECK)",
                                            "href":"oracle_loader-access-driver.html#GUID-01E2985E-2418-400D-8AF2-32A026171256"
                                        },
                                        {
                                            "title":"15.2.12 STRING SIZES ARE IN",
                                            "href":"oracle_loader-access-driver.html#GUID-4D6A7C07-73A8-4EE2-B07E-83E8F321BAA6"
                                        },
                                        {
                                            "title":"15.2.13 LOAD WHEN",
                                            "href":"oracle_loader-access-driver.html#GUID-951984C6-EABA-48DD-A1AE-2F04E776FBFD"
                                        },
                                        {
                                            "title":"15.2.14 BADFILE | NOBADFILE",
                                            "href":"oracle_loader-access-driver.html#GUID-29D5B788-D73E-40C5-8FC7-A7611148D157"
                                        },
                                        {
                                            "title":"15.2.15 DISCARDFILE | NODISCARDFILE",
                                            "href":"oracle_loader-access-driver.html#GUID-BC145FAC-DD3F-4E39-9EF9-0EFB041375A1"
                                        },
                                        {
                                            "title":"15.2.16 LOGFILE | NOLOGFILE",
                                            "href":"oracle_loader-access-driver.html#GUID-D4313319-B751-4AA5-B92B-DF6990FD10A2"
                                        },
                                        {
                                            "title":"15.2.17 SKIP",
                                            "href":"oracle_loader-access-driver.html#GUID-32A81964-BAF9-41E4-8FA4-FC359310ABB4"
                                        },
                                        {
                                            "title":"15.2.18 FIELD NAMES",
                                            "href":"oracle_loader-access-driver.html#GUID-A0268339-7C4B-4373-B470-665F26B089C6"
                                        },
                                        {
                                            "title":"15.2.19 READSIZE",
                                            "href":"oracle_loader-access-driver.html#GUID-01CA8C59-9EA9-4585-9686-397EE76ADE6B"
                                        },
                                        {
                                            "title":"15.2.20 DISABLE_DIRECTORY_LINK_CHECK",
                                            "href":"oracle_loader-access-driver.html#GUID-B1EDEC3F-9ED1-4F70-AC8D-3D0B39B173B5"
                                        },
                                        {
                                            "title":"15.2.21 DATE_CACHE",
                                            "href":"oracle_loader-access-driver.html#GUID-E73BFD84-0CA9-44CF-88D4-5A0EE8814DD5"
                                        },
                                        {
                                            "title":"15.2.22 string",
                                            "href":"oracle_loader-access-driver.html#GUID-03FD7309-EAE9-4880-9BD1-945B32311478"
                                        },
                                        {
                                            "title":"15.2.23 condition_spec",
                                            "href":"oracle_loader-access-driver.html#GUID-6F189A02-7AC8-4D86-BBE1-6015DC76D876"
                                        },
                                        {
                                            "title":"15.2.24 [directory object name:] [filename]",
                                            "href":"oracle_loader-access-driver.html#GUID-E0C99EA3-B624-4D85-855F-A2F763121C8F"
                                        },
                                        {
                                            "title":"15.2.25 condition",
                                            "href":"oracle_loader-access-driver.html#GUID-490672E2-3EB7-49DC-92F6-41778EC3DD4D",
                                            "topics":[
                                                {
                                                    "title":"15.2.25.1 range start : range end",
                                                    "href":"oracle_loader-access-driver.html#GUID-1311DD73-720A-43BD-866B-934AB4D269BE"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"15.2.26 IO_OPTIONS clause",
                                            "href":"oracle_loader-access-driver.html#GUID-F2F1608D-E6E4-4BE7-9591-EFC7C5EA49CE"
                                        },
                                        {
                                            "title":"15.2.27 DNFS_DISABLE | DNFS_ENABLE",
                                            "href":"oracle_loader-access-driver.html#GUID-7AF9A6ED-EC15-4D71-8AC4-AC5E5E8D1C54"
                                        },
                                        {
                                            "title":"15.2.28 DNFS_READBUFFERS",
                                            "href":"oracle_loader-access-driver.html#GUID-3D62C639-0DDA-49FA-B441-0671057FDD9D"
                                        }
                                    ]
                                },
                                {
                                    "title":"15.3 field_definitions Clause",
                                    "href":"oracle_loader-access-driver.html#GUID-B3C6199C-C28C-4FA7-893E-E48C6FB98F52",
                                    "topics":[
                                        {
                                            "title":"15.3.1 delim_spec",
                                            "href":"oracle_loader-access-driver.html#GUID-6B0AED9C-E34E-44EB-8BCF-026708A537AC",
                                            "topics":[
                                                {
                                                    "title":"15.3.1.1 Example: External Table with Terminating Delimiters",
                                                    "href":"oracle_loader-access-driver.html#GUID-957DDA42-C2E7-4BCC-8EE1-04788802CA31"
                                                },
                                                {
                                                    "title":"15.3.1.2 Example: External Table with Enclosure and Terminator Delimiters",
                                                    "href":"oracle_loader-access-driver.html#GUID-259C4E34-27D9-4E7D-9EDD-4D416B1F8B79"
                                                },
                                                {
                                                    "title":"15.3.1.3 Example: External Table with Optional Enclosure Delimiters",
                                                    "href":"oracle_loader-access-driver.html#GUID-26CE0BF0-FFC0-4B9D-9311-D2C4FD7B77EB"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"15.3.2 trim_spec",
                                            "href":"oracle_loader-access-driver.html#GUID-3A4A12A4-6280-4F9E-8B4C-8D7C9658CC54"
                                        },
                                        {
                                            "title":"15.3.3 MISSING FIELD VALUES ARE NULL",
                                            "href":"oracle_loader-access-driver.html#GUID-680779CF-1089-4C94-9DA5-ECCC1EAC3EF8"
                                        },
                                        {
                                            "title":"15.3.4 field_list",
                                            "href":"oracle_loader-access-driver.html#GUID-5CAF68BD-5C79-4473-AAA3-AB7CDA00B434"
                                        },
                                        {
                                            "title":"15.3.5 pos_spec Clause",
                                            "href":"oracle_loader-access-driver.html#GUID-EFA04EE8-D986-4063-B30B-0D8BDB0FCB30",
                                            "topics":[
                                                {
                                                    "title":"15.3.5.1 start",
                                                    "href":"oracle_loader-access-driver.html#GUID-EFFB1797-5CE4-4928-AFD1-D3A0DC2267CC"
                                                },
                                                {
                                                    "title":"15.3.5.2 *",
                                                    "href":"oracle_loader-access-driver.html#GUID-85205F4D-B35A-46DB-A099-C2CC5BF04B48"
                                                },
                                                {
                                                    "title":"15.3.5.3 increment",
                                                    "href":"oracle_loader-access-driver.html#GUID-24CB1766-C738-4E7D-8C55-B8D843D0D56E"
                                                },
                                                {
                                                    "title":"15.3.5.4 end",
                                                    "href":"oracle_loader-access-driver.html#GUID-CB30BF9B-42FB-41DC-A050-79444621C00A"
                                                },
                                                {
                                                    "title":"15.3.5.5 length",
                                                    "href":"oracle_loader-access-driver.html#GUID-434F236D-450E-40C7-8FC7-8D27A171B1DE"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"15.3.6 datatype_spec Clause",
                                            "href":"oracle_loader-access-driver.html#GUID-035311F3-58DE-4B7A-81E5-ACE31076290E",
                                            "topics":[
                                                {
                                                    "title":"15.3.6.1 [UNSIGNED] INTEGER [EXTERNAL] [(len)]",
                                                    "href":"oracle_loader-access-driver.html#GUID-C97A2624-06D5-429E-B495-8D2232E3F230"
                                                },
                                                {
                                                    "title":"15.3.6.2 DECIMAL [EXTERNAL] and ZONED [EXTERNAL]",
                                                    "href":"oracle_loader-access-driver.html#GUID-5A59FD4A-5043-423D-9553-763A36FAF3D9"
                                                },
                                                {
                                                    "title":"15.3.6.3 ORACLE_DATE",
                                                    "href":"oracle_loader-access-driver.html#GUID-C611AB7C-C774-4797-A306-EE9BA418DD76"
                                                },
                                                {
                                                    "title":"15.3.6.4 ORACLE_NUMBER",
                                                    "href":"oracle_loader-access-driver.html#GUID-7C87BD8C-54C0-4273-B1C6-AD01D56DE977"
                                                },
                                                {
                                                    "title":"15.3.6.5 Floating-Point Numbers",
                                                    "href":"oracle_loader-access-driver.html#GUID-ADD1831E-B7B1-4FB7-B39B-985DD44DF15D"
                                                },
                                                {
                                                    "title":"15.3.6.6 DOUBLE",
                                                    "href":"oracle_loader-access-driver.html#GUID-02DA3BB9-489A-496C-B0B6-331F26D49C97"
                                                },
                                                {
                                                    "title":"15.3.6.7 FLOAT [EXTERNAL]",
                                                    "href":"oracle_loader-access-driver.html#GUID-1399DC35-793F-4CFC-B17B-B8918F9ED78E"
                                                },
                                                {
                                                    "title":"15.3.6.8 BINARY_DOUBLE",
                                                    "href":"oracle_loader-access-driver.html#GUID-7C0BB1F6-F89E-40E5-95DC-D0C4BFFB287C"
                                                },
                                                {
                                                    "title":"15.3.6.9 BINARY_FLOAT",
                                                    "href":"oracle_loader-access-driver.html#GUID-2B9D9376-9438-49FD-B7D8-BB50FB64FDD7"
                                                },
                                                {
                                                    "title":"15.3.6.10 RAW",
                                                    "href":"oracle_loader-access-driver.html#GUID-1A8F57BB-E38B-4AC3-BB37-15FBF09F0BFE"
                                                },
                                                {
                                                    "title":"15.3.6.11 CHAR",
                                                    "href":"oracle_loader-access-driver.html#GUID-308A12B4-3BAC-482C-8EDD-D244463D6BC1"
                                                },
                                                {
                                                    "title":"15.3.6.12 date_format_spec",
                                                    "href":"oracle_loader-access-driver.html#GUID-DA7CF959-2F10-4211-9127-38F0DCA0FCBA",
                                                    "topics":[
                                                        {
                                                            "title":"15.3.6.12.1 DATE",
                                                            "href":"oracle_loader-access-driver.html#GUID-C461726E-0BB4-4014-8826-47A5D605216B"
                                                        },
                                                        {
                                                            "title":"15.3.6.12.2 MASK",
                                                            "href":"oracle_loader-access-driver.html#GUID-4E6DFCC8-64CC-4031-A26B-B2AF54BC4E70"
                                                        },
                                                        {
                                                            "title":"15.3.6.12.3 TIMESTAMP",
                                                            "href":"oracle_loader-access-driver.html#GUID-73D35CC0-32C8-4DB3-BA6E-0938DF6A48ED"
                                                        },
                                                        {
                                                            "title":"15.3.6.12.4 INTERVAL",
                                                            "href":"oracle_loader-access-driver.html#GUID-57CE7310-5FD5-421B-905F-11A532049897"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"15.3.6.13 VARCHAR and VARRAW",
                                                    "href":"oracle_loader-access-driver.html#GUID-12B6BE0F-AF1A-406A-BED1-531073CD547A"
                                                },
                                                {
                                                    "title":"15.3.6.14 VARCHARC and VARRAWC",
                                                    "href":"oracle_loader-access-driver.html#GUID-4ADC3C3F-7A53-42C4-A1F8-2F03F1596C99"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"15.3.7 init_spec Clause",
                                            "href":"oracle_loader-access-driver.html#GUID-387649ED-F805-4F2C-8146-18CCF48F2722"
                                        },
                                        {
                                            "title":"15.3.8 LLS Clause",
                                            "href":"oracle_loader-access-driver.html#GUID-2F2CE8D4-0A03-46EA-9B88-F1792CD464AA"
                                        }
                                    ]
                                },
                                {
                                    "title":"15.4 column_transforms Clause",
                                    "href":"oracle_loader-access-driver.html#GUID-9C45C07B-4235-4AA0-96C4-EA8718B5A31F",
                                    "topics":[
                                        {
                                            "title":"15.4.1 transform",
                                            "href":"oracle_loader-access-driver.html#GUID-66A66847-38F2-4592-AEB8-9444EE4E221A",
                                            "topics":[
                                                {
                                                    "title":"15.4.1.1 column_name FROM",
                                                    "href":"oracle_loader-access-driver.html#GUID-C19CCE61-493E-43ED-8035-7CDB4491E4CF"
                                                },
                                                {
                                                    "title":"15.4.1.2 NULL",
                                                    "href":"oracle_loader-access-driver.html#GUID-B5B79D9C-D9AA-439E-99DE-688164185D55"
                                                },
                                                {
                                                    "title":"15.4.1.3 CONSTANT",
                                                    "href":"oracle_loader-access-driver.html#GUID-7F2D2B37-0658-4D1D-AE9C-0A4CB10BA507"
                                                },
                                                {
                                                    "title":"15.4.1.4 CONCAT",
                                                    "href":"oracle_loader-access-driver.html#GUID-4079779C-EFD0-4CEE-ADB3-D07B3A9D7482"
                                                },
                                                {
                                                    "title":"15.4.1.5 LOBFILE",
                                                    "href":"oracle_loader-access-driver.html#GUID-84F0837F-9DE9-4333-9D8C-EE7CD3BEBB58"
                                                },
                                                {
                                                    "title":"15.4.1.6 lobfile_attr_list",
                                                    "href":"oracle_loader-access-driver.html#GUID-C8D59BD6-A73C-44F0-A82C-97C2BEB86263"
                                                },
                                                {
                                                    "title":"15.4.1.7 STARTOF source_field (length)",
                                                    "href":"oracle_loader-access-driver.html#GUID-2F1E753D-502D-4729-B783-4466BA6560BF"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"15.5 Parallel Loading Considerations for the ORACLE_LOADER Access Driver",
                                    "href":"oracle_loader-access-driver.html#GUID-CED39F6E-AC10-47B0-A5EC-5F977DE6275D"
                                },
                                {
                                    "title":"15.6 Performance Hints When Using the ORACLE_LOADER Access Driver",
                                    "href":"oracle_loader-access-driver.html#GUID-AFD2D4C7-08FA-4B80-A137-E60BAE7BB150"
                                },
                                {
                                    "title":"15.7 Restrictions When Using the ORACLE_LOADER Access Driver",
                                    "href":"oracle_loader-access-driver.html#GUID-7D9BFB09-6705-4EE2-B79B-A7755A35B7CB"
                                },
                                {
                                    "title":"15.8 Reserved Words for the ORACLE_LOADER Access Driver",
                                    "href":"oracle_loader-access-driver.html#GUID-4E710755-36CA-4F2D-AFFF-E8A707FF3EBB"
                                }
                            ]
                        },
                        {
                            "title":"16 The ORACLE_DATAPUMP Access Driver",
                            "href":"oracle_datapump-access-driver.html#GUID-084DC623-9656-499C-885B-D8180C07704B",
                            "topics":[
                                {
                                    "title":"16.1 access_parameters Clause",
                                    "href":"oracle_datapump-access-driver.html#GUID-E9780F81-58D7-4E16-863F-8678DE53EC9A",
                                    "topics":[
                                        {
                                            "title":"16.1.1 comments",
                                            "href":"oracle_datapump-access-driver.html#GUID-AD390CF3-3BA1-425D-85A0-A78C21CF5E34"
                                        },
                                        {
                                            "title":"16.1.2 COMPRESSION",
                                            "href":"oracle_datapump-access-driver.html#GUID-AAAF7245-F72B-40EB-AC9C-260AD5AEAF8F"
                                        },
                                        {
                                            "title":"16.1.3 ENCRYPTION",
                                            "href":"oracle_datapump-access-driver.html#GUID-AD528E6B-22CB-4955-9C05-E3F6678DD343"
                                        },
                                        {
                                            "title":"16.1.4 LOGFILE | NOLOGFILE",
                                            "href":"oracle_datapump-access-driver.html#GUID-30EF29F8-DCF2-4312-8FE7-50A580B1FA2D",
                                            "topics":[
                                                {
                                                    "title":"16.1.4.1 Log File Naming in Parallel Loads",
                                                    "href":"oracle_datapump-access-driver.html#GUID-81D4E310-307B-4AD7-9CE3-BA86656C1332"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"16.1.5 VERSION Clause",
                                            "href":"oracle_datapump-access-driver.html#GUID-1B8E3BBF-09DD-42E6-8034-096E6A0F31BE"
                                        },
                                        {
                                            "title":"16.1.6 Effects of Using the SQL ENCRYPT Clause",
                                            "href":"oracle_datapump-access-driver.html#GUID-039387FC-3011-402F-B38A-B1D392738AD2"
                                        }
                                    ]
                                },
                                {
                                    "title":"16.2 Unloading and Loading Data with the ORACLE_DATAPUMP Access Driver",
                                    "href":"oracle_datapump-access-driver.html#GUID-0B2EC1B2-701D-42ED-874C-47F22F21D847",
                                    "topics":[
                                        {
                                            "title":"16.2.1 Parallel Loading and Unloading",
                                            "href":"oracle_datapump-access-driver.html#GUID-3BEF455B-7CEB-4E5D-800A-7000A501A652"
                                        },
                                        {
                                            "title":"16.2.2 Combining Dump Files",
                                            "href":"oracle_datapump-access-driver.html#GUID-5CEDE96D-98D5-4D1A-9198-0312FBA41D98"
                                        }
                                    ]
                                },
                                {
                                    "title":"16.3 Supported Data Types",
                                    "href":"oracle_datapump-access-driver.html#GUID-5C97AFA9-C77D-4BF4-A97B-71CBAB58442C"
                                },
                                {
                                    "title":"16.4 Unsupported Data Types",
                                    "href":"oracle_datapump-access-driver.html#GUID-4FA55A48-2401-4BE2-915E-875AD6B4B899",
                                    "topics":[
                                        {
                                            "title":"16.4.1 Unloading and Loading BFILE Data Types",
                                            "href":"oracle_datapump-access-driver.html#GUID-1C77D335-ACBB-4FC0-AD04-5FF4D40809B4"
                                        },
                                        {
                                            "title":"16.4.2 Unloading LONG and LONG RAW Data Types",
                                            "href":"oracle_datapump-access-driver.html#GUID-68CF706F-E629-43EB-9B4B-6ADB37446173"
                                        },
                                        {
                                            "title":"16.4.3 Unloading and Loading Columns Containing Final Object Types",
                                            "href":"oracle_datapump-access-driver.html#GUID-719DC4D7-214A-4988-87FC-AFDA846F4578"
                                        },
                                        {
                                            "title":"16.4.4 Tables of Final Object Types",
                                            "href":"oracle_datapump-access-driver.html#GUID-77783263-FB7F-44E7-ACFE-2A754038D2BA"
                                        }
                                    ]
                                },
                                {
                                    "title":"16.5 Performance Hints When Using the ORACLE_DATAPUMP Access Driver",
                                    "href":"oracle_datapump-access-driver.html#GUID-1061CC64-EB94-4546-B6B4-82CAF405E36C"
                                },
                                {
                                    "title":"16.6 Restrictions When Using the ORACLE_DATAPUMP Access Driver",
                                    "href":"oracle_datapump-access-driver.html#GUID-F3E32FE4-F0AE-4658-97A3-EBEA141E792B"
                                },
                                {
                                    "title":"16.7 Reserved Words for the ORACLE_DATAPUMP Access Driver",
                                    "href":"oracle_datapump-access-driver.html#GUID-936F4EAA-2F14-48E5-8EE4-A2D9A56C3A05"
                                }
                            ]
                        },
                        {
                            "title":"17 ORACLE_HDFS and ORACLE_HIVE Access Drivers",
                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-597D7F45-D37F-49CE-A7E5-C92C7D707AE9",
                            "topics":[
                                {
                                    "title":"17.1 Syntax Rules for Specifying Properties",
                                    "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-C4A2AC9E-8815-42C6-A166-553351316408"
                                },
                                {
                                    "title":"17.2 ORACLE_HDFS Access Parameters",
                                    "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-5D2D356A-AD9B-4E8B-BB6D-E7620D04909E",
                                    "topics":[
                                        {
                                            "title":"17.2.1 Default Parameter Settings for ORACLE_HDFS",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-61CD4F39-357F-4643-A10F-76C9AB2FB65A"
                                        },
                                        {
                                            "title":"17.2.2 Optional Parameter Settings for ORACLE_HDFS",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-6B2187DD-7550-4AF9-9775-FB61B8CCC4AC"
                                        }
                                    ]
                                },
                                {
                                    "title":"17.3 ORACLE_HIVE Access Parameters",
                                    "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-9CC9807E-44F5-4A54-A8B9-D3D9D293A9B4",
                                    "topics":[
                                        {
                                            "title":"17.3.1 Default Parameter Settings for ORACLE_HIVE",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-A1D301CE-9DDC-4EF0-8D61-BBCED17A12A1"
                                        },
                                        {
                                            "title":"17.3.2 Optional Parameter Settings for ORACLE_HIVE",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-B2CCB3BF-B5DD-4F7E-A092-6A6FF8F02C69"
                                        }
                                    ]
                                },
                                {
                                    "title":"17.4 Descriptions of com.oracle.bigdata Parameters",
                                    "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-87523E22-7967-4925-9207-169276184397",
                                    "topics":[
                                        {
                                            "title":"17.4.1 com.oracle.bigdata.colmap",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-417D485A-A5DB-46AB-8495-3FD8C6615CE7"
                                        },
                                        {
                                            "title":"17.4.2 com.oracle.bigdata.datamode",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-F4F86E41-FF0D-4309-B8CA-E05104F3B996"
                                        },
                                        {
                                            "title":"17.4.3 com.oracle.bigdata.erroropt",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-EE402B2A-42F3-4BE9-904A-423E1AB26E55"
                                        },
                                        {
                                            "title":"17.4.4 com.oracle.bigdata.fields",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-6E0915DC-E80C-4233-A82B-095F8881F6F0"
                                        },
                                        {
                                            "title":"17.4.5 com.oracle.bigdata.fileformat",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-D9612150-D79A-40D0-A6C9-B101322C1F2D"
                                        },
                                        {
                                            "title":"17.4.6 com.oracle.bigdata.log.exec",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-A743F247-D143-40C8-BE3A-1F2F603A7516"
                                        },
                                        {
                                            "title":"17.4.7 com.oracle.bigdata.log.qc",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-DD3F4F5D-CA97-43A6-B7B5-3ED51CE4644C"
                                        },
                                        {
                                            "title":"17.4.8 com.oracle.bigdata.overflow",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-3DF2757C-A210-41ED-A0E3-44D5BAC9C5CD"
                                        },
                                        {
                                            "title":"17.4.9 com.oracle.bigdata.rowformat",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-149DB6CD-E19E-4ECC-A0B6-CF844E6ACFAA"
                                        },
                                        {
                                            "title":"17.4.10 com.oracle.bigdata.tablename",
                                            "href":"oracle_hdfs-and-oracle_hive-access-drivers.html#GUID-34A7BD3E-655B-4032-8343-1A63F7DA7A18"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"18 External Tables Examples",
                            "href":"examples-using-oracle-external-tables.html#GUID-03CE63AD-F046-4805-A560-E4CFD7FA8503",
                            "topics":[
                                {
                                    "title":"18.1 Using the ORACLE_LOADER Access Driver to Create Partitioned External Tables",
                                    "href":"examples-using-oracle-external-tables.html#GUID-35F897D9-BBD9-4B5F-BE7C-01FE514CFEBE"
                                },
                                {
                                    "title":"18.2 Using the ORACLE_DATAPUMP Access Driver to Create Partitioned External Tables",
                                    "href":"examples-using-oracle-external-tables.html#GUID-9C61CD54-F59D-4F9F-984A-981DD984EAA7"
                                },
                                {
                                    "title":"18.3 Using the ORACLE_HDFS Access Driver to Create Partitioned External Tables",
                                    "href":"examples-using-oracle-external-tables.html#GUID-86BD0507-EB88-4705-9321-E86E60021DD6"
                                },
                                {
                                    "title":"18.4 Using the ORACLE_HIVE Access Driver to Create Partitioned External Tables",
                                    "href":"examples-using-oracle-external-tables.html#GUID-74478A87-C89A-47E1-A8BF-DA556A3C2115"
                                },
                                {
                                    "title":"18.5 Loading LOBs From External Tables",
                                    "href":"examples-using-oracle-external-tables.html#GUID-9D3ED2AE-192D-435A-833E-97899778929E"
                                },
                                {
                                    "title":"18.6 Loading CSV Files From External Tables",
                                    "href":"examples-using-oracle-external-tables.html#GUID-53C71354-FDC0-4CD7-BBF1-2B7327A1A245"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part IV Other Utilities",
                    "href":"other-oracle-utilities.html#GUID-FCEA49BD-D3AF-4337-88F1-3A23545F35A6",
                    "topics":[
                        {
                            "title":"19 ADRCI: ADR Command Interpreter",
                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-DC5744C7-FAC0-436B-99D5-DBD45B66930B",
                            "topics":[
                                {
                                    "title":"19.1 About the ADR Command Interpreter (ADRCI) Utility",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-ADB83DEA-1903-4838-B8CC-3B397992BA62"
                                },
                                {
                                    "title":"19.2 Definitions",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-DF469A46-C74D-473D-A2F5-8E6DF50A0A03"
                                },
                                {
                                    "title":"19.3 Starting ADRCI and Getting Help",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-AB01596F-E0C3-4DD1-A05E-AA97427D872D",
                                    "topics":[
                                        {
                                            "title":"19.3.1 Using ADRCI in Interactive Mode",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-AE4328A3-4104-4CC1-B379-EAF88F1243DC"
                                        },
                                        {
                                            "title":"19.3.2 Getting Help",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-823B1263-0834-40D2-8078-10817C2C575D"
                                        },
                                        {
                                            "title":"19.3.3 Using ADRCI in Batch Mode",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-AA8EA548-8756-4A18-9F93-4F2C27FFD81D"
                                        }
                                    ]
                                },
                                {
                                    "title":"19.4 Setting the ADRCI Homepath Before Using ADRCI Commands",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-4805C1CD-5F22-417D-B824-AF141F7B8DE5"
                                },
                                {
                                    "title":"19.5 Viewing the Alert Log",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-E0FF3013-2EBF-4110-88BF-69E7DD2BBD7C"
                                },
                                {
                                    "title":"19.6 Finding Trace Files",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-0AD34946-7459-44D7-9C85-20E37DA8ABE9"
                                },
                                {
                                    "title":"19.7 Viewing Incidents",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-7A4558B9-F37B-4FD9-A14D-30FFBD7397CD"
                                },
                                {
                                    "title":"19.8 Packaging Incidents",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-D3810DBD-7840-4836-AB12-193F7B3FE0D6",
                                    "topics":[
                                        {
                                            "title":"19.8.1 About Packaging Incidents",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-41EE7D7F-BF4A-471F-91B7-C91596101DF7"
                                        },
                                        {
                                            "title":"19.8.2 Creating Incident Packages",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-F37F1354-BE04-4716-8D2A-9D240AAB9D89",
                                            "topics":[
                                                {
                                                    "title":"19.8.2.1 Creating a Logical Incident Package",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-B39BCB6F-B2F9-4FFD-9BFD-A44F35735B46"
                                                },
                                                {
                                                    "title":"19.8.2.2 Adding Diagnostic Information to a Logical Incident Package",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-8E66C177-7554-49B2-9A04-6723C9A623FC"
                                                },
                                                {
                                                    "title":"19.8.2.3 Generating a Physical Incident Package",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-9627F4C2-AB06-4BFA-A6CA-EF478D6B5689"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"19.9 ADRCI Command Reference",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-482FB608-CB5F-4EB1-83AA-BABCE72D51D3",
                                    "topics":[
                                        {
                                            "title":"19.9.1 CREATE REPORT",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-4903D8DB-0BE7-4D30-97B8-572911411076"
                                        },
                                        {
                                            "title":"19.9.2 ECHO",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-F76D8FAB-3A70-4BE3-9B29-3FA2FEBA4768"
                                        },
                                        {
                                            "title":"19.9.3 EXIT",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-3CB606E6-CA65-46F1-AB17-270301255DD4"
                                        },
                                        {
                                            "title":"19.9.4 HOST",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-6A955203-7EA3-423F-9086-A9BD5D5A06A5"
                                        },
                                        {
                                            "title":"19.9.5 IPS",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-92244BA9-682B-4410-A209-91E933A32F63",
                                            "topics":[
                                                {
                                                    "title":"19.9.5.1 Using the <ADR_HOME> and <ADR_BASE> Variables in IPS Commands",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-D193A8E5-A9E0-4BF5-87E5-685FDE463432"
                                                },
                                                {
                                                    "title":"19.9.5.2 IPS ADD",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-EDDEF467-225B-4B71-82FD-38BA0CBE7ED0"
                                                },
                                                {
                                                    "title":"19.9.5.3 IPS ADD FILE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-44ADCE30-8AE8-415D-AB7C-BC406899A297"
                                                },
                                                {
                                                    "title":"19.9.5.4 IPS ADD NEW INCIDENTS",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-93478392-23C9-493C-BE5E-0F0EE009E18E"
                                                },
                                                {
                                                    "title":"19.9.5.5 IPS COPY IN FILE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-077B6882-AF6B-4E3F-BFF3-B5A27A3E8046"
                                                },
                                                {
                                                    "title":"19.9.5.6 IPS COPY OUT FILE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-67812902-4018-449D-8726-52D0161443BB"
                                                },
                                                {
                                                    "title":"19.9.5.7 IPS CREATE PACKAGE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-7C75C5BA-C839-4E5F-A00E-846BAD247FCA"
                                                },
                                                {
                                                    "title":"19.9.5.8 IPS DELETE PACKAGE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-292109C2-4431-4885-90B7-DF2518970FBC"
                                                },
                                                {
                                                    "title":"19.9.5.9 IPS FINALIZE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-DEEED8CA-6547-41B8-AF73-C303598B247A"
                                                },
                                                {
                                                    "title":"19.9.5.10 IPS GENERATE PACKAGE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-A3863FDF-DA3C-433C-A897-C23A5BB42688"
                                                },
                                                {
                                                    "title":"19.9.5.11 IPS GET MANIFEST",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-F8E87E03-F66B-4BE5-AC73-5AFC2C42DC18"
                                                },
                                                {
                                                    "title":"19.9.5.12 IPS GET METADATA",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-2BB8CEF7-0C4E-4756-A8E7-41DB78E9B05D"
                                                },
                                                {
                                                    "title":"19.9.5.13 IPS PACK",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-D00987B3-C8ED-429E-B07A-BE18E029D114"
                                                },
                                                {
                                                    "title":"19.9.5.14 IPS REMOVE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-5D47EF7E-0E59-4E90-8884-D5EF3C941C91"
                                                },
                                                {
                                                    "title":"19.9.5.15 IPS REMOVE FILE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-01472BFD-2141-4B70-8090-C87CB0C093F0"
                                                },
                                                {
                                                    "title":"19.9.5.16 IPS SET CONFIGURATION",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-A7CC2C2B-77B4-4D18-9524-B837059CE1E0"
                                                },
                                                {
                                                    "title":"19.9.5.17 IPS SHOW CONFIGURATION",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-EF8FDA12-866C-4DA4-9B6F-77782A34A713"
                                                },
                                                {
                                                    "title":"19.9.5.18 IPS SHOW FILES",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-B3239C8F-1B96-448A-B9D2-4850FDCAE8AB"
                                                },
                                                {
                                                    "title":"19.9.5.19 IPS SHOW INCIDENTS",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-8CEAEB18-810F-49C9-A382-8F6E0D5FF0F3"
                                                },
                                                {
                                                    "title":"19.9.5.20 IPS SHOW PACKAGE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-7E441AA5-D29F-468B-A3A5-2F099D909D30"
                                                },
                                                {
                                                    "title":"19.9.5.21 IPS UNPACK FILE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-87186DBE-4A4E-4899-BE42-1A12B23034E2"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"19.9.6 PURGE",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-92DD451B-C3A1-48D7-A147-3296E75572CB"
                                        },
                                        {
                                            "title":"19.9.7 QUIT",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-DAA45D68-9069-47D1-A692-5C2E640FBFDF"
                                        },
                                        {
                                            "title":"19.9.8 RUN",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-01B66410-C978-468B-A9CA-E8C2FB4E0AAF"
                                        },
                                        {
                                            "title":"19.9.9 SELECT",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-807FBEFE-A64B-4881-A9E1-4FBED4D966C0",
                                            "topics":[
                                                {
                                                    "title":"19.9.9.1 AVG",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-16273FC7-563E-4B3C-98EF-80E443925775"
                                                },
                                                {
                                                    "title":"19.9.9.2 CONCAT",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-98D42AA5-265E-43E8-8A4F-AD7068EB87E1"
                                                },
                                                {
                                                    "title":"19.9.9.3 COUNT",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-D44E3AF1-E9D8-4DE2-883F-FF2CEFEAE93D"
                                                },
                                                {
                                                    "title":"19.9.9.4 DECODE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-0564D9EF-012E-435C-A220-5C906F51B369"
                                                },
                                                {
                                                    "title":"19.9.9.5 LENGTH",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-C772BF6B-0D0F-4525-A1A1-FA4C056EFE4A"
                                                },
                                                {
                                                    "title":"19.9.9.6 MAX",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-B37C97F1-4859-4EE0-ABF9-7270F4713E24"
                                                },
                                                {
                                                    "title":"19.9.9.7 MIN",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-62980B89-1B57-46B1-BCD9-27AF5B8AE861"
                                                },
                                                {
                                                    "title":"19.9.9.8 NVL",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-B99408D4-A72B-4E08-98E8-3F2F5CC0351F"
                                                },
                                                {
                                                    "title":"19.9.9.9 REGEXP_LIKE",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-95DE4B18-3094-46AA-BC0A-A53E8AE56263"
                                                },
                                                {
                                                    "title":"19.9.9.10 SUBSTR",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-4CD9AF1F-EF52-49C7-A36A-FDD01E654422"
                                                },
                                                {
                                                    "title":"19.9.9.11 SUM",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-43DEB29A-0B72-4299-A17F-488E932D1AF5"
                                                },
                                                {
                                                    "title":"19.9.9.12 TIMESTAMP_TO_CHAR",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-3A685B2D-1FEF-4013-92C5-16A56E3C5F01"
                                                },
                                                {
                                                    "title":"19.9.9.13 TOLOWER",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-B2143DF6-B196-46C1-AC27-EA7B062F9A22"
                                                },
                                                {
                                                    "title":"19.9.9.14 TOUPPER",
                                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-750BCC36-9085-4EC5-9D09-2824C79E2072"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"19.9.10 SET BASE",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-14B7C61C-4EFB-4763-A3D2-82E9130EC44A"
                                        },
                                        {
                                            "title":"19.9.11 SET BROWSER",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-989FEBE4-6C27-4964-800A-13DBC29B8DF8"
                                        },
                                        {
                                            "title":"19.9.12 SET CONTROL",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-68ED8877-1132-45F1-8297-E1CCF8D34D98"
                                        },
                                        {
                                            "title":"19.9.13 SET ECHO",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-D45E2B5E-B70C-49E1-BE46-6B58DBABE220"
                                        },
                                        {
                                            "title":"19.9.14 SET EDITOR",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-A949A0F9-36D3-47E5-BC8C-C69C82E8EEFC"
                                        },
                                        {
                                            "title":"19.9.15 SET HOMEPATH",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-FD069BF1-0540-48C6-B41A-4C8BBCDDDDDC"
                                        },
                                        {
                                            "title":"19.9.16 SET TERMOUT",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-1DC0410D-E0C5-43D1-82A1-8178D0B1EC1C"
                                        },
                                        {
                                            "title":"19.9.17 SHOW ALERT",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-8D62D6A0-99F4-465C-B088-5CCF259B7D80"
                                        },
                                        {
                                            "title":"19.9.18 SHOW BASE",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-56FCFD5C-5E80-43A2-B320-986E2CCC929D"
                                        },
                                        {
                                            "title":"19.9.19 SHOW CONTROL",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-5CAC90F9-8C61-46B1-AA0A-3F097C24D7E6"
                                        },
                                        {
                                            "title":"19.9.20 SHOW HM_RUN",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-0B002000-A8CD-43EE-9EEC-D3477C91AC6A"
                                        },
                                        {
                                            "title":"19.9.21 SHOW HOMEPATH",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-7E8931E0-7A84-4DD2-A209-4E89E81B7D8E"
                                        },
                                        {
                                            "title":"19.9.22 SHOW HOMES",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-0DD82792-D55C-4336-B161-CCDCB566AFAD"
                                        },
                                        {
                                            "title":"19.9.23 SHOW INCDIR",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-396D4E68-6D85-424A-8978-F8C778BFD05D"
                                        },
                                        {
                                            "title":"19.9.24 SHOW INCIDENT",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-3BFAB743-4420-44BD-8A28-D7F718660ACE"
                                        },
                                        {
                                            "title":"19.9.25 SHOW LOG",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-568C0D01-CF56-4CFE-AD5B-160ECAD1B543"
                                        },
                                        {
                                            "title":"19.9.26 SHOW PROBLEM",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-FAF9984D-4984-4F25-BC6B-2FF2AC862217"
                                        },
                                        {
                                            "title":"19.9.27 SHOW REPORT",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-90BA8609-DE1B-4418-A7C3-021F9337952D"
                                        },
                                        {
                                            "title":"19.9.28 SHOW TRACEFILE",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-7B0E77CB-A07F-4B91-BD0B-85C4CA08D009"
                                        },
                                        {
                                            "title":"19.9.29 SPOOL",
                                            "href":"oracle-adr-command-interpreter-adrci.html#GUID-A2672206-4175-4BF2-AA18-EE709B41FF27"
                                        }
                                    ]
                                },
                                {
                                    "title":"19.10 Troubleshooting ADRCI",
                                    "href":"oracle-adr-command-interpreter-adrci.html#GUID-BB399D6A-240C-4656-865B-B1F7D4D7223D"
                                }
                            ]
                        },
                        {
                            "title":"20 DBVERIFY: Offline Database Verification Utility",
                            "href":"oracle-dbverify-utility.html#GUID-05C9875B-1AC1-433D-A71E-B7C0667EE1F1",
                            "topics":[
                                {
                                    "title":"20.1 Using DBVERIFY to Validate Disk Blocks of a Single Data File",
                                    "href":"oracle-dbverify-utility.html#GUID-8D0DA90D-A711-4AEE-B546-53446F3F8053",
                                    "topics":[
                                        {
                                            "title":"20.1.1 DBVERIFY Syntax When Validating Blocks of a Single File",
                                            "href":"oracle-dbverify-utility.html#GUID-6FF4BDDC-52FD-45C9-A39A-75B0D50F42DC"
                                        },
                                        {
                                            "title":"20.1.2 DBVERIFY Parameters When Validating Blocks of a Single File",
                                            "href":"oracle-dbverify-utility.html#GUID-EF7EB366-D15E-4293-B9F0-3AA127A5207A"
                                        },
                                        {
                                            "title":"20.1.3 Sample DBVERIFY Output For a Single Data File",
                                            "href":"oracle-dbverify-utility.html#GUID-3A0924BD-1F5D-4E29-B995-AC82C9EA9580"
                                        }
                                    ]
                                },
                                {
                                    "title":"20.2 Using DBVERIFY to Validate a Segment",
                                    "href":"oracle-dbverify-utility.html#GUID-820047A4-496A-4AAE-A18A-DDD8C65780E6",
                                    "topics":[
                                        {
                                            "title":"20.2.1 DBVERIFY Syntax When Validating a Segment",
                                            "href":"oracle-dbverify-utility.html#GUID-2D21EE08-554A-42C6-AED6-50FBCD350433"
                                        },
                                        {
                                            "title":"20.2.2 DBVERIFY Parameters When Validating a Single Segment",
                                            "href":"oracle-dbverify-utility.html#GUID-371A0917-9267-4704-8CF3-6E5120034B9A"
                                        },
                                        {
                                            "title":"20.2.3 Sample DBVERIFY Output For a Validated Segment",
                                            "href":"oracle-dbverify-utility.html#GUID-50FB7BD4-33F5-4A09-B80D-B4E268C16298"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"21 DBNEWID Utility",
                            "href":"oracle-dbnewid-utility.html#GUID-D138A757-6A2A-41A2-B722-A98708C5F5AD",
                            "topics":[
                                {
                                    "title":"21.1 What Is the DBNEWID Utility?",
                                    "href":"oracle-dbnewid-utility.html#GUID-24AAE1B4-34DA-4746-ADCB-D068FD7DFD8D"
                                },
                                {
                                    "title":"21.2 Ramifications of Changing the DBID and DBNAME",
                                    "href":"oracle-dbnewid-utility.html#GUID-6FBEA644-277A-460C-A9D5-772C1C35398C",
                                    "topics":[
                                        {
                                            "title":"21.2.1 Considerations for Global Database Names",
                                            "href":"oracle-dbnewid-utility.html#GUID-118038E5-F18E-4557-9A3B-A980503E5EDC"
                                        }
                                    ]
                                },
                                {
                                    "title":"21.3 DBNEWID Considerations for CDBs and PDBs",
                                    "href":"oracle-dbnewid-utility.html#GUID-73D5DDC3-F576-4869-A68F-5091DB961B48"
                                },
                                {
                                    "title":"21.4 Changing the DBID and DBNAME of a Database",
                                    "href":"oracle-dbnewid-utility.html#GUID-FA1E0D47-4907-47F5-877C-2DB109B74430",
                                    "topics":[
                                        {
                                            "title":"21.4.1 Changing the DBID and Database Name",
                                            "href":"oracle-dbnewid-utility.html#GUID-05B4733C-9EAA-438F-A2A4-4E84EB1E1E65"
                                        },
                                        {
                                            "title":"21.4.2 Changing Only the Database ID",
                                            "href":"oracle-dbnewid-utility.html#GUID-07A37F43-C6BC-4245-BA49-5660E4281277"
                                        },
                                        {
                                            "title":"21.4.3 Changing Only the Database Name",
                                            "href":"oracle-dbnewid-utility.html#GUID-6CC9CA73-8C0C-4750-8D0E-ADFDB047E4AE"
                                        },
                                        {
                                            "title":"21.4.4 Troubleshooting DBNEWID",
                                            "href":"oracle-dbnewid-utility.html#GUID-97E160FC-7882-4840-A7ED-7E40FE7AA9AC"
                                        }
                                    ]
                                },
                                {
                                    "title":"21.5 DBNEWID Syntax",
                                    "href":"oracle-dbnewid-utility.html#GUID-D7EC3796-8805-459B-86FD-4A4481FFB405",
                                    "topics":[
                                        {
                                            "title":"21.5.1 DBNEWID Parameters",
                                            "href":"oracle-dbnewid-utility.html#GUID-29E20615-2FD2-4F84-AF91-AD7B32C19D3D"
                                        },
                                        {
                                            "title":"21.5.2 Restrictions and Usage Notes",
                                            "href":"oracle-dbnewid-utility.html#GUID-6FED9AB9-7077-4D79-B936-816A5D717669"
                                        },
                                        {
                                            "title":"21.5.3 Additional Restrictions for Releases Earlier Than Oracle Database 10g",
                                            "href":"oracle-dbnewid-utility.html#GUID-C68B0E7D-538E-4F21-BB4F-34359D386DD9"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"22 Using LogMiner to Analyze Redo Log Files",
                            "href":"oracle-logminer-utility.html#GUID-3417B738-374C-4EE3-B15C-3A66E01AE2B5",
                            "topics":[
                                {
                                    "title":"22.1 LogMiner Benefits",
                                    "href":"oracle-logminer-utility.html#GUID-7B22CA96-37E8-464A-A103-E8F8DA7BB75D"
                                },
                                {
                                    "title":"22.2 Introduction to LogMiner",
                                    "href":"oracle-logminer-utility.html#GUID-2EAA593B-DC09-4D30-87EB-34819FC68B3D",
                                    "topics":[
                                        {
                                            "title":"22.2.1 LogMiner Configuration",
                                            "href":"oracle-logminer-utility.html#GUID-2A5828FB-C4BA-45E8-AEB2-4FA54EC5AFEF",
                                            "topics":[
                                                {
                                                    "title":"22.2.1.1 Sample LogMiner Configuration",
                                                    "href":"oracle-logminer-utility.html#GUID-03892F75-767E-4462-9865-9843F1502AD5"
                                                },
                                                {
                                                    "title":"22.2.1.2 Requirements",
                                                    "href":"oracle-logminer-utility.html#GUID-7594F0D7-0ACD-46E6-BD61-2751136ECDB4"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"22.2.2 Directing LogMiner Operations and Retrieving Data of Interest",
                                            "href":"oracle-logminer-utility.html#GUID-ED46E42D-B412-4820-9753-EBE15F49BA21"
                                        }
                                    ]
                                },
                                {
                                    "title":"22.3 Using LogMiner in a CDB",
                                    "href":"oracle-logminer-utility.html#GUID-2555A155-01E3-483E-9FC6-2BDC2D8A4093",
                                    "topics":[
                                        {
                                            "title":"22.3.1 LogMiner V$ Views and DBA Views in a CDB",
                                            "href":"oracle-logminer-utility.html#GUID-945F35C4-1D2D-4F0E-954B-408BBB09EDF0"
                                        },
                                        {
                                            "title":"22.3.2 The V$LOGMNR_CONTENTS View in a CDB",
                                            "href":"oracle-logminer-utility.html#GUID-98AED018-EAF5-4B56-BE6C-F1DEEF8D6B51"
                                        },
                                        {
                                            "title":"22.3.3 Enabling Supplemental Logging in a CDB",
                                            "href":"oracle-logminer-utility.html#GUID-6564DEB6-DE46-4269-BFA0-4797612DE7C0"
                                        },
                                        {
                                            "title":"22.3.4 Using a Flat File Dictionary in a CDB",
                                            "href":"oracle-logminer-utility.html#GUID-EF8A932F-7E71-4995-893E-E583B90007C2"
                                        }
                                    ]
                                },
                                {
                                    "title":"22.4 LogMiner Dictionary Files and Redo Log Files",
                                    "href":"oracle-logminer-utility.html#GUID-1582C62D-5AD8-4807-9ABF-B0F1861C81B5",
                                    "topics":[
                                        {
                                            "title":"22.4.1 LogMiner Dictionary Options",
                                            "href":"oracle-logminer-utility.html#GUID-A69748AD-B53D-42D9-9B54-C8132D8E4C1C",
                                            "topics":[
                                                {
                                                    "title":"22.4.1.1 Using the Online Catalog",
                                                    "href":"oracle-logminer-utility.html#GUID-1D510A2F-4CE8-4D69-AB18-CDD58FB3458C"
                                                },
                                                {
                                                    "title":"22.4.1.2 Extracting a LogMiner Dictionary to the Redo Log Files",
                                                    "href":"oracle-logminer-utility.html#GUID-A0D89906-C787-4EB4-BA47-171A457445EC"
                                                },
                                                {
                                                    "title":"22.4.1.3 Extracting the LogMiner Dictionary to a Flat File",
                                                    "href":"oracle-logminer-utility.html#GUID-DA37874F-6637-4205-AB5C-A8AC1914D018"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"22.4.2 Redo Log File Options",
                                            "href":"oracle-logminer-utility.html#GUID-C50E9C76-ABA1-4A27-AAB4-C65479EDFDE0"
                                        }
                                    ]
                                },
                                {
                                    "title":"22.5 Starting LogMiner",
                                    "href":"oracle-logminer-utility.html#GUID-A5A1E94C-45AA-4B6A-B7B3-E1AD2F8675B5"
                                },
                                {
                                    "title":"22.6 Querying V$LOGMNR_CONTENTS for Redo Data of Interest",
                                    "href":"oracle-logminer-utility.html#GUID-14D0D046-79B1-4A3F-8F6A-DC98598D2B7D",
                                    "topics":[
                                        {
                                            "title":"22.6.1 How the V$LOGMNR_CONTENTS View Is Populated",
                                            "href":"oracle-logminer-utility.html#GUID-7F1199AB-84E5-49C7-80C1-30D74800BA91"
                                        },
                                        {
                                            "title":"22.6.2 Querying V$LOGMNR_CONTENTS Based on Column Values",
                                            "href":"oracle-logminer-utility.html#GUID-CF064432-57A0-4891-ABE5-800DF327615A",
                                            "topics":[
                                                {
                                                    "title":"22.6.2.1 The Meaning of NULL Values Returned by the MINE_VALUE Function",
                                                    "href":"oracle-logminer-utility.html#GUID-A89673AD-EC53-4BA0-B298-D62291C5728B"
                                                },
                                                {
                                                    "title":"22.6.2.2 Usage Rules for the MINE_VALUE and COLUMN_PRESENT Functions",
                                                    "href":"oracle-logminer-utility.html#GUID-66897AA4-7B9D-4C2C-9FC3-64DF9A292290"
                                                },
                                                {
                                                    "title":"22.6.2.3 Restrictions When Using the MINE_VALUE Function To Get an NCHAR Value",
                                                    "href":"oracle-logminer-utility.html#GUID-7C1FB699-52D6-4B93-A676-C9426D32FE3C"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"22.6.3 Querying V$LOGMNR_CONTENTS Based on XMLType Columns and Tables",
                                            "href":"oracle-logminer-utility.html#GUID-DFDDD830-650B-4E46-A114-105F2995F839",
                                            "topics":[
                                                {
                                                    "title":"22.6.3.1 Restrictions When Using LogMiner With XMLType Data",
                                                    "href":"oracle-logminer-utility.html#GUID-9797CFFF-033D-44F7-A3CD-0ADA0BA46C6B"
                                                },
                                                {
                                                    "title":"22.6.3.2 Example of a PL/SQL Procedure for Assembling XMLType Data",
                                                    "href":"oracle-logminer-utility.html#GUID-C4FEF4D3-2848-4030-951A-C4ADF1D9FD89"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"22.7 Filtering and Formatting Data Returned to V$LOGMNR_CONTENTS",
                                    "href":"oracle-logminer-utility.html#GUID-C659DAB0-03D0-4958-BB2F-E81C2928BE24",
                                    "topics":[
                                        {
                                            "title":"22.7.1 Showing Only Committed Transactions",
                                            "href":"oracle-logminer-utility.html#GUID-6A2398F7-D484-495A-8AD2-0A6B34C03536"
                                        },
                                        {
                                            "title":"22.7.2 Skipping Redo Corruptions",
                                            "href":"oracle-logminer-utility.html#GUID-FAA95EFA-4AC0-4F5B-BE30-D79A9AC4C6B9"
                                        },
                                        {
                                            "title":"22.7.3 Filtering Data by Time",
                                            "href":"oracle-logminer-utility.html#GUID-0AA13EFD-8118-4061-A215-9D3AF9EEB1D5"
                                        },
                                        {
                                            "title":"22.7.4 Filtering Data by SCN",
                                            "href":"oracle-logminer-utility.html#GUID-011AA230-32A7-4DE7-9DC0-CE1FF55CFAF3"
                                        },
                                        {
                                            "title":"22.7.5 Formatting Reconstructed SQL Statements for Re-execution",
                                            "href":"oracle-logminer-utility.html#GUID-C2B8C741-9544-4A46-818E-16B233570599"
                                        },
                                        {
                                            "title":"22.7.6 Formatting the Appearance of Returned Data for Readability",
                                            "href":"oracle-logminer-utility.html#GUID-95841FA7-BE3F-4B78-B52B-47D5F6ED5623"
                                        }
                                    ]
                                },
                                {
                                    "title":"22.8 Reapplying DDL Statements Returned to V$LOGMNR_CONTENTS",
                                    "href":"oracle-logminer-utility.html#GUID-BA4A515F-D694-4A88-AA34-97DDD421EA39"
                                },
                                {
                                    "title":"22.9 Calling DBMS_LOGMNR.START_LOGMNR Multiple Times",
                                    "href":"oracle-logminer-utility.html#GUID-4959F073-BE00-4170-BFDC-4722D5770639"
                                },
                                {
                                    "title":"22.10 Supplemental Logging",
                                    "href":"oracle-logminer-utility.html#GUID-D857AF96-AC24-4CA1-B620-8EA3DF30D72E",
                                    "topics":[
                                        {
                                            "title":"22.10.1 Database-Level Supplemental Logging",
                                            "href":"oracle-logminer-utility.html#GUID-D2DDD67C-E1CC-45A6-A2A7-198E4C142FA3",
                                            "topics":[
                                                {
                                                    "title":"22.10.1.1 Minimal Supplemental Logging",
                                                    "href":"oracle-logminer-utility.html#GUID-82A335B2-9F8F-4A95-A314-2EECDB0B3D2D"
                                                },
                                                {
                                                    "title":"22.10.1.2 Database-Level Identification Key Logging",
                                                    "href":"oracle-logminer-utility.html#GUID-E3E015C4-B0EB-4072-92A6-FD3079C68242"
                                                },
                                                {
                                                    "title":"22.10.1.3 Procedural Supplemental Logging",
                                                    "href":"oracle-logminer-utility.html#GUID-E6C98352-7048-45BF-9487-F33BC665F7D3"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"22.10.2 Disabling Database-Level Supplemental Logging",
                                            "href":"oracle-logminer-utility.html#GUID-64EB9DC1-CC04-40E4-B5ED-4568D4D7C473"
                                        },
                                        {
                                            "title":"22.10.3 Table-Level Supplemental Logging",
                                            "href":"oracle-logminer-utility.html#GUID-BCECDF33-10A7-4939-905E-A7C3A3FFA23F",
                                            "topics":[
                                                {
                                                    "title":"22.10.3.1 Table-Level Identification Key Logging",
                                                    "href":"oracle-logminer-utility.html#GUID-080102D4-B514-40FA-80F7-8461E819F5FE"
                                                },
                                                {
                                                    "title":"22.10.3.2 Table-Level User-Defined Supplemental Log Groups",
                                                    "href":"oracle-logminer-utility.html#GUID-34912450-76D3-4A9C-9EBF-098F220192FD"
                                                },
                                                {
                                                    "title":"22.10.3.3 Usage Notes for User-Defined Supplemental Log Groups",
                                                    "href":"oracle-logminer-utility.html#GUID-C7FA40DF-EA93-40AA-BDE9-614CD96FE197"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"22.10.4 Tracking DDL Statements in the LogMiner Dictionary",
                                            "href":"oracle-logminer-utility.html#GUID-56743517-A0C0-4CCD-9D20-2883AFB5683B"
                                        },
                                        {
                                            "title":"22.10.5 DDL_DICT_TRACKING and Supplemental Logging Settings",
                                            "href":"oracle-logminer-utility.html#GUID-815049EB-F41B-4EB9-97DC-913F40D43EC2"
                                        },
                                        {
                                            "title":"22.10.6 DDL_DICT_TRACKING and Specified Time or SCN Ranges",
                                            "href":"oracle-logminer-utility.html#GUID-AADE2750-DBE9-4E2F-81F1-BE32EFF2A023"
                                        }
                                    ]
                                },
                                {
                                    "title":"22.11 Accessing LogMiner Operational Information in Views",
                                    "href":"oracle-logminer-utility.html#GUID-B3C964E4-F33E-48C0-951F-86AF3778DE39",
                                    "topics":[
                                        {
                                            "title":"22.11.1 Querying V$LOGMNR_LOGS",
                                            "href":"oracle-logminer-utility.html#GUID-A4779AA3-EE5B-43CA-A64A-0A6B8CFC5D4F"
                                        },
                                        {
                                            "title":"22.11.2 Querying Views for Supplemental Logging Settings",
                                            "href":"oracle-logminer-utility.html#GUID-48D9DB83-BBC0-45EE-A81E-7CD047C908C1"
                                        }
                                    ]
                                },
                                {
                                    "title":"22.12 Steps in a Typical LogMiner Session",
                                    "href":"oracle-logminer-utility.html#GUID-6609EBA2-B2D7-4EAE-8344-A1F6C0A24760",
                                    "topics":[
                                        {
                                            "title":"22.12.1 Typical LogMiner Session Task 1: Enable Supplemental Logging",
                                            "href":"oracle-logminer-utility.html#GUID-F621A15A-0A29-4261-9C23-F95139E5D79E"
                                        },
                                        {
                                            "title":"22.12.2 Typical LogMiner Session Task 2: Extract a LogMiner Dictionary",
                                            "href":"oracle-logminer-utility.html#GUID-8D74F78A-E7D1-48E6-8E65-5E8CC55F0757"
                                        },
                                        {
                                            "title":"22.12.3 Typical LogMiner Session Task 3: Specify Redo Log Files for Analysis",
                                            "href":"oracle-logminer-utility.html#GUID-CEB3F34A-633A-47D5-B568-F65746D02D02"
                                        },
                                        {
                                            "title":"22.12.4 Typical LogMiner Session Task 4: Start LogMiner",
                                            "href":"oracle-logminer-utility.html#GUID-319446A8-6FEC-42CE-A6A4-582CA65377CF"
                                        },
                                        {
                                            "title":"22.12.5 Typical LogMiner Session Task 5: Query V$LOGMNR_CONTENTS",
                                            "href":"oracle-logminer-utility.html#GUID-CDB10F63-EC7C-4ADB-8022-0A0EA45268E6"
                                        },
                                        {
                                            "title":"22.12.6 Typical LogMiner Session Task 6: End the LogMiner Session",
                                            "href":"oracle-logminer-utility.html#GUID-F6E100FC-817C-486C-A60E-B6D372E46CD3"
                                        }
                                    ]
                                },
                                {
                                    "title":"22.13 Examples Using LogMiner",
                                    "href":"oracle-logminer-utility.html#GUID-40619B3B-8BDF-4D90-B924-5A0F8A631F98",
                                    "topics":[
                                        {
                                            "title":"22.13.1 Examples of Mining by Explicitly Specifying the Redo Log Files of Interest",
                                            "href":"oracle-logminer-utility.html#GUID-659D077D-CEB3-4B5A-AD70-EEA41D6A1C4C",
                                            "topics":[
                                                {
                                                    "title":"22.13.1.1 Example 1: Finding All Modifications in the Last Archived Redo Log File",
                                                    "href":"oracle-logminer-utility.html#GUID-E3820793-B482-48C4-9F44-C0D7A062E318"
                                                },
                                                {
                                                    "title":"22.13.1.2 Example 2: Grouping DML Statements into Committed Transactions",
                                                    "href":"oracle-logminer-utility.html#GUID-9CCAC3BD-EF59-4370-BAA8-5451082577A0"
                                                },
                                                {
                                                    "title":"22.13.1.3 Example 3: Formatting the Reconstructed SQL",
                                                    "href":"oracle-logminer-utility.html#GUID-E42A8D99-F93F-40F4-9E86-787CA179692A"
                                                },
                                                {
                                                    "title":"22.13.1.4 Example 4: Using the LogMiner Dictionary in the Redo Log Files",
                                                    "href":"oracle-logminer-utility.html#GUID-90944343-46BB-4BD5-A0C6-7A4B79D9BEF0"
                                                },
                                                {
                                                    "title":"22.13.1.5 Example 5: Tracking DDL Statements in the Internal Dictionary",
                                                    "href":"oracle-logminer-utility.html#GUID-E0DDC97C-7364-4BED-AF2A-E0B486F0E22F"
                                                },
                                                {
                                                    "title":"22.13.1.6 Example 6: Filtering Output by Time Range",
                                                    "href":"oracle-logminer-utility.html#GUID-6BE36A8B-0078-4EB1-9D57-80E51A2DFB09"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"22.13.2 Examples of Mining Without Specifying the List of Redo Log Files Explicitly",
                                            "href":"oracle-logminer-utility.html#GUID-BAB7801D-BB5E-49D8-BC5A-0C08E5F3C2B4",
                                            "topics":[
                                                {
                                                    "title":"22.13.2.1 Example 1: Mining Redo Log Files in a Given Time Range",
                                                    "href":"oracle-logminer-utility.html#GUID-F35C6876-5AE0-4229-891D-47B1C3759A11"
                                                },
                                                {
                                                    "title":"22.13.2.2 Example 2: Mining the Redo Log Files in a Given SCN Range",
                                                    "href":"oracle-logminer-utility.html#GUID-97F5B369-A905-4BCF-AA7F-E9F932D3D14A"
                                                },
                                                {
                                                    "title":"22.13.2.3 Example 3: Using Continuous Mining to Include Future Values in a Query",
                                                    "href":"oracle-logminer-utility.html#GUID-7ADC1F9A-953D-4FEC-A7AB-CE3C70B77D7B"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"22.13.3 Example Scenarios",
                                            "href":"oracle-logminer-utility.html#GUID-143798E2-B0E0-4E9D-A70C-08593A117027",
                                            "topics":[
                                                {
                                                    "title":"22.13.3.1 Scenario 1: Using LogMiner to Track Changes Made by a Specific User",
                                                    "href":"oracle-logminer-utility.html#GUID-E0333B57-A26D-4E00-9E8E-5D21035C73B4"
                                                },
                                                {
                                                    "title":"22.13.3.2 Scenario 2: Using LogMiner to Calculate Table Access Statistics",
                                                    "href":"oracle-logminer-utility.html#GUID-C17BC82E-A71D-4814-938A-DD35FA9239C3"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"22.14 Supported Data Types, Storage Attributes, and Database and Redo Log File Versions",
                                    "href":"oracle-logminer-utility.html#GUID-D11CC6EF-D94C-426F-B244-96CE2403924A",
                                    "topics":[
                                        {
                                            "title":"22.14.1 Supported Data Types and Table Storage Attributes",
                                            "href":"oracle-logminer-utility.html#GUID-BA995486-041E-4C83-83EA-D7BC2A866DE3",
                                            "topics":[
                                                {
                                                    "title":"22.14.1.1 Compatibility Requirements",
                                                    "href":"oracle-logminer-utility.html#GUID-8811DF7C-6A84-4DA7-9639-F9509289FA2F"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"22.14.2 Unsupported Data Types and Table Storage Attributes",
                                            "href":"oracle-logminer-utility.html#GUID-8A4F98EC-C233-4471-BFF9-9FB35EF5AD0D"
                                        },
                                        {
                                            "title":"22.14.3 Supported Databases and Redo Log File Versions",
                                            "href":"oracle-logminer-utility.html#GUID-0BC1D343-0577-4DC4-9DBA-083194560D13"
                                        },
                                        {
                                            "title":"22.14.4 SecureFiles LOB Considerations",
                                            "href":"oracle-logminer-utility.html#GUID-7255A2C3-59E6-41FE-B2E1-D0CD4A3CEAD5"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"23 Using the Metadata APIs",
                            "href":"using-oracle-dbms_metadata-api.html#GUID-D9B1300F-B21D-416E-8B9B-C542195EF249",
                            "topics":[
                                {
                                    "title":"23.1 Why Use the DBMS_METADATA API?",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-EFF19735-0C94-46CD-B1CB-123FEB390B43"
                                },
                                {
                                    "title":"23.2 Overview of the DBMS_METADATA API",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-FF65F378-97BB-459A-A9C2-E0B105205D3D"
                                },
                                {
                                    "title":"23.3 Using the DBMS_METADATA API to Retrieve an Object's Metadata",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-EE2AA635-EA83-4265-9727-E9C659842CEF",
                                    "topics":[
                                        {
                                            "title":"23.3.1 Typical Steps Used for Basic Metadata Retrieval",
                                            "href":"using-oracle-dbms_metadata-api.html#GUID-FBCB0C17-4B6A-4BC9-9F01-86015FA0F1C3"
                                        },
                                        {
                                            "title":"23.3.2 Retrieving Multiple Objects",
                                            "href":"using-oracle-dbms_metadata-api.html#GUID-68EB7622-137B-46CC-AE50-75972582092E"
                                        },
                                        {
                                            "title":"23.3.3 Placing Conditions on Transforms",
                                            "href":"using-oracle-dbms_metadata-api.html#GUID-27965831-A88D-4723-8402-F31DC9839B71"
                                        },
                                        {
                                            "title":"23.3.4 Accessing Specific Metadata Attributes",
                                            "href":"using-oracle-dbms_metadata-api.html#GUID-BB45CA8D-2621-419B-906C-1E811499786A"
                                        }
                                    ]
                                },
                                {
                                    "title":"23.4 Using the DBMS_METADATA API to Re-Create a Retrieved Object",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-1DA999FD-1AFD-4D8D-A6D0-8EEB84E0D9E4"
                                },
                                {
                                    "title":"23.5 Using the DBMS_METADATA API to Retrieve Collections of Different Object Types",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-85AC0B9A-5C6E-4D2A-A3CA-30F5F7884048",
                                    "topics":[
                                        {
                                            "title":"23.5.1 Filtering the Return of Heterogeneous Object Types",
                                            "href":"using-oracle-dbms_metadata-api.html#GUID-E0EEE23F-EDED-40D2-BAE7-A1F5FF951589"
                                        }
                                    ]
                                },
                                {
                                    "title":"23.6 Using the DBMS_METADATA_DIFF API to Compare Object Metadata",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-E9A778A7-2E9D-4240-8707-A52FF65556FE"
                                },
                                {
                                    "title":"23.7 Performance Tips for the Programmatic Interface of the DBMS_METADATA API",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-DF431094-5F1D-478D-87E6-04CC774B761F"
                                },
                                {
                                    "title":"23.8 Example Usage of the DBMS_METADATA API",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-89237236-4729-4E33-842D-D124A3C15B10",
                                    "topics":[
                                        {
                                            "title":"23.8.1 What Does the DBMS_METADATA Example Do?",
                                            "href":"using-oracle-dbms_metadata-api.html#GUID-7EE1E557-F95C-4C01-946E-5A9B4B6E41E7"
                                        },
                                        {
                                            "title":"23.8.2 Output Generated from the GET_PAYROLL_TABLES Procedure",
                                            "href":"using-oracle-dbms_metadata-api.html#GUID-D807A5A4-4809-4424-AA53-68081627A308"
                                        }
                                    ]
                                },
                                {
                                    "title":"23.9 Summary of DBMS_METADATA Procedures",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-B19C59EB-A9BC-4D1E-BD8C-135583D403CD"
                                },
                                {
                                    "title":"23.10 Summary of DBMS_METADATA_DIFF Procedures",
                                    "href":"using-oracle-dbms_metadata-api.html#GUID-CB5F314F-7412-40F1-B71C-8F6DFB45A4D8"
                                }
                            ]
                        },
                        {
                            "title":"24 Original Export",
                            "href":"oracle-original-export-utility.html#GUID-901CBBE0-65FB-439E-942D-F2038C18BCD2",
                            "topics":[
                                {
                                    "title":"24.1 What is the Export Utility?",
                                    "href":"oracle-original-export-utility.html#GUID-2D67C08E-C080-4F6E-9274-A34CA6C0505E"
                                },
                                {
                                    "title":"24.2 Before Using Export",
                                    "href":"oracle-original-export-utility.html#GUID-BAC9BB5C-4AA1-407F-9809-FE4FDAC5EE94",
                                    "topics":[
                                        {
                                            "title":"24.2.1 Running catexp.sql or catalog.sql",
                                            "href":"oracle-original-export-utility.html#GUID-6AFFD00F-A9A5-4D0C-9DD0-A739A6DBA8A7"
                                        },
                                        {
                                            "title":"24.2.2 Ensuring Sufficient Disk Space for Export Operations",
                                            "href":"oracle-original-export-utility.html#GUID-59391A84-26BD-4D5C-B086-79B0CB80765A"
                                        },
                                        {
                                            "title":"24.2.3 Verifying Access Privileges for Export and Import Operations",
                                            "href":"oracle-original-export-utility.html#GUID-49F55695-6310-45A1-B6AF-BD6CE7C6CF42"
                                        }
                                    ]
                                },
                                {
                                    "title":"24.3 Invoking Export",
                                    "href":"oracle-original-export-utility.html#GUID-4996D926-F24B-4396-84AB-51F146D39824",
                                    "topics":[
                                        {
                                            "title":"24.3.1 Invoking Export as SYSDBA",
                                            "href":"oracle-original-export-utility.html#GUID-E26A7412-C5EE-4A96-9135-617A1D9D9AB3"
                                        },
                                        {
                                            "title":"24.3.2 Command-Line Entries",
                                            "href":"oracle-original-export-utility.html#GUID-F5441B1D-8CE5-4837-9291-B8701E6676A4"
                                        },
                                        {
                                            "title":"24.3.3 Parameter Files",
                                            "href":"oracle-original-export-utility.html#GUID-8DC1DEF0-13D8-44F7-A5E1-373642DE2C4B"
                                        },
                                        {
                                            "title":"24.3.4 Interactive Mode",
                                            "href":"oracle-original-export-utility.html#GUID-3C9BB031-D61C-40EB-8CAE-6DC85042D8FC",
                                            "topics":[
                                                {
                                                    "title":"24.3.4.1 Restrictions When Using Export's Interactive Method",
                                                    "href":"oracle-original-export-utility.html#GUID-48937832-CD44-4C3D-B1EF-D5A67A024CFF"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"24.3.5 Getting Online Help",
                                            "href":"oracle-original-export-utility.html#GUID-71CF22FE-C38D-4D3D-8FC3-B953A2062984"
                                        }
                                    ]
                                },
                                {
                                    "title":"24.4 Export Modes",
                                    "href":"oracle-original-export-utility.html#GUID-CE9D0A37-EDED-40E1-8325-7B4229A4552B",
                                    "topics":[
                                        {
                                            "title":"24.4.1 Table-Level and Partition-Level Export",
                                            "href":"oracle-original-export-utility.html#GUID-E5D4E879-EF51-41F6-894D-ECD5EC294DBA",
                                            "topics":[
                                                {
                                                    "title":"24.4.1.1 Table-Level Export",
                                                    "href":"oracle-original-export-utility.html#GUID-B0172612-DEB7-41B2-AAA9-2B8AA45FB580"
                                                },
                                                {
                                                    "title":"24.4.1.2 Partition-Level Export",
                                                    "href":"oracle-original-export-utility.html#GUID-60452C1F-ED7C-4169-ADF0-741D2424EFB0"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"24.5 Export Parameters",
                                    "href":"oracle-original-export-utility.html#GUID-125385E7-A32B-4B52-B1E3-3E3878E0C7B3",
                                    "topics":[
                                        {
                                            "title":"24.5.1 BUFFER",
                                            "href":"oracle-original-export-utility.html#GUID-0ADF8770-F909-410D-910F-507A0A1F1D4A",
                                            "topics":[
                                                {
                                                    "title":"24.5.1.1 Example: Calculating Buffer Size",
                                                    "href":"oracle-original-export-utility.html#GUID-E9A79C2D-303E-40BA-A162-BBEBD902A0F9"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"24.5.2 COMPRESS",
                                            "href":"oracle-original-export-utility.html#GUID-37B64353-A142-4978-852E-05020758E247"
                                        },
                                        {
                                            "title":"24.5.3 CONSISTENT",
                                            "href":"oracle-original-export-utility.html#GUID-74FB1C84-D8A2-40B7-B920-597B4D546F39"
                                        },
                                        {
                                            "title":"24.5.4 CONSTRAINTS",
                                            "href":"oracle-original-export-utility.html#GUID-8AA65CC7-6728-4C2D-8DD8-C45BCA93529E"
                                        },
                                        {
                                            "title":"24.5.5 DIRECT",
                                            "href":"oracle-original-export-utility.html#GUID-568F98CF-21C2-4E12-A27B-88E771E4988A"
                                        },
                                        {
                                            "title":"24.5.6 FEEDBACK",
                                            "href":"oracle-original-export-utility.html#GUID-8F5F51A8-9C51-4CC9-8646-142B0C72A86B"
                                        },
                                        {
                                            "title":"24.5.7 FILE",
                                            "href":"oracle-original-export-utility.html#GUID-0FACAACB-5B1D-4249-BE03-35EFD59FC5E1"
                                        },
                                        {
                                            "title":"24.5.8 FILESIZE",
                                            "href":"oracle-original-export-utility.html#GUID-D12380E1-F2BF-4471-9AEF-911BED8871F5"
                                        },
                                        {
                                            "title":"24.5.9 FLASHBACK_SCN",
                                            "href":"oracle-original-export-utility.html#GUID-B5B5FAA8-4E07-4818-9798-9913869D907F"
                                        },
                                        {
                                            "title":"24.5.10 FLASHBACK_TIME",
                                            "href":"oracle-original-export-utility.html#GUID-168AD92D-F31C-43AF-A7A8-DE74732988C5"
                                        },
                                        {
                                            "title":"24.5.11 FULL",
                                            "href":"oracle-original-export-utility.html#GUID-31DBBBB5-228E-4B2C-983E-2F6E7303C411",
                                            "topics":[
                                                {
                                                    "title":"24.5.11.1 Points to Consider for Full Database Exports and Imports",
                                                    "href":"oracle-original-export-utility.html#GUID-B6D3539B-36E3-4D33-8B88-AE95DCFBC5B9"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"24.5.12 GRANTS",
                                            "href":"oracle-original-export-utility.html#GUID-2AF64792-A69E-4F37-ADE0-99726039EA3F"
                                        },
                                        {
                                            "title":"24.5.13 HELP",
                                            "href":"oracle-original-export-utility.html#GUID-5CFE6A84-5775-47CD-81E5-FBE64DEC8F0D"
                                        },
                                        {
                                            "title":"24.5.14 INDEXES",
                                            "href":"oracle-original-export-utility.html#GUID-F2D318AC-7C3A-4951-8356-0C64EB841F91"
                                        },
                                        {
                                            "title":"24.5.15 LOG",
                                            "href":"oracle-original-export-utility.html#GUID-0FDE4A82-6EC5-4874-8CA1-A2153A5BDD28"
                                        },
                                        {
                                            "title":"24.5.16 OBJECT_CONSISTENT",
                                            "href":"oracle-original-export-utility.html#GUID-17E23AFD-DE17-443E-B6C3-4B2C80A74B27"
                                        },
                                        {
                                            "title":"24.5.17 OWNER",
                                            "href":"oracle-original-export-utility.html#GUID-5820B9FE-BD28-49D6-AF9B-BBC0458B490D"
                                        },
                                        {
                                            "title":"24.5.18 PARFILE",
                                            "href":"oracle-original-export-utility.html#GUID-E2ADE81F-E6DC-4495-B655-18D02449571C"
                                        },
                                        {
                                            "title":"24.5.19 QUERY",
                                            "href":"oracle-original-export-utility.html#GUID-D62D8C35-7E1A-439E-B50B-34B78E81A946",
                                            "topics":[
                                                {
                                                    "title":"24.5.19.1 Restrictions When Using the QUERY Parameter",
                                                    "href":"oracle-original-export-utility.html#GUID-760DB2F1-5494-42ED-B9AF-3AB147D7B291"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"24.5.20 RECORDLENGTH",
                                            "href":"oracle-original-export-utility.html#GUID-CC0271E1-20B2-445C-98E9-6088BEA5D761"
                                        },
                                        {
                                            "title":"24.5.21 RESUMABLE",
                                            "href":"oracle-original-export-utility.html#GUID-7B41C07A-C8C8-485A-959E-854E59D4A358"
                                        },
                                        {
                                            "title":"24.5.22 RESUMABLE_NAME",
                                            "href":"oracle-original-export-utility.html#GUID-F4560141-E8D8-4A5E-81CD-0D2CA62D8596"
                                        },
                                        {
                                            "title":"24.5.23 RESUMABLE_TIMEOUT",
                                            "href":"oracle-original-export-utility.html#GUID-E0A63ADD-A446-400A-8277-7567BD2BC279"
                                        },
                                        {
                                            "title":"24.5.24 ROWS",
                                            "href":"oracle-original-export-utility.html#GUID-6DA6357B-B674-440B-AE5F-7E07643B590A"
                                        },
                                        {
                                            "title":"24.5.25 STATISTICS",
                                            "href":"oracle-original-export-utility.html#GUID-994C9E75-FFAE-424D-B575-61BBEF22B92B"
                                        },
                                        {
                                            "title":"24.5.26 TABLES",
                                            "href":"oracle-original-export-utility.html#GUID-8006E145-8F7D-4092-B82B-1AEA73FB0CDD",
                                            "topics":[
                                                {
                                                    "title":"24.5.26.1 Table Name Restrictions",
                                                    "href":"oracle-original-export-utility.html#GUID-78CFBB4A-411A-4C13-B0CA-CE54F836EF65"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"24.5.27 TABLESPACES",
                                            "href":"oracle-original-export-utility.html#GUID-7AE7C2DC-DB0D-4C29-AFE2-BB8A4DC22E6B"
                                        },
                                        {
                                            "title":"24.5.28 TRANSPORT_TABLESPACE",
                                            "href":"oracle-original-export-utility.html#GUID-7EE23DEA-2094-4AB8-98C3-6B67B9CEF301"
                                        },
                                        {
                                            "title":"24.5.29 TRIGGERS",
                                            "href":"oracle-original-export-utility.html#GUID-9B849624-863A-49C6-AD10-5422EC388DA9"
                                        },
                                        {
                                            "title":"24.5.30 TTS_FULL_CHECK",
                                            "href":"oracle-original-export-utility.html#GUID-C8CB98AA-91FF-4C0A-B5D9-B1F469992595"
                                        },
                                        {
                                            "title":"24.5.31 USERID (username/password)",
                                            "href":"oracle-original-export-utility.html#GUID-5DDB38EC-7E61-4228-9673-C029201C9953"
                                        },
                                        {
                                            "title":"24.5.32 VOLSIZE",
                                            "href":"oracle-original-export-utility.html#GUID-CF23831E-5D9A-4400-9469-AD8DD6E0C22E"
                                        }
                                    ]
                                },
                                {
                                    "title":"24.6 Example Export Sessions",
                                    "href":"oracle-original-export-utility.html#GUID-C8C33AB1-9663-4BD3-9168-A44F17DE0879",
                                    "topics":[
                                        {
                                            "title":"24.6.1 Example Export Session in Full Database Mode",
                                            "href":"oracle-original-export-utility.html#GUID-87D24326-1156-40B8-B827-B3D0585DBF61"
                                        },
                                        {
                                            "title":"24.6.2 Example Export Session in User Mode",
                                            "href":"oracle-original-export-utility.html#GUID-E77B02EC-F68C-42E1-8BD5-84F5915D33BE"
                                        },
                                        {
                                            "title":"24.6.3 Example Export Sessions in Table Mode",
                                            "href":"oracle-original-export-utility.html#GUID-E6B06B4C-5DAE-49EF-A8FA-94A0741281E2",
                                            "topics":[
                                                {
                                                    "title":"24.6.3.1 Example 1: DBA Exporting Tables for Two Users",
                                                    "href":"oracle-original-export-utility.html#GUID-13B16D7D-89E4-4FE7-8662-084928FCA428"
                                                },
                                                {
                                                    "title":"24.6.3.2 Example 2: User Exports Tables That He Owns",
                                                    "href":"oracle-original-export-utility.html#GUID-BCC96972-561E-4C45-B696-6834FB27B31D"
                                                },
                                                {
                                                    "title":"24.6.3.3 Example 3: Using Pattern Matching to Export Various Tables",
                                                    "href":"oracle-original-export-utility.html#GUID-8F829025-3683-4C66-9AA2-84CF87A223CE"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"24.6.4 Example Export Session Using Partition-Level Export",
                                            "href":"oracle-original-export-utility.html#GUID-EAC5FF13-E1C2-4B8F-9913-35F8369A3BA8",
                                            "topics":[
                                                {
                                                    "title":"24.6.4.1 Example 1: Exporting a Table Without Specifying a Partition",
                                                    "href":"oracle-original-export-utility.html#GUID-5C869CCD-2F5D-49C4-9051-7B3EC167CA8C"
                                                },
                                                {
                                                    "title":"24.6.4.2 Example 2: Exporting a Table with a Specified Partition",
                                                    "href":"oracle-original-export-utility.html#GUID-F356C9FA-9376-4880-9452-328344D2FC79"
                                                },
                                                {
                                                    "title":"24.6.4.3 Example 3: Exporting a Composite Partition",
                                                    "href":"oracle-original-export-utility.html#GUID-5A1A679E-D63A-4756-AC00-6F959110574A"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"24.7 Warning, Error, and Completion Messages",
                                    "href":"oracle-original-export-utility.html#GUID-5C13AD81-8C29-48B0-94CD-A2A5F9C294C6",
                                    "topics":[
                                        {
                                            "title":"24.7.1 Log File",
                                            "href":"oracle-original-export-utility.html#GUID-0A7210F8-7236-4B80-8CA4-BFB7EB26A011"
                                        },
                                        {
                                            "title":"24.7.2 Warning Messages",
                                            "href":"oracle-original-export-utility.html#GUID-88DE0435-D49D-4F54-AB9D-B3495D60E3B8"
                                        },
                                        {
                                            "title":"24.7.3 Nonrecoverable Error Messages",
                                            "href":"oracle-original-export-utility.html#GUID-85639807-12CA-4AE4-BE92-84F0693D73CA"
                                        },
                                        {
                                            "title":"24.7.4 Completion Messages",
                                            "href":"oracle-original-export-utility.html#GUID-10537EA3-CC5C-4135-9FEC-067591D63415"
                                        }
                                    ]
                                },
                                {
                                    "title":"24.8 Exit Codes for Inspection and Display",
                                    "href":"oracle-original-export-utility.html#GUID-5CA082CE-6D43-4AC9-8EC2-1CB42A35180B"
                                },
                                {
                                    "title":"24.9 Conventional Path Export Versus Direct Path Export",
                                    "href":"oracle-original-export-utility.html#GUID-42ECA6C5-DC6D-4A7B-AAAA-C134B0CBC8D3"
                                },
                                {
                                    "title":"24.10 Invoking a Direct Path Export",
                                    "href":"oracle-original-export-utility.html#GUID-A9907F27-67D6-4E81-9F08-031A6B7A7C8A",
                                    "topics":[
                                        {
                                            "title":"24.10.1 Security Considerations for Direct Path Exports",
                                            "href":"oracle-original-export-utility.html#GUID-A3AAF078-2769-4179-901D-F8DBCF8AF205"
                                        },
                                        {
                                            "title":"24.10.2 Performance Considerations for Direct Path Exports",
                                            "href":"oracle-original-export-utility.html#GUID-8E4FFC9E-2542-456D-9286-D199278A5F04"
                                        },
                                        {
                                            "title":"24.10.3 Restrictions for Direct Path Exports",
                                            "href":"oracle-original-export-utility.html#GUID-73F441BB-BB93-4593-B935-82782462ED60"
                                        }
                                    ]
                                },
                                {
                                    "title":"24.11 Network Considerations",
                                    "href":"oracle-original-export-utility.html#GUID-1EAD5074-652B-46AB-9F4B-B9902E3F2BDE",
                                    "topics":[
                                        {
                                            "title":"24.11.1 Transporting Export Files Across a Network",
                                            "href":"oracle-original-export-utility.html#GUID-C109E486-B15C-4F68-A23E-E68CFC6E311D"
                                        },
                                        {
                                            "title":"24.11.2 Exporting with Oracle Net",
                                            "href":"oracle-original-export-utility.html#GUID-05995F14-61FA-4D12-8AA0-8EB3EC0A9443"
                                        }
                                    ]
                                },
                                {
                                    "title":"24.12 Character Set and Globalization Support Considerations",
                                    "href":"oracle-original-export-utility.html#GUID-94B14B3C-BA2A-4D21-9494-B6BADCF74BD9",
                                    "topics":[
                                        {
                                            "title":"24.12.1 User Data",
                                            "href":"oracle-original-export-utility.html#GUID-FBDDB88B-4018-4E38-B601-210D16A59081",
                                            "topics":[
                                                {
                                                    "title":"24.12.1.1 Effect of Character Set Sorting Order on Conversions",
                                                    "href":"oracle-original-export-utility.html#GUID-1C5A9327-9AB7-4032-9292-C9937E0F3178"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"24.12.2 Data Definition Language (DDL)",
                                            "href":"oracle-original-export-utility.html#GUID-9336B926-6975-48C0-8E77-F332D5BE5858"
                                        },
                                        {
                                            "title":"24.12.3 Single-Byte Character Sets and Export and Import",
                                            "href":"oracle-original-export-utility.html#GUID-81591872-0D77-4545-A2C3-D8A6224789F2"
                                        },
                                        {
                                            "title":"24.12.4 Multibyte Character Sets and Export and Import",
                                            "href":"oracle-original-export-utility.html#GUID-C12C6610-F283-4207-8D4E-0FCFF13F204F"
                                        }
                                    ]
                                },
                                {
                                    "title":"24.13 Using Instance Affinity with Export and Import",
                                    "href":"oracle-original-export-utility.html#GUID-8796068D-2679-4EC1-840D-E839D8125839"
                                },
                                {
                                    "title":"24.14 Considerations When Exporting Database Objects",
                                    "href":"oracle-original-export-utility.html#GUID-1AD496E9-9CA3-456C-BFF2-3E9098370D70",
                                    "topics":[
                                        {
                                            "title":"24.14.1 Exporting Sequences",
                                            "href":"oracle-original-export-utility.html#GUID-24B83711-389B-4D47-B0E8-F3BEED88DCBC"
                                        },
                                        {
                                            "title":"24.14.2 Exporting LONG and LOB Data Types",
                                            "href":"oracle-original-export-utility.html#GUID-5C2982AE-8BBA-4CBF-BF1F-7D56B96DCC3F"
                                        },
                                        {
                                            "title":"24.14.3 Exporting Foreign Function Libraries",
                                            "href":"oracle-original-export-utility.html#GUID-D85BABF8-9F2E-4A29-9081-DD8A752497CC"
                                        },
                                        {
                                            "title":"24.14.4 Exporting Offline Locally Managed Tablespaces",
                                            "href":"oracle-original-export-utility.html#GUID-17D6E9E7-2FC8-4AC4-BFDD-57C0BE512AB2"
                                        },
                                        {
                                            "title":"24.14.5 Exporting Directory Aliases",
                                            "href":"oracle-original-export-utility.html#GUID-75F44A4C-33D5-4458-AF1E-B5ABE4A9E6B5"
                                        },
                                        {
                                            "title":"24.14.6 Exporting BFILE Columns and Attributes",
                                            "href":"oracle-original-export-utility.html#GUID-DD0F0FD5-4C6D-430F-8120-55042B2CB5EC"
                                        },
                                        {
                                            "title":"24.14.7 Exporting External Tables",
                                            "href":"oracle-original-export-utility.html#GUID-454C470A-C2BA-4AE9-B1A5-474822C1322E"
                                        },
                                        {
                                            "title":"24.14.8 Exporting Object Type Definitions",
                                            "href":"oracle-original-export-utility.html#GUID-6F80A74D-B1BD-4B36-B891-C8B5BFDEF25E"
                                        },
                                        {
                                            "title":"24.14.9 Exporting Nested Tables",
                                            "href":"oracle-original-export-utility.html#GUID-E6827001-B306-4608-9175-9AC10CD249C9"
                                        },
                                        {
                                            "title":"24.14.10 Exporting Advanced Queue (AQ) Tables",
                                            "href":"oracle-original-export-utility.html#GUID-6485D385-AC68-410B-9F5B-F298E56A3C7D"
                                        },
                                        {
                                            "title":"24.14.11 Exporting Synonyms",
                                            "href":"oracle-original-export-utility.html#GUID-B24F2342-13F2-4752-96E5-64573F3C9EDD"
                                        },
                                        {
                                            "title":"24.14.12 Possible Export Errors Related to Java Synonyms",
                                            "href":"oracle-original-export-utility.html#GUID-564EDF80-E928-4FD2-A275-C3B92D42C5B8"
                                        },
                                        {
                                            "title":"24.14.13 Support for Fine-Grained Access Control",
                                            "href":"oracle-original-export-utility.html#GUID-CE2294F3-A10B-4779-ADB8-470ADE9325BD"
                                        }
                                    ]
                                },
                                {
                                    "title":"24.15 Transportable Tablespaces",
                                    "href":"oracle-original-export-utility.html#GUID-CCEC4122-D956-43C9-8EC4-9FF424E7F0F6"
                                },
                                {
                                    "title":"24.16 Exporting From a Read-Only Database",
                                    "href":"oracle-original-export-utility.html#GUID-053759B5-C97C-4CC4-AFA9-352EEBE41C93"
                                },
                                {
                                    "title":"24.17 Using Export and Import to Partition a Database Migration",
                                    "href":"oracle-original-export-utility.html#GUID-6EF3059B-74C1-4527-94C4-569DC609CC86",
                                    "topics":[
                                        {
                                            "title":"24.17.1 Advantages of Partitioning a Migration",
                                            "href":"oracle-original-export-utility.html#GUID-1BCBF6F4-D707-4E11-AF07-AA6AD92192AC"
                                        },
                                        {
                                            "title":"24.17.2 Disadvantages of Partitioning a Migration",
                                            "href":"oracle-original-export-utility.html#GUID-18AEF4DA-2E43-4E21-8F40-E7C09B4EEED6"
                                        },
                                        {
                                            "title":"24.17.3 How to Use Export and Import to Partition a Database Migration",
                                            "href":"oracle-original-export-utility.html#GUID-5AD10870-82B9-4EFD-8180-DF1537A22BDF"
                                        }
                                    ]
                                },
                                {
                                    "title":"24.18 Using Different Releases of Export and Import",
                                    "href":"oracle-original-export-utility.html#GUID-F8DEC519-5868-42C3-AD7A-7FA28F82983A",
                                    "topics":[
                                        {
                                            "title":"24.18.1 Restrictions When Using Different Releases of Export and Import",
                                            "href":"oracle-original-export-utility.html#GUID-7F8947D6-A8C3-404D-B750-C5D653051DB8"
                                        },
                                        {
                                            "title":"24.18.2 Examples of Using Different Releases of Export and Import",
                                            "href":"oracle-original-export-utility.html#GUID-F9A90966-B845-4392-8196-D2964B7BD7B9"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"25 Original Import",
                            "href":"oracle-original-import-utility.html#GUID-B21D5F0E-8C64-4601-9F16-25806677737B",
                            "topics":[
                                {
                                    "title":"25.1 What Is the Import Utility?",
                                    "href":"oracle-original-import-utility.html#GUID-4B93E50D-ACAE-48BB-8902-79AA42D3BFCC",
                                    "topics":[
                                        {
                                            "title":"25.1.1 Table Objects: Order of Import",
                                            "href":"oracle-original-import-utility.html#GUID-00A19F0D-07E4-4423-BFEE-311F513E6AEB"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.2 Before Using Import",
                                    "href":"oracle-original-import-utility.html#GUID-881DCCAC-39BE-4F8A-828F-CA4D3BF89FA2",
                                    "topics":[
                                        {
                                            "title":"25.2.1 Running catexp.sql or catalog.sql",
                                            "href":"oracle-original-import-utility.html#GUID-E9E8AE5C-5472-487C-8C79-A2A228418040"
                                        },
                                        {
                                            "title":"25.2.2 Verifying Access Privileges for Import Operations",
                                            "href":"oracle-original-import-utility.html#GUID-46A053E0-6227-4DE9-8342-D10C00347D81",
                                            "topics":[
                                                {
                                                    "title":"25.2.2.1 Importing Objects Into Your Own Schema",
                                                    "href":"oracle-original-import-utility.html#GUID-21A444E7-4A05-4781-9CE0-DEEA570F775E"
                                                },
                                                {
                                                    "title":"25.2.2.2 Importing Grants",
                                                    "href":"oracle-original-import-utility.html#GUID-8F1EFE1B-0764-4490-81A4-13F891CC6B3B"
                                                },
                                                {
                                                    "title":"25.2.2.3 Importing Objects Into Other Schemas",
                                                    "href":"oracle-original-import-utility.html#GUID-02F86C08-FE6E-404F-ACE4-FDEDBC1AD6E0"
                                                },
                                                {
                                                    "title":"25.2.2.4 Importing System Objects",
                                                    "href":"oracle-original-import-utility.html#GUID-B14E7C9A-9D1B-451C-9826-1A5567149852"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"25.2.3 Processing Restrictions",
                                            "href":"oracle-original-import-utility.html#GUID-10669928-5EE5-46C9-A025-8AFD2BDC3C3B"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.3 Importing into Existing Tables",
                                    "href":"oracle-original-import-utility.html#GUID-5B021ED0-BBD7-413C-869A-6DF23BA45D7F",
                                    "topics":[
                                        {
                                            "title":"25.3.1 Manually Creating Tables Before Importing Data",
                                            "href":"oracle-original-import-utility.html#GUID-FE07133D-F5B2-4EE5-9022-5A7BB4FA533E"
                                        },
                                        {
                                            "title":"25.3.2 Disabling Referential Constraints",
                                            "href":"oracle-original-import-utility.html#GUID-E660E046-2C9C-4508-A544-F6C52D876A08"
                                        },
                                        {
                                            "title":"25.3.3 Manually Ordering the Import",
                                            "href":"oracle-original-import-utility.html#GUID-47D52BE2-72CD-47E7-B4EE-462F5AF4ABA0"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.4 Effect of Schema and Database Triggers on Import Operations",
                                    "href":"oracle-original-import-utility.html#GUID-B4E12380-C676-46E8-B7AB-D0107606DEB5"
                                },
                                {
                                    "title":"25.5 Invoking Import",
                                    "href":"oracle-original-import-utility.html#GUID-F3BED30E-D5AD-46F8-9277-B99FAFA5612B",
                                    "topics":[
                                        {
                                            "title":"25.5.1 Command-Line Entries",
                                            "href":"oracle-original-import-utility.html#GUID-507CDEA3-1244-4C0C-B4F4-92E838A3376F"
                                        },
                                        {
                                            "title":"25.5.2 Parameter Files",
                                            "href":"oracle-original-import-utility.html#GUID-7AA931C9-E1E9-4881-8625-DAE7C08C9602"
                                        },
                                        {
                                            "title":"25.5.3 Interactive Mode",
                                            "href":"oracle-original-import-utility.html#GUID-76755826-D0E4-4778-BB45-DFD643BA7FC4"
                                        },
                                        {
                                            "title":"25.5.4 Invoking Import As SYSDBA",
                                            "href":"oracle-original-import-utility.html#GUID-BE68251D-D53A-482E-82F2-94B300DB564E"
                                        },
                                        {
                                            "title":"25.5.5 Getting Online Help",
                                            "href":"oracle-original-import-utility.html#GUID-96976E65-9C96-499E-B08E-32B1B1DCE069"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.6 Import Modes",
                                    "href":"oracle-original-import-utility.html#GUID-83111A9F-A2FC-4DC0-83BB-EDA398BBD4E0"
                                },
                                {
                                    "title":"25.7 Import Parameters",
                                    "href":"oracle-original-import-utility.html#GUID-D3F9B4B1-F107-4499-B529-544D233811B5",
                                    "topics":[
                                        {
                                            "title":"25.7.1 BUFFER",
                                            "href":"oracle-original-import-utility.html#GUID-97BE3F69-2B49-43A5-B067-7BE07D4EE2AA"
                                        },
                                        {
                                            "title":"25.7.2 COMMIT",
                                            "href":"oracle-original-import-utility.html#GUID-69A98C43-4B90-4098-A3BC-8738242EB77F"
                                        },
                                        {
                                            "title":"25.7.3 COMPILE",
                                            "href":"oracle-original-import-utility.html#GUID-C85B9C19-B4D4-4877-B2EF-086C43A51C71"
                                        },
                                        {
                                            "title":"25.7.4 CONSTRAINTS",
                                            "href":"oracle-original-import-utility.html#GUID-32D7A59E-1906-473B-9717-883347799A57"
                                        },
                                        {
                                            "title":"25.7.5 DATA_ONLY",
                                            "href":"oracle-original-import-utility.html#GUID-051EC293-8325-4D7B-B400-6287CD1EFB6D"
                                        },
                                        {
                                            "title":"25.7.6 DATAFILES",
                                            "href":"oracle-original-import-utility.html#GUID-97F1266D-35BE-41DA-9D5E-F2D2B34ED068"
                                        },
                                        {
                                            "title":"25.7.7 DESTROY",
                                            "href":"oracle-original-import-utility.html#GUID-05DDFFC3-8830-41CE-8C82-2C0E3E6154C6"
                                        },
                                        {
                                            "title":"25.7.8 FEEDBACK",
                                            "href":"oracle-original-import-utility.html#GUID-34824563-701C-4880-92F8-40511B26BD6B"
                                        },
                                        {
                                            "title":"25.7.9 FILE",
                                            "href":"oracle-original-import-utility.html#GUID-5005AF28-D8E6-4C5E-8785-9EEFDD60EC24"
                                        },
                                        {
                                            "title":"25.7.10 FILESIZE",
                                            "href":"oracle-original-import-utility.html#GUID-C9E01899-8695-423F-96F3-B473FF4689AB"
                                        },
                                        {
                                            "title":"25.7.11 FROMUSER",
                                            "href":"oracle-original-import-utility.html#GUID-01F8E58D-760A-4E8C-A300-23B6AE651639"
                                        },
                                        {
                                            "title":"25.7.12 FULL",
                                            "href":"oracle-original-import-utility.html#GUID-E068FFF8-02DC-4184-BD58-D2CD025EC0B2",
                                            "topics":[
                                                {
                                                    "title":"25.7.12.1 Points to Consider for Full Database Exports and Imports",
                                                    "href":"oracle-original-import-utility.html#GUID-562CD828-7C21-4FAA-A080-27E76B961D36"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"25.7.13 GRANTS",
                                            "href":"oracle-original-import-utility.html#GUID-84B4F27D-EC34-456E-8163-11631B4A91B3"
                                        },
                                        {
                                            "title":"25.7.14 HELP",
                                            "href":"oracle-original-import-utility.html#GUID-E99E26B8-EC1D-4C05-9A1F-41A5501FF6D8"
                                        },
                                        {
                                            "title":"25.7.15 IGNORE",
                                            "href":"oracle-original-import-utility.html#GUID-7DAED9E7-8A99-4AD1-B66C-71847A596BB3"
                                        },
                                        {
                                            "title":"25.7.16 INDEXES",
                                            "href":"oracle-original-import-utility.html#GUID-DC9BBA88-3201-45BF-9F49-83BE6E3530F4"
                                        },
                                        {
                                            "title":"25.7.17 INDEXFILE",
                                            "href":"oracle-original-import-utility.html#GUID-78307E6C-5F03-4CAF-BB65-2DB49C84F1FC"
                                        },
                                        {
                                            "title":"25.7.18 LOG",
                                            "href":"oracle-original-import-utility.html#GUID-61AAB5EE-4085-4AE6-ACA9-4596757121B3"
                                        },
                                        {
                                            "title":"25.7.19 PARFILE",
                                            "href":"oracle-original-import-utility.html#GUID-BFBD8138-73E6-4AF8-893F-86164322E64A"
                                        },
                                        {
                                            "title":"25.7.20 RECORDLENGTH",
                                            "href":"oracle-original-import-utility.html#GUID-18B99EE3-53A2-4FB3-AB30-D3A38F62ABD6"
                                        },
                                        {
                                            "title":"25.7.21 RESUMABLE",
                                            "href":"oracle-original-import-utility.html#GUID-7EBFDA60-56DA-43E8-8A25-315AA56818B8"
                                        },
                                        {
                                            "title":"25.7.22 RESUMABLE_NAME",
                                            "href":"oracle-original-import-utility.html#GUID-14E24B76-8D6A-40E8-8E12-EB0E873D30FE"
                                        },
                                        {
                                            "title":"25.7.23 RESUMABLE_TIMEOUT",
                                            "href":"oracle-original-import-utility.html#GUID-D7A9A81E-AEA4-4EE7-A947-5693973378AC"
                                        },
                                        {
                                            "title":"25.7.24 ROWS",
                                            "href":"oracle-original-import-utility.html#GUID-4EBA274F-C6BE-46E3-B0F5-1B8254A9903B"
                                        },
                                        {
                                            "title":"25.7.25 SHOW",
                                            "href":"oracle-original-import-utility.html#GUID-85C63F86-9BD7-40BC-A801-D9E11B8ACA3B"
                                        },
                                        {
                                            "title":"25.7.26 SKIP_UNUSABLE_INDEXES",
                                            "href":"oracle-original-import-utility.html#GUID-B9F81819-54F3-4CC5-A4AF-D4B0D2D2B2AE"
                                        },
                                        {
                                            "title":"25.7.27 STATISTICS",
                                            "href":"oracle-original-import-utility.html#GUID-2080A6A8-FF38-4093-8E0B-88B005099599"
                                        },
                                        {
                                            "title":"25.7.28 STREAMS_CONFIGURATION",
                                            "href":"oracle-original-import-utility.html#GUID-9EA1E38D-F3BA-41DC-99D6-D5A1701E4EF0"
                                        },
                                        {
                                            "title":"25.7.29 STREAMS_INSTANTIATION",
                                            "href":"oracle-original-import-utility.html#GUID-156D932A-1459-4B5D-BFDA-35BA2D2C184A"
                                        },
                                        {
                                            "title":"25.7.30 TABLES",
                                            "href":"oracle-original-import-utility.html#GUID-68FEBB3D-02FA-4512-9A5C-4A968D033969",
                                            "topics":[
                                                {
                                                    "title":"25.7.30.1 Table Name Restrictions",
                                                    "href":"oracle-original-import-utility.html#GUID-3ED71B81-3537-4C0A-846D-D003CB46EB1A"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"25.7.31 TABLESPACES",
                                            "href":"oracle-original-import-utility.html#GUID-8DBAF591-97C3-4410-BCE9-05E6A088821D"
                                        },
                                        {
                                            "title":"25.7.32 TOID_NOVALIDATE",
                                            "href":"oracle-original-import-utility.html#GUID-3CC64F1D-8CDE-4FBC-AD3A-D3D5F97944E5"
                                        },
                                        {
                                            "title":"25.7.33 TOUSER",
                                            "href":"oracle-original-import-utility.html#GUID-98BA8BD2-DBA4-4201-B93B-4AC0AE91A107"
                                        },
                                        {
                                            "title":"25.7.34 TRANSPORT_TABLESPACE",
                                            "href":"oracle-original-import-utility.html#GUID-E9B8A076-94B5-48BC-9771-13DBBA189496"
                                        },
                                        {
                                            "title":"25.7.35 TTS_OWNERS",
                                            "href":"oracle-original-import-utility.html#GUID-3D15E893-A5A2-43E5-8EFC-F1C3DC7F6EFF"
                                        },
                                        {
                                            "title":"25.7.36 USERID (username/password)",
                                            "href":"oracle-original-import-utility.html#GUID-13904E45-CC05-4B48-89A8-22D4A565DE8F"
                                        },
                                        {
                                            "title":"25.7.37 VOLSIZE",
                                            "href":"oracle-original-import-utility.html#GUID-0608822B-07A1-4C82-8BC4-9DCDB9FE08AB"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.8 Example Import Sessions",
                                    "href":"oracle-original-import-utility.html#GUID-0728A92F-AD42-49E5-B3BB-94EC74021DE3",
                                    "topics":[
                                        {
                                            "title":"25.8.1 Example Import of Selected Tables for a Specific User",
                                            "href":"oracle-original-import-utility.html#GUID-964C14B8-8181-45D4-977B-8469509C7BFD"
                                        },
                                        {
                                            "title":"25.8.2 Example Import of Tables Exported by Another User",
                                            "href":"oracle-original-import-utility.html#GUID-AEB6BE7C-9FA5-4D63-94E9-E9A3CE0F1E75"
                                        },
                                        {
                                            "title":"25.8.3 Example Import of Tables from One User to Another",
                                            "href":"oracle-original-import-utility.html#GUID-E9214ED5-0EE6-4D2B-8A9B-BA79572CED1D"
                                        },
                                        {
                                            "title":"25.8.4 Example Import Session Using Partition-Level Import",
                                            "href":"oracle-original-import-utility.html#GUID-B65AB642-CA77-4A22-B28D-1A9F84953AB5",
                                            "topics":[
                                                {
                                                    "title":"25.8.4.1 Example 1: A Partition-Level Import",
                                                    "href":"oracle-original-import-utility.html#GUID-910B9923-FEFD-416F-B445-75E20F632062"
                                                },
                                                {
                                                    "title":"25.8.4.2 Example 2: A Partition-Level Import of a Composite Partitioned Table",
                                                    "href":"oracle-original-import-utility.html#GUID-A15CDA50-6016-4942-B164-7C200999937B"
                                                },
                                                {
                                                    "title":"25.8.4.3 Example 3: Repartitioning a Table on a Different Column",
                                                    "href":"oracle-original-import-utility.html#GUID-56D8448A-0106-4B8C-85E0-11CFED8C71B1"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"25.8.5 Example Import Using Pattern Matching to Import Various Tables",
                                            "href":"oracle-original-import-utility.html#GUID-DB12AE34-2C3E-47E2-860A-72E2EF50AB0B"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.9 Exit Codes for Inspection and Display",
                                    "href":"oracle-original-import-utility.html#GUID-3581831A-1606-437E-BAF1-E729C0995CEF"
                                },
                                {
                                    "title":"25.10 Error Handling During an Import",
                                    "href":"oracle-original-import-utility.html#GUID-611E6C65-6105-49DE-A944-8670CC4E1DF9",
                                    "topics":[
                                        {
                                            "title":"25.10.1 Row Errors",
                                            "href":"oracle-original-import-utility.html#GUID-6E00C79C-F390-4601-A004-E015C4415BE4",
                                            "topics":[
                                                {
                                                    "title":"25.10.1.1 Failed Integrity Constraints",
                                                    "href":"oracle-original-import-utility.html#GUID-669386CC-9E33-4DA4-9506-5B9B70BB7441"
                                                },
                                                {
                                                    "title":"25.10.1.2 Invalid Data",
                                                    "href":"oracle-original-import-utility.html#GUID-0B5E1B30-FD5D-4FC1-92FF-710843EBF994"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"25.10.2 Errors Importing Database Objects",
                                            "href":"oracle-original-import-utility.html#GUID-CF0FE136-43CF-4D0F-9E78-576CC66ABB09",
                                            "topics":[
                                                {
                                                    "title":"25.10.2.1 Object Already Exists",
                                                    "href":"oracle-original-import-utility.html#GUID-294A0915-43E9-45A2-95F6-04012BDAACA6"
                                                },
                                                {
                                                    "title":"25.10.2.2 Sequences",
                                                    "href":"oracle-original-import-utility.html#GUID-699C6BA3-CD27-425D-9161-B5C29F650F15"
                                                },
                                                {
                                                    "title":"25.10.2.3 Resource Errors",
                                                    "href":"oracle-original-import-utility.html#GUID-821A16C2-A634-4282-AD7A-8AB06B255FEA"
                                                },
                                                {
                                                    "title":"25.10.2.4 Domain Index Metadata",
                                                    "href":"oracle-original-import-utility.html#GUID-3BD6E3EC-5F1A-483E-AF1C-BEBFE9D97850"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"25.11 Table-Level and Partition-Level Import",
                                    "href":"oracle-original-import-utility.html#GUID-6677E082-05D9-4D51-9891-F8A090D17661",
                                    "topics":[
                                        {
                                            "title":"25.11.1 Guidelines for Using Table-Level Import",
                                            "href":"oracle-original-import-utility.html#GUID-F8099CB8-8B3B-4B93-95BC-1D147B67D214"
                                        },
                                        {
                                            "title":"25.11.2 Guidelines for Using Partition-Level Import",
                                            "href":"oracle-original-import-utility.html#GUID-54B4569C-39C9-4E85-AE10-EB7A972C8ABD"
                                        },
                                        {
                                            "title":"25.11.3 Migrating Data Across Partitions and Tables",
                                            "href":"oracle-original-import-utility.html#GUID-B1E16EAD-BB3D-44E1-A3FD-79F97E30E495"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.12 Controlling Index Creation and Maintenance",
                                    "href":"oracle-original-import-utility.html#GUID-A81A885E-5F2E-49C4-AD45-8BF5FBBD7E56",
                                    "topics":[
                                        {
                                            "title":"25.12.1 Delaying Index Creation",
                                            "href":"oracle-original-import-utility.html#GUID-2A7136B3-112C-4341-8322-ACB773ECE8B4"
                                        },
                                        {
                                            "title":"25.12.2 Index Creation and Maintenance Controls",
                                            "href":"oracle-original-import-utility.html#GUID-3EE66AE1-B737-4C13-8BB4-C7CCF8B46952",
                                            "topics":[
                                                {
                                                    "title":"25.12.2.1 Example of Postponing Index Maintenance",
                                                    "href":"oracle-original-import-utility.html#GUID-136D39C6-4616-4992-BDB5-6D42708ACC9A"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"25.13 Network Considerations",
                                    "href":"oracle-original-import-utility.html#GUID-0C13AA81-A19A-4B6A-B609-8FFB5C1890AA"
                                },
                                {
                                    "title":"25.14 Character Set and Globalization Support Considerations",
                                    "href":"oracle-original-import-utility.html#GUID-E83AB6FF-00BC-45BF-99CF-6F41DEEE54DB",
                                    "topics":[
                                        {
                                            "title":"25.14.1 User Data",
                                            "href":"oracle-original-import-utility.html#GUID-F91B196F-F789-4570-A7AC-4AE6171C57A6",
                                            "topics":[
                                                {
                                                    "title":"25.14.1.1 Effect of Character Set Sorting Order on Conversions",
                                                    "href":"oracle-original-import-utility.html#GUID-0E23E317-1DF1-4C5B-BF7D-CB30465A3B19"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"25.14.2 Data Definition Language (DDL)",
                                            "href":"oracle-original-import-utility.html#GUID-B53612AF-03E0-4C06-A62C-86BE5CBD0064"
                                        },
                                        {
                                            "title":"25.14.3 Single-Byte Character Sets",
                                            "href":"oracle-original-import-utility.html#GUID-6AE00A05-69BF-48FB-9B61-935E8F2FF2F7"
                                        },
                                        {
                                            "title":"25.14.4 Multibyte Character Sets",
                                            "href":"oracle-original-import-utility.html#GUID-637FDD4F-F0A7-43E2-809C-2E2A7BE00141"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.15 Using Instance Affinity",
                                    "href":"oracle-original-import-utility.html#GUID-F0257A8F-1DEC-4662-9560-63CC43D2E62D"
                                },
                                {
                                    "title":"25.16 Considerations When Importing Database Objects",
                                    "href":"oracle-original-import-utility.html#GUID-102B87F4-6A44-4DA2-B2A0-2AE20CF206D7",
                                    "topics":[
                                        {
                                            "title":"25.16.1 Importing Object Identifiers",
                                            "href":"oracle-original-import-utility.html#GUID-303CBDAC-6841-4C7C-8F40-8B2933435B57"
                                        },
                                        {
                                            "title":"25.16.2 Importing Existing Object Tables and Tables That Contain Object Types",
                                            "href":"oracle-original-import-utility.html#GUID-03BB091E-0AE3-4E03-9C5F-CA68AB90ABD0"
                                        },
                                        {
                                            "title":"25.16.3 Importing Nested Tables",
                                            "href":"oracle-original-import-utility.html#GUID-8AAFD872-8A3A-4EFE-9DD1-BF0B09EB02CD"
                                        },
                                        {
                                            "title":"25.16.4 Importing REF Data",
                                            "href":"oracle-original-import-utility.html#GUID-E29BC484-1827-4A15-94FC-07702069D31D"
                                        },
                                        {
                                            "title":"25.16.5 Importing BFILE Columns and Directory Aliases",
                                            "href":"oracle-original-import-utility.html#GUID-248F49F2-6CC6-4D5C-A5FD-9B906B3B0CF6"
                                        },
                                        {
                                            "title":"25.16.6 Importing Foreign Function Libraries",
                                            "href":"oracle-original-import-utility.html#GUID-375332EF-BA0A-47DF-A758-E8EB051E4A1D"
                                        },
                                        {
                                            "title":"25.16.7 Importing Stored Procedures, Functions, and Packages",
                                            "href":"oracle-original-import-utility.html#GUID-F53F8539-6863-4FEC-8C5F-3369EACB742E"
                                        },
                                        {
                                            "title":"25.16.8 Importing Java Objects",
                                            "href":"oracle-original-import-utility.html#GUID-595FC72B-0CD4-4906-B7C3-E350C67FBF59"
                                        },
                                        {
                                            "title":"25.16.9 Importing External Tables",
                                            "href":"oracle-original-import-utility.html#GUID-37D8D4CB-BA79-4D3C-AFC5-F58C595452A3"
                                        },
                                        {
                                            "title":"25.16.10 Importing Advanced Queue (AQ) Tables",
                                            "href":"oracle-original-import-utility.html#GUID-4B161CBC-A502-45BE-A3C9-43D8087EA89F"
                                        },
                                        {
                                            "title":"25.16.11 Importing LONG Columns",
                                            "href":"oracle-original-import-utility.html#GUID-2AFE0B26-FA6B-4794-AC90-A66F6D88AA91"
                                        },
                                        {
                                            "title":"25.16.12 Importing LOB Columns When Triggers Are Present",
                                            "href":"oracle-original-import-utility.html#GUID-D757ACA1-78BB-4673-86CB-EF2D8839F405"
                                        },
                                        {
                                            "title":"25.16.13 Importing Views",
                                            "href":"oracle-original-import-utility.html#GUID-00AA3B06-089B-4F94-AD08-E3E7DF2E49D5"
                                        },
                                        {
                                            "title":"25.16.14 Importing Partitioned Tables",
                                            "href":"oracle-original-import-utility.html#GUID-B5924DC2-7F53-41EA-8F8A-D056E560882B"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.17 Support for Fine-Grained Access Control",
                                    "href":"oracle-original-import-utility.html#GUID-5A3AFCDA-40CB-4218-A0CA-7538BFE62D5F"
                                },
                                {
                                    "title":"25.18 Snapshots and Snapshot Logs",
                                    "href":"oracle-original-import-utility.html#GUID-56107FC8-769C-4FDB-AF89-FEAFF4D8E8A2",
                                    "topics":[
                                        {
                                            "title":"25.18.1 Snapshot Log",
                                            "href":"oracle-original-import-utility.html#GUID-18F93E18-9504-4D42-B6B0-8E3F7A920B8C"
                                        },
                                        {
                                            "title":"25.18.2 Snapshots",
                                            "href":"oracle-original-import-utility.html#GUID-F042CABC-55A3-4A0F-A722-A6570234CB35",
                                            "topics":[
                                                {
                                                    "title":"25.18.2.1 Importing a Snapshot",
                                                    "href":"oracle-original-import-utility.html#GUID-BEEB8AE5-251C-4F98-92F1-39BD8B014F85"
                                                },
                                                {
                                                    "title":"25.18.2.2 Importing a Snapshot into a Different Schema",
                                                    "href":"oracle-original-import-utility.html#GUID-20AFA8DE-AF7F-49A7-8CCC-B14166BEF31F"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"25.19 Transportable Tablespaces",
                                    "href":"oracle-original-import-utility.html#GUID-6EFBB438-69B9-4CC0-9712-FD300A298DCC"
                                },
                                {
                                    "title":"25.20 Storage Parameters",
                                    "href":"oracle-original-import-utility.html#GUID-AE41C448-26F0-46B0-A521-7F8EE138ADA5",
                                    "topics":[
                                        {
                                            "title":"25.20.1 The OPTIMAL Parameter",
                                            "href":"oracle-original-import-utility.html#GUID-1B40A3DD-036D-488A-9417-0C0658B37D4B"
                                        },
                                        {
                                            "title":"25.20.2 Storage Parameters for OID Indexes and LOB Columns",
                                            "href":"oracle-original-import-utility.html#GUID-B0782F1B-69B5-4BA5-B8D4-77B7D4A45D53"
                                        },
                                        {
                                            "title":"25.20.3 Overriding Storage Parameters",
                                            "href":"oracle-original-import-utility.html#GUID-993E00F9-5A78-466C-B8D8-4CD59F357C0B"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.21 Read-Only Tablespaces",
                                    "href":"oracle-original-import-utility.html#GUID-AFA9647B-A5A5-410F-A52D-3728A05BC34E"
                                },
                                {
                                    "title":"25.22 Dropping a Tablespace",
                                    "href":"oracle-original-import-utility.html#GUID-5450F9DB-08C2-457E-8C2E-6863861E710D"
                                },
                                {
                                    "title":"25.23 Reorganizing Tablespaces",
                                    "href":"oracle-original-import-utility.html#GUID-4C83DB76-DD2C-4E5D-AAB2-A7F9DD9F66FB"
                                },
                                {
                                    "title":"25.24 Importing Statistics",
                                    "href":"oracle-original-import-utility.html#GUID-E3C91E50-0281-491F-ADD5-B231FAF10047"
                                },
                                {
                                    "title":"25.25 Using Export and Import to Partition a Database Migration",
                                    "href":"oracle-original-import-utility.html#GUID-B3347C36-A2AF-4ADC-9B69-0AFF51CE6ED7",
                                    "topics":[
                                        {
                                            "title":"25.25.1 Advantages of Partitioning a Migration",
                                            "href":"oracle-original-import-utility.html#GUID-D4333FF5-D0B7-4457-82B3-BEE9B418E35C"
                                        },
                                        {
                                            "title":"25.25.2 Disadvantages of Partitioning a Migration",
                                            "href":"oracle-original-import-utility.html#GUID-4FD161BC-A72A-46AF-8956-A06C0F56C9DC"
                                        },
                                        {
                                            "title":"25.25.3 How to Use Export and Import to Partition a Database Migration",
                                            "href":"oracle-original-import-utility.html#GUID-8C71EDE4-A980-4E29-AE6E-8401D42A64E2"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.26 Tuning Considerations for Import Operations",
                                    "href":"oracle-original-import-utility.html#GUID-9002ECD0-ABFB-4D2C-9157-369F1673B373",
                                    "topics":[
                                        {
                                            "title":"25.26.1 Changing System-Level Options",
                                            "href":"oracle-original-import-utility.html#GUID-FA8ACB4F-908B-4A05-9CAD-C594EA18F3A4"
                                        },
                                        {
                                            "title":"25.26.2 Changing Initialization Parameters",
                                            "href":"oracle-original-import-utility.html#GUID-BBA2BB80-5E08-4974-982F-85EC3C294567"
                                        },
                                        {
                                            "title":"25.26.3 Changing Import Options",
                                            "href":"oracle-original-import-utility.html#GUID-A05F518B-1E65-4DB8-A0B4-9F995C02DE7D"
                                        },
                                        {
                                            "title":"25.26.4 Dealing with Large Amounts of LOB Data",
                                            "href":"oracle-original-import-utility.html#GUID-CF3A9E02-93EC-4CE3-A9A6-7F6FC042B9B5"
                                        },
                                        {
                                            "title":"25.26.5 Dealing with Large Amounts of LONG Data",
                                            "href":"oracle-original-import-utility.html#GUID-D16129E2-06C3-4CD2-9C0E-8E5F1846874B"
                                        }
                                    ]
                                },
                                {
                                    "title":"25.27 Using Different Releases of Export and Import",
                                    "href":"oracle-original-import-utility.html#GUID-6AB00998-375B-4BB8-9A8C-2E8949455324",
                                    "topics":[
                                        {
                                            "title":"25.27.1 Restrictions When Using Different Releases of Export and Import",
                                            "href":"oracle-original-import-utility.html#GUID-53DA08E2-0F33-4000-BD88-561C21EED636"
                                        },
                                        {
                                            "title":"25.27.2 Examples of Using Different Releases of Export and Import",
                                            "href":"oracle-original-import-utility.html#GUID-5F4E5579-7AFE-4140-A86B-89620EADC115"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Appendixes",
                    "href":"appendices.html#GUID-E7B7674A-CAA4-49AC-B6BD-A34A3A6CFA2E",
                    "topics":[
                        {
                            "title":"A SQL*Loader Syntax Diagrams",
                            "href":"appendices.html#GUID-4BD87035-FE6D-4735-86A4-31C844ACC59A"
                        },
                        {
                            "title":"B Instant Client for SQL*Loader, Export, and Import",
                            "href":"appendices.html#GUID-FF1B6F75-09F5-4911-9317-9776FAD15965",
                            "topics":[
                                {
                                    "title":"B.1 What is the Tools Instant Client?",
                                    "href":"appendices.html#GUID-A8F8EAF0-E900-4237-90BF-A8D54447046C"
                                },
                                {
                                    "title":"B.2 Choosing the Instant Client to Install",
                                    "href":"appendices.html#GUID-BCFA25C7-4584-414B-9D76-D6042894A761"
                                },
                                {
                                    "title":"B.3 Installing Tools Instant Client by Downloading from OTN",
                                    "href":"appendices.html#GUID-BAC417CC-BAAE-430E-BEFA-3C7B6B43FFCC"
                                },
                                {
                                    "title":"B.4 Installing Tools Instant Client from the 12c Client Release Media",
                                    "href":"appendices.html#GUID-27A52AD7-D11D-4460-80BD-6B1FAA3792DE"
                                },
                                {
                                    "title":"B.5 Configuring Tools Instant Client Package",
                                    "href":"appendices.html#GUID-661B6EAE-AA33-4F79-8EA8-B9DC7B979442"
                                },
                                {
                                    "title":"B.6 Connecting to a Database with the Tools Instant Client Package",
                                    "href":"appendices.html#GUID-83517159-091A-4476-9A4E-32443394EFCF"
                                },
                                {
                                    "title":"B.7 Uninstalling Instant Client",
                                    "href":"appendices.html#GUID-2235B7FF-D465-49B0-B53E-AA61AC39691A"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Index",
                    "href":"book-index.html"
                }
            ]
        }
    ]
});