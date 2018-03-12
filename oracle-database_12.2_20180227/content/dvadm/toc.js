define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
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
                    "href":"preface.html#GUID-E65F6EA0-583D-4BB5-8FFF-20CB54612A34",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-6953D206-AD6E-44B5-92FA-D9374F1871C9"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documents",
                            "href":"preface.html#GUID-B51CAB25-9003-4504-93B8-DD4C1A354463"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-43A552B4-6EB8-4580-8C3A-E9A35C41E1EE"
                        }
                    ]
                },
                {
                    "title":"Changes in This Release for Oracle Database Vault Administrator's Guide",
                    "href":"release-changes.html#GUID-92C41701-0EA2-4EFE-84DA-2A66F4E9A807",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database Vault 12c Release 2 (12.2.0.1)",
                            "href":"release-changes.html#GUID-297F7EA5-3BDD-4607-81DB-3ABF25D53782",
                            "topics":[
                                {
                                    "title":"New Features",
                                    "href":"release-changes.html#GUID-B2C7CAE3-91F3-4446-81D2-AA47B6978343",
                                    "topics":[
                                        {
                                            "title":"Ability to Create Oracle Database Vault Policies",
                                            "href":"release-changes.html#GUID-11FD9D99-6EB8-4AB7-AF25-C78ADC8BB75F"
                                        },
                                        {
                                            "title":"Ability to Configure Simulation Mode Protection",
                                            "href":"release-changes.html#GUID-FD47F93A-0A70-4307-AA05-26CE224E4098"
                                        },
                                        {
                                            "title":"Privilege Analysis Enhancements",
                                            "href":"release-changes.html#GUID-B1B9BC69-3EC6-4672-8EDA-3CA7A69114FC"
                                        },
                                        {
                                            "title":"Ability to Create Common Realms and Common Command Rules for Oracle Multitenant",
                                            "href":"release-changes.html#GUID-C5523361-B90D-4644-B6B7-9F2954D78F6A"
                                        },
                                        {
                                            "title":"ALTER SESSION, ALTER SYSTEM, and CONNECT Command Rule Enhancements",
                                            "href":"release-changes.html#GUID-B4F9F719-712C-4F5A-A49E-06B29CFD9CFC"
                                        },
                                        {
                                            "title":"Enhancements for the Authentication_Method Default Factor",
                                            "href":"release-changes.html#GUID-E7FC5BC3-A9FF-41E5-B9B0-7B39FE664414"
                                        },
                                        {
                                            "title":"Changed Default Value for SQL92_SECURITY Parameter",
                                            "href":"release-changes.html#GUID-D558232F-4F4A-432D-A9B8-654F262B27B2"
                                        },
                                        {
                                            "title":"Oracle Database Vault Support for Flashback Technology and ILM",
                                            "href":"release-changes.html#GUID-39132CFD-DAE8-4E75-95ED-268A895FB688"
                                        },
                                        {
                                            "title":"Support for Rolling Upgrades for Data Guard Logical Standby Databases",
                                            "href":"release-changes.html#GUID-540C5763-075C-47A0-9ECD-B50CA68BA15A"
                                        }
                                    ]
                                },
                                {
                                    "title":"Deprecated Features",
                                    "href":"release-changes.html#GUID-512F0D3C-BD63-4BFC-9286-9AA7B706C903",
                                    "topics":[
                                        {
                                            "title":"Deprecated Rules and Rule Sets",
                                            "href":"release-changes.html#GUID-A4DCA810-2702-42EC-8A5B-5913221F8A9E"
                                        },
                                        {
                                            "title":"Deprecated UTL_FILE_DIR Parameter",
                                            "href":"release-changes.html#GUID-3916821E-995E-4760-9D47-53645F0E8425"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"1 Introduction to Oracle Database Vault",
                    "href":"introduction-to-oracle-database-vault.html#GUID-0C8AF1B2-6CE9-4408-BFB3-7B2C7F9E7284",
                    "topics":[
                        {
                            "title":"1.1 What Is Oracle Database Vault?",
                            "href":"introduction-to-oracle-database-vault.html#GUID-2B8316CD-7421-4322-A5A2-1A9B52C1E38A",
                            "topics":[
                                {
                                    "title":"1.1.1 About Oracle Database Vault",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-59526942-DC4F-489B-819E-D4F33BA17F9D"
                                },
                                {
                                    "title":"1.1.2 Controls for Privileged Accounts",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-54208E95-3458-4A36-BBBA-FB4CED1FCFA5"
                                },
                                {
                                    "title":"1.1.3 Controls for Database Configuration",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-DE52C236-B96C-441E-9F56-30ED6A51438E"
                                },
                                {
                                    "title":"1.1.4 Enterprise Applications Protection Policies",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-2B520159-92A9-4719-A69A-633A94149F6F"
                                },
                                {
                                    "title":"1.1.5 Run-time Privilege Analysis for Users and Applications",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-0584AE44-7594-4572-B693-76E48D6042CE"
                                }
                            ]
                        },
                        {
                            "title":"1.2 What Privileges Do You Need to Use Oracle Database Vault?",
                            "href":"introduction-to-oracle-database-vault.html#GUID-1501802B-4761-47CF-9DDD-BA91DE4EED2C"
                        },
                        {
                            "title":"1.3 Components of Oracle Database Vault",
                            "href":"introduction-to-oracle-database-vault.html#GUID-4374DE0A-FCE4-493E-88B6-72C55314A0AE",
                            "topics":[
                                {
                                    "title":"1.3.1 Oracle Database Vault Access Control Components",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-9673B318-2F38-406E-A441-613E829E1013"
                                },
                                {
                                    "title":"1.3.2 Oracle Enterprise Manager Cloud Control Database Vault Administrator Pages",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-7A7CC0B1-BBA5-4162-B181-86A634C4B628"
                                },
                                {
                                    "title":"1.3.3 Oracle Database Vault DVSYS and DVF Schemas",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-78C38076-42E7-463A-B111-214F6958A425"
                                },
                                {
                                    "title":"1.3.4 Oracle Database Vault PL/SQL Interfaces and Packages",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-5E0744C3-4FF6-479F-9A35-928E080C3761"
                                },
                                {
                                    "title":"1.3.5 Oracle Database Vault Reporting and Monitoring Tools",
                                    "href":"introduction-to-oracle-database-vault.html#GUID-767CFFEB-DC67-41FB-BC97-79004F396830"
                                }
                            ]
                        },
                        {
                            "title":"1.4 How Oracle Database Vault Addresses Compliance Regulations",
                            "href":"introduction-to-oracle-database-vault.html#GUID-63539E98-65E4-4BCB-A4E0-232E094FDCD1"
                        },
                        {
                            "title":"1.5 How Oracle Database Vault Protects Privileged User Accounts",
                            "href":"introduction-to-oracle-database-vault.html#GUID-3C080FE2-20B0-4F99-A350-9A8ADB6E5EA3"
                        },
                        {
                            "title":"1.6 How Oracle Database Vault Allows for Flexible Security Policies",
                            "href":"introduction-to-oracle-database-vault.html#GUID-A1EA989B-AABC-456C-BB21-6C9BC759E18F"
                        },
                        {
                            "title":"1.7 How Oracle Database Vault Addresses Database Consolidation Concerns",
                            "href":"introduction-to-oracle-database-vault.html#GUID-E7B545F0-3D89-4394-AD0E-E8A1CE37F5D6"
                        },
                        {
                            "title":"1.8 How Oracle Database Vault Works in a Multitenant Environment",
                            "href":"introduction-to-oracle-database-vault.html#GUID-F4182518-DEFF-4433-9593-0D73315DF661"
                        }
                    ]
                },
                {
                    "title":"2 What to Expect After You Enable Oracle Database Vault",
                    "href":"what-to-expect-after-you-enable-oracle-database-vault.html#GUID-1A11ACF7-0441-4116-AB2D-ED83260A89ED",
                    "topics":[
                        {
                            "title":"2.1 Initialization and Password Parameter Settings That Change",
                            "href":"what-to-expect-after-you-enable-oracle-database-vault.html#GUID-321E86C8-76AE-4510-AB4A-8EB3DA38723C"
                        },
                        {
                            "title":"2.2 How Oracle Database Vault Restricts User Authorizations",
                            "href":"what-to-expect-after-you-enable-oracle-database-vault.html#GUID-F6BC9DA1-0B00-4CF6-B139-B58589E320B4"
                        },
                        {
                            "title":"2.3 New Database Roles to Enforce Separation of Duties",
                            "href":"what-to-expect-after-you-enable-oracle-database-vault.html#GUID-C91754D9-950D-4E1E-A697-B26D4C4D3B9C"
                        },
                        {
                            "title":"2.4 Privileges That Are Revoked from Existing Users and Roles",
                            "href":"what-to-expect-after-you-enable-oracle-database-vault.html#GUID-5B269A7B-E0EC-484B-8CF6-D664A1DB9A77"
                        },
                        {
                            "title":"2.5 Privileges That Are Prevented for Existing Users and Roles",
                            "href":"what-to-expect-after-you-enable-oracle-database-vault.html#GUID-F8FB8C17-151B-4B77-A3AF-E1E97D0897A3"
                        },
                        {
                            "title":"2.6 Modified AUDIT Statement Settings for a Non-Unified Audit Environment",
                            "href":"what-to-expect-after-you-enable-oracle-database-vault.html#GUID-19088FD6-6255-40BF-9434-70B008BC3562"
                        }
                    ]
                },
                {
                    "title":"3 Getting Started with Oracle Database Vault",
                    "href":"getting-started-with-oracle-database-vault.html#GUID-D3F37B71-0935-462C-A459-557D28F8CF20",
                    "topics":[
                        {
                            "title":"3.1 Manually Installing Oracle Database Vault in a Multitenant Environment",
                            "href":"getting-started-with-oracle-database-vault.html#GUID-9D1223B5-3B22-4343-B9DA-05B4BC72F260"
                        },
                        {
                            "title":"3.2 Registering Oracle Database Vault with an Oracle Database",
                            "href":"getting-started-with-oracle-database-vault.html#GUID-68558E32-ABD0-4495-8677-4F9E09283E5D",
                            "topics":[
                                {
                                    "title":"3.2.1 About Registering Oracle Database Vault with an Oracle Database",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-CBBB10AD-AF65-46FF-9F1A-C808BD7C9F1D"
                                },
                                {
                                    "title":"3.2.2 Registering Database Vault in a Non-Multitenant Environment",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-82062E1E-C0E7-4258-B532-5C0393ADE0DB"
                                },
                                {
                                    "title":"3.2.3 Registering Database Vault with Common Users to Manage the CDB Root",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-5CC1B6F0-FDDB-4183-8233-0AC6B208667A"
                                },
                                {
                                    "title":"3.2.4 Registering Database Vault Common Users to Manage Specific PDBs",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-E30BC167-13D6-4C84-ABCC-28CBFF704193"
                                },
                                {
                                    "title":"3.2.5 Creating Common Database Vault Accounts for a Plugged in Database Vault PDB",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-C6218DD3-BB78-40F7-8BE2-7391D3BF6418"
                                },
                                {
                                    "title":"3.2.6 Verifying That Database Vault Is Configured and Enabled",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-B5569AED-AC16-482C-BA6D-34E275F016D2"
                                }
                            ]
                        },
                        {
                            "title":"3.3 Logging into Oracle Database Vault",
                            "href":"getting-started-with-oracle-database-vault.html#GUID-FD5C6859-EF01-49F7-B6D6-4E5ACB7FC0C6"
                        },
                        {
                            "title":"3.4 Quick Start Tutorial: Securing a Schema from DBA Access",
                            "href":"getting-started-with-oracle-database-vault.html#GUID-4EEDEFCC-51EB-43A4-9BBA-1667A26B25CD",
                            "topics":[
                                {
                                    "title":"3.4.1 About This Tutorial",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-1E5427BD-4084-4712-A27A-E3A609B5BE3B"
                                },
                                {
                                    "title":"3.4.2 Step 1: Log On as SYSTEM to Access the HR Schema",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-872977EE-3DAD-46F4-8AE3-36176093F999"
                                },
                                {
                                    "title":"3.4.3 Step 2: Create a Realm",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-D327A3A5-B33E-4038-9C11-F333BC23B65C"
                                },
                                {
                                    "title":"3.4.4 Step 3: Create the SEBASTIAN User Account",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-06B429BC-7070-4D97-9C7E-A13FB49E0B16"
                                },
                                {
                                    "title":"3.4.5 Step 4: Have User SEBASTIAN Test the Realm",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-97F096B5-76EC-422B-BF05-A64DEAA9B5D7"
                                },
                                {
                                    "title":"3.4.6 Step 5: Create an Authorization for the Realm",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-0861C9DB-43A9-4887-9F98-D1DE0D2B2833"
                                },
                                {
                                    "title":"3.4.7 Step 6: Test the Realm",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-DF31D2EA-282E-4A02-AAC1-05E8228817F7"
                                },
                                {
                                    "title":"3.4.8 Step 7: If Unified Auditing Is Not Enabled, Then Run a Report",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-F1D1B4F0-7C04-477A-B7B3-357605EA127A"
                                },
                                {
                                    "title":"3.4.9 Step 8: Remove the Components for This Tutorial",
                                    "href":"getting-started-with-oracle-database-vault.html#GUID-73CBBA3A-EA8E-49F0-A59D-0F066263E1D2"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"4 Performing Privilege Analysis to Find Privilege Use",
                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-44CB644B-7B59-4B3B-B375-9F9B96F60186",
                    "topics":[
                        {
                            "title":"4.1 What Is Privilege Analysis?",
                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-624BEE71-EE04-450F-9E8D-E5DF9788D18C",
                            "topics":[
                                {
                                    "title":"4.1.1 About Privilege Analysis",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-DE3DC8D3-4357-4DC7-B66F-62356911076E"
                                },
                                {
                                    "title":"4.1.2 How Privilege Analysis Works with Pre-Compiled Database Objects",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-77961026-AD82-4BD2-98B0-70A74DD3FAA0"
                                },
                                {
                                    "title":"4.1.3 Who Can Perform Privilege Analysis?",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-43F5F696-8414-4A47-B609-F9FB134C9175"
                                },
                                {
                                    "title":"4.1.4 Types of Privilege Analysis",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-087DF0BE-E64E-4097-815D-49FF86703F6D"
                                },
                                {
                                    "title":"4.1.5 Benefits and Use Cases of Privilege Analysis",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-280C672A-5399-4823-8F8B-09F3135DF5DD",
                                    "topics":[
                                        {
                                            "title":"4.1.5.1 Unnecessarily Granted Privileges of Applications",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-A67ECE4F-0FDB-45B8-A202-6C15C0F15960"
                                        },
                                        {
                                            "title":"4.1.5.2 Development of Secure Applications",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-46EDA5CF-3C7F-4C24-9EC6-C227F7BD306C"
                                        }
                                    ]
                                },
                                {
                                    "title":"4.1.6 How Does a Multitenant Environment Affect Privilege Analysis?",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-AD683DDB-D345-4702-B1F4-37B79F276B66"
                                }
                            ]
                        },
                        {
                            "title":"4.2 Creating and Managing Privilege Analysis Policies",
                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-442371F1-541D-4A1E-BCBF-180C0D88517D",
                            "topics":[
                                {
                                    "title":"4.2.1 About Creating and Managing Privilege Analysis Policies",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-E3297105-B1F5-4B49-9CB7-7361EE17E8CE"
                                },
                                {
                                    "title":"4.2.2 General Steps for Managing Privilege Analysis",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-41B8439B-2713-43C0-BF51-4FE50A70B705"
                                },
                                {
                                    "title":"4.2.3 Creating a Privilege Analysis Policy",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-AFA08712-2C4E-4E08-82AC-DA109AAF4D44",
                                    "topics":[
                                        {
                                            "title":"4.2.3.1 About Creating a Privilege Analysis Policy",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-B4AD98D4-1323-4281-A952-2B6B075D4F7F"
                                        },
                                        {
                                            "title":"4.2.3.2 Creating a Privilege Analysis Policy in Enterprise Manager Cloud Control",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-36F8C2B2-E5CD-442B-A92C-D741E98E558B"
                                        },
                                        {
                                            "title":"4.2.3.3 Creating a Privilege Analysis Policy Using DBMS_PRIVILEGE_CAPTURE",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-C4084ACD-81A0-484A-B668-813CD374AEDD"
                                        }
                                    ]
                                },
                                {
                                    "title":"4.2.4 Examples of Privilege Analysis Policies",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-C347E3C2-37DC-44C3-BC9B-1FFAFEEFD1F6",
                                    "topics":[
                                        {
                                            "title":"4.2.4.1 Example: Privilege Analysis of Database-Wide Privileges",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-22A1DF70-95F3-4F77-8C8B-4F5E6BBBE23C"
                                        },
                                        {
                                            "title":"4.2.4.2 Example: Privilege Analysis of Privilege Usage of Two Roles",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-FA1DF4BF-B906-4D88-8E13-96D29F62AAED"
                                        },
                                        {
                                            "title":"4.2.4.3 Example: Privilege Analysis of Privileges During SQL*Plus Use",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-F66B66E1-4EDF-497F-88FF-0464202F794C"
                                        },
                                        {
                                            "title":"4.2.4.4 Example: Privilege Analysis of PSMITH Privileges During SQL*Plus Access",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-6D534AD9-E7A9-4BDE-843B-C3A3B1C14B3B"
                                        }
                                    ]
                                },
                                {
                                    "title":"4.2.5 Enabling a Privilege Analysis Policy",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-CE4C421B-6578-4527-9D0A-0ED0066643A4",
                                    "topics":[
                                        {
                                            "title":"4.2.5.1 About Enabling a Privilege Analysis Policy",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-3A1CD6E6-1BAA-4D82-8FB0-A45A63F7191A"
                                        },
                                        {
                                            "title":"4.2.5.2 Enabling a Privilege Analysis Policy Using Cloud Control",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-0A13C239-7771-4250-B616-A9010842EF1B"
                                        },
                                        {
                                            "title":"4.2.5.3 Enabling a Privilege Analysis Policy Using DBMS_PRIVILEGE_CAPTURE",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-C4A9E2B3-0051-4190-BD23-1F24052B352C"
                                        }
                                    ]
                                },
                                {
                                    "title":"4.2.6 Disabling a Privilege Analysis Policy",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-2228CF12-028D-4C71-98B3-89D1A939CFEF",
                                    "topics":[
                                        {
                                            "title":"4.2.6.1 About Disabling a Privilege Analysis Policy",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-0170D3CD-5C98-4A77-A4AD-7D53A22DA031"
                                        },
                                        {
                                            "title":"4.2.6.2 Disabling a Privilege Analysis Policy Using Cloud Control",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-5B18A36B-0419-4F3F-A63C-5F35BE31CA89"
                                        },
                                        {
                                            "title":"4.2.6.3 Disabling a Privilege Analysis Policy Using DBMS_PRIVILEGE_CAPTURE",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-ECD0AC5D-0EDD-4AF0-84D9-401749659786"
                                        }
                                    ]
                                },
                                {
                                    "title":"4.2.7 Generating a Privilege Analysis Report",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-09B5E21E-5C5B-4171-B6D7-32DDF7EA1222",
                                    "topics":[
                                        {
                                            "title":"4.2.7.1 About Generating a Privilege Analysis Report",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-AFC16E86-D7BF-4AD7-A127-CDA6D04A9077"
                                        },
                                        {
                                            "title":"4.2.7.2 Generating a Privilege Analysis Report Using Cloud Control",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-27D2232F-38AF-415A-BD64-69D368FB0FC0"
                                        },
                                        {
                                            "title":"4.2.7.3 Accessing Privilege Analysis Reports Using Cloud Control",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-E44DCDB5-9687-4355-93CA-3836ACBF9AA5"
                                        },
                                        {
                                            "title":"4.2.7.4 Generating a Privilege Analysis Report Using DBMS_PRIVILEGE_CAPTURE",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-67406253-7709-4F74-B962-EDFCA1CCB2F9"
                                        }
                                    ]
                                },
                                {
                                    "title":"4.2.8 Dropping a Privilege Analysis Policy",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-4CF1EE91-C812-4BB8-BB94-9DE36CAAB72B",
                                    "topics":[
                                        {
                                            "title":"4.2.8.1 About Dropping a Privilege Analysis Policy",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-5F27E964-A61C-452C-A1CD-4AC89B600A1F"
                                        },
                                        {
                                            "title":"4.2.8.2 Dropping a Privilege Analysis Policy Using Cloud Control",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-1817ED19-9AF1-443D-9C5F-C7B99D29B505"
                                        },
                                        {
                                            "title":"4.2.8.3 Dropping a Privilege Analysis Policy Using the DBMS_PRIVILEGE_CAPTURE Package",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-403B206F-71B5-481E-8FF7-6FEBA2DE1D75"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"4.3 Creating Roles and Managing Privileges Using Cloud Control",
                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-819C319D-2A16-4F3B-BC4E-6D216418F6CA",
                            "topics":[
                                {
                                    "title":"4.3.1 Creating a Role from a Privilege Analysis Report in Cloud Control",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-32E2ACC1-CF16-4843-8149-0DAFA8A659EE"
                                },
                                {
                                    "title":"4.3.2 Revoking and Regranting Roles and Privileges Using Cloud Control",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-7FEDBD68-0F3F-4856-9D48-B90AEB692361"
                                },
                                {
                                    "title":"4.3.3 Generating a Revoke or Regrant Script Using Cloud Control",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-52659855-2B5E-4E93-80EE-174679594BE9",
                                    "topics":[
                                        {
                                            "title":"4.3.3.1 About Generating Revoke and Regrant Scripts",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-BAF8C605-D14A-49A8-B819-B39EC18D0FAE"
                                        },
                                        {
                                            "title":"4.3.3.2 Generating a Revoke Script",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-D7DD58E0-6884-4A7E-B593-1A6CC5612081"
                                        },
                                        {
                                            "title":"4.3.3.3 Generating a Regrant Script",
                                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-80C2B380-C315-43BD-AC09-077FF7F4F09B"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"4.4 Tutorial: Using Capture Runs to Analyze ANY Privilege Use",
                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-0A2B341F-FDFB-486E-9F93-B2063F82CC13",
                            "topics":[
                                {
                                    "title":"4.4.1 Step 1: Create User Accounts",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-E6A53756-A25B-4AA9-8CFA-A90E0B5009CF"
                                },
                                {
                                    "title":"4.4.2 Step 2: Create and Enable a Privilege Analysis Policy",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-7D38155B-51F7-4FF9-B24D-1FBDF64F923A"
                                },
                                {
                                    "title":"4.4.3 Step 3: Use the READ ANY TABLE System Privilege",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-5DAB3004-561B-424C-A473-71000980E578"
                                },
                                {
                                    "title":"4.4.4 Step 4: Disable the Privilege Analysis Policy",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-A7FF0521-F296-4821-84F1-3F4580E281A6"
                                },
                                {
                                    "title":"4.4.5 Step 5: Generate and View a Privilege Analysis Report",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-B3D1C54B-9FFB-4376-B767-12A631E3F66D"
                                },
                                {
                                    "title":"4.4.6 Step 6: Create a Second Capture Run",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-CAFA7DFC-287E-4186-B475-811F5C611121"
                                },
                                {
                                    "title":"4.4.7 Step 7: Remove the Components for This Tutorial",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-1FA9F206-75C2-4FC9-BA53-A17118A2C934"
                                }
                            ]
                        },
                        {
                            "title":"4.5 Tutorial: Analyzing Privilege Use by a User Who Has the DBA Role",
                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-3AA55C7A-CD73-4B28-AE02-9D80A69E8B6E",
                            "topics":[
                                {
                                    "title":"4.5.1 Step 1: Create User Accounts",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-63EFFFC3-A68E-41B1-95BD-7147A0F53E4A"
                                },
                                {
                                    "title":"4.5.2 Step 2: Create and Enable a Privilege Analysis Policy",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-8CEAD3FE-9F33-4E2A-9196-31DBA3E59AD6"
                                },
                                {
                                    "title":"4.5.3 Step 3: Perform the Database Tuning Operations",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-5ED78334-FB5B-4A37-932D-9D5C5CBD2ED4"
                                },
                                {
                                    "title":"4.5.4 Step 4: Disable the Privilege Analysis Policy",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-11D7DE54-BCAC-49F7-A92D-FB0F8B9C7A6A"
                                },
                                {
                                    "title":"4.5.5 Step 5: Generate and View Privilege Analysis Reports",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-3BB21726-7D0B-4853-8C44-8A1C9BD8E4B9"
                                },
                                {
                                    "title":"4.5.6 Step 6: Remove the Components for This Tutorial",
                                    "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-7B824C23-9990-418E-AD33-0D92702EBD3D"
                                }
                            ]
                        },
                        {
                            "title":"4.6 Privilege Analysis Policy and Report Data Dictionary Views",
                            "href":"performing-privilege-analysis-to-find-privilege-use.html#GUID-2F1929EB-8EB5-4678-BBC9-EE4A8056D112"
                        }
                    ]
                },
                {
                    "title":"5 Configuring Realms",
                    "href":"configuring-realms.html#GUID-86DA4697-8BE2-4F27-92E3-C15843F9A3A6",
                    "topics":[
                        {
                            "title":"5.1 What Are Realms?",
                            "href":"configuring-realms.html#GUID-D200353D-D15B-46AE-82DA-FE874D24800C",
                            "topics":[
                                {
                                    "title":"5.1.1 About Realms",
                                    "href":"configuring-realms.html#GUID-5B043984-7C0F-49E3-8A0C-A983E4F12FD0"
                                },
                                {
                                    "title":"5.1.2 Mandatory Realms to Restrict User Access to Objects within a Realm",
                                    "href":"configuring-realms.html#GUID-9ECB64CF-9740-4FCC-BC2E-A0E6F19094FC"
                                },
                                {
                                    "title":"5.1.3 Realms in a Multitenant Environment",
                                    "href":"configuring-realms.html#GUID-72403156-3E91-43FD-8D06-859DBBC10568"
                                },
                                {
                                    "title":"5.1.4 Object Types That Realms Can Protect",
                                    "href":"configuring-realms.html#GUID-E1E06A87-0B89-4F76-B844-732AC34406D3"
                                }
                            ]
                        },
                        {
                            "title":"5.2 Default Realms",
                            "href":"configuring-realms.html#GUID-3DE167E8-BD1D-48C4-A0EE-8E6FDFFC5CCA",
                            "topics":[
                                {
                                    "title":"5.2.1 Oracle Database Vault Realm",
                                    "href":"configuring-realms.html#GUID-911E7562-EE12-4847-B53C-5286504AB9E3"
                                },
                                {
                                    "title":"5.2.2 Database Vault Account Management Realm",
                                    "href":"configuring-realms.html#GUID-A0537605-63D8-47A0-B834-84AB5A09F0CC"
                                },
                                {
                                    "title":"5.2.3 Oracle Enterprise Manager Realm",
                                    "href":"configuring-realms.html#GUID-D21AB276-A8DD-4A0E-8F3C-F22819680291"
                                },
                                {
                                    "title":"5.2.4 Oracle Default Schema Protection Realm",
                                    "href":"configuring-realms.html#GUID-B99F85A5-C476-4674-B74B-C1A2434CFFC5"
                                },
                                {
                                    "title":"5.2.5 Oracle System Privilege and Role Management Realm",
                                    "href":"configuring-realms.html#GUID-466A5489-9E58-4D36-A984-1FBC5B5DC636"
                                },
                                {
                                    "title":"5.2.6 Oracle Default Component Protection Realm",
                                    "href":"configuring-realms.html#GUID-EB50E681-B7FF-48C9-8C97-08167E7A916B"
                                }
                            ]
                        },
                        {
                            "title":"5.3 Creating a Realm",
                            "href":"configuring-realms.html#GUID-CC84928B-7D89-426E-9517-CC04CCEACD9B"
                        },
                        {
                            "title":"5.4 About Realm-Secured Objects",
                            "href":"configuring-realms.html#GUID-66339B56-9F8B-48DF-9BCE-7137BBF1EAB0"
                        },
                        {
                            "title":"5.5 About Realm Authorization",
                            "href":"configuring-realms.html#GUID-18D6FFCB-42C2-49D1-9F53-BADE7B0754AB"
                        },
                        {
                            "title":"5.6 Realm Authorizations in a Multitenant Environment",
                            "href":"configuring-realms.html#GUID-DA60AF6B-D669-4E17-94B4-043BB41FC673"
                        },
                        {
                            "title":"5.7 Modifying the Enablement Status of a Realm",
                            "href":"configuring-realms.html#GUID-7205A1C7-FC62-46F7-B60A-CC4BC9C86BCC"
                        },
                        {
                            "title":"5.8 Deleting a Realm",
                            "href":"configuring-realms.html#GUID-5AD81762-3DFF-4AC7-9D6F-240234DB87EB"
                        },
                        {
                            "title":"5.9 How Realms Work",
                            "href":"configuring-realms.html#GUID-E3560CA1-7680-4B7B-A916-E138661952AA"
                        },
                        {
                            "title":"5.10 How Authorizations Work in a Realm",
                            "href":"configuring-realms.html#GUID-D6D32C23-A04D-4FAA-8CB0-D23E14B0A2AF",
                            "topics":[
                                {
                                    "title":"5.10.1 About Authorizations in a Realm",
                                    "href":"configuring-realms.html#GUID-2D452FA4-CA3C-4E70-916F-F7FC1CE20009"
                                },
                                {
                                    "title":"5.10.2 Examples of Realm Authorizations",
                                    "href":"configuring-realms.html#GUID-6E354066-4111-4E93-93E0-350BDA6E4A26",
                                    "topics":[
                                        {
                                            "title":"5.10.2.1 Example: Unauthorized User Trying to Create a Table",
                                            "href":"configuring-realms.html#GUID-9639CBDE-AE52-4297-A797-4D968A28D297"
                                        },
                                        {
                                            "title":"5.10.2.2 Example: Unauthorized User Trying to Use the DELETE ANY TABLE Privilege",
                                            "href":"configuring-realms.html#GUID-65029C63-F7CA-4D4F-A356-2C0B2A9E8AFB"
                                        },
                                        {
                                            "title":"5.10.2.3 Example: Authorized User Performing DELETE Operation",
                                            "href":"configuring-realms.html#GUID-7340D6C7-99AD-4AA1-BF23-7461A8001D81"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"5.11 Access to Objects That Are Protected by a Realm",
                            "href":"configuring-realms.html#GUID-8A1251AB-33FF-4C7B-8DE7-B474A89355E8"
                        },
                        {
                            "title":"5.12 Example of How Realms Work",
                            "href":"configuring-realms.html#GUID-8C3B9940-063A-4346-ABFC-24881C92DB27"
                        },
                        {
                            "title":"5.13 How Realms Affect Other Oracle Database Vault Components",
                            "href":"configuring-realms.html#GUID-5726E22D-B596-47E0-8D7C-0B352A422864"
                        },
                        {
                            "title":"5.14 Guidelines for Designing Realms",
                            "href":"configuring-realms.html#GUID-2BA46470-2C9C-42B6-B57E-90446D1EC8A6"
                        },
                        {
                            "title":"5.15 How Realms Affect Performance",
                            "href":"configuring-realms.html#GUID-38AA3E28-E29D-412B-9CB6-2095411AC9BB"
                        },
                        {
                            "title":"5.16 Realm Related Reports and Data Dictionary Views",
                            "href":"configuring-realms.html#GUID-4943DEFF-D403-44C7-95E7-E52569E2E12D"
                        }
                    ]
                },
                {
                    "title":"6 Configuring Rule Sets",
                    "href":"configuring-rule-sets.html#GUID-41914FF0-20E0-4878-8124-C6C976C19104",
                    "topics":[
                        {
                            "title":"6.1 What Are Rule Sets?",
                            "href":"configuring-rule-sets.html#GUID-AAC9F751-6498-4FD0-BB0E-64A6E2BB4E4A"
                        },
                        {
                            "title":"6.2 Rule Sets and Rules in a Multitenant Environment",
                            "href":"configuring-rule-sets.html#GUID-6308CB8B-6777-44AF-A523-F1A956591F6D"
                        },
                        {
                            "title":"6.3 Default Rule Sets",
                            "href":"configuring-rule-sets.html#GUID-AE122705-6BAD-4B72-8321-C25187545589"
                        },
                        {
                            "title":"6.4 Creating a Rule Set",
                            "href":"configuring-rule-sets.html#GUID-E2477C97-F87A-4FCF-A8C7-AFACA707B444"
                        },
                        {
                            "title":"6.5 Creating a Rule to Add to a Rule Set",
                            "href":"configuring-rule-sets.html#GUID-1DEA3C18-91A0-475A-B001-8DC97372B40F",
                            "topics":[
                                {
                                    "title":"6.5.1 About Creating Rules",
                                    "href":"configuring-rule-sets.html#GUID-FDD7A2C2-4E6A-4D84-828C-7040F4B297DA"
                                },
                                {
                                    "title":"6.5.2 Default Rules",
                                    "href":"configuring-rule-sets.html#GUID-A5550945-496A-411D-922F-B4BFDEA85FD9"
                                },
                                {
                                    "title":"6.5.3 Creating a New Rule",
                                    "href":"configuring-rule-sets.html#GUID-AAAFC806-8DB8-45A7-A058-B7CD352B0C50"
                                },
                                {
                                    "title":"6.5.4 Adding Existing Rules to a Rule Set",
                                    "href":"configuring-rule-sets.html#GUID-2D82F552-0D94-44B8-9F81-2F42E0EAA4FD"
                                },
                                {
                                    "title":"6.5.5 Removing a Rule from a Rule Set",
                                    "href":"configuring-rule-sets.html#GUID-D22EB64B-F62F-4747-B218-FE1C7C3BC709"
                                }
                            ]
                        },
                        {
                            "title":"6.6 Removing Rule Set References to Oracle Database Vault Components",
                            "href":"configuring-rule-sets.html#GUID-DB38EF41-865C-41D6-89AD-3C9E32084E82"
                        },
                        {
                            "title":"6.7 Deleting a Rule Set",
                            "href":"configuring-rule-sets.html#GUID-24510A4C-39FA-4701-91A2-6E213BD9AE59"
                        },
                        {
                            "title":"6.8 How Rule Sets Work",
                            "href":"configuring-rule-sets.html#GUID-BFA919E1-0941-4246-BCA6-D9BC03B1CCB3",
                            "topics":[
                                {
                                    "title":"6.8.1 How Oracle Database Vault Evaluates Rules",
                                    "href":"configuring-rule-sets.html#GUID-5A6D122C-4DB2-4DED-85EC-E8D42657622E"
                                },
                                {
                                    "title":"6.8.2 Nested Rules within a Rule Set",
                                    "href":"configuring-rule-sets.html#GUID-C54D769A-258E-4226-9AF2-37DF33A29C50"
                                },
                                {
                                    "title":"6.8.3 Creating Rules to Apply to Everyone Except One User",
                                    "href":"configuring-rule-sets.html#GUID-D0169640-4949-4726-84AB-3656B20A03BF"
                                }
                            ]
                        },
                        {
                            "title":"6.9 Tutorial: Creating an Email Alert for Security Violations",
                            "href":"configuring-rule-sets.html#GUID-744EC9BB-0804-4F91-BA0F-7D5584EA5B97",
                            "topics":[
                                {
                                    "title":"6.9.1 About This Tutorial",
                                    "href":"configuring-rule-sets.html#GUID-D43A729D-6528-46ED-9CB8-55591745C6F8"
                                },
                                {
                                    "title":"6.9.2 Step 1: Install and Configure the UTL_MAIL PL/SQL Package",
                                    "href":"configuring-rule-sets.html#GUID-16C3DDD7-A749-46FE-BC65-D523C4EBCC63"
                                },
                                {
                                    "title":"6.9.3 Step 2: Create an Email Security Alert PL/SQL Procedure",
                                    "href":"configuring-rule-sets.html#GUID-478D9B85-F2FC-47DE-8F35-40E4E5A6D6EC"
                                },
                                {
                                    "title":"6.9.4 Step 3: Configure an Access Control List File for Network Services",
                                    "href":"configuring-rule-sets.html#GUID-2E877560-EDF1-4835-9F5C-CDD67201DDB0"
                                },
                                {
                                    "title":"6.9.5 Step 4: Create a Rule Set and a Command Rule to Use the Email Security Alert",
                                    "href":"configuring-rule-sets.html#GUID-FAF67375-E88D-42B2-A107-F940BC3C0616"
                                },
                                {
                                    "title":"6.9.6 Step 5: Test the Email Security Alert",
                                    "href":"configuring-rule-sets.html#GUID-1AEEE3DA-9104-4DA4-836A-C5AE5AC028E8"
                                },
                                {
                                    "title":"6.9.7 Step 6: Remove the Components for This Tutorial",
                                    "href":"configuring-rule-sets.html#GUID-ED7B98BF-87DD-4893-9992-FF0319FE9788"
                                }
                            ]
                        },
                        {
                            "title":"6.10 Tutorial: Configuring Two-Person Integrity, or Dual Key Security",
                            "href":"configuring-rule-sets.html#GUID-D9AA1CCC-065C-4DFE-A078-908123401816",
                            "topics":[
                                {
                                    "title":"6.10.1 About This Tutorial",
                                    "href":"configuring-rule-sets.html#GUID-F84E9514-A74D-4354-AE2B-F9AEDBD77C36"
                                },
                                {
                                    "title":"6.10.2 Step 1: Create Users for This Tutorial",
                                    "href":"configuring-rule-sets.html#GUID-5EDF2BCE-C39C-4EF9-BF22-4814F22AA7E6"
                                },
                                {
                                    "title":"6.10.3 Step 2: Create a Function to Check if User patch_boss Is Logged In",
                                    "href":"configuring-rule-sets.html#GUID-572E823B-9551-4B15-BA7F-32E468E7D3ED"
                                },
                                {
                                    "title":"6.10.4 Step 3: Create Rules, a Rule Set, and a Command Rule to Control User Access",
                                    "href":"configuring-rule-sets.html#GUID-312BAFD1-5704-430E-A6CE-311E47D4F042"
                                },
                                {
                                    "title":"6.10.5 Step 4: Test the Users' Access",
                                    "href":"configuring-rule-sets.html#GUID-B09ABAAA-AE06-458B-8FF2-A41A99ED672D"
                                },
                                {
                                    "title":"6.10.6 Step 5: Remove the Components for This Tutorial",
                                    "href":"configuring-rule-sets.html#GUID-200A09DC-119E-40B1-B42B-2176ED117772"
                                }
                            ]
                        },
                        {
                            "title":"6.11 Guidelines for Designing Rule Sets",
                            "href":"configuring-rule-sets.html#GUID-F99FE15B-869E-44CC-A6C4-CC9BACD6BE34"
                        },
                        {
                            "title":"6.12 How Rule Sets Affect Performance",
                            "href":"configuring-rule-sets.html#GUID-980369CA-666C-4E3A-8F90-572F7F34CEC7"
                        },
                        {
                            "title":"6.13 Rule Set and Rule Related Reports and Data Dictionary Views",
                            "href":"configuring-rule-sets.html#GUID-FABD139C-F858-40F8-AD5D-6089F517F2E7"
                        }
                    ]
                },
                {
                    "title":"7 Configuring Command Rules",
                    "href":"configuring-command-rules.html#GUID-8B7EABE6-66F7-4142-A32A-697CD185BCAB",
                    "topics":[
                        {
                            "title":"7.1 What Are Command Rules?",
                            "href":"configuring-command-rules.html#GUID-E0184EE3-EBBB-4680-B629-9BFD6161ADAF",
                            "topics":[
                                {
                                    "title":"7.1.1 About Command Rules",
                                    "href":"configuring-command-rules.html#GUID-FCBE368D-5F3A-4362-B81E-1B2E80BADEDD"
                                },
                                {
                                    "title":"7.1.2 Command Rules in a Multitenant Environment",
                                    "href":"configuring-command-rules.html#GUID-571C5AF1-909C-4A76-BE2B-9BAC5232FE84"
                                },
                                {
                                    "title":"7.1.3 Types of Command Rules",
                                    "href":"configuring-command-rules.html#GUID-4170DDDD-C26C-4B78-AF7E-1F8A4E8324B7",
                                    "topics":[
                                        {
                                            "title":"7.1.3.1 CONNECT Command Rule",
                                            "href":"configuring-command-rules.html#GUID-6904ABAF-EB19-402B-BE4E-87C06FDA0F8C"
                                        },
                                        {
                                            "title":"7.1.3.2 ALTER SESSION and ALTER SYSTEM Command Rules",
                                            "href":"configuring-command-rules.html#GUID-1880A901-0657-4BEA-B748-2B0A1D8CC017"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"7.2 Default Command Rules",
                            "href":"configuring-command-rules.html#GUID-D0AC52BD-9878-4FAF-9EE4-81AAB85F4376"
                        },
                        {
                            "title":"7.3 SQL Statements That Can Be Protected by Command Rules",
                            "href":"configuring-command-rules.html#GUID-2E806432-DD80-463E-A802-2BBB36EEED40"
                        },
                        {
                            "title":"7.4 Creating a Command Rule",
                            "href":"configuring-command-rules.html#GUID-BAF4C198-A92B-48D1-BEF5-0AF345165C7C"
                        },
                        {
                            "title":"7.5 Modifying the Enablement Status of a Command Rule",
                            "href":"configuring-command-rules.html#GUID-7A7E40AB-6C1A-49D5-B4FA-16E075866077"
                        },
                        {
                            "title":"7.6 Deleting a Command Rule",
                            "href":"configuring-command-rules.html#GUID-F41B0357-59FA-4EA5-A7D0-16AF93B58105"
                        },
                        {
                            "title":"7.7 How Command Rules Work",
                            "href":"configuring-command-rules.html#GUID-725071B1-17AF-43FD-936E-3586FF15FF33"
                        },
                        {
                            "title":"7.8 Tutorial: Using a Command Rule to Control Table Creations by a User",
                            "href":"configuring-command-rules.html#GUID-946EE4C3-1555-43E0-84F6-C74F8B80EF74",
                            "topics":[
                                {
                                    "title":"7.8.1 Step 1: Create a Table",
                                    "href":"configuring-command-rules.html#GUID-C0334767-0B1F-4172-9076-527B42D68F78"
                                },
                                {
                                    "title":"7.8.2 Step 2: Create a Command Rule",
                                    "href":"configuring-command-rules.html#GUID-547E874F-B4A5-4F23-B090-B11FF42F3B7A"
                                },
                                {
                                    "title":"7.8.3 Step 3: Test the Command Rule",
                                    "href":"configuring-command-rules.html#GUID-13831052-DD9E-4895-8EF8-26E353B4DCE2"
                                },
                                {
                                    "title":"7.8.4 Step 4: Remove the Components for this Tutorial",
                                    "href":"configuring-command-rules.html#GUID-68B15658-8316-4569-9DA3-D2BDB9408C5E"
                                }
                            ]
                        },
                        {
                            "title":"7.9 Guidelines for Designing Command Rules",
                            "href":"configuring-command-rules.html#GUID-9D6645BC-F4F7-44CC-95F9-D7DA85771477"
                        },
                        {
                            "title":"7.10 How Command Rules Affect Performance",
                            "href":"configuring-command-rules.html#GUID-C324D4D9-B66B-4A6F-8159-120C3E322426"
                        },
                        {
                            "title":"7.11 Command Rule Related Reports and Data Dictionary View",
                            "href":"configuring-command-rules.html#GUID-C1CE7C50-84E0-4E08-B60B-89D13769B66E"
                        }
                    ]
                },
                {
                    "title":"8 Configuring Factors",
                    "href":"configuring-factors.html#GUID-26DF59FF-D0BF-496A-8D5B-6B2B6AC99822",
                    "topics":[
                        {
                            "title":"8.1 What Are Factors?",
                            "href":"configuring-factors.html#GUID-B8410E32-B6A5-4850-9FDB-9B31018FE95F"
                        },
                        {
                            "title":"8.2 Default Factors",
                            "href":"configuring-factors.html#GUID-F4B06A72-933C-43B6-82CC-B7273B7F2696"
                        },
                        {
                            "title":"8.3 Creating a Factor",
                            "href":"configuring-factors.html#GUID-84E260F7-FB2E-490A-997F-DDD7F4BD220A",
                            "topics":[
                                {
                                    "title":"8.3.1 Accessing the Create Factors Page",
                                    "href":"configuring-factors.html#GUID-4DBC72EA-1308-4569-B9F6-462F349B0B09"
                                },
                                {
                                    "title":"8.3.2 Completing the General Page for Factor Creation",
                                    "href":"configuring-factors.html#GUID-45162827-2A09-4C62-BBFD-5710685583D9"
                                },
                                {
                                    "title":"8.3.3 Configurations Page for Factor Creation",
                                    "href":"configuring-factors.html#GUID-9AE18686-4A5C-4462-BBC7-CCA120887D30",
                                    "topics":[
                                        {
                                            "title":"8.3.3.1 Setting the Factor Identification Information",
                                            "href":"configuring-factors.html#GUID-6FD3B138-AAFB-455A-B9F6-5F58CD06219E"
                                        },
                                        {
                                            "title":"8.3.3.2 How Factor Identities Work",
                                            "href":"configuring-factors.html#GUID-8C84E045-A973-4E90-9682-6A607BE745D0"
                                        },
                                        {
                                            "title":"8.3.3.3 Setting the Evaluation Information for a Factor",
                                            "href":"configuring-factors.html#GUID-46146713-138D-4C56-A624-0E7C8D9EE221"
                                        },
                                        {
                                            "title":"8.3.3.4 Setting the Oracle Label Security Labeling Information for a Factor",
                                            "href":"configuring-factors.html#GUID-76A0178F-E6EB-4589-B908-C96071CFCCCE"
                                        },
                                        {
                                            "title":"8.3.3.5 Setting the Retrieval Method for a Factor",
                                            "href":"configuring-factors.html#GUID-9B14F55D-CE57-48FA-9BD5-0D9E551E77D6"
                                        },
                                        {
                                            "title":"8.3.3.6 How Retrieval Methods Work",
                                            "href":"configuring-factors.html#GUID-402C3F02-8F7F-4FB8-BA2B-0C8AC07D9F3E"
                                        },
                                        {
                                            "title":"8.3.3.7 Setting the Validation Method for a Factor",
                                            "href":"configuring-factors.html#GUID-24020798-C139-4BF2-8E3C-1CD2EB6BCDC9"
                                        }
                                    ]
                                },
                                {
                                    "title":"8.3.4 Options Page of Factor Creation",
                                    "href":"configuring-factors.html#GUID-C66D5BDA-2AE4-433E-ABFC-6C04561B4683",
                                    "topics":[
                                        {
                                            "title":"8.3.4.1 Assigning a Rule Set to a Factor",
                                            "href":"configuring-factors.html#GUID-37860E55-BDD7-48D7-9842-979858E19817"
                                        },
                                        {
                                            "title":"8.3.4.2 Setting Error Options for a Factor",
                                            "href":"configuring-factors.html#GUID-9BF6F8E1-69E0-44FF-819C-30B41CF97259"
                                        },
                                        {
                                            "title":"8.3.4.3 Setting Audit Options for a Factor",
                                            "href":"configuring-factors.html#GUID-D4BA8031-3ED5-4274-AA21-E6B7B7B1076E"
                                        },
                                        {
                                            "title":"8.3.4.4 How Factor Auditing Works",
                                            "href":"configuring-factors.html#GUID-98E4446D-4283-42A9-A739-90253C723F60"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"8.4 Adding an Identity to a Factor",
                            "href":"configuring-factors.html#GUID-3317EBF9-3261-4D4C-8E46-51700CBEC4EA",
                            "topics":[
                                {
                                    "title":"8.4.1 About Factor Identities",
                                    "href":"configuring-factors.html#GUID-36900DF7-CA06-49B7-B97B-2C0BE9614734"
                                },
                                {
                                    "title":"8.4.2 About Trust Levels",
                                    "href":"configuring-factors.html#GUID-6C6DCCB1-50BA-4B02-ABA7-D4AA3E5BB01C"
                                },
                                {
                                    "title":"8.4.3 About Label Identities",
                                    "href":"configuring-factors.html#GUID-F267392C-0157-44EA-8FDC-124D2BA50F4A"
                                },
                                {
                                    "title":"8.4.4 Creating and Configuring a Factor Identity",
                                    "href":"configuring-factors.html#GUID-AA6DA56D-EE20-4BB7-AB59-18466A7E8EF0"
                                },
                                {
                                    "title":"8.4.5 Deleting a Factor Identity",
                                    "href":"configuring-factors.html#GUID-69BF3FBE-84D3-43DF-B9FE-22D4BC63059C"
                                },
                                {
                                    "title":"8.4.6 Using Identity Mapping to Configure an Identity to Use Other Factors",
                                    "href":"configuring-factors.html#GUID-08304327-0072-4170-AC13-CBE1DDB6D136",
                                    "topics":[
                                        {
                                            "title":"8.4.6.1 About Identity Mapping",
                                            "href":"configuring-factors.html#GUID-4112AA85-F3B4-4FF5-9548-639D662D6181"
                                        },
                                        {
                                            "title":"8.4.6.2 Mapping an Identity to a Factor",
                                            "href":"configuring-factors.html#GUID-37F292BD-C4E4-4CB9-A3F7-D3498E6279FF"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"8.5 Deleting a Factor",
                            "href":"configuring-factors.html#GUID-7330B098-C9AB-4C28-848D-27CA6BA5B2C5"
                        },
                        {
                            "title":"8.6 How Factors Work",
                            "href":"configuring-factors.html#GUID-E1D7B84F-57AD-4FBA-B99F-47E3BC64B91F",
                            "topics":[
                                {
                                    "title":"8.6.1 How Factors Are Processed When a Session Is Established",
                                    "href":"configuring-factors.html#GUID-D2CECCAD-CB9D-46D6-88DE-63E2D363936D"
                                },
                                {
                                    "title":"8.6.2 How Factors Are Retrieved",
                                    "href":"configuring-factors.html#GUID-1F1BF07B-5453-4362-8BF6-6C70A7A7E492"
                                },
                                {
                                    "title":"8.6.3 How Factors Are Set",
                                    "href":"configuring-factors.html#GUID-5334920A-604E-47A8-B265-BBE51097E022"
                                }
                            ]
                        },
                        {
                            "title":"8.7 Tutorial: Preventing Ad Hoc Tool Access to the Database",
                            "href":"configuring-factors.html#GUID-9A320C0A-12D7-4414-B79F-512AD76FF436",
                            "topics":[
                                {
                                    "title":"8.7.1 About This Tutorial",
                                    "href":"configuring-factors.html#GUID-AD2CE5EE-5A68-4075-9BA1-9DCC36141012"
                                },
                                {
                                    "title":"8.7.2 Step 1: Enable the HR and OE User Accounts",
                                    "href":"configuring-factors.html#GUID-D44A9156-1FC6-4063-8771-3801002354BC"
                                },
                                {
                                    "title":"8.7.3 Step 2: Create the Factor",
                                    "href":"configuring-factors.html#GUID-E97E3E83-24B2-4DA7-9A65-D5733CCE5EAB"
                                },
                                {
                                    "title":"8.7.4 Step 3: Create the Rule Set and Rules",
                                    "href":"configuring-factors.html#GUID-7B61A799-BAD1-4A5D-97D3-1FCBEED81180"
                                },
                                {
                                    "title":"8.7.5 Step 4: Create the CONNECT Command Rule",
                                    "href":"configuring-factors.html#GUID-869EE4FA-3C9E-4C6D-9D59-AC32B0C776B4"
                                },
                                {
                                    "title":"8.7.6 Step 5: Test the Ad Hoc Tool Access Restriction",
                                    "href":"configuring-factors.html#GUID-506DBBB2-CC2D-42AF-9A98-8BCBCCB4EF7A"
                                },
                                {
                                    "title":"8.7.7 Step 6: Remove the Components for This Tutorial",
                                    "href":"configuring-factors.html#GUID-8049D286-C6D9-4355-8139-D1D470AAB14E"
                                }
                            ]
                        },
                        {
                            "title":"8.8 Tutorial: Restricting User Activities Based on Session Data",
                            "href":"configuring-factors.html#GUID-33BAA236-2C0E-49AB-803A-89A3C2945A8B",
                            "topics":[
                                {
                                    "title":"8.8.1 About This Tutorial",
                                    "href":"configuring-factors.html#GUID-6122D69D-91A3-40AC-8012-AACDDAC33D27"
                                },
                                {
                                    "title":"8.8.2 Step 1: Create an Administrative User",
                                    "href":"configuring-factors.html#GUID-EDE5443B-0ADA-4AE3-B2F8-DAC02697FF07"
                                },
                                {
                                    "title":"8.8.3 Step 2: Add Identities to the Domain Factor",
                                    "href":"configuring-factors.html#GUID-4EA09558-D730-4851-A1F1-C6D8D85C9353"
                                },
                                {
                                    "title":"8.8.4 Step 3: Map the Domain Factor Identities to the Client_IP Factor",
                                    "href":"configuring-factors.html#GUID-8D459AAC-2F56-46F6-9C45-8347DBC4468F"
                                },
                                {
                                    "title":"8.8.5 Step 4: Create a Rule Set to Set the Hours and Select the Factor Identity",
                                    "href":"configuring-factors.html#GUID-A89A6D8D-78AD-49B9-AFEC-18F42BB13DAC"
                                },
                                {
                                    "title":"8.8.6 Step 5: Create a Command Rule That Uses the Rule Set",
                                    "href":"configuring-factors.html#GUID-33FD3BD0-72EF-43BC-924E-4CA79BA88192"
                                },
                                {
                                    "title":"8.8.7 Step 6: Test the Factor Identity Settings",
                                    "href":"configuring-factors.html#GUID-A2B6E7D8-CAA3-44BE-8904-0CF157898960"
                                },
                                {
                                    "title":"8.8.8 Step 7: Remove the Components for This Tutorial",
                                    "href":"configuring-factors.html#GUID-0F089748-289A-455B-B22A-DE3952789A51"
                                }
                            ]
                        },
                        {
                            "title":"8.9 Guidelines for Designing Factors",
                            "href":"configuring-factors.html#GUID-F197EA7C-8AC2-4D7B-B5CB-7326CA1FABA7"
                        },
                        {
                            "title":"8.10 How Factors Affect Performance",
                            "href":"configuring-factors.html#GUID-F6EB02AD-18A4-4005-B3AA-89B23F31AC6B"
                        },
                        {
                            "title":"8.11 Factor Related Reports and Data Dictionary Views",
                            "href":"configuring-factors.html#GUID-1404DAD0-47FD-46D8-946F-1685C1AD5ADA"
                        }
                    ]
                },
                {
                    "title":"9 Configuring Secure Application Roles for Oracle Database Vault",
                    "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-0437CB04-FC81-493C-A7ED-5CD491FFC024",
                    "topics":[
                        {
                            "title":"9.1 What Are Secure Application Roles in Oracle Database Vault?",
                            "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-20D2A641-03F6-4A41-9A2A-8F11D160A4F7"
                        },
                        {
                            "title":"9.2 Creating an Oracle Database Vault Secure Application Role",
                            "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-8A9D72CA-C52B-4AF8-A06B-65BE211AD3B2"
                        },
                        {
                            "title":"9.3 Modifications to a Secure Application Role",
                            "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-D1C9E3FF-9BAF-4806-979B-BD0D0DD92BBA"
                        },
                        {
                            "title":"9.4 Security for Oracle Database Vault Secure Application Roles",
                            "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-1E7788B6-B301-4570-BCCF-859277CF1274"
                        },
                        {
                            "title":"9.5 Deleting an Oracle Database Vault Secure Application Role",
                            "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-C7552E7B-C132-4013-8E22-C0EF9808A45F"
                        },
                        {
                            "title":"9.6 How Oracle Database Vault Secure Application Roles Work",
                            "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-E0321D4A-F8E1-4CA1-B1AD-BC03CE55438A"
                        },
                        {
                            "title":"9.7 Tutorial: Granting Access with Database Vault Secure Application Roles",
                            "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-06C5F719-3274-4920-8C50-18D8A7B4CCF9",
                            "topics":[
                                {
                                    "title":"9.7.1 About This Tutorial",
                                    "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-CA8B5302-285F-4B75-99FE-E9033328CF56"
                                },
                                {
                                    "title":"9.7.2 Step 1: Create Users for This Tutorial",
                                    "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-BA542D36-D2E3-41B8-9BE4-43C3D177BBCC"
                                },
                                {
                                    "title":"9.7.3 Step 2: Enable the OE User Account",
                                    "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-24996D04-1749-4568-AEE9-25E3705C003F"
                                },
                                {
                                    "title":"9.7.4 Step 3: Create the Rule Set and Its Rules",
                                    "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-69285578-3C53-44F0-8162-C1D9F85828F4"
                                },
                                {
                                    "title":"9.7.5 Step 4: Create the Database Vault Secure Application Role",
                                    "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-A92E9447-9F4E-4127-83C3-F787BC78C293"
                                },
                                {
                                    "title":"9.7.6 Step 5: Grant the SELECT Privilege to the Secure Application Role",
                                    "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-30FA54A6-F03B-4E1D-80BD-CA12BDF3E19F"
                                },
                                {
                                    "title":"9.7.7 Step 6: Test the Database Vault Secure Application Role",
                                    "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-0B6098AC-133C-4F7C-ABE8-C814D506F4CF"
                                },
                                {
                                    "title":"9.7.8 Step 7: Remove the Components for This Tutorial",
                                    "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-D7C5C767-5C51-405B-AF6E-9D0455EF1458"
                                }
                            ]
                        },
                        {
                            "title":"9.8 How Secure Application Roles Affect Performance",
                            "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-5A165927-F7A9-4439-800E-128B227FED98"
                        },
                        {
                            "title":"9.9 Secure Application Role Related Reports and Data Dictionary View",
                            "href":"configuring-secure-application-roles-for-oracle-database-vault.html#GUID-68A9701B-FF2A-44ED-82A2-F9A568D1FECC"
                        }
                    ]
                },
                {
                    "title":"10 Configuring Oracle Database Vault Policies",
                    "href":"configuring-oracle-database-vault-policies.html#GUID-102AA877-C0E4-4EC9-8E01-D505C1BF7F05",
                    "topics":[
                        {
                            "title":"10.1 What Are Database Vault Policies?",
                            "href":"configuring-oracle-database-vault-policies.html#GUID-3541786D-5D99-4E42-B432-251475BDD6F3",
                            "topics":[
                                {
                                    "title":"10.1.1 About Oracle Database Vault Policies",
                                    "href":"configuring-oracle-database-vault-policies.html#GUID-4831AD51-053C-421A-9CA0-A301E72F4C3B"
                                },
                                {
                                    "title":"10.1.2 Oracle Database Vault Policies in a Multitenant Environment",
                                    "href":"configuring-oracle-database-vault-policies.html#GUID-07513135-CB45-4788-A596-E5A71879BB81"
                                }
                            ]
                        },
                        {
                            "title":"10.2 Default Oracle Database Vault Policies",
                            "href":"configuring-oracle-database-vault-policies.html#GUID-8BA8082F-59E1-48E8-8AF4-E791E4095397"
                        },
                        {
                            "title":"10.3 Creating an Oracle Database Policy",
                            "href":"configuring-oracle-database-vault-policies.html#GUID-60C64B36-8A6E-494E-A655-82A8040DA374"
                        },
                        {
                            "title":"10.4 Modifying an Oracle Database Vault Policy",
                            "href":"configuring-oracle-database-vault-policies.html#GUID-78BA4B4B-F3E0-4735-B4D7-C70A56E828BA"
                        },
                        {
                            "title":"10.5 Deleting an Oracle Database Vault Policy",
                            "href":"configuring-oracle-database-vault-policies.html#GUID-1085290C-C3AB-483D-8D37-9C1E244AB8F2"
                        },
                        {
                            "title":"10.6 Related Data Dictionary Views",
                            "href":"configuring-oracle-database-vault-policies.html#GUID-2E6A0340-CA19-4EC6-8187-186499DB83D6"
                        }
                    ]
                },
                {
                    "title":"11 Using Simulation Mode for Logging Realm and Command Rule Activities",
                    "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-23CA88C2-C52C-4676-8564-2395898BECE7",
                    "topics":[
                        {
                            "title":"11.1 About Simulation Mode",
                            "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-FE4E06E7-42E3-4743-8750-83D9B5ED0723"
                        },
                        {
                            "title":"11.2 Simulation Mode Use Cases",
                            "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-8E572333-F101-4BCE-A89C-AFE1A83728C2"
                        },
                        {
                            "title":"11.3 Tutorial: Tracking Violations to a Realm Using Simulation Mode",
                            "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-8BB95940-7D8D-4AEB-9A53-246BA2AEED4C",
                            "topics":[
                                {
                                    "title":"11.3.1 About This Tutorial",
                                    "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-A7AE4EB7-B00A-42E1-BCFD-D914BD36F8A3"
                                },
                                {
                                    "title":"11.3.2 Step 1: Create Users for This Tutorial",
                                    "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-A33AA63A-9DC2-4482-92E8-714823CC965F"
                                },
                                {
                                    "title":"11.3.3 Step 2: Create a Realm and an Oracle Database Vault Policy",
                                    "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-6AE7A50C-6498-4D86-8EC4-537E30920482"
                                },
                                {
                                    "title":"11.3.4 Step 3: Test the Realm and Policy",
                                    "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-650EA278-861B-4F50-BAAF-1323621E491B"
                                },
                                {
                                    "title":"11.3.5 Step 4: Query the DBA_DV_SIMULATION_LOG View for Violations",
                                    "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-79944EF8-A802-4D5B-AC3F-302F926D9A35"
                                },
                                {
                                    "title":"11.3.6 Step 5: Enable and Re-test the Realm",
                                    "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-1D92ACE9-1FB6-404F-A026-AB62AA50353A"
                                },
                                {
                                    "title":"11.3.7 Step 6: Remove the Components for This Tutorial",
                                    "href":"using-training-mode-to-log-realm-and-command-rule-activities.html#GUID-6D55E925-85AF-491A-9184-7E4D8636FC47"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"12 Integrating Oracle Database Vault with Other Oracle Products",
                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-7C21AF42-A71B-4AB2-8462-015B8D121B89",
                    "topics":[
                        {
                            "title":"12.1 Integrating Oracle Database Vault with Enterprise User Security",
                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-2B912CB6-3FCA-4409-BC54-6BA94C347036",
                            "topics":[
                                {
                                    "title":"12.1.1 About Integrating Oracle Database Vault with Enterprise User Security",
                                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-29F177A7-8879-4604-A585-68ACA0A16CBD"
                                },
                                {
                                    "title":"12.1.2 Configuring an Enterprise User Authorization",
                                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-D8D49DD6-F4E3-47D0-9D81-EE4703FA6FDB"
                                }
                            ]
                        },
                        {
                            "title":"12.2 Configuring Oracle Database Vault Accounts as Enterprise User Accounts",
                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-9322A3F3-F45B-42B3-8A00-56FABE7680DE"
                        },
                        {
                            "title":"12.3 Integration of Oracle Database Vault with Transparent Data Encryption",
                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-7E5965E6-DEB6-4C2B-8CF5-A964B2838FBD"
                        },
                        {
                            "title":"12.4 Attaching Factors to an Oracle Virtual Private Database",
                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-D8B2D28A-2AAC-4A6F-9D82-A5347FA6D571"
                        },
                        {
                            "title":"12.5 Integrating Oracle Database Vault with Oracle Label Security",
                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-41CF584E-84D5-4912-A113-043D52C9EF06",
                            "topics":[
                                {
                                    "title":"12.5.1 How Oracle Database Vault Is Integrated with Oracle Label Security",
                                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-8A57F01A-478C-4593-8AF0-41BFF76A7153"
                                },
                                {
                                    "title":"12.5.2 Requirements for Using Oracle Database Vault with Oracle Label Security",
                                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-C1EF7351-82DB-4838-B5D0-0E4F86747941"
                                },
                                {
                                    "title":"12.5.3 Using Oracle Database Vault Factors with Oracle Label Security Policies",
                                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-8B571D38-9687-45F3-9BE2-A774CB485505",
                                    "topics":[
                                        {
                                            "title":"12.5.3.1 About Using Oracle Database Vault Factors with Oracle Label Security Policies",
                                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-0BBA139A-D9F7-4BEA-ABD7-38EAAB211109"
                                        },
                                        {
                                            "title":"12.5.3.2 Configuring Factors to Work with an Oracle Label Security Policy",
                                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-50A085F4-3384-48F3-AF22-FA5D52519F72"
                                        }
                                    ]
                                },
                                {
                                    "title":"12.5.4 Tutorial: Integrating Oracle Database Vault with Oracle Label Security",
                                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-8C427946-4091-4301-9003-B44A213567DC",
                                    "topics":[
                                        {
                                            "title":"12.5.4.1 About This Tutorial",
                                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-C67E86DA-2977-46B1-B09A-A605B91A0A37"
                                        },
                                        {
                                            "title":"12.5.4.2 Step 1: Create Users for This Tutorial",
                                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-B906B8F8-C180-429A-ADB2-0FEEFE483603"
                                        },
                                        {
                                            "title":"12.5.4.3 Step 2: Create the Oracle Label Security Policy",
                                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-118659AC-4ACD-45D8-B464-5025EBC687EB"
                                        },
                                        {
                                            "title":"12.5.4.4 Step 3: Create Oracle Database Vault Rules to Control the OLS Authorization",
                                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-6FFBA3B3-BB30-4898-BB01-55416EA7F617"
                                        },
                                        {
                                            "title":"12.5.4.5 Step 4: Update the ALTER SYSTEM Command Rule to Use the Rule Set",
                                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-927FA214-FF3F-4328-8E55-16A35AD28E51"
                                        },
                                        {
                                            "title":"12.5.4.6 Step 5: Test the Authorizations",
                                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-7C997F97-9BC9-41B4-9A4F-0385CBEFA2F0"
                                        },
                                        {
                                            "title":"12.5.4.7 Step 6: Remove the Components for This Tutorial",
                                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-326B01A3-AA35-49CE-8CDA-5A3C18E160C0"
                                        }
                                    ]
                                },
                                {
                                    "title":"12.5.5 Related Reports and Data Dictionary Views",
                                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-E262B916-02A0-4568-8898-61EC43BF824F"
                                }
                            ]
                        },
                        {
                            "title":"12.6 Integrating Oracle Database Vault with Oracle Data Guard",
                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-1C6479B9-3AD7-423F-B978-3D18CFD9BA5B",
                            "topics":[
                                {
                                    "title":"12.6.1 Step 1: Configure the Primary Database",
                                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-849CCA64-93FF-4F8B-9DAD-3999D65D5B2C"
                                },
                                {
                                    "title":"12.6.2 Step 2: Configure the Standby Database",
                                    "href":"integrating-database-vault-with-other-oracle-products.html#GUID-5B31C355-03C1-4FAD-A190-03B54EB20B88"
                                }
                            ]
                        },
                        {
                            "title":"12.7 Registering Oracle Internet Directory Using Oracle Database Configuration Asssitant",
                            "href":"integrating-database-vault-with-other-oracle-products.html#GUID-C7A100F0-DAC5-4866-9B25-755B36CA44F5"
                        }
                    ]
                },
                {
                    "title":"13 DBA Operations in an Oracle Database Vault Environment",
                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-17665902-E9F9-479A-B60A-29853672BB2B",
                    "topics":[
                        {
                            "title":"13.1 Using Oracle Database Vault with Oracle Enterprise Manager",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-990B6C45-901E-46B5-B5B2-0CE24C3ED42E",
                            "topics":[
                                {
                                    "title":"13.1.1 Propagating Oracle Database Vault Configurations to Other Databases",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-199489A3-6050-4A5C-8144-B85E62E92D58"
                                },
                                {
                                    "title":"13.1.2 Enterprise Manager Cloud Control Alerts for Oracle Database Vault Policies",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-FD0ACE67-0F10-4541-A67B-5C7534BAB26B"
                                },
                                {
                                    "title":"13.1.3 Oracle Database Vault-Specific Reports in Enterprise Manager Cloud Control",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-1AD5B037-33D3-41BF-A0BA-0DB21759A237"
                                },
                                {
                                    "title":"13.1.4 Changing the DBSNMP Account Password in a Database Vault Environment",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-A395212A-DFCF-4607-88A8-7F1D7FB5F6B4"
                                }
                            ]
                        },
                        {
                            "title":"13.2 Using Oracle Data Pump with Oracle Database Vault",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-F43AB786-056D-4875-A555-F036D75EE63B",
                            "topics":[
                                {
                                    "title":"13.2.1 About Using Oracle Data Pump with Oracle Database Vault",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-B686B999-6A7D-4EEA-838F-3DCB684D393B"
                                },
                                {
                                    "title":"13.2.2 Authorizing Users for Data Pump Regular Export and Import Operations",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-FAFC06B4-CE1A-4A26-9B3B-F55566E1431D",
                                    "topics":[
                                        {
                                            "title":"13.2.2.1 About Authorizing Users for Oracle Data Pump Regular Operations",
                                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-6BF79D85-CB29-44F7-BAAC-12291AE6C718"
                                        },
                                        {
                                            "title":"13.2.2.2 Levels of Database Vault Authorization for Oracle Data Pump Regular Operations",
                                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-02497FDC-C4AE-4D64-AD38-E2B31607239E"
                                        },
                                        {
                                            "title":"13.2.2.3 Authorizing Users for Oracle Data Pump Regular Operations in Database Vault",
                                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-BE236503-9FC0-4AFA-BA6F-F02BD16552FA"
                                        },
                                        {
                                            "title":"13.2.2.4 Revoking Oracle Data Pump Authorization from Users",
                                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-4E0B05C8-9CE2-44A3-97CE-83D29011D19C"
                                        }
                                    ]
                                },
                                {
                                    "title":"13.2.3 Authorizing Users for Data Pump Transportable Export and Import Operations",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-5D8EA9C8-AA46-4DFF-BA8F-A69A4B9C2EEE",
                                    "topics":[
                                        {
                                            "title":"13.2.3.1 About Authorizing Users for Oracle Data Pump Transportable Operations",
                                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-50DD4721-514B-4F54-B6AD-A843BF94AD06"
                                        },
                                        {
                                            "title":"13.2.3.2 Levels of Database Vault Authorization for Data Pump Transportable Operations",
                                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-83A4A1B8-33C7-442B-8CE1-5E4A1113C361"
                                        },
                                        {
                                            "title":"13.2.3.3 Authorizing Users for Data Pump Transportable Operations in Database Vault",
                                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-D8BA77F1-297A-4E5B-BC6E-848B7B35A246"
                                        },
                                        {
                                            "title":"13.2.3.4 Revoking Transportable Tablespace Authorization from Users",
                                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-0CDADB19-E938-407C-A0D8-6994B2F1A1FD"
                                        }
                                    ]
                                },
                                {
                                    "title":"13.2.4 Guidelines for Exporting or Importing Data in a Database Vault Environment",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-182867A6-4CF5-447C-A4B7-FB7CC24D3CC2"
                                }
                            ]
                        },
                        {
                            "title":"13.3 Using Oracle Scheduler with Oracle Database Vault",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-7B4B7730-24EC-4346-A8EF-536204F1E07D",
                            "topics":[
                                {
                                    "title":"13.3.1 About Using Oracle Scheduler with Oracle Database Vault",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-8232EB36-8AFA-4ABE-822B-7CEDC951923F"
                                },
                                {
                                    "title":"13.3.2 Granting a Job Scheduling Administrator Authorization for Database Vault",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-87F554B8-CE24-4A0B-9D40-543BB5A445B5"
                                },
                                {
                                    "title":"13.3.3 Revoking Authorization from Job Scheduling Administrators",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-35676820-CF9D-40B4-95CA-16E3145F0C6D"
                                }
                            ]
                        },
                        {
                            "title":"13.4 Using Information Lifecycle Management with Oracle Database Vault",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-886F7C9A-74A1-476F-85A4-300269EAF5CA",
                            "topics":[
                                {
                                    "title":"13.4.1 About Using Information Lifecycle Management with Oracle Database Vault",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-B5EBD53A-EE33-41DB-B47C-0738C3860627"
                                },
                                {
                                    "title":"13.4.2 Authorizing Users for ILM Operations in Database Vault",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-E3517B32-D4A3-4AEE-906B-54F4840A89BD"
                                },
                                {
                                    "title":"13.4.3 Revoking Information Lifecycle Management Authorization from Users",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-5BAD5E50-F9E3-4CC3-B29E-E14067B9D248"
                                }
                            ]
                        },
                        {
                            "title":"13.5 Oracle Recovery Manager and Oracle Database Vault",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-BC8B8432-223A-49CF-B215-4E0938CAF1FA"
                        },
                        {
                            "title":"13.6 Privileges for Using Oracle Streams with Oracle Database Vault",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-702D094B-8308-4955-9ADA-267D18B08A46"
                        },
                        {
                            "title":"13.7 Privileges for Using XStream with Oracle Database Vault",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-83F623CD-C0CC-47BB-8CF9-1F55DE44C7A3"
                        },
                        {
                            "title":"13.8 Privileges for Using Oracle GoldenGate in with Oracle Database Vault",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-8BC01B07-01AE-4973-9E72-BD637D773D01"
                        },
                        {
                            "title":"13.9 Using Data Masking in an Oracle Database Vault Environment",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-D2913E58-F3D7-4D6D-8997-8DACF943C4EA",
                            "topics":[
                                {
                                    "title":"13.9.1 About Data Masking in an Oracle Database Vault Enabled Database",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-028612C3-3282-4257-9228-9E569B2AF911"
                                },
                                {
                                    "title":"13.9.2 Adding Data Masking Users to the Data Dictionary Realm Authorizations",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-C34967BE-39C4-4354-9DC4-2D2F5C2E1822"
                                },
                                {
                                    "title":"13.9.3 Giving Users Access to Tables or Schemas That They Want to Mask",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-F79013E0-D11B-4868-A0B6-65CF488B3542"
                                },
                                {
                                    "title":"13.9.4 Creating a Command Rule to Control Data Masking Privileges",
                                    "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-E13C83CF-177D-469A-89A2-1842AA2C004F"
                                }
                            ]
                        },
                        {
                            "title":"13.10 Converting a Standalone Oracle Database to a PDB and Plugging It into a CDB",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-517E9611-546B-43D9-8C54-37037AF0B198"
                        },
                        {
                            "title":"13.11 Using the ORADEBUG Utility with Oracle Database Vault",
                            "href":"dba-operations-in-an-oracle-database-vault-environment.html#GUID-C962017D-313C-4AD8-85D5-B0772DAC3313"
                        }
                    ]
                },
                {
                    "title":"14 Oracle Database Vault Schemas, Roles, and Accounts",
                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-AD6F5807-3927-466F-BCFF-E82FDA912493",
                    "topics":[
                        {
                            "title":"14.1 Oracle Database Vault Schemas",
                            "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-42FBCF65-93FC-44D3-89C2-B4FB90A531BF",
                            "topics":[
                                {
                                    "title":"14.1.1 DVSYS Schema",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-4D275449-513A-4153-86EF-60620F2CD94D"
                                },
                                {
                                    "title":"14.1.2 DVF Schema",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-B19FC1C8-5798-407D-B18B-50F497CE92B5"
                                }
                            ]
                        },
                        {
                            "title":"14.2 Oracle Database Vault Roles",
                            "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-4E1707B4-F9BB-4131-9D3E-90BB273F2832",
                            "topics":[
                                {
                                    "title":"14.2.1 About Oracle Database Vault Roles",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-F9FF7E47-641E-45D3-8EF2-3EA6B9FFD6A3"
                                },
                                {
                                    "title":"14.2.2 Privileges of Oracle Database Vault Roles",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-A8CCEC01-912D-49FD-80E4-3D8667C677DC"
                                },
                                {
                                    "title":"14.2.3 Granting Oracle Database Vault Roles to Users",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-573E923C-4307-49FF-A70F-39B38F91BD86"
                                },
                                {
                                    "title":"14.2.4 DV_OWNER Database Vault Owner Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-DE2DF9A8-C96B-494E-B39B-4A5361D2D83E"
                                },
                                {
                                    "title":"14.2.5 DV_ADMIN Database Vault Configuration Administrator Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-5085A0DB-C217-4508-A5D0-212CDAEE0812"
                                },
                                {
                                    "title":"14.2.6 DV_MONITOR Database Vault Monitoring Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-E9E2DD03-9591-4BDC-B453-8E64E49623A4"
                                },
                                {
                                    "title":"14.2.7 DV_SECANALYST Database Vault Security Analyst Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-202E1F06-86D0-4307-93AF-A60AFDD0A4A5"
                                },
                                {
                                    "title":"14.2.8 DV_AUDIT_CLEANUP Audit Trail Cleanup Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-CB8CE1CF-E572-4BBB-8BAB-204107E7DAC2"
                                },
                                {
                                    "title":"14.2.9 DV_DATAPUMP_NETWORK_LINK Data Pump Network Link Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-2FBCA546-F12B-4AC7-B3C7-5DECC7740AD5"
                                },
                                {
                                    "title":"14.2.10 DV_STREAMS_ADMIN Oracle Streams Configuration Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-50E6727C-3C7E-4E03-96D0-4D91DC9BF7CC"
                                },
                                {
                                    "title":"14.2.11 DV_XSTREAM_ADMIN XStream Administrative Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-2EC5160C-E4AF-4A2B-AB47-4ED7D463AB2B"
                                },
                                {
                                    "title":"14.2.12 DV_GOLDENGATE_ADMIN GoldenGate Administrative Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-37C616E2-F56B-4A69-A971-FE07FC352A4D"
                                },
                                {
                                    "title":"14.2.13 DV_GOLDENGATE_REDO_ACCESS GoldenGate Redo Log Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-6C430465-D2AE-4FEF-AAF2-5D81A84E3039"
                                },
                                {
                                    "title":"14.2.14 DV_PATCH_ADMIN Database Vault Database Patch Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-0C1B6A4D-EB14-4C69-B569-2128BC66C24C"
                                },
                                {
                                    "title":"14.2.15 DV_ACCTMGR Database Vault Account Manager Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-BE9F1454-3798-4B2E-A07D-98A3B6263802"
                                },
                                {
                                    "title":"14.2.16 DV_REALM_OWNER Database Vault Realm DBA Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-1C133762-2C77-49A4-BE6F-7C81B0EE508A"
                                },
                                {
                                    "title":"14.2.17 DV_REALM_RESOURCE Database Vault Application Resource Owner Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-EC3C7AEE-FE5C-4662-A9DF-55A7CB03A37E"
                                },
                                {
                                    "title":"14.2.18 DV_POLICY_OWNER Database Vault Owner Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-2BC49B11-2BFC-4869-AB1D-95A088B6CCE1"
                                },
                                {
                                    "title":"14.2.19 DV_PUBLIC Database Vault PUBLIC Role",
                                    "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-E675C13D-8F06-49F2-AE31-2944CE8C37F5"
                                }
                            ]
                        },
                        {
                            "title":"14.3 Oracle Database Vault Accounts Created During Registration",
                            "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-F6CA47BC-B122-4FBD-B914-E5487FEF4F9F"
                        },
                        {
                            "title":"14.4 Backup Oracle Database Vault Accounts",
                            "href":"oracle-database-vault-schemas-roles-and-accounts.html#GUID-85DCF2C7-BC01-425E-AEDB-1326274713AC"
                        }
                    ]
                },
                {
                    "title":"15 Oracle Database Vault Realm APIs",
                    "href":"oracle-database-vault-realm-apis.html#GUID-8C2577B4-2DA0-4169-B801-0BA02A523CAB",
                    "topics":[
                        {
                            "title":"15.1 ADD_AUTH_TO_REALM Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-8722087E-3D68-4117-9662-57492E89A4A5"
                        },
                        {
                            "title":"15.2 ADD_OBJECT_TO_REALM Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-DC22AFAB-469F-40AD-865E-2FB89F81ACF0"
                        },
                        {
                            "title":"15.3 CREATE_REALM Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-06C598B8-EB92-4589-AF87-D1B3E0F63FB5"
                        },
                        {
                            "title":"15.4 DELETE_AUTH_FROM_REALM Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-13C89D28-138E-4678-8CEA-5994E30E694D"
                        },
                        {
                            "title":"15.5 DELETE_OBJECT_FROM_REALM Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-BBD12EDF-E5A2-4069-A77C-9604755633D9"
                        },
                        {
                            "title":"15.6 DELETE_REALM Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-B7A30EBE-BD46-45F8-BCC5-F68EF1602943"
                        },
                        {
                            "title":"15.7 DELETE_REALM_CASCADE Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-AA0DC626-32AA-4895-9C87-AE085E7B276E"
                        },
                        {
                            "title":"15.8 RENAME_REALM Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-A9EE5F18-26B1-453E-9BE2-5AE772995FD9"
                        },
                        {
                            "title":"15.9 UPDATE_REALM Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-BF3E996D-E9DD-4C70-B7BA-6E7F66AB4C12"
                        },
                        {
                            "title":"15.10 UPDATE_REALM_AUTH Procedure",
                            "href":"oracle-database-vault-realm-apis.html#GUID-AA9AF003-7473-4ACE-8518-5D787B5B5AF8"
                        }
                    ]
                },
                {
                    "title":"16 Oracle Database Vault Rule Set APIs",
                    "href":"oracle-database-vault-rule-set-apis.html#GUID-66E0EDFE-B4F0-4B5B-9657-B6C4737A37BF",
                    "topics":[
                        {
                            "title":"16.1 DBMS_MACADM Rule Set Procedures",
                            "href":"oracle-database-vault-rule-set-apis.html#GUID-1B24D370-46E3-445E-91CC-8E621F5E94CB",
                            "topics":[
                                {
                                    "title":"16.1.1 ADD_RULE_TO_RULE_SET Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-0549C094-EE0A-42E0-90B4-3FAF0A0304C3"
                                },
                                {
                                    "title":"16.1.2 CREATE_RULE Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-4AF93021-ECC4-497F-934D-CAE1D4022965"
                                },
                                {
                                    "title":"16.1.3 CREATE_RULE_SET Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-5CAD2D42-C5B5-48AD-B0D8-4CBD71B7B219"
                                },
                                {
                                    "title":"16.1.4 DELETE_RULE Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-A2A7354F-1593-46D2-A343-7638FF7DB0EE"
                                },
                                {
                                    "title":"16.1.5 DELETE_RULE_FROM_RULE_SET Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-318F7DA6-FAD3-49A5-A174-139BB06C8914"
                                },
                                {
                                    "title":"16.1.6 DELETE_RULE_SET Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-9BE707E1-1357-49F8-904C-AFE55C78C3C6"
                                },
                                {
                                    "title":"16.1.7 RENAME_RULE Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-C2F60720-7668-42A2-8E57-8FDA1CCBB1A9"
                                },
                                {
                                    "title":"16.1.8 RENAME_RULE_SET Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-B42D559E-3F95-4F0A-82D3-F0BF2F3207DE"
                                },
                                {
                                    "title":"16.1.9 UPDATE_RULE Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-658C2D27-D1B6-46B6-A7C2-A8D629BC9D0F"
                                },
                                {
                                    "title":"16.1.10 UPDATE_RULE_SET Procedure",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-6D99458F-A85A-462E-AA1E-B1970A265866"
                                }
                            ]
                        },
                        {
                            "title":"16.2 Oracle Database Vault PL/SQL Rule Set Functions",
                            "href":"oracle-database-vault-rule-set-apis.html#GUID-9CC41BCB-1335-4230-8547-977AD105E47B",
                            "topics":[
                                {
                                    "title":"16.2.1 DV_SYSEVENT Function",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-6F9F2F2D-B70A-447F-B576-FAF3B03A23B3"
                                },
                                {
                                    "title":"16.2.2 DV_LOGIN_USER Function",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-F872A37B-B9A5-45EB-B077-07A85C2DC7FF"
                                },
                                {
                                    "title":"16.2.3 DV_INSTANCE_NUM Function",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-40395C3C-7E0F-4996-9F9D-7893BC8AB287"
                                },
                                {
                                    "title":"16.2.4 DV_DATABASE_NAME Function",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-22366869-8D6D-4790-AD2D-A83B78D43D44"
                                },
                                {
                                    "title":"16.2.5 DV_DICT_OBJ_TYPE Function",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-6D45A09F-D723-4D74-8940-7D12F8A738A9"
                                },
                                {
                                    "title":"16.2.6 DV_DICT_OBJ_OWNER Function",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-5CF7BEC7-1C86-4B06-BBB7-589C4E044EF9"
                                },
                                {
                                    "title":"16.2.7 DV_DICT_OBJ_NAME Function",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-51733B80-15EF-4BE2-8894-84751B775B1A"
                                },
                                {
                                    "title":"16.2.8 DV_SQL_TEXT Function",
                                    "href":"oracle-database-vault-rule-set-apis.html#GUID-EB19D648-1D2A-48F4-AC2D-CBED52494EB2"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"17 Oracle Database Vault Command Rule APIs",
                    "href":"oracle-database-vault-command-rule-apis.html#GUID-3E699451-4226-4C5D-A538-9103F536DAE9",
                    "topics":[
                        {
                            "title":"17.1 CREATE_COMMAND_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-740E60B7-6CCC-45A6-A0EA-C1328274C33E"
                        },
                        {
                            "title":"17.2 CREATE_CONNECT_COMMAND_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-DEC3D88F-DCDC-410E-A9A5-60E98171CDB8"
                        },
                        {
                            "title":"17.3 CREATE_SESSION_EVENT_CMD_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-99D54F57-AA3C-4F7D-96D1-220055980A67"
                        },
                        {
                            "title":"17.4 CREATE_SYSTEM_EVENT_CMD_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-80F2B260-A0CB-42BF-9858-E6D62F2BA2D4"
                        },
                        {
                            "title":"17.5 DELETE_COMMAND_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-9ADEB302-D765-4263-94FF-C0F2F673CBBD"
                        },
                        {
                            "title":"17.6 DELETE_CONNECT_COMMAND_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-1C0BF944-9D0B-4887-A0FC-C30041A20955"
                        },
                        {
                            "title":"17.7 DELETE_SESSION_EVENT_CMD_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-9817AB6B-12F9-4EEC-9749-D0325FBB78FF"
                        },
                        {
                            "title":"17.8 DELETE_SYSTEM_EVENT_CMD_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-B8B0510E-FB28-4AA9-A00D-7B026246B4B2"
                        },
                        {
                            "title":"17.9 UPDATE_COMMAND_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-56E65214-A1A3-4767-AB44-27A42B49DE66"
                        },
                        {
                            "title":"17.10 UPDATE_CONNECT_COMMAND_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-4FA41214-9228-412E-95C0-ADCA1AED8992"
                        },
                        {
                            "title":"17.11 UPDATE_SESSION_EVENT_CMD_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-86A025A3-FB57-427A-8CA6-B15229C925F7"
                        },
                        {
                            "title":"17.12 UPDATE_SYSTEM_EVENT_CMD_RULE Procedure",
                            "href":"oracle-database-vault-command-rule-apis.html#GUID-D82857B5-9B06-4982-ACEE-31F257F531FE"
                        }
                    ]
                },
                {
                    "title":"18 Oracle Database Vault Factor APIs",
                    "href":"oracle-database-vault-factor-apis.html#GUID-75586A2C-ADCF-4421-A5C3-267E0AA878B2",
                    "topics":[
                        {
                            "title":"18.1 DBMS_MACADM Factor Procedures and Functions",
                            "href":"oracle-database-vault-factor-apis.html#GUID-D7C3A134-8B39-4352-AFCC-DDDE6DB5DC30",
                            "topics":[
                                {
                                    "title":"18.1.1 ADD_FACTOR_LINK Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-F35841F4-C794-4618-9ECE-A618B9B243BC"
                                },
                                {
                                    "title":"18.1.2 ADD_POLICY_FACTOR Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-7AE33268-E2F4-46A9-8D23-2A6037A2D72E"
                                },
                                {
                                    "title":"18.1.3 CHANGE_IDENTITY_FACTOR Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-060C06E1-1944-49E3-AE5B-93F35234D012"
                                },
                                {
                                    "title":"18.1.4 CHANGE_IDENTITY_VALUE Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-34D304CE-A849-478D-BB9B-1988E6E9725D"
                                },
                                {
                                    "title":"18.1.5 CREATE_DOMAIN_IDENTITY Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-1D947AC2-016A-48D4-9F7B-196FB34A74DA"
                                },
                                {
                                    "title":"18.1.6 CREATE_FACTOR Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-71E21519-329C-4AD7-A3CF-CEF99D27508F"
                                },
                                {
                                    "title":"18.1.7 CREATE_FACTOR_TYPE Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-1D626200-5B0D-43F6-B0DC-40419EE56A8D"
                                },
                                {
                                    "title":"18.1.8 CREATE_IDENTITY_MAP Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-A807562B-003B-407E-A199-B7F786C9B9EE"
                                },
                                {
                                    "title":"18.1.9 CREATE_IDENTITY Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-F9D0FBE3-8B5C-477A-B33B-537012E92347"
                                },
                                {
                                    "title":"18.1.10 DELETE_FACTOR Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-7B08DDB2-5717-445D-9EE9-3FFBAD6B04F2"
                                },
                                {
                                    "title":"18.1.11 DELETE_FACTOR_LINK Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-8FD7B34A-678D-4F0E-849F-390272279753"
                                },
                                {
                                    "title":"18.1.12 DELETE_IDENTITY Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-8234B10A-892B-4C6F-AA36-05D3FECB6CF0"
                                },
                                {
                                    "title":"18.1.13 DELETE_FACTOR_TYPE Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-2A4D9FF4-19DD-4A3C-9F5B-8A4AB309539D"
                                },
                                {
                                    "title":"18.1.14 DELETE_IDENTITY_MAP Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-C33B1AB7-370C-4794-A991-3D1AECC9ED7F"
                                },
                                {
                                    "title":"18.1.15 DROP_DOMAIN_IDENTITY Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-FF855ED6-475E-432E-AC5C-B4FDE871733F"
                                },
                                {
                                    "title":"18.1.16 GET_SESSION_INFO Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-D000DC83-22F9-499E-A498-4C41AE4DD521"
                                },
                                {
                                    "title":"18.1.17 GET_INSTANCE_INFO Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-38D5EAEA-6FBF-4107-AE61-27CCE699FBB0"
                                },
                                {
                                    "title":"18.1.18 RENAME_FACTOR Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-816069D9-2A54-47B9-A765-74603D997A18"
                                },
                                {
                                    "title":"18.1.19 RENAME_FACTOR_TYPE Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-34BB172D-8DE8-4229-830D-E3C425D474AB"
                                },
                                {
                                    "title":"18.1.20 UPDATE_FACTOR Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-660CE71C-D958-4662-981C-597712946215"
                                },
                                {
                                    "title":"18.1.21 UPDATE_FACTOR_TYPE Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-5B918D49-4616-4ABA-8A54-EE2AD54E58B8"
                                },
                                {
                                    "title":"18.1.22 UPDATE_IDENTITY Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-29BBC6D3-BBB0-425B-AC19-45B3699E536C"
                                }
                            ]
                        },
                        {
                            "title":"18.2 Oracle Database Vault Run-Time PL/SQL Procedures and Functions",
                            "href":"oracle-database-vault-factor-apis.html#GUID-CC99DA3D-72F9-400A-854B-FED379B07ABE",
                            "topics":[
                                {
                                    "title":"18.2.1 About Oracle Database Vault Run-Tine PL/SQL Procedures and Functions",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-6B106947-039F-4F3E-8AD0-AEB364045EA5"
                                },
                                {
                                    "title":"18.2.2 SET_FACTOR Procedure",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-F13ACDB5-6B68-46C0-B06A-6EB0E3D11DAE"
                                },
                                {
                                    "title":"18.2.3 GET_FACTOR Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-253D4921-7000-4F10-8A65-42C04E44BC0D"
                                },
                                {
                                    "title":"18.2.4 GET_FACTOR_LABEL Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-1D1F36F0-C44E-41DB-BC3F-FCB376C73953"
                                },
                                {
                                    "title":"18.2.5 GET_TRUST_LEVEL Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-B7BEB8E4-433F-4ADA-85C8-F6545E90822A"
                                },
                                {
                                    "title":"18.2.6 GET_TRUST_LEVEL_FOR_IDENTITY Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-91C90F0E-E57B-48B8-B480-52A38BA4681A"
                                },
                                {
                                    "title":"18.2.7 ROLE_IS_ENABLED Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-E6ED0531-83CE-4354-8DA4-00711986CCA9"
                                }
                            ]
                        },
                        {
                            "title":"18.3 Oracle Database Vault DVF PL/SQL Factor Functions",
                            "href":"oracle-database-vault-factor-apis.html#GUID-364245B9-C339-488A-8D49-B8B01B667857",
                            "topics":[
                                {
                                    "title":"18.3.1 About Oracle Database Vault DVF PL/SQL Factor Functions",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-E1ABAB7A-A21D-4884-9CD3-A5BB620C54B8"
                                },
                                {
                                    "title":"18.3.2 F$AUTHENTICATION_METHOD Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-8DCD8535-B3CE-41DC-A797-6236C9F61907"
                                },
                                {
                                    "title":"18.3.3 F$CLIENT_IP Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-57146B6A-7A44-4BB4-847D-C7DBB4AF5F9F"
                                },
                                {
                                    "title":"18.3.4 F$DATABASE_DOMAIN Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-6C88E90F-8A97-4908-8484-1D9033CE5905"
                                },
                                {
                                    "title":"18.3.5 F$DATABASE_HOSTNAME Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-3E72B385-8774-4F67-934D-0E4C53BA92A5"
                                },
                                {
                                    "title":"18.3.6 F$DATABASE_INSTANCE Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-748C7C4B-E8AB-47BB-9EF4-BB82A03A017F"
                                },
                                {
                                    "title":"18.3.7 F$DATABASE_IP Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-FE32E897-F8DB-41ED-AE39-BDBD28037E72"
                                },
                                {
                                    "title":"18.3.8 F$DATABASE_NAME Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-851FCABE-A933-47F3-AA14-04B32F4CDF65"
                                },
                                {
                                    "title":"18.3.9 F$DOMAIN Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-A287ED5F-6179-4355-9A42-5DFEE726A580"
                                },
                                {
                                    "title":"18.3.10 F$ENTERPRISE_IDENTITY Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-F6C4DDCD-12CD-4A18-8342-8E8ECBCD89F7"
                                },
                                {
                                    "title":"18.3.11 F$IDENTIFICATION_TYPE Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-05145A48-1D05-4D64-B388-61D6DC9F7467"
                                },
                                {
                                    "title":"18.3.12 F$LANG Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-F4732005-2130-48EA-BD63-3E1164100BFE"
                                },
                                {
                                    "title":"18.3.13 F$LANGUAGE Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-416EF1A0-42A2-4BD2-BBA5-47006C3B5C0C"
                                },
                                {
                                    "title":"18.3.14 F$MACHINE Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-2031A81A-F3F7-4A91-A4EC-85CA40FB51E8"
                                },
                                {
                                    "title":"18.3.15 F$NETWORK_PROTOCOL Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-8C72BFCA-6A66-4902-8D13-451168BF4ED4"
                                },
                                {
                                    "title":"18.3.16 F$PROXY_ENTERPRISE_IDENTITY Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-FF01739C-58A7-4158-BDCA-3B028CEBE580"
                                },
                                {
                                    "title":"18.3.17 F$SESSION_USER Function",
                                    "href":"oracle-database-vault-factor-apis.html#GUID-48601256-E806-4BB1-BC7B-28327B1D41C1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"19 Oracle Database Vault Secure Application Role APIs",
                    "href":"oracle-database-vault-secure-application-role-apis.html#GUID-B0538C84-E2D3-4748-8B13-06CC606D7799",
                    "topics":[
                        {
                            "title":"19.1 DBMS_MACADM Secure Application Role Procedures",
                            "href":"oracle-database-vault-secure-application-role-apis.html#GUID-E73162E7-386A-45B9-9308-C2E0DF582856",
                            "topics":[
                                {
                                    "title":"19.1.1 ASSIGN_ROLE Procedure",
                                    "href":"oracle-database-vault-secure-application-role-apis.html#GUID-18C3CD36-F8EE-441C-A794-E0FFCF5DA67A"
                                },
                                {
                                    "title":"19.1.2 CREATE_ROLE Procedure",
                                    "href":"oracle-database-vault-secure-application-role-apis.html#GUID-6B7AA7DB-8EAE-4FC1-88DC-41CB8EE17B68"
                                },
                                {
                                    "title":"19.1.3 DELETE_ROLE Procedure",
                                    "href":"oracle-database-vault-secure-application-role-apis.html#GUID-A09ABCF1-C3D6-4CE2-AD33-CD5A7E54254C"
                                },
                                {
                                    "title":"19.1.4 RENAME_ROLE Procedure",
                                    "href":"oracle-database-vault-secure-application-role-apis.html#GUID-A9ACF025-28B9-417A-B976-1B9510EF1188"
                                },
                                {
                                    "title":"19.1.5 UPDATE_ROLE Procedure",
                                    "href":"oracle-database-vault-secure-application-role-apis.html#GUID-1B2F6E5C-89E1-4EBB-A94A-29E43EAFC68A"
                                },
                                {
                                    "title":"19.1.6 UNASSIGN_ROLE Procedure",
                                    "href":"oracle-database-vault-secure-application-role-apis.html#GUID-DB7A42FE-FA3F-44A3-9BB0-F883A1C77B7E"
                                }
                            ]
                        },
                        {
                            "title":"19.2 DBMS_MACSEC_ROLES Secure Application Role Procedure and Function",
                            "href":"oracle-database-vault-secure-application-role-apis.html#GUID-BFC9379C-7348-4453-8A32-70B9A32B4C8C",
                            "topics":[
                                {
                                    "title":"19.2.1 CAN_SET_ROLE Function",
                                    "href":"oracle-database-vault-secure-application-role-apis.html#GUID-712B26F2-8F76-4A03-BDC1-B1194E2831AA"
                                },
                                {
                                    "title":"19.2.2 SET_ROLE Procedure",
                                    "href":"oracle-database-vault-secure-application-role-apis.html#GUID-B2AE589A-8CDF-4F58-9464-7FC193AEE885"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"20 Oracle Database Vault Oracle Label Security APIs",
                    "href":"oracle-database-vault-oracle-label-security-apis.html#GUID-BC478067-279F-4A1E-91BE-DA33E762B2A8",
                    "topics":[
                        {
                            "title":"20.1 CREATE_MAC_POLICY Procedure",
                            "href":"oracle-database-vault-oracle-label-security-apis.html#GUID-7DE1F739-0BA6-4253-B755-87555F1CF617"
                        },
                        {
                            "title":"20.2 CREATE_POLICY_LABEL Procedure",
                            "href":"oracle-database-vault-oracle-label-security-apis.html#GUID-4E81FE20-E852-42C9-96BB-C77284B37FDC"
                        },
                        {
                            "title":"20.3 DELETE_MAC_POLICY_CASCADE Procedure",
                            "href":"oracle-database-vault-oracle-label-security-apis.html#GUID-D6A63ACB-6B09-4B0F-9E33-F312B42FAEFF"
                        },
                        {
                            "title":"20.4 DELETE_POLICY_FACTOR Procedure",
                            "href":"oracle-database-vault-oracle-label-security-apis.html#GUID-0DC35C50-9BB1-4A7C-B364-802918510ECF"
                        },
                        {
                            "title":"20.5 DELETE_POLICY_LABEL Procedure",
                            "href":"oracle-database-vault-oracle-label-security-apis.html#GUID-808D6781-BDDE-430F-BAA8-FC94166C19C0"
                        },
                        {
                            "title":"20.6 UPDATE_MAC_POLICY Procedure",
                            "href":"oracle-database-vault-oracle-label-security-apis.html#GUID-F7FB3926-7B42-4B73-A4CE-8A1DFA60AE81"
                        }
                    ]
                },
                {
                    "title":"21 Oracle Database Vault Utility APIs",
                    "href":"oracle-database-vault-utility-apis.html#GUID-5A0CB405-9A3C-48ED-B18F-3A8013D436E3",
                    "topics":[
                        {
                            "title":"21.1 DBMS_MACUTL Constants",
                            "href":"oracle-database-vault-utility-apis.html#GUID-A2FEEB0E-B2BA-45D8-8DDC-0C4760551531",
                            "topics":[
                                {
                                    "title":"21.1.1 DBMS_MACUTL Listing of Constants",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-B6513A8B-6DE9-45B1-96CB-3558C635CD4A"
                                },
                                {
                                    "title":"21.1.2 Example: Creating a Realm Using DBMS_MACUTL Constants",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-455C22FC-E17D-4D8A-8E02-3ED8D971B716"
                                },
                                {
                                    "title":"21.1.3 Example: Creating a Rule Set Using DBMS_MACUTL Constants",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-40FF8DC6-F09C-4CA0-83D6-679052619888"
                                },
                                {
                                    "title":"21.1.4 Example: Creating a Factor Using DBMS_MACUTL Constants",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-61631E72-67DA-4982-8021-DBB1D015657B"
                                }
                            ]
                        },
                        {
                            "title":"21.2 DBMS_MACUTL Package Procedures and Functions",
                            "href":"oracle-database-vault-utility-apis.html#GUID-8E562577-CF0B-48F1-9A13-822B4C08E6D9",
                            "topics":[
                                {
                                    "title":"21.2.1 CHECK_DVSYS_DML_ALLOWED Procedure",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-14A61AC4-E440-4210-805C-3173197E57D6"
                                },
                                {
                                    "title":"21.2.2 GET_CODE_VALUE Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-2B04606D-16A3-4A65-9EFD-7C1F8E6A4B75"
                                },
                                {
                                    "title":"21.2.3 GET_SECOND Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-19D2A447-067E-475D-9C24-093A1BD8E82E"
                                },
                                {
                                    "title":"21.2.4 GET_MINUTE Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-9BD12928-F394-473F-97A5-D1ACE20AACDA"
                                },
                                {
                                    "title":"21.2.5 GET_HOUR Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-2F4521DC-AB18-424C-8E23-D2076ADF894F"
                                },
                                {
                                    "title":"21.2.6 GET_DAY Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-1B44AE2F-6C4F-4DB8-9CAA-94CE3412B08E"
                                },
                                {
                                    "title":"21.2.7 GET_MONTH Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-CEB93D80-46FD-4DBF-A7CD-B5B4EA7C9FD8"
                                },
                                {
                                    "title":"21.2.8 GET_YEAR Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-05798779-3190-4817-BC07-820D340CFF62"
                                },
                                {
                                    "title":"21.2.9 IS_ALPHA Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-7C7B0557-0E30-49F5-9371-DCE0164A781F"
                                },
                                {
                                    "title":"21.2.10 IS_DIGIT Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-DDDE0EBF-4572-4175-A64C-0D2300FA062B"
                                },
                                {
                                    "title":"21.2.11 IS_DVSYS_OWNER Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-FDDBA8DF-A2FC-4299-AE0F-E8869C49B058"
                                },
                                {
                                    "title":"21.2.12 IS_OLS_INSTALLED Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-B842A1CB-2AEA-4135-BAAD-25BD260D7E78"
                                },
                                {
                                    "title":"21.2.13 IS_OLS_INSTALLED_VARCHAR Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-2807C050-ACB7-4548-84D5-677BC5E1176B"
                                },
                                {
                                    "title":"21.2.14 USER_HAS_OBJECT_PRIVILEGE Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-4FC90E89-B209-4E1A-AE95-9CCD729D1738"
                                },
                                {
                                    "title":"21.2.15 USER_HAS_ROLE Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-69677792-84A0-498F-93E4-711AD1EDF026"
                                },
                                {
                                    "title":"21.2.16 USER_HAS_ROLE_VARCHAR Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-C3A8611F-2057-460C-825C-B0BF92099328"
                                },
                                {
                                    "title":"21.2.17 USER_HAS_SYSTEM_PRIVILEGE Function",
                                    "href":"oracle-database-vault-utility-apis.html#GUID-A63C6867-6D3B-4D68-9408-1F3C26284B54"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"22 Oracle Database Vault General Administrative APIs",
                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-9A01A246-2E1F-47A9-9C66-4A17F994EF90",
                    "topics":[
                        {
                            "title":"22.1 DBMS_MACADM General System Maintenance Procedures",
                            "href":"oracle-database-vault-general-administrative-apis.html#GUID-53DCBDDC-434C-4133-83D1-7D7BB7B4E37C",
                            "topics":[
                                {
                                    "title":"22.1.1 ADD_NLS_DATA Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-3A615710-02E5-4E14-AD42-40131B0805FE"
                                },
                                {
                                    "title":"22.1.2 AUTHORIZE_DATAPUMP_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-DB9AA939-D18D-407D-B2E4-4CA038992589"
                                },
                                {
                                    "title":"22.1.3 AUTHORIZE_DDL Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-2B0360F9-C612-4374-8B05-DBAD2A255FDF"
                                },
                                {
                                    "title":"22.1.4 AUTHORIZE_MAINTENANCE_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-E3EF48B6-79D7-476A-9AC6-FFCD39D53EDE"
                                },
                                {
                                    "title":"22.1.5 AUTHORIZE_PROXY_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-41304AC5-32F0-42D1-99A5-D2E1A2784DE8"
                                },
                                {
                                    "title":"22.1.6 AUTHORIZE_SCHEDULER_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-72FC758D-9427-4BCB-93DD-8EF86A4D6DF5"
                                },
                                {
                                    "title":"22.1.7 AUTHORIZE_TTS_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-EC41007D-D62E-48F6-A180-4A96DDF39811"
                                },
                                {
                                    "title":"22.1.8 UNAUTHORIZE_DATAPUMP_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-416BFDD0-26A6-4859-BC2A-23C4BF89D47B"
                                },
                                {
                                    "title":"22.1.9 UNAUTHORIZE_DDL Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-69641E98-98C3-4FE6-812E-87BC8DBA93E6"
                                },
                                {
                                    "title":"22.1.10 UNAUTHORIZE_MAINTENANCE_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-87BD15C7-0368-4603-8F72-362615FDB86B"
                                },
                                {
                                    "title":"22.1.11 UNAUTHORIZE_PROXY_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-99CBEAF6-9FFD-4480-9856-A71C2A091140"
                                },
                                {
                                    "title":"22.1.12 UNAUTHORIZE_SCHEDULER_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-9861403F-0D92-4FBE-8ED3-985DAF60B9F8"
                                },
                                {
                                    "title":"22.1.13 UNAUTHORIZE_TTS_USER Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-774B88EA-66A7-47DB-AAD8-8A8212CED678"
                                },
                                {
                                    "title":"22.1.14 DISABLE_DV Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-53D5A365-C7D6-4B34-87CF-480587C50B59"
                                },
                                {
                                    "title":"22.1.15 DISABLE_DV_DICTIONARY_ACCTS Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-7251C1B9-8A0E-499E-B914-CD8236E3D052"
                                },
                                {
                                    "title":"22.1.16 DISABLE_DV_PATCH_ADMIN_AUDIT Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-3A0D9953-91ED-4F94-A6BA-A7A7BD980264"
                                },
                                {
                                    "title":"22.1.17 DISABLE_ORADEBUG Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-3F86EF7D-AEED-4AB5-99CD-BD07EACE11C5"
                                },
                                {
                                    "title":"22.1.18 ENABLE_DV Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-2C1B589A-6B40-48F4-AE61-D47C20231418"
                                },
                                {
                                    "title":"22.1.19 ENABLE_DV_PATCH_ADMIN_AUDIT Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-EE7BE4F9-928F-48DE-988A-3874CC647174"
                                },
                                {
                                    "title":"22.1.20 ENABLE_DV_DICTIONARY_ACCTS Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-0E38F962-9D44-4F93-B013-B54D343F1E81"
                                },
                                {
                                    "title":"22.1.21 ENABLE_ORADEBUG Procedure",
                                    "href":"oracle-database-vault-general-administrative-apis.html#GUID-2CEFBBEA-4261-47A9-A10B-8043391B09A6"
                                }
                            ]
                        },
                        {
                            "title":"22.2 CONFIGURE_DV General System Maintenance Procedure",
                            "href":"oracle-database-vault-general-administrative-apis.html#GUID-94E0FE51-0AAD-4520-9189-A2841FA5092E"
                        }
                    ]
                },
                {
                    "title":"23 Oracle Database Vault Policy APIs",
                    "href":"oracle-database-vault-policy-apis.html#GUID-ED2DCC1B-8511-46CC-AB82-37F4A4B80D0C",
                    "topics":[
                        {
                            "title":"23.1 ADD_CMD_RULE_TO_POLICY Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-29FDD563-7F69-40EF-B12F-2A617172A428"
                        },
                        {
                            "title":"23.2 ADD_OWNER_TO_POLICY Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-155E8A04-7D93-4548-93C2-9679A0A34153"
                        },
                        {
                            "title":"23.3 ADD_REALM_TO_POLICY Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-03197FEF-639E-4EB9-91B9-EE5203B1DDF3"
                        },
                        {
                            "title":"23.4 CREATE_POLICY Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-9FC5E692-293C-4978-8C85-43DAF9F9B173"
                        },
                        {
                            "title":"23.5 DELETE_CMD_RULE_FROM_POLICY Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-DBA1D8DB-0C75-4271-8EE7-838130122B99"
                        },
                        {
                            "title":"23.6 DELETE_OWNER_FROM_POLICY Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-CA96DD86-8BE2-4E3B-9E77-5A3918D306E5"
                        },
                        {
                            "title":"23.7 DELETE_REALM_FROM_POLICY Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-E551771C-149E-4121-A967-B02D787B5F93"
                        },
                        {
                            "title":"23.8 DROP_POLICY Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-A1EFA25C-D415-4E92-89EF-C41D5445AC2D"
                        },
                        {
                            "title":"23.9 RENAME_POLICY Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-D35E2C73-0E61-4FAD-9191-DB48981F1577"
                        },
                        {
                            "title":"23.10 UPDATE_POLICY_DESCRIPTION Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-0B8997DC-89CA-462A-9A2F-EFA109DFDFD6"
                        },
                        {
                            "title":"23.11 UPDATE_POLICY_STATE Procedure",
                            "href":"oracle-database-vault-policy-apis.html#GUID-615D0707-140A-4184-B02D-4EE8A04DF022"
                        }
                    ]
                },
                {
                    "title":"24 Oracle Database Vault API Reference",
                    "href":"oracle-database-vault-api-reference.html#GUID-81F80DC1-78A2-498D-8040-544EE2380376",
                    "topics":[
                        {
                            "title":"24.1 DBMS_MACADM PL/SQL Package Contents",
                            "href":"oracle-database-vault-api-reference.html#GUID-1977D714-6136-49C1-B3FB-31C6D3B45BD4"
                        },
                        {
                            "title":"24.2 DBMS_MACSEC_ROLES PL/SQL Package Contents",
                            "href":"oracle-database-vault-api-reference.html#GUID-50B88802-3077-4BC1-A6D4-41407E6D7055"
                        },
                        {
                            "title":"24.3 DBMS_MACUTL PL/SQL Package Contents",
                            "href":"oracle-database-vault-api-reference.html#GUID-4332E90B-AF64-4A8D-AB4A-48D04016E95E"
                        },
                        {
                            "title":"24.4 CONFIGURE_DV PL/SQL Procedure",
                            "href":"oracle-database-vault-api-reference.html#GUID-6D7F2A86-7478-4D29-840F-749DC748A050"
                        },
                        {
                            "title":"24.5 DVF PL/SQL Interface Contents",
                            "href":"oracle-database-vault-api-reference.html#GUID-BBCD15CC-7F0F-4F4E-ADD7-D030C3CF1279"
                        }
                    ]
                },
                {
                    "title":"25 Oracle Database Vault Data Dictionary Views",
                    "href":"oracle-database-vault-data-dictionary-views.html#GUID-C0CEF4FC-DB4C-4AD5-9671-C0861A647183",
                    "topics":[
                        {
                            "title":"25.1 About the Oracle Database Vault Data Dictionary Views",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-33781637-48B6-4B72-9B85-C2134163A0F1"
                        },
                        {
                            "title":"25.2 CDB_DV_STATUS View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-C65B6664-31EA-4498-A2A2-067E31A481D6"
                        },
                        {
                            "title":"25.3 DBA_DV_CODE View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-2C93FC55-0C58-4FB9-A281-68E51E7EB3F6"
                        },
                        {
                            "title":"25.4 DBA_DV_COMMAND_RULE View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-9A852E4D-D107-4FDD-8262-B6BB5852F88C"
                        },
                        {
                            "title":"25.5 DBA_DV_DATAPUMP_AUTH View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-032394A2-CF30-4B84-A4A9-07823AC96C59"
                        },
                        {
                            "title":"25.6 DBA_DV_DDL_AUTH View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-441C5C40-F4C8-4B81-BC1A-DB2BCE551107"
                        },
                        {
                            "title":"25.7 DBA_DV_DICTIONARY_ACCTS View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-6B48A7C5-9290-4FA6-BA90-9C090DF4FBCE"
                        },
                        {
                            "title":"25.8 DBA_DV_FACTOR View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-5B6C4B1F-57EE-4F51-A042-645C902A43BA"
                        },
                        {
                            "title":"25.9 DBA_DV_FACTOR_TYPE View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-19313BA1-4127-41B4-8CFB-70B62B836328"
                        },
                        {
                            "title":"25.10 DBA_DV_FACTOR_LINK View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-1E0E07FF-D8F3-44EE-9662-2756F6E1F49A"
                        },
                        {
                            "title":"25.11 DBA_DV_IDENTITY View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-CEC74E3E-E65C-4A56-A672-DD9CE7522020"
                        },
                        {
                            "title":"25.12 DBA_DV_IDENTITY_MAP View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-BC732C4B-A260-45A3-AB65-1D0B9A6F9ED3"
                        },
                        {
                            "title":"25.13 DBA_DV_JOB_AUTH View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-0C51B94F-AAB7-4E37-BAF5-946A1580EFD3"
                        },
                        {
                            "title":"25.14 DBA_DV_MAC_POLICY View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-1A084EF5-EDBA-4F05-8F8E-D0724B087281"
                        },
                        {
                            "title":"25.15 DBA_DV_MAC_POLICY_FACTOR View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-25936F30-4741-4A4C-AB35-5B9AD3800420"
                        },
                        {
                            "title":"25.16 DBA_DV_MAINTENANCE_AUTH View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-F98060E8-70D9-440D-8844-BC40E4C9974B"
                        },
                        {
                            "title":"25.17 DBA_DV_ORADEBUG View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-258A12A8-3D9C-4A58-BFB2-239C7AA77E53"
                        },
                        {
                            "title":"25.18 DBA_DV_PATCH_ADMIN_AUDIT View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-C3900FEC-5AC3-4AC7-A4B7-0C46A3CA1E14"
                        },
                        {
                            "title":"25.19 DBA_DV_POLICY View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-4D52BE91-ABA1-4996-B274-F6C558064D85"
                        },
                        {
                            "title":"25.20 DBA_DV_POLICY_LABEL View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-271C29D9-7A4D-49AA-9E7A-93097A0C7B87"
                        },
                        {
                            "title":"25.21 DBA_DV_POLICY_OBJECT View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-E7BCC4DF-77C1-4D5C-A4BE-EEC7AB33939B"
                        },
                        {
                            "title":"25.22 DBA_DV_POLICY_OWNER View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-91B31283-C72E-41B8-BEA3-B1C213FC324A"
                        },
                        {
                            "title":"25.23 DBA_DV_PROXY_AUTH View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-2C5DF938-2CDE-4D20-A209-EDEA158E7BEC"
                        },
                        {
                            "title":"25.24 DBA_DV_PUB_PRIVS View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-AAD59D26-FFF0-4DA4-9D5C-14EB5DC57DCB"
                        },
                        {
                            "title":"25.25 DBA_DV_REALM View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-713C0C95-5CF0-463B-8493-48B87491F3D4"
                        },
                        {
                            "title":"25.26 DBA_DV_REALM_AUTH View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-AD25D61E-81A6-416C-8841-939E821F2701"
                        },
                        {
                            "title":"25.27 DBA_DV_REALM_OBJECT View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-A7B02329-4C55-41CC-9327-136C18AB5422"
                        },
                        {
                            "title":"25.28 DBA_DV_ROLE View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-FBEA1E46-B5D6-44BB-A7B3-B7AC7187E15C"
                        },
                        {
                            "title":"25.29 DBA_DV_RULE View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-97C96089-0EE4-4A57-8257-1F9F61606245"
                        },
                        {
                            "title":"25.30 DBA_DV_RULE_SET View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-A7FD62EB-A8E4-4279-A0D5-1677493AC202"
                        },
                        {
                            "title":"25.31 DBA_DV_RULE_SET_RULE View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-52C00874-C14D-44F6-A89A-CCB5E07FBE3E"
                        },
                        {
                            "title":"25.32 DBA_DV_STATUS View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-3A163A39-F254-4412-A666-478049E023E0"
                        },
                        {
                            "title":"25.33 DBA_DV_SIMULATION_LOG View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-630F3EF3-2314-4FEE-BAC9-A6E362D96649"
                        },
                        {
                            "title":"25.34 DBA_DV_TTS_AUTH View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-2FA377BE-C508-4B13-A86E-B0EF94124F06"
                        },
                        {
                            "title":"25.35 DBA_DV_USER_PRIVS View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-EAB65E09-5E28-4B96-AF4F-36245D38DFB7"
                        },
                        {
                            "title":"25.36 DBA_DV_USER_PRIVS_ALL View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-825915B3-188A-436F-85DD-140847C58A1B"
                        },
                        {
                            "title":"25.37 DVSYS.DV$CONFIGURATION_AUDIT View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-98E3B6EB-C6C7-4917-AB78-C93B9A0645AE"
                        },
                        {
                            "title":"25.38 DVSYS.DV$ENFORCEMENT_AUDIT View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-00538A9F-4193-414A-B88E-FB9C072F4E13"
                        },
                        {
                            "title":"25.39 DVSYS.DV$REALM View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-FEE537B8-8AB9-4854-900E-5562C5093070"
                        },
                        {
                            "title":"25.40 DVSYS.POLICY_OWNER_COMMAND_RULE View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-B3442E54-18F2-4845-8307-87F0F5B8DC63"
                        },
                        {
                            "title":"25.41 DVSYS.POLICY_OWNER_POLICY View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-309F51C1-184E-4589-9C77-6AF60E8AAA59"
                        },
                        {
                            "title":"25.42 DVSYS.POLICY_OWNER_REALM View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-EDBB8E01-A920-4ECC-8C6C-CEC761EFB38C"
                        },
                        {
                            "title":"25.43 DVSYS.POLICY_OWNER_REALM_AUTH View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-1E58F61C-5AED-4511-A2CD-A8F498CC4AF9"
                        },
                        {
                            "title":"25.44 DVSYS.POLICY_OWNER_REALM_OBJECT View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-034D58DE-84DE-46E0-A018-14C5C5D739A6"
                        },
                        {
                            "title":"25.45 DVSYS.POLICY_OWNER_RULE View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-CF661529-2664-40D4-8129-61B2881F7BC2"
                        },
                        {
                            "title":"25.46 DVSYS.POLICY_OWNER_RULE_SET View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-328A10AF-7ED0-4F70-9FFD-7FFCA7B750A5"
                        },
                        {
                            "title":"25.47 DVSYS.POLICY_OWNER_RULE_SET_RULE View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-B198CA79-036A-4805-A084-3EDE84C1C9C7"
                        },
                        {
                            "title":"25.48 SYS.DV$CONFIGURATION_AUDIT View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-B398876A-AAFB-4D36-8760-8D904C87D98E"
                        },
                        {
                            "title":"25.49 SYS.DV$ENFORCEMENT_AUDIT View",
                            "href":"oracle-database-vault-data-dictionary-views.html#GUID-815EFF25-DD6C-4010-B789-5C6163A3CDFD"
                        }
                    ]
                },
                {
                    "title":"26 Monitoring Oracle Database Vault",
                    "href":"monitoring-oracle-database-vault.html#GUID-EF26F67E-A410-4868-9B5C-5ABEA9B6BFAB",
                    "topics":[
                        {
                            "title":"26.1 About Monitoring Oracle Database Vault",
                            "href":"monitoring-oracle-database-vault.html#GUID-26E8E2C0-EB44-4FE3-B33A-8D879E1D51E9"
                        },
                        {
                            "title":"26.2 Monitoring Security Violations and Configuration Changes",
                            "href":"monitoring-oracle-database-vault.html#GUID-C5003801-2BF9-4142-A4E2-5C2386CABCA6"
                        }
                    ]
                },
                {
                    "title":"27 Oracle Database Vault Reports",
                    "href":"oracle-database-vault-reports.html#GUID-1B6D02DE-3FB2-4ADB-9916-4491B37FDECD",
                    "topics":[
                        {
                            "title":"27.1 About the Oracle Database Vault Reports",
                            "href":"oracle-database-vault-reports.html#GUID-4B2F9248-1C36-4CC6-9D30-92802FE8C54B"
                        },
                        {
                            "title":"27.2 Who Can Run the Oracle Database Vault Reports?",
                            "href":"oracle-database-vault-reports.html#GUID-953CC1CA-817D-4A5F-9AD6-3A26A1390DC9"
                        },
                        {
                            "title":"27.3 Running the Oracle Database Vault Reports",
                            "href":"oracle-database-vault-reports.html#GUID-3F39A72A-3833-4B20-B2FD-F283A448BD60"
                        },
                        {
                            "title":"27.4 Oracle Database Vault Configuration Issues Reports",
                            "href":"oracle-database-vault-reports.html#GUID-09D2959D-DD12-4583-914C-0EB7007444A9",
                            "topics":[
                                {
                                    "title":"27.4.1 Command Rule Configuration Issues Report",
                                    "href":"oracle-database-vault-reports.html#GUID-DB10DAF0-4E4C-4A11-A9B8-A227DC82D8AA"
                                },
                                {
                                    "title":"27.4.2 Rule Set Configuration Issues Report",
                                    "href":"oracle-database-vault-reports.html#GUID-162BB69D-9C1F-4FB8-959E-1B8C21FE6FF9"
                                },
                                {
                                    "title":"27.4.3 Realm Authorization Configuration Issues Report",
                                    "href":"oracle-database-vault-reports.html#GUID-9BB457EC-EDBD-48DB-9719-964FD8A4D7B4"
                                },
                                {
                                    "title":"27.4.4 Factor Configuration Issues Report",
                                    "href":"oracle-database-vault-reports.html#GUID-A94B0EFE-DF5E-4E3E-B952-EF9047348370"
                                },
                                {
                                    "title":"27.4.5 Factor Without Identities Report",
                                    "href":"oracle-database-vault-reports.html#GUID-CDB7ACBE-8C0E-4D36-93F5-CF0E206A18FA"
                                },
                                {
                                    "title":"27.4.6 Identity Configuration Issues Report",
                                    "href":"oracle-database-vault-reports.html#GUID-4BB1C655-BCBA-4C9D-8793-10E9AFD9F51D"
                                },
                                {
                                    "title":"27.4.7 Secure Application Configuration Issues Report",
                                    "href":"oracle-database-vault-reports.html#GUID-0BEBF077-C4BA-471B-8789-85BD5A758421"
                                }
                            ]
                        },
                        {
                            "title":"27.5 Oracle Database Vault Auditing Reports",
                            "href":"oracle-database-vault-reports.html#GUID-457714A0-F847-47DB-BC79-65AA70679835",
                            "topics":[
                                {
                                    "title":"27.5.1 Realm Audit Report",
                                    "href":"oracle-database-vault-reports.html#GUID-BC9892CD-C7F0-4AB4-9E47-93B44AAF3AE3"
                                },
                                {
                                    "title":"27.5.2 Command Rule Audit Report",
                                    "href":"oracle-database-vault-reports.html#GUID-10BA31F8-F572-41E7-B22D-4654A5A3EE9C"
                                },
                                {
                                    "title":"27.5.3 Factor Audit Report",
                                    "href":"oracle-database-vault-reports.html#GUID-334C779A-3BBC-4C57-A6F9-0C3EF9D44F37"
                                },
                                {
                                    "title":"27.5.4 Label Security Integration Audit Report",
                                    "href":"oracle-database-vault-reports.html#GUID-0753CB70-1F96-43DF-B37D-C997E7440A13"
                                },
                                {
                                    "title":"27.5.5 Core Database Vault Audit Trail Report",
                                    "href":"oracle-database-vault-reports.html#GUID-C99C8BE0-839E-4901-B356-A0A5CAE3A592"
                                },
                                {
                                    "title":"27.5.6 Secure Application Role Audit Report",
                                    "href":"oracle-database-vault-reports.html#GUID-4E8DB5FA-7F87-4299-BA53-CBD7459CAD1B"
                                }
                            ]
                        },
                        {
                            "title":"27.6 Oracle Database Vault General Security Reports",
                            "href":"oracle-database-vault-reports.html#GUID-14F9A43F-0357-40B6-9864-C8E8A2326CE7",
                            "topics":[
                                {
                                    "title":"27.6.1 Object Privilege Reports",
                                    "href":"oracle-database-vault-reports.html#GUID-69468D28-8100-44D2-B14B-423A64C0F9FB",
                                    "topics":[
                                        {
                                            "title":"27.6.1.1 Object Access By PUBLIC Report",
                                            "href":"oracle-database-vault-reports.html#GUID-839238FA-5583-41CB-A03A-8AEB51904837"
                                        },
                                        {
                                            "title":"27.6.1.2 Object Access Not By PUBLIC Report",
                                            "href":"oracle-database-vault-reports.html#GUID-1D5A43C3-D851-45FC-B9CB-9B9D49558AB0"
                                        },
                                        {
                                            "title":"27.6.1.3 Direct Object Privileges Report",
                                            "href":"oracle-database-vault-reports.html#GUID-3A0498E7-633F-4B30-AA9B-E7495C71C520"
                                        },
                                        {
                                            "title":"27.6.1.4 Object Dependencies Report",
                                            "href":"oracle-database-vault-reports.html#GUID-C82BAC22-AF82-4CE7-BDAE-1A970C9B7D36"
                                        }
                                    ]
                                },
                                {
                                    "title":"27.6.2 Database Account System Privileges Reports",
                                    "href":"oracle-database-vault-reports.html#GUID-5CA0AC0B-8F6A-40B2-88D8-F15E86E55DDF",
                                    "topics":[
                                        {
                                            "title":"27.6.2.1 Direct System Privileges By Database Account Report",
                                            "href":"oracle-database-vault-reports.html#GUID-CEF56035-5F49-4F2F-A409-E4333417FAD9"
                                        },
                                        {
                                            "title":"27.6.2.2 Direct and Indirect System Privileges By Database Account Report",
                                            "href":"oracle-database-vault-reports.html#GUID-7E3CD539-2415-4C01-BF6B-3D6F44940D80"
                                        },
                                        {
                                            "title":"27.6.2.3 Hierarchical System Privileges by Database Account Report",
                                            "href":"oracle-database-vault-reports.html#GUID-3B508E56-DF77-4090-9605-B8A935E0C728"
                                        },
                                        {
                                            "title":"27.6.2.4 ANY System Privileges for Database Accounts Report",
                                            "href":"oracle-database-vault-reports.html#GUID-A8D1EFD4-9D6C-4630-8CD0-17817AB9C8FB"
                                        },
                                        {
                                            "title":"27.6.2.5 System Privileges By Privilege Report",
                                            "href":"oracle-database-vault-reports.html#GUID-CF1176DE-18DE-4FDF-A3B2-4B4FAB17CE84"
                                        }
                                    ]
                                },
                                {
                                    "title":"27.6.3 Sensitive Objects Reports",
                                    "href":"oracle-database-vault-reports.html#GUID-DA265416-AD9D-4A8B-8BAA-37370F658121",
                                    "topics":[
                                        {
                                            "title":"27.6.3.1 Execute Privileges to Strong SYS Packages Report",
                                            "href":"oracle-database-vault-reports.html#GUID-C511D926-1474-433A-B5B3-2BC18DD35B43"
                                        },
                                        {
                                            "title":"27.6.3.2 Access to Sensitive Objects Report",
                                            "href":"oracle-database-vault-reports.html#GUID-543051F1-DD6D-4F57-85C4-45BC14581591"
                                        },
                                        {
                                            "title":"27.6.3.3 Public Execute Privilege To SYS PL/SQL Procedures Report",
                                            "href":"oracle-database-vault-reports.html#GUID-2F0037A2-B4BC-44DB-B398-BA12393B3C74"
                                        },
                                        {
                                            "title":"27.6.3.4 Accounts with SYSDBA/SYSOPER Privilege Report",
                                            "href":"oracle-database-vault-reports.html#GUID-4706655D-6F40-4B66-A2E9-1CCE5BD1EC0B"
                                        }
                                    ]
                                },
                                {
                                    "title":"27.6.4 Privilege Management - Summary Reports",
                                    "href":"oracle-database-vault-reports.html#GUID-9F33FCA0-2BEE-4569-85E9-FD88FC52908B",
                                    "topics":[
                                        {
                                            "title":"27.6.4.1 Privileges Distribution By Grantee Report",
                                            "href":"oracle-database-vault-reports.html#GUID-61536DE9-A8A4-4F0A-9610-C84494E9ED94"
                                        },
                                        {
                                            "title":"27.6.4.2 Privileges Distribution By Grantee, Owner Report",
                                            "href":"oracle-database-vault-reports.html#GUID-9E34D734-526B-4D53-94C8-0676EE3F3E74"
                                        },
                                        {
                                            "title":"27.6.4.3 Privileges Distribution By Grantee, Owner, Privilege Report",
                                            "href":"oracle-database-vault-reports.html#GUID-61FC6ED2-F9E9-4BEF-BF12-380CB971AD42"
                                        }
                                    ]
                                },
                                {
                                    "title":"27.6.5 Powerful Database Accounts and Roles Reports",
                                    "href":"oracle-database-vault-reports.html#GUID-B89899EF-1AF9-48CF-B0C8-20ED2E423152",
                                    "topics":[
                                        {
                                            "title":"27.6.5.1 WITH ADMIN Privilege Grants Report",
                                            "href":"oracle-database-vault-reports.html#GUID-BEAA5E0C-4D39-4C1F-952A-2A7DC1CCDA3C"
                                        },
                                        {
                                            "title":"27.6.5.2 Accounts With DBA Roles Report",
                                            "href":"oracle-database-vault-reports.html#GUID-06094278-D573-4609-8EA2-6993007CE167"
                                        },
                                        {
                                            "title":"27.6.5.3 Security Policy Exemption Report",
                                            "href":"oracle-database-vault-reports.html#GUID-ECBE6A5B-67C1-4D4F-9B3A-F8CAF18865CF"
                                        },
                                        {
                                            "title":"27.6.5.4 BECOME USER Report",
                                            "href":"oracle-database-vault-reports.html#GUID-95696DB1-7E09-40EA-9FE5-EF8118B3ADDD"
                                        },
                                        {
                                            "title":"27.6.5.5 ALTER SYSTEM or ALTER SESSION Report",
                                            "href":"oracle-database-vault-reports.html#GUID-BF7A6A3E-43DE-4706-BAEE-3D06171A1C9B"
                                        },
                                        {
                                            "title":"27.6.5.6 Password History Access Report",
                                            "href":"oracle-database-vault-reports.html#GUID-B12256EC-0D7C-4412-87B5-AACD444095BC"
                                        },
                                        {
                                            "title":"27.6.5.7 WITH GRANT Privileges Report",
                                            "href":"oracle-database-vault-reports.html#GUID-20A3B529-FC97-46AF-B535-979724E13E79"
                                        },
                                        {
                                            "title":"27.6.5.8 Roles/Accounts That Have a Given Role Report",
                                            "href":"oracle-database-vault-reports.html#GUID-99947185-8727-47E3-AA73-1BCF6A477805"
                                        },
                                        {
                                            "title":"27.6.5.9 Database Accounts With Catalog Roles Report",
                                            "href":"oracle-database-vault-reports.html#GUID-8FD6B9BF-2D68-41A8-A6FE-0BD4E40B8430"
                                        },
                                        {
                                            "title":"27.6.5.10 AUDIT Privileges Report",
                                            "href":"oracle-database-vault-reports.html#GUID-D18E6AC6-328B-44E2-9B18-11A87C5460D4"
                                        },
                                        {
                                            "title":"27.6.5.11 OS Security Vulnerability Privileges Report",
                                            "href":"oracle-database-vault-reports.html#GUID-396A68A5-45E2-4D68-A47B-F2674BB6F8BE"
                                        }
                                    ]
                                },
                                {
                                    "title":"27.6.6 Initialization Parameters and Profiles Reports",
                                    "href":"oracle-database-vault-reports.html#GUID-CE91B2F8-7925-4FCF-A33B-75D87A270CF0",
                                    "topics":[
                                        {
                                            "title":"27.6.6.1 Security Related Database Parameters Report",
                                            "href":"oracle-database-vault-reports.html#GUID-635CA47C-1B64-46F2-BEBF-CF548E713899"
                                        },
                                        {
                                            "title":"27.6.6.2 Resource Profiles Report",
                                            "href":"oracle-database-vault-reports.html#GUID-12095257-B53D-480D-B972-AE4DDC9D4A9B"
                                        },
                                        {
                                            "title":"27.6.6.3 System Resource Limits Report",
                                            "href":"oracle-database-vault-reports.html#GUID-6FA2F6B5-EC8C-42D6-853F-C57BA7EFD186"
                                        }
                                    ]
                                },
                                {
                                    "title":"27.6.7 Database Account Password Reports",
                                    "href":"oracle-database-vault-reports.html#GUID-AD88B2E8-01D7-44CE-AFCD-17D3A48E19B7",
                                    "topics":[
                                        {
                                            "title":"27.6.7.1 Database Account Default Password Report",
                                            "href":"oracle-database-vault-reports.html#GUID-57536BBE-1E11-44B1-AEB1-95DAC6C1CF71"
                                        },
                                        {
                                            "title":"27.6.7.2 Database Account Status Report",
                                            "href":"oracle-database-vault-reports.html#GUID-654AD3CB-7F32-4BBB-80C9-C133AE727977"
                                        }
                                    ]
                                },
                                {
                                    "title":"27.6.8 Security Audit Report: Core Database Audit Report",
                                    "href":"oracle-database-vault-reports.html#GUID-AB165BDE-F56E-461B-B0AF-A23B53BC7703"
                                },
                                {
                                    "title":"27.6.9 Other Security Vulnerability Reports",
                                    "href":"oracle-database-vault-reports.html#GUID-C6BA3714-BEDF-471A-AD13-EAEBF76E3227",
                                    "topics":[
                                        {
                                            "title":"27.6.9.1 Java Policy Grants Report",
                                            "href":"oracle-database-vault-reports.html#GUID-7C06C568-86B8-46E5-8405-10F1653D5941"
                                        },
                                        {
                                            "title":"27.6.9.2 OS Directory Objects Report",
                                            "href":"oracle-database-vault-reports.html#GUID-E6CF8136-60E6-4B0E-B16F-A12FADAA4C79"
                                        },
                                        {
                                            "title":"27.6.9.3 Objects Dependent on Dynamic SQL Report",
                                            "href":"oracle-database-vault-reports.html#GUID-394FC679-40B4-48ED-8CA7-737FEE16C5E1"
                                        },
                                        {
                                            "title":"27.6.9.4 Unwrapped PL/SQL Package Bodies Report",
                                            "href":"oracle-database-vault-reports.html#GUID-E29EDBFE-85EB-476E-8C5A-CB94010BD1F1"
                                        },
                                        {
                                            "title":"27.6.9.5 Username/Password Tables Report",
                                            "href":"oracle-database-vault-reports.html#GUID-90255DFA-EC81-4E8B-B7E4-8929B8E4711F"
                                        },
                                        {
                                            "title":"27.6.9.6 Tablespace Quotas Report",
                                            "href":"oracle-database-vault-reports.html#GUID-3BDEB7D1-61E9-434E-9834-A5D4EF8EDA59"
                                        },
                                        {
                                            "title":"27.6.9.7 Non-Owner Object Trigger Report",
                                            "href":"oracle-database-vault-reports.html#GUID-5E8AF17E-9899-47BE-9EA7-F7A385D5E527"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"A Auditing Oracle Database Vault",
                    "href":"auditing-oracle-database-vault.html#GUID-9E9C7DBE-A8C5-4F02-8E90-F7311D47AB92",
                    "topics":[
                        {
                            "title":"A.1 About Auditing in Oracle Database Vault",
                            "href":"auditing-oracle-database-vault.html#GUID-63C81158-5324-41C4-9931-B0E6A06EDAB2"
                        },
                        {
                            "title":"A.2 Protection of the Unified Audit Trail in an Oracle Database Vault Environment",
                            "href":"auditing-oracle-database-vault.html#GUID-1B46C5B8-1C4D-4552-B75C-F294A48CE55C"
                        },
                        {
                            "title":"A.3 Oracle Database Vault Specific Audit Events",
                            "href":"auditing-oracle-database-vault.html#GUID-30A8337F-DEBA-42CE-B845-35B090C64FAA",
                            "topics":[
                                {
                                    "title":"A.3.1 Oracle Database Vault Policy Audit Events",
                                    "href":"auditing-oracle-database-vault.html#GUID-86CE5DCA-E8E8-4A7D-A54F-EFBFCCFD76B9"
                                },
                                {
                                    "title":"A.3.2 Oracle Database Vault Audit Trail Record Format",
                                    "href":"auditing-oracle-database-vault.html#GUID-DD4D7B05-8C12-4696-8231-71E769014EED"
                                }
                            ]
                        },
                        {
                            "title":"A.4 Archiving and Purging the Oracle Database Vault Audit Trail",
                            "href":"auditing-oracle-database-vault.html#GUID-2CE05A86-E814-4848-864D-2E1A74E2BD07",
                            "topics":[
                                {
                                    "title":"A.4.1 About Archiving and Purging the Oracle Database Vault Audit Trail",
                                    "href":"auditing-oracle-database-vault.html#GUID-14ADB000-F1C5-4F51-8466-6301194F71FC"
                                },
                                {
                                    "title":"A.4.2 Archiving the Oracle Database Vault Audit Trail",
                                    "href":"auditing-oracle-database-vault.html#GUID-E48F3536-A9A2-4CFE-8E15-485E07B8FAF1"
                                },
                                {
                                    "title":"A.4.3 Purging the Oracle Database Vault Audit Trail",
                                    "href":"auditing-oracle-database-vault.html#GUID-CEDFFEB5-1397-46C8-A487-9A264671219C"
                                }
                            ]
                        },
                        {
                            "title":"A.5 Oracle Database Audit Settings Created for Oracle Database Vault",
                            "href":"auditing-oracle-database-vault.html#GUID-F64C864D-8A5D-484C-A3AA-25F17E4CDBAC"
                        }
                    ]
                },
                {
                    "title":"B Disabling and Enabling Oracle Database Vault",
                    "href":"disabling-and-enabling-oracle-database-vault.html#GUID-89689CF6-63E9-45BC-AF12-10CD42A2DFC6",
                    "topics":[
                        {
                            "title":"B.1 When You Must Disable Oracle Database Vault",
                            "href":"disabling-and-enabling-oracle-database-vault.html#GUID-9DE56340-8252-4EE7-803A-965FDE5EC6C7"
                        },
                        {
                            "title":"B.2 Step 1: Disable Oracle Database Vault",
                            "href":"disabling-and-enabling-oracle-database-vault.html#GUID-6D80B63C-6A29-47A9-8733-1070199CDF06"
                        },
                        {
                            "title":"B.3 Step 2: Perform the Required Tasks",
                            "href":"disabling-and-enabling-oracle-database-vault.html#GUID-40E0211E-B527-4C00-94CA-CC5A63769C74"
                        },
                        {
                            "title":"B.4 Step 3: Enable Oracle Database Vault",
                            "href":"disabling-and-enabling-oracle-database-vault.html#GUID-B75A5A98-5CBD-4782-BA5C-D162AB6AAB97"
                        }
                    ]
                },
                {
                    "title":"C Postinstallation Oracle Database Vault Procedures",
                    "href":"postinstallation-oracle-database-vault-procedures.html#GUID-1B9CFCF1-CDA3-4099-9ED1-8FF1C7A9C56C",
                    "topics":[
                        {
                            "title":"C.1 Configuring Oracle Database Vault on Oracle RAC Nodes",
                            "href":"postinstallation-oracle-database-vault-procedures.html#GUID-A5C7D54E-378A-4725-8E98-0A8EAAE754FC"
                        },
                        {
                            "title":"C.2 Adding Languages to Oracle Database Vault",
                            "href":"postinstallation-oracle-database-vault-procedures.html#GUID-42E08752-1273-457E-8495-074C9B7D1CFD"
                        },
                        {
                            "title":"C.3 Deinstalling Oracle Database Vault",
                            "href":"postinstallation-oracle-database-vault-procedures.html#GUID-5B68C4CE-A162-48FF-AD1A-475B8D3AD112"
                        },
                        {
                            "title":"C.4 Reinstalling Oracle Database Vault",
                            "href":"postinstallation-oracle-database-vault-procedures.html#GUID-C6A459DB-1329-4B5F-9DF6-7C66D1DE6520"
                        }
                    ]
                },
                {
                    "title":"D Oracle Database Vault Security Guidelines",
                    "href":"oracle-database-vault-security-guidelines.html#GUID-7447829D-1375-4914-905A-026ADE176E8A",
                    "topics":[
                        {
                            "title":"D.1 Separation of Duty Guidelines",
                            "href":"oracle-database-vault-security-guidelines.html#GUID-128A1A30-3183-4D53-94AE-3F12707978D2",
                            "topics":[
                                {
                                    "title":"D.1.1 How Oracle Database Vault Handles Separation of Duty",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-26818BBA-D858-4225-96A9-022BE177DE05"
                                },
                                {
                                    "title":"D.1.2 Separation of Tasks in an Oracle Database Vault Environment",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-13CD2B04-9CD2-449F-9239-0EA3E31D7C4C"
                                },
                                {
                                    "title":"D.1.3 Separation of Duty Matrix for Oracle Database Vault",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-EF83150C-C852-4FD1-BFA7-1E881282B7C9"
                                },
                                {
                                    "title":"D.1.4 Identification and Documentation of the Tasks of Database Users",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-D1A94876-B8FE-4E7C-B547-0BD2B0AF8238"
                                }
                            ]
                        },
                        {
                            "title":"D.2 Managing Oracle Database Administrative Accounts",
                            "href":"oracle-database-vault-security-guidelines.html#GUID-FDD3E113-B692-4BBD-9E78-B8BDB804348E",
                            "topics":[
                                {
                                    "title":"D.2.1 SYSTEM User Account for General Administrative Uses",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-9CB454AC-B248-4722-966C-0DB2D5C445C8"
                                },
                                {
                                    "title":"D.2.2 SYSTEM Schema for Application Tables",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-D392E441-5F77-4533-91AA-85E9F3725B91"
                                },
                                {
                                    "title":"D.2.3 Limitation of the SYSDBA Administrative Privilege",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-BCFD0FAF-4DCB-46AD-9C1C-309457FAB86A"
                                },
                                {
                                    "title":"D.2.4 Root and Operating System Access to Oracle Database Vault",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-3133DBEE-80D7-49D7-9924-D7412EB39D66"
                                }
                            ]
                        },
                        {
                            "title":"D.3 Accounts and Roles Trusted by Oracle Database Vault",
                            "href":"oracle-database-vault-security-guidelines.html#GUID-94230885-B5F7-47CE-852D-1D942BF1EF3B"
                        },
                        {
                            "title":"D.4 Accounts and Roles That Should be Limited to Trusted Individuals",
                            "href":"oracle-database-vault-security-guidelines.html#GUID-7FF587DA-ABEA-49F5-B4B2-DABE549999A4",
                            "topics":[
                                {
                                    "title":"D.4.1 Management of Users with Root Access to the Operating System",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-71E07550-A68D-4639-9D9B-1AD0C1882403"
                                },
                                {
                                    "title":"D.4.2 Management of the Oracle Software Owner",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-D0710B07-0477-4769-8CA9-7C69269823E2"
                                },
                                {
                                    "title":"D.4.3 Management of SYSDBA Access",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-499A492E-7FC1-4AFB-97E1-55CA0C934625"
                                },
                                {
                                    "title":"D.4.4 Management of SYSOPER Access",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-51DE0256-9819-48D2-9409-5F8AA1F83261"
                                }
                            ]
                        },
                        {
                            "title":"D.5 Guidelines for Using Oracle Database Vault in a Production Environment",
                            "href":"oracle-database-vault-security-guidelines.html#GUID-126C4A76-3927-4F94-84B7-B932B87EC4B7"
                        },
                        {
                            "title":"D.6 Secure Configuration Guidelines",
                            "href":"oracle-database-vault-security-guidelines.html#GUID-71011A5C-5CB3-4760-A573-B60AEB9CF596",
                            "topics":[
                                {
                                    "title":"D.6.1 General Secure Configuration Guidelines",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-32615524-1363-4414-A142-EFD8E161BCDD"
                                },
                                {
                                    "title":"D.6.2 UTL_FILE and DBMS_FILE_TRANSFER Package Security Considerations",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-95E92261-BFFE-42F8-BDCB-EF536F8F39FC",
                                    "topics":[
                                        {
                                            "title":"D.6.2.1 About Security Considerations for the UTL_FILE and DBMS_FILE_TRANSFER Packages",
                                            "href":"oracle-database-vault-security-guidelines.html#GUID-683161D3-2C60-4878-AF31-431DB5B1899A"
                                        },
                                        {
                                            "title":"D.6.2.2 Securing Access to the DBMS_FILE_TRANFER Package",
                                            "href":"oracle-database-vault-security-guidelines.html#GUID-B7465158-3F00-41E2-8E78-732D2542DA97"
                                        },
                                        {
                                            "title":"D.6.2.3 Example: Creating a Command Rule to Deny Access to CREATE DATABASE LINK",
                                            "href":"oracle-database-vault-security-guidelines.html#GUID-294CF216-BC39-48FF-AA8E-862B3FE6DE4E"
                                        },
                                        {
                                            "title":"D.6.2.4 Example: Creating a Command Rule to Enable Access to CREATE DATABASE LINK",
                                            "href":"oracle-database-vault-security-guidelines.html#GUID-240C48B4-39FF-4976-B669-F2508C2A338A"
                                        },
                                        {
                                            "title":"D.6.2.5 Example: Command Rules to Disable and Enable Access to CREATE DIRECTORY",
                                            "href":"oracle-database-vault-security-guidelines.html#GUID-F6AEAC49-DC70-4AF0-97A3-0A1D4A459869"
                                        }
                                    ]
                                },
                                {
                                    "title":"D.6.3 CREATE ANY JOB Privilege Security Considerations",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-0FE65D01-DA63-4ECF-86CB-6FF14AFFC8C9"
                                },
                                {
                                    "title":"D.6.4 CREATE EXTERNAL JOB Privilege Security Considerations",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-FD318895-EC4B-4D49-A5B9-E14459F1FFF0"
                                },
                                {
                                    "title":"D.6.5 LogMiner Package Security Considerations",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-0DD4A2D0-F646-4EA1-99EC-6A7C91020897"
                                },
                                {
                                    "title":"D.6.6 ALTER SYSTEM and ALTER SESSION Privilege Security Considerations",
                                    "href":"oracle-database-vault-security-guidelines.html#GUID-5C83EE48-4B90-46D7-9E7A-835E4A55DF49",
                                    "topics":[
                                        {
                                            "title":"D.6.6.1 About ALTER SYSTEM and ALTER SESSION Privilege Security Considerations",
                                            "href":"oracle-database-vault-security-guidelines.html#GUID-F71CAF17-9540-4B16-B5D5-38A949D9F357"
                                        },
                                        {
                                            "title":"D.6.6.2 Example: Adding Rules to the Existing ALTER SYSTEM Command Rule",
                                            "href":"oracle-database-vault-security-guidelines.html#GUID-179610EA-0EDB-4716-9366-816FF5F3C996"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"E Troubleshooting Oracle Database Vault",
                    "href":"troubleshooting-oracle-database-vault.html#GUID-2326597E-EFB4-4938-9249-6D20E65CAFA1",
                    "topics":[
                        {
                            "title":"E.1 Using Trace Files to Diagnose Oracle Database Vault Events",
                            "href":"troubleshooting-oracle-database-vault.html#GUID-98F32BA5-85C3-4827-9202-E90AE214BC4B",
                            "topics":[
                                {
                                    "title":"E.1.1 About Using Trace Files to Diagnose Oracle Database Vault Events",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-86477748-7A80-40EA-A5D3-033642529E9E"
                                },
                                {
                                    "title":"E.1.2 Types of Oracle Database Vault Trace Events That You Can and Cannot Track",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-FC2AD106-C1D8-4604-8EB0-BB06737E7E62"
                                },
                                {
                                    "title":"E.1.3 Levels of Oracle Database Vault Trace Events",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-C4714887-911D-47F7-9F46-27DFF04E1B5F"
                                },
                                {
                                    "title":"E.1.4 Performance Effect of Enabling Oracle Database Vault Trace Files",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-91F2FB0F-63F9-4EA5-BF50-E8A235CC3E27"
                                },
                                {
                                    "title":"E.1.5 Enabling Oracle Database Vault Trace Events",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-08EAE65B-8E21-462B-888A-90BD4BD6C8DD",
                                    "topics":[
                                        {
                                            "title":"E.1.5.1 Enabling Trace Events for the Current Database Session",
                                            "href":"troubleshooting-oracle-database-vault.html#GUID-6D0F7B6A-D155-414E-BBE9-D4CA0D08A19F"
                                        },
                                        {
                                            "title":"E.1.5.2 Enabling Trace Events for All Database Sessions",
                                            "href":"troubleshooting-oracle-database-vault.html#GUID-29AB6F5E-3A97-4143-8415-9C34051EDF13"
                                        },
                                        {
                                            "title":"E.1.5.3 Management of Trace Events in a Multitenant Environment",
                                            "href":"troubleshooting-oracle-database-vault.html#GUID-AA31F01F-7701-4452-8DE8-A5DC1C365007"
                                        }
                                    ]
                                },
                                {
                                    "title":"E.1.6 Finding Oracle Database Vault Trace File Data",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-5C044512-4715-4509-BC58-385E1267F64C",
                                    "topics":[
                                        {
                                            "title":"E.1.6.1 Finding the Database Vault Trace File Directory Location",
                                            "href":"troubleshooting-oracle-database-vault.html#GUID-7790FBE4-AFE9-48F7-A19C-BD833AF202DF"
                                        },
                                        {
                                            "title":"E.1.6.2 Using the Linux grep Command to Search Trace Files for Strings",
                                            "href":"troubleshooting-oracle-database-vault.html#GUID-8D5894C8-C0B0-4E8F-B0B1-399E721B5BA3"
                                        },
                                        {
                                            "title":"E.1.6.3 Using the ADR Command Interpreter (ADRCI) Utility to QueryTrace Files",
                                            "href":"troubleshooting-oracle-database-vault.html#GUID-B05344D3-E3EE-4B59-B4D6-41CD280EA44A"
                                        }
                                    ]
                                },
                                {
                                    "title":"E.1.7 Example: Low Level Oracle Database Vault Realm Violations in a Trace File",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-F8C72B2D-0BF1-4F4E-BD12-34F536874DB9"
                                },
                                {
                                    "title":"E.1.8 Example: High Level Trace Enabled for Oracle Database Vault Authorization",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-3A56C263-A809-4631-A56B-F774383315DB"
                                },
                                {
                                    "title":"E.1.9 Example: Highest Level Traces on Violations on Realm-Protected Objects",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-55889986-AA0A-44EC-86FE-7C6475EBEE3D"
                                },
                                {
                                    "title":"E.1.10 Disabling Oracle Database Vault Trace Events",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-81ED4F03-75D6-495B-B5C4-937559147300",
                                    "topics":[
                                        {
                                            "title":"E.1.10.1 Disabling Trace Events for the Current Database Session",
                                            "href":"troubleshooting-oracle-database-vault.html#GUID-9BDF5D74-28DF-48D5-991B-AF147C9BB0E9"
                                        },
                                        {
                                            "title":"E.1.10.2 Disabling Trace Events for All Database Sessions",
                                            "href":"troubleshooting-oracle-database-vault.html#GUID-064E501C-6BAA-4744-8C60-E7C6A2AE465E"
                                        },
                                        {
                                            "title":"E.1.10.3 Disabling Trace Events in a Multitenant Environment",
                                            "href":"troubleshooting-oracle-database-vault.html#GUID-48B51F87-A38C-4808-833F-E0EC7BB9F413"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"E.2 General Diagnostic Tips",
                            "href":"troubleshooting-oracle-database-vault.html#GUID-D6B6CA0F-7F61-44BB-932A-011E9135A5F8"
                        },
                        {
                            "title":"E.3 Configuration Problems with Oracle Database Vault Components",
                            "href":"troubleshooting-oracle-database-vault.html#GUID-5CB5950D-A9CB-4D97-AC99-14FF29923F0B"
                        },
                        {
                            "title":"E.4 Resetting Oracle Database Vault Account Passwords",
                            "href":"troubleshooting-oracle-database-vault.html#GUID-6A419E95-F2E4-4F37-8B84-EFB78989BBDB",
                            "topics":[
                                {
                                    "title":"E.4.1 Resetting the DV_OWNER User Password",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-6CDCC278-CB47-4168-91E0-4C16F3D1C9B7"
                                },
                                {
                                    "title":"E.4.2 Resetting the DV_ACCTMGR User Password",
                                    "href":"troubleshooting-oracle-database-vault.html#GUID-C266063F-AAB2-4E02-8923-C707FDA3744F"
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