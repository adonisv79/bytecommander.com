import React from 'react';
import {
  Container, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
  Grid, Link,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function AdonExpansionPanel(optionsCustom) {
  const optionsDefault = {
    id: Math.round(Math.random() * 10),
    title: 'No Title',
    body: 'No Body',
  };
  const options = { ...optionsDefault, ...optionsCustom };
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        id={options.id}
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
      >
        {options.title}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {options.body}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

function EducationPanel() {
  const title = `Education and Trainings`;
  return AdonExpansionPanel({
    title: <b id="accordion-title-main">{title}</b>,
    body: <Grid container>
      <Grid item xs={12}>

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Masters in Business Administration (Ongoing)</b>
            <br />De La Salle University (2015-Present)
          </div>,
          body: <div align="left">
            Restarted my studies in MBA (started 2005 bu did not pursue due to funding), we have started everything again from 2015 and is now pending a thesis
          </div>
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Project Management Professional (2016) PMI_ID#4064984E1</b>
            <br />Project Management Institute
          </div>,
          body: <div align="left">
            Received my training with iKompass and have achieved PMP status by passing the global PMI exam
          </div>
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Microsoft Certified Professional (2012) CERT#F092-5218</b>
            <br />Microsoft Philippines
          </div>,
          body: <div align="left">
            Passed the Sharepoint and C# Microsoft Certification backed by Accenture
          </div>
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Bachelor of Science Degree in Information Technology</b>
            <br />Chiang Kai Shek College (1999-2004)
          </div>,
          body: <div align="left">
            College degree on BS-IT was completed
          </div>
        })}
      </Grid>
    </Grid>
  })
}

function AchievementsPanel() {
  const title = `Achievements`;
  return AdonExpansionPanel({
    title: <b id="accordion-title-main">{title}</b>,
    body: <Grid container>
      <Grid item xs={12} align="left">
        <ul>
          <li>Achieved "Project Management Professional" certification (2016)
            Viewable at : <a href="http://www.projectmanagement.com/profile/adonisvillamor/">The official PMI site</a>
          </li>
          <li>Achieved "Professional" Proficiency Level in Samsung Global Engineer Exam (2015)</li>
          <li>Completed AWS Essentials Training (Amazon 9/17/2015)</li>
          <li>Completed Business Case training (Harvard Manage Mentor Online Training)</li>
          <li>Completed  Negotiation training (Harvard Manage Mentor Online Training)</li>
          <li>Completed the PMP (Project Management Professional) training course (IKompass 2015)</li>
          <li>Completed Samsung: Agile and Quality Software Development (Samsung 2015)</li>
          <li>Completed Intellectual Property Office (IPO) Fundamental Training (IPO 2014)</li>
          <li>Certificate of completion on Samsung Leadership Training (Samsung 2014)</li>
          <li>Finished Microsoft SharePoint FAST Server 2010 Training (DBWizards 2012).</li>
          <li>Microsoft Certified Professional – Transcript ID : 979559 ; Access Code : alv441979
            Viewable at : <a href="https://mcp.microsoft.com/authenticate/validatemcp.aspx"> Microsoft.com</a>
          </li>
          <li>Provided training for SharePoint 2010 (Accenture/Avanade 2011)</li>
          <li>Passed Insurance Commission Exam (Manulife & PIC)</li>
          <li>Philippine Civil Service Professional (score of 87.36% ; ID : 08-108479)</li>
          <li>NSAT 1997 passer (Score of 93)</li>
        </ul>
      </Grid>
    </Grid>
  })
}


function WorkExpPanel() {
  var dt = new Date("December 30, 2017 21:25:10");
  const title = `Work Experiences (±${dt.getFullYear() - 2003} years since 2003)`;
  return AdonExpansionPanel({
    title: <b id="accordion-title-main">{title}</b>,
    body: <Grid container>
      <Grid item xs={12}>
        {AdonExpansionPanel({
          title: <div align="left">
            <b id="accordion-title-secondary">Technical Lead/Project Manager/Senior Software Engineer</b>
            <br />Lenddo Pte Ltd. [under Infinit-O Manila] (Dec 2015 - Present)
          </div>,
          body: <div align="left">
            LenddoEFL (formerly Lenddo) is a Fintech company based in Singapore which provides solutions for verification and credit scoring. The company deals with banks around the world and uses Data Science to create models that can predict patterns and analyze human behaviours to the needs of their clients.
            <br />
            My role here started as a Senior Web Back-end Developer where I learned the existing ecosystem and have to provide enhancements to it. Technologies involve NodeJS and MongoDB mainly. Later on I have temporarily tackled roles in Project Management due to the urgent need when the Global Delivery Team was abolished and have handled the day to day operations of the Software Development Team's deliverables.

            <ul>
              <li>Manage the Web, Back-end and Mobile development team.</li>
              <li>Collaborate with the QA and Infra team in order to support releases and handle production issues</li>
              <li>Handled the project management and coordination for the developers</li>
              <li>Manage tasks and source  codes via Jira, Bitbucket and Github</li>
              <li>Research on and Implement the latest Web and Database Technologies using Node.Js, ES6, Python, Redis, MongoDB, Sails.JS, Hapi.js, Angular.js, ReactJS, HTML5+CSS3, Amazon Web Services, etc.</li>
              <li>Generate reports using Prometheus, Grafana and Indicative.</li>
              <li>Architected and developed the 3rd version of the Authorize systems by using Service Oriented Architecture as well as developed other services like notification, OTP, Authentication, Monitoring, etc.</li>
              <li>Developed the API server as well as the Single Page client Web App version of the Onboarding system.</li>
              <li>Developed the psychometrics online exam system</li>
              <li>Use technologies on improving web server systems and API.</li>
              <li>Provide research reports on new technologies beyond work scope.</li>
            </ul>

          </div>,
        })}
        {AdonExpansionPanel({
          title: <div align="left">
            <b>Manager/ Technical Planning/ Business Dev (4/2015 to 12/2015)</b>
            <br />Samsung Mobile R&D Philippines (October 2012 - December 2015)
          </div>,
          body: <div align="left">
            The Samsung R&D Philippines Strategy Team focuses on planning and executing strategies that will advance the region's technological capability and manage its direction. It also ensures that we are able to get fundings and necessary support from HQ (Korea) by showing the innovations that the Philippine R&D center can provide to the entire company.
            <ul>
              <li>Designed and developed the Innovations Portal (LAMP Stack)</li>
              <li>Designed and developed the Skills Portal (MEAN Stack)</li>
              <li>Provided presentations and materials for various business case, innovations and business solutions</li>
              <li>Provided several innovation concepts</li>
              <li>SCRUMM Master for the Tizen Printer Team</li>
              <li>Collaborates with SEPCO (Samsung Sales and Marketing Team) producing solutions to support their business proposals</li>
              <li>Tasked with helping in developing the Technical Roadmap for 2015-2017</li>
            </ul>
          </div>,
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Manager / Project Team Lead (10/2012 - 4/2015)</b>
            <br />Samsung Mobile R&D Philippines (October 2012 - December 2015)
          </div>,
          body: <div align="left">
            The Samsung R&D Philippines Mobile Delivery Team is responsible for delivering the software side requirements for the Australia and New Zealand models. As part of the Project Management group, we ensure that timelines are reached and all issues and requirements are resolved so that the proper shipments will be delivered on each new product launch.
            <ul>
              <li>Represented the first high-level project of the centre</li>
              <li>As Project Team Lead, have managed up to 11 Project Leaders for the AUNZ projects.</li>
              <li>Has single-handedly designed and developed the "Samsung Project Management System" which aims to track workloads, contributions, schedules and project history. (LAMP Stack)</li>
              <li>Managed Team was responsible for the successful and on-time delivery of the following products to the AU/NZ regional market:
                GT-I9300, GT-I9300T, GT-I9505, GT-I9506, GT-N5110, GT-N5120, GT-N7100T, GT-N8000, GT-S7275R, GT-S7275T, GT-S7275Y, GT-S7580L, SM-C105, SM-C115, SM-313H, SM-313HX, SM-313ML, SM-G386F, SM-G850Y, SM-G900I, SM-N910U, SM-N915G, SM-T360, SM-T365Y, SM-T535, SM-A500Y, SM-E500M, SM-G920I and more.
              </li>
              <li>Recognized as manager of the team with the highest project workload and least project delays</li>
              <li>Was rated as GPMS 1 (Top 10% best employee) for 2 consecutive years for 2013 and 2014</li>
            </ul>
          </div>,
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Senior Software Engineer</b>
            <br />Accenture/Avanade/Navitaire (July 2011 - October 2012)
          </div>,
          body: <div align="left">
            Accenture is one of the big BPO in the country providing talents to different clients around the world. As part of the Avanade group, we are geared towards being specialized in the latest Microsoft technologies .NET C# and Sharepoint at this point. During this time I was also deployed to provide support for Navitaire which primarily provides a platform for online booking for low cost airlines.
            <ul>
              <li>Provided research and documentation improvements to the Avanade Bench Training Guides for SharePoint.</li>
              <li>Achieved the status "Microsoft Certified Professional" (see Achievements)</li>
              <li>Provided training for SharePoint 2010 to Avanade members</li>
              <li>Has worked on the Navitaire Project and their clients on Air Asia, NAS Air and Vueling.</li>
              <li>Re-designed and developed the PDC Migration to (C#, WPF, SharePoint).</li>
              <li>Worked on the GFK (Growth for Knowledge) Project.</li>
            </ul>
          </div>,
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Assistant Manager</b>
            <br />3E Electric Bikes (August 2008 - July 2011)
          </div>,
          body: <div align="left">
            3E Electric Bikes is a startup company that was established to be one of the pioneers in bringing electric bikes into the country. Due to rise in competition and poor sales however, the company dissolved after 3 years of operation.
            <ul>
              <li>Assisted in the procurement of parts and materials in China</li>
              <li>Communicates with stakeholders on the status and provide ideas for improvements</li>
              <li>Completed training on Electric Bicycle Assembly</li>
              <li>Chief Technician and warehouse supervisor</li>
              <li>Responsible for monitoring the inventory and sales</li>
            </ul>
          </div>,
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Supervising Application Systems Engineer</b>
            <br />Fujitsu Philippines Global Delivery Centre (WeServ) (January 2007 - July 2008)
          </div>,
          body: <div align="left">
            WeServ is the solutions provider arm of the Fujitsu brand in the Philippines. We provide customized enterprise solutions and support for other software development needs by the Company and its affiliates.
            <ul>
              <li>Supported the Equitable Bank Remittance System</li>
              <li>Completed Fujitsu C# training</li>
              <li>Designed and developed the Fujitsu Document Management System with a small team of 5 members</li>
              <li>Deployed to Fujitsu Transactions Solution (U.S.A.) to support the GlobalStore System</li>
            </ul>
          </div>,
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Microsoft .Net Consultant</b>
            <br />Prudential Life Plans (October 2005 - December 2006)
          </div>,
          body: <div align="left">
            Prudential Life Plans is an insurance company located in Makati. The contractual project is a pension loan system which is aimed to completed in a year. The staffing of the project was managed thru Software Laboratories Inc.
            <ul>
              <li>Worked on the Pension Loan System</li>
              <li>Lead in the re-design and development of the Pension Loan System and coding standard</li>
            </ul>
          </div>,
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Supervisor/Assistant Manager</b>
            <br />Uni-speed Auto Repair Shop (April 2004 - October 2005)
          </div>,
          body: <div align="left">
            Uni-Speed is a small auto repair shop which handles parts, repairs, insurance and maintenance of its customer's vehicles.
            <ul>
              <li>Responsible for communicating and establishing good relationships with customers</li>
              <li>Responsible for monitoring the work activities and deliver customer needs</li>
              <li>Responsible for tracking the sales of items and replenishing stocks</li>
              <li>Responsible for managing the payroll and inventory system</li>
            </ul>
          </div>,
        })}

        {AdonExpansionPanel({
          title: <div align="left">
            <b>Software Developer</b>
            <br />Mediasoft Technologies Corporation (July 2003 - April 2004)
          </div>,
          body: <div align="left">
            Mediasoft is a hardware vendor which offers corporate solutions to its clients using specialized hardwares like biometric and telephony systems.
            <ul>
              <li>Designed and developed the Customer Support Issue Tracking system (VB6, SQL Server)</li>
              <li>Designed and developed the Interactive Voice Response system used for sales demonstration. (VB6, SQL Server)</li>
            </ul>
          </div>,
        })}
      </Grid>
    </Grid>
  });
}

export default function AboutUs() {
  return (
    <Container align="center">
      <h3>Professional public profile of</h3>
      <h1>Adonis Lee Villamor</h1>
      <EducationPanel />
      <AchievementsPanel />
      <WorkExpPanel />
    </Container>
  );
}
