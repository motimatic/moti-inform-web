import httpClient from "../../../utils/http-clients/djangoHttpClient.js";
import { JourneyResourceSerializer } from "../../../models/serializers/journeyResourceSerializer.ts";
export class CommandResources {
    RESOURCE_FINDER_SERVICE = import.meta.env.VITE_API_PLATFORM_SERVICE_URL;
    DEFAULT_LIMIT = import.meta.env.VITE_API_DEFAULT_LIMIT;

    getUrl(personId: number, journeyStepId:number) {
        return  `${this.RESOURCE_FINDER_SERVICE}/journeys/resources/?person_id=${personId}&journey_step_id=${journeyStepId}`;
    }

    async run(personId: number, journeyStepId:number) {

        const url = this.getUrl(personId, journeyStepId);
       
        try {
            let response: any = {}
            if( import.meta.env.VITE_API_RUN_LOCAL === "true" )
                response = await this.getTestData();
            else
                response = await httpClient.get(url);
            return this.deserialize(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }

    }

    deserialize(data: any) : any{
        const serializer = new JourneyResourceSerializer();
        const page = serializer.deserializeList(data.results);
        return page;
    }

    private getTestData() {

        const response = {
            data: {
                "results": [
                    {
                        "id": 3,
                        "name": "Awareness",
                        "resources": [
                            {
                                "id": 46,
                                "name": "Paralegal Program Info",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/business-it-hospitality/paralegal/index.html"
                            },
                            {
                                "id": 126,
                                "name": "Enrollment Trends",
                                "url": "https://pima.edu/news/press-releases/2025/202501-16-pima-enrollment-trends.html"
                            },
                            {
                                "id": 156,
                                "name": "Graduate Success Story",
                                "url": "https://pima.edu/news/stories/current/202305-22-namrata-patel-pima-grad.html"
                            },
                            {
                                "id": 233,
                                "name": "Explore PimaOnline",
                                "url": "https://www.pima.edu/academics-programs/pimaonline/index.html"
                            },
                            {
                                "id": 185,
                                "name": "Inspiring Student Stories",
                                "url": "https://pima.edu/news/stories/current/202405-17-patricia-owen.html"
                            },
                            {
                                "id": 32,
                                "name": "Truck Driving Program Information",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/truck-driving/index.html"
                            },
                            {
                                "id": 127,
                                "name": "Pima Community College Home",
                                "url": "http://www.pima.edu"
                            },
                            {
                                "id": 157,
                                "name": "Success Story: Jennifer Phan",
                                "url": "https://pima.edu/news/stories/current/202404-18-jennifer-phan-addy-awardee.html"
                            },
                            {
                                "id": 236,
                                "name": "Public Safety Programs",
                                "url": "https://www.pima.edu/academics-programs/degrees-certificates/public-safety/index.html"
                            },
                            {
                                "id": 34,
                                "name": "Explore Digital Arts Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/business-it-hospitality/digital-arts/index.html"
                            },
                            {
                                "id": 204,
                                "name": "Discover Nursing",
                                "url": "https://pima.edu/news/stories/current/202210-10-lizbeth-mora-nursing-grad.html"
                            },
                            {
                                "id": 230,
                                "name": "Explore Social Sciences Programs",
                                "url": "https://www.pima.edu/academics-programs/degrees-certificates/social-behavioral-human/index.html"
                            },
                            {
                                "id": 55,
                                "name": "Programs & Degrees",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/education/early-childhood/index.html"
                            },
                            {
                                "id": 174,
                                "name": "Alumni Stories",
                                "url": "https://pima.edu/news/stories/current/202211-07-luke-hunt-filming-native-stories.html"
                            },
                            {
                                "id": 197,
                                "name": "Success Stories",
                                "url": "https://pima.edu/news/stories/current/202401-29-fernando-romero.html"
                            },
                            {
                                "id": 187,
                                "name": "Student Success Stories",
                                "url": "https://pima.edu/news/stories/current/202408-21-honors-student.html"
                            },
                            {
                                "id": 41,
                                "name": "Computer Information Systems Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/business-it-hospitality/computer-info-systems/index.html"
                            },
                            {
                                "id": 150,
                                "name": "Pima Stories",
                                "url": "https://pima.edu/news/stories/index.html"
                            },
                            {
                                "id": 30,
                                "name": "Health Information Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/business-it-hospitality/health-information-technology/index.html"
                            },
                            {
                                "id": 59,
                                "name": "Surgical Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/surgical-technology/index.html"
                            },
                            {
                                "id": 50,
                                "name": "Criminal Justice Programs",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/public-safety/criminal-justice/index.html"
                            },
                            {
                                "id": 1,
                                "name": "Pima Community College Homepage",
                                "url": "https://pima.edu"
                            },
                            {
                                "id": 178,
                                "name": "Find Your Purpose",
                                "url": "https://pima.edu/news/stories/current/202206-13-pearl-celix-fws.html"
                            },
                            {
                                "id": 163,
                                "name": "Success Stories",
                                "url": "https://pima.edu/news/stories/current/202208-10-angie-buenrostro-air-force-vet.html"
                            },
                            {
                                "id": 65,
                                "name": "Medical Assistant Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/medical-assistant/index.html"
                            },
                            {
                                "id": 60,
                                "name": "Welding Program Information",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/welding/index.html"
                            },
                            {
                                "id": 167,
                                "name": "Student Success Story",
                                "url": "https://pima.edu/news/stories/current/202209-21-tauty-sanchez-cybersecurity.html"
                            },
                            {
                                "id": 20,
                                "name": "Phlebotomy Program Details",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/phlebotomy/index.html"
                            },
                            {
                                "id": 39,
                                "name": "Therapeutic Massage Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/therapeutic-massage/index.html"
                            },
                            {
                                "id": 182,
                                "name": "Explore Archaeology Program",
                                "url": "https://pima.edu/news/stories/current/202409-06-archaeology-program.html"
                            },
                            {
                                "id": 152,
                                "name": "Program Insights",
                                "url": "https://pima.edu/news/stories/current/202206-03-why-i-chose-pima.html"
                            },
                            {
                                "id": 225,
                                "name": "Business & IT Programs",
                                "url": "https://www.pima.edu/academics-programs/degrees-certificates/business-it-hospitality/index.html"
                            },
                            {
                                "id": 165,
                                "name": "Explore Stories",
                                "url": "https://pima.edu/news/stories/current/202401-11-author-matt-mendez.html"
                            },
                            {
                                "id": 226,
                                "name": "Specialized Programs",
                                "url": "https://www.pima.edu/academics-programs/specialized-programs/index.html"
                            },
                            {
                                "id": 199,
                                "name": "Black History Month Q&A",
                                "url": "https://pima.edu/news/stories/current/202202-11-black-history-month-dr-allen.html"
                            },
                            {
                                "id": 176,
                                "name": "Student Success Story",
                                "url": "https://pima.edu/news/stories/current/202401-12-jocely-valles-whypima.html"
                            },
                            {
                                "id": 25,
                                "name": "Visual & Performing Arts Programs",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/arts-humanities/visual-performing-arts/index.html"
                            },
                            {
                                "id": 18,
                                "name": "Fire Science Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/public-safety/fire-science/index.html"
                            },
                            {
                                "id": 198,
                                "name": "Success Stories",
                                "url": "https://pima.edu/news/stories/current/202311-01-gabi-amparano-whypima.html"
                            },
                            {
                                "id": 26,
                                "name": "Language Programs",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/arts-humanities/languages/index.html"
                            },
                            {
                                "id": 222,
                                "name": "Arts, Humanities & Communication Programs",
                                "url": "https://www.pima.edu/academics-programs/degrees-certificates/arts-humanities/index.html"
                            },
                            {
                                "id": 209,
                                "name": "Culinary Success Story",
                                "url": "https://pima.edu/news/stories/current/202403-25-culinary-student-hannah-puckett.html"
                            },
                            {
                                "id": 31,
                                "name": "Clinical Research Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/clinical-research/index.html"
                            },
                            {
                                "id": 29,
                                "name": "Language Studies",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/arts-humanities/languages/translation-interpretation-cert/index.html"
                            },
                            {
                                "id": 49,
                                "name": "Nursing Program Details",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/nursing/index.html"
                            },
                            {
                                "id": 69,
                                "name": "Automotive Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/automotive/index.html"
                            },
                            {
                                "id": 219,
                                "name": "Adult Basic Education",
                                "url": "https://www.pima.edu/academics-programs/adult-basic-education/index.html"
                            },
                            {
                                "id": 40,
                                "name": "Fashion Design Program Info",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/arts-humanities/fashion-design/index.html"
                            },
                            {
                                "id": 57,
                                "name": "Pharmacy Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/pharmacy-technology/index.html"
                            },
                            {
                                "id": 42,
                                "name": "Machine Tool Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/machine-tool-tech/index.html"
                            },
                            {
                                "id": 63,
                                "name": "Request Program Information",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/automated-industrial-tech/index.html"
                            },
                            {
                                "id": 15,
                                "name": "Building & Construction Programs",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/building-construction/index.html"
                            },
                            {
                                "id": 71,
                                "name": "Request Information",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/social-behavioral-human/field-archaeology/index.html"
                            },
                            {
                                "id": 137,
                                "name": "Events Calendar",
                                "url": "https://pima.edu/nursinginfo"
                            },
                            {
                                "id": 68,
                                "name": "Business Programs",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/business-it-hospitality/business/index.html"
                            },
                            {
                                "id": 21,
                                "name": "Accounting Program Details",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/business-it-hospitality/accounting/index.html"
                            },
                            {
                                "id": 120,
                                "name": "TEEM Event Details",
                                "url": "https://pima.edu/news/announcements/202502-03-annual-teem-event.html"
                            },
                            {
                                "id": 109,
                                "name": "Explore PimaOnline",
                                "url": "https://pima.edu/academics-programs/pimaonline/index.html"
                            },
                            {
                                "id": 33,
                                "name": "Aviation Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/aviation/index.html"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "name": "Inquiry & Interest",
                        "resources": [
                            {
                                "id": 46,
                                "name": "Paralegal Program Info",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/business-it-hospitality/paralegal/index.html"
                            },
                            {
                                "id": 51,
                                "name": "English Program Information",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/arts-humanities/english-communication/index.html"
                            },
                            {
                                "id": 63,
                                "name": "Request Program Information",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/automated-industrial-tech/index.html"
                            },
                            {
                                "id": 38,
                                "name": "Programs & Degrees",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/arts-humanities/associate-of-arts/index.html"
                            },
                            {
                                "id": 117,
                                "name": "Programs & Certificates",
                                "url": "https://www.pima.edu/academics-programs/pimaonline/online-programs.html"
                            },
                            {
                                "id": 127,
                                "name": "Pima Community College Home",
                                "url": "http://www.pima.edu"
                            },
                            {
                                "id": 67,
                                "name": "Emergency Medical Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/public-safety/emergency-med-technology/index.html"
                            },
                            {
                                "id": 236,
                                "name": "Public Safety Programs",
                                "url": "https://www.pima.edu/academics-programs/degrees-certificates/public-safety/index.html"
                            },
                            {
                                "id": 86,
                                "name": "Request Information",
                                "url": "https://pima.edu/request-info/index"
                            },
                            {
                                "id": 204,
                                "name": "Discover Nursing",
                                "url": "https://pima.edu/news/stories/current/202210-10-lizbeth-mora-nursing-grad.html"
                            },
                            {
                                "id": 71,
                                "name": "Request Information",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/social-behavioral-human/field-archaeology/index.html"
                            },
                            {
                                "id": 58,
                                "name": "Programs & Degrees",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/dental-studies/index.html"
                            },
                            {
                                "id": 59,
                                "name": "Surgical Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/surgical-technology/index.html"
                            },
                            {
                                "id": 37,
                                "name": "Nondestructive Testing Certificate",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/aviation/ndt-cert/index.html"
                            },
                            {
                                "id": 52,
                                "name": "Science Programs",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/stem/sciences/index.html"
                            },
                            {
                                "id": 22,
                                "name": "Logistics & Supply Chain Management Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/logistics/index.html"
                            },
                            {
                                "id": 1,
                                "name": "Pima Community College Homepage",
                                "url": "https://pima.edu"
                            },
                            {
                                "id": 60,
                                "name": "Welding Program Information",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/welding/index.html"
                            },
                            {
                                "id": 39,
                                "name": "Therapeutic Massage Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/therapeutic-massage/index.html"
                            },
                            {
                                "id": 211,
                                "name": "Academics & Programs",
                                "url": "https://www.pima.edu/academics-programs/index"
                            },
                            {
                                "id": 62,
                                "name": "Social Services Programs",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/social-behavioral-human/social-services/index.html"
                            },
                            {
                                "id": 78,
                                "name": "Enroll in Adult Education",
                                "url": "https://pima.edu/academics-programs/adult-basic-education/index.html"
                            },
                            {
                                "id": 152,
                                "name": "Program Insights",
                                "url": "https://pima.edu/news/stories/current/202206-03-why-i-chose-pima.html"
                            },
                            {
                                "id": 225,
                                "name": "Business & IT Programs",
                                "url": "https://www.pima.edu/academics-programs/degrees-certificates/business-it-hospitality/index.html"
                            },
                            {
                                "id": 104,
                                "name": "Explore Degrees & Certificates",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/index"
                            },
                            {
                                "id": 23,
                                "name": "Medical Lab Tech Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/medical-laboratory-technology/index.html"
                            },
                            {
                                "id": 31,
                                "name": "Clinical Research Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/clinical-research/index.html"
                            },
                            {
                                "id": 29,
                                "name": "Language Studies",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/arts-humanities/languages/translation-interpretation-cert/index.html"
                            },
                            {
                                "id": 33,
                                "name": "Aviation Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/aviation/index.html"
                            },
                            {
                                "id": 49,
                                "name": "Nursing Program Details",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/health-sciences/nursing/index.html"
                            },
                            {
                                "id": 219,
                                "name": "Adult Basic Education",
                                "url": "https://www.pima.edu/academics-programs/adult-basic-education/index.html"
                            },
                            {
                                "id": 40,
                                "name": "Fashion Design Program Info",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/arts-humanities/fashion-design/index.html"
                            },
                            {
                                "id": 35,
                                "name": "Computer-Aided Design Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/business-it-hospitality/computer-aided-design/index.html"
                            },
                            {
                                "id": 42,
                                "name": "Machine Tool Technology Program",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/industry-manuf-construction/machine-tool-tech/index.html"
                            },
                            {
                                "id": 184,
                                "name": "Makerspace Story",
                                "url": "https://pima.edu/news/stories/current/202212-06-marc-vaughn-a-makerspace-story.html"
                            },
                            {
                                "id": 233,
                                "name": "Explore PimaOnline",
                                "url": "https://www.pima.edu/academics-programs/pimaonline/index.html"
                            },
                            {
                                "id": 27,
                                "name": "Social Sciences Programs",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/social-behavioral-human/social-science/index.html"
                            },
                            {
                                "id": 109,
                                "name": "Explore PimaOnline",
                                "url": "https://pima.edu/academics-programs/pimaonline/index.html"
                            },
                            {
                                "id": 61,
                                "name": "AGS Program Details",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/other-programs/associate-general-studies-ags/index.html"
                            },
                            {
                                "id": 158,
                                "name": "STEM Success Story",
                                "url": "https://pima.edu/news/stories/current/202206-23-samuel-phillips-stem.html"
                            },
                            {
                                "id": 54,
                                "name": "Choosing a Major",
                                "url": "https://pima.edu/admission/choosing-degree/index.html"
                            },
                            {
                                "id": 48,
                                "name": "Hospitality Programs",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/business-it-hospitality/hospitality/index.html"
                            },
                            {
                                "id": 176,
                                "name": "Student Success Story",
                                "url": "https://pima.edu/news/stories/current/202401-12-jocely-valles-whypima.html"
                            }
                        ]
                    },
                    {
                        "id": 12,
                        "name": "Application",
                        "resources": [
                            {
                                "id": 97,
                                "name": "Academic Advising",
                                "url": "http://www.pima.edu/mydegreeplan"
                            },
                            {
                                "id": 127,
                                "name": "Pima Community College Home",
                                "url": "http://www.pima.edu"
                            },
                            {
                                "id": 232,
                                "name": "Apply to Pima",
                                "url": "https://www.pima.edu/admission/apply-to-pima/index.html"
                            },
                            {
                                "id": 79,
                                "name": "Transfer to Pima",
                                "url": "https://pima.edu/admission/apply-to-pima/transfer-students.html"
                            },
                            {
                                "id": 56,
                                "name": "Apply Now",
                                "url": "https://pima.edu/admission/apply-to-pima/index.html"
                            },
                            {
                                "id": 73,
                                "name": "Apply to Pima",
                                "url": "https://pima.edu/admission/apply-to-pima/index"
                            },
                            {
                                "id": 96,
                                "name": "Apply Now",
                                "url": "https://www.pima.edu/admission/apply-to-pima/index"
                            },
                            {
                                "id": 91,
                                "name": "Application Checklist",
                                "url": "http://pima.edu/mychecklist"
                            },
                            {
                                "id": 78,
                                "name": "Enroll in Adult Education",
                                "url": "https://pima.edu/academics-programs/adult-basic-education/index.html"
                            },
                            {
                                "id": 80,
                                "name": "How to Apply for International Students",
                                "url": "https://pima.edu/admission/apply-to-pima/international-program/how-to-apply.html"
                            },
                            {
                                "id": 77,
                                "name": "Dual Enrollment Registration Steps",
                                "url": "https://pima.edu/admission/dual-enrollment/students.html"
                            },
                            {
                                "id": 28,
                                "name": "ESL Program Details",
                                "url": "https://pima.edu/academics-programs/specialized-programs/esl/index.html"
                            },
                            {
                                "id": 105,
                                "name": "International Program Details",
                                "url": "https://www.pima.edu/admission/apply-to-pima/international-program/index.html"
                            },
                            {
                                "id": 88,
                                "name": "Checklist",
                                "url": "http://www.pima.edu/mychecklist"
                            },
                            {
                                "id": 1,
                                "name": "Pima Community College Homepage",
                                "url": "https://pima.edu"
                            }
                        ]
                    },
                    {
                        "id": 17,
                        "name": "Decision & Acceptance",
                        "resources": []
                    },
                    {
                        "id": 18,
                        "name": "Enrollment",
                        "resources": [
                            {
                                "id": 195,
                                "name": "Federal Work-Study Program",
                                "url": "https://pima.edu/news/stories/current/202207-29-lupita-vazquez-federal-work-stuy.html"
                            },
                            {
                                "id": 100,
                                "name": "Financial Aid & Scholarships",
                                "url": "https://www.pima.edu/paying-for-college/financial-aid/index.html"
                            },
                            {
                                "id": 11,
                                "name": "Payment Plans",
                                "url": "https://pima.edu/paying-for-college/paying-your-bill/payment-plan/index.html"
                            },
                            {
                                "id": 90,
                                "name": "Veterans Benefits",
                                "url": "https://www.pima.edu/paying-for-college/veterans-benefits/index"
                            },
                            {
                                "id": 77,
                                "name": "Dual Enrollment Registration Steps",
                                "url": "https://pima.edu/admission/dual-enrollment/students.html"
                            },
                            {
                                "id": 93,
                                "name": "Registration Sessions",
                                "url": "https://www.pima.edu/student-resources/advising/program-advising-sessions.html"
                            },
                            {
                                "id": 228,
                                "name": "Transfer Resources",
                                "url": "https://www.pima.edu/academics-programs/transfer-degrees-partners/index.html"
                            },
                            {
                                "id": 107,
                                "name": "Register for Classes",
                                "url": "https://www.pima.edu/academics-programs/register-for-classes/index"
                            },
                            {
                                "id": 97,
                                "name": "Academic Advising",
                                "url": "http://www.pima.edu/mydegreeplan"
                            },
                            {
                                "id": 115,
                                "name": "Online Classes for Out-of-State Students",
                                "url": "https://pima.edu/academics-programs/pimaonline/out-of-state.html"
                            },
                            {
                                "id": 7,
                                "name": "Class Schedules",
                                "url": "https://pima.edu/academics-programs/register-for-classes/schedules.html"
                            },
                            {
                                "id": 87,
                                "name": "Advising Services",
                                "url": "https://pima.edu/student-resources/advising/index.html"
                            },
                            {
                                "id": 118,
                                "name": "Key Dates & Deadlines",
                                "url": "https://pima.edu/calendars/key-dates-and-deadlines/spring-2025.html"
                            },
                            {
                                "id": 246,
                                "name": "Course Registration Info",
                                "url": "https://ce.pima.edu/information/"
                            },
                            {
                                "id": 72,
                                "name": "Course Registration Portal",
                                "url": "https://mypima.pima.edu/"
                            },
                            {
                                "id": 113,
                                "name": "Course Schedule",
                                "url": "https://pima.edu/academics-programs/schedule/index.html?method=ON"
                            },
                            {
                                "id": 13,
                                "name": "Schedule of Classes",
                                "url": "https://pima.edu/academics-programs/schedule/index.html"
                            },
                            {
                                "id": 91,
                                "name": "Application Checklist",
                                "url": "http://pima.edu/mychecklist"
                            },
                            {
                                "id": 240,
                                "name": "Advising Services",
                                "url": "https://www.pima.edu/student-resources/advising/index.html"
                            },
                            {
                                "id": 88,
                                "name": "Checklist",
                                "url": "http://www.pima.edu/mychecklist"
                            },
                            {
                                "id": 5,
                                "name": "Key Dates & Deadlines",
                                "url": "https://pima.edu/calendars/key-dates-and-deadlines/summer-2025.html"
                            },
                            {
                                "id": 214,
                                "name": "Schedule of Classes",
                                "url": "https://www.pima.edu/academics-programs/schedule/index.html?method=ON"
                            },
                            {
                                "id": 8,
                                "name": "Auditing Classes Info",
                                "url": "https://pima.edu/academics-programs/register-for-classes/audit.html"
                            },
                            {
                                "id": 6,
                                "name": "Register for Classes",
                                "url": "https://pima.edu/academics-programs/register-for-classes/index.html"
                            },
                            {
                                "id": 220,
                                "name": "Class Schedules",
                                "url": "https://www.pima.edu/academics-programs/register-for-classes/schedules.html"
                            },
                            {
                                "id": 78,
                                "name": "Enroll in Adult Education",
                                "url": "https://pima.edu/academics-programs/adult-basic-education/index.html"
                            },
                            {
                                "id": 216,
                                "name": "Courses",
                                "url": "https://www.pima.edu/academics-programs/courses/index.html"
                            },
                            {
                                "id": 76,
                                "name": "Search, Register & Pay",
                                "url": "https://pima.edu/community/continuing-ed/search-register-pay.html"
                            },
                            {
                                "id": 148,
                                "name": "Key Dates & Deadlines",
                                "url": "https://pima.edu/calendars/key-dates-and-deadlines/index.html"
                            },
                            {
                                "id": 106,
                                "name": "Transfer Information",
                                "url": "https://www.pima.edu/student-resources/transferring-from-pima/index.html"
                            },
                            {
                                "id": 112,
                                "name": "Register for Classes",
                                "url": "https://www.pima.edu/academics-programs/register-for-classes/index.html"
                            },
                            {
                                "id": 12,
                                "name": "Drop/Add/Withdraw Classes",
                                "url": "https://pima.edu/academics-programs/register-for-classes/drop-add-withdraw.html"
                            },
                            {
                                "id": 95,
                                "name": "Class Waitlists",
                                "url": "https://www.pima.edu/academics-programs/register-for-classes/waitlist.html"
                            },
                            {
                                "id": 133,
                                "name": "Registration Sessions",
                                "url": "https://pima.edu/student-resources/advising/program-advising-sessions.html"
                            }
                        ]
                    },
                    {
                        "id": 23,
                        "name": "Pre-Arrival & Preparation",
                        "resources": []
                    },
                    {
                        "id": 28,
                        "name": "Onboarding & First Year Experience",
                        "resources": [
                            {
                                "id": 134,
                                "name": "Events Calendar",
                                "url": "https://www.pima.edu/careerworkshops"
                            },
                            {
                                "id": 147,
                                "name": "Orientation Details",
                                "url": "https://pima.edu/admission/connect-u-orientation/index.html"
                            },
                            {
                                "id": 103,
                                "name": "Meet My Advisor",
                                "url": "https://www.pima.edu/student-resources/advising/meet-my-advisor.html"
                            },
                            {
                                "id": 240,
                                "name": "Advising Services",
                                "url": "https://www.pima.edu/student-resources/advising/index.html"
                            },
                            {
                                "id": 158,
                                "name": "STEM Success Story",
                                "url": "https://pima.edu/news/stories/current/202206-23-samuel-phillips-stem.html"
                            },
                            {
                                "id": 85,
                                "name": "Digital Student ID Request",
                                "url": "https://pima.edu/news/announcements/2024/202409-23-digital-student-id.html"
                            },
                            {
                                "id": 133,
                                "name": "Registration Sessions",
                                "url": "https://pima.edu/student-resources/advising/program-advising-sessions.html"
                            },
                            {
                                "id": 238,
                                "name": "Co-curricular Learning",
                                "url": "https://www.pima.edu/academics-programs/academic-support/co-curricular/index.html"
                            },
                            {
                                "id": 129,
                                "name": "Campus Events",
                                "url": "https://events.pima.edu/?title=success&calendar%5B1%5D=1"
                            },
                            {
                                "id": 139,
                                "name": "Events Calendar",
                                "url": "https://pima.edu/aviationtechinfo"
                            },
                            {
                                "id": 130,
                                "name": "Events Calendar",
                                "url": "https://pima.edu/emtinfo"
                            },
                            {
                                "id": 10,
                                "name": "Events Calendar",
                                "url": "https://events.pima.edu/?calId=9"
                            },
                            {
                                "id": 161,
                                "name": "Nursing Student Story",
                                "url": "https://pima.edu/news/stories/current/202305-08-fortune-dominic-nursing.html"
                            },
                            {
                                "id": 121,
                                "name": "Spring Festival Info",
                                "url": "https://pima.edu/news/announcements/202501-29-desert-vista-spring-festival.html"
                            },
                            {
                                "id": 183,
                                "name": "Engagement Stories",
                                "url": "https://pima.edu/news/stories/current/202302-21-caleb-bailey-bsu.html"
                            },
                            {
                                "id": 136,
                                "name": "Events Calendar",
                                "url": "https://pima.edu/alliedhealthinfo"
                            },
                            {
                                "id": 199,
                                "name": "Black History Month Q&A",
                                "url": "https://pima.edu/news/stories/current/202202-11-black-history-month-dr-allen.html"
                            },
                            {
                                "id": 140,
                                "name": "Events Calendar",
                                "url": "https://events.pima.edu/?calendar%5B3%5D=7"
                            },
                            {
                                "id": 144,
                                "name": "Events Calendar",
                                "url": "https://www.pima.edu/fasttrackinfo"
                            },
                            {
                                "id": 138,
                                "name": "Events Calendar",
                                "url": "https://events.pima.edu/?calendar%5B2%5D=2"
                            }
                        ]
                    },
                    {
                        "id": 33,
                        "name": "Academic Progress & Retention",
                        "resources": [
                            {
                                "id": 128,
                                "name": "Calendars",
                                "url": "https://pima.edu/calendars/index.html"
                            },
                            {
                                "id": 16,
                                "name": "Attendance Policy",
                                "url": "https://pima.edu/student-resources/student-policies-complaints/attendance.html"
                            },
                            {
                                "id": 2,
                                "name": "MyPima Portal",
                                "url": "https://pima.edu/student-resources/support-services/computing-resources/mypima.html"
                            },
                            {
                                "id": 108,
                                "name": "Drop, Add or Withdrawal Information",
                                "url": "https://www.pima.edu/academics-programs/register-for-classes/drop-add-withdraw.html"
                            },
                            {
                                "id": 98,
                                "name": "Program of Study Info",
                                "url": "https://www.pima.edu/academics-programs/degrees-certificates/program-of-study/index.html"
                            },
                            {
                                "id": 97,
                                "name": "Academic Advising",
                                "url": "http://www.pima.edu/mydegreeplan"
                            },
                            {
                                "id": 87,
                                "name": "Advising Services",
                                "url": "https://pima.edu/student-resources/advising/index.html"
                            },
                            {
                                "id": 66,
                                "name": "Program of Study",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/program-of-study/index.html"
                            },
                            {
                                "id": 70,
                                "name": "General Education Requirements",
                                "url": "https://pima.edu/academics-programs/degrees-certificates/other-programs/agec/index.html"
                            },
                            {
                                "id": 240,
                                "name": "Advising Services",
                                "url": "https://www.pima.edu/student-resources/advising/index.html"
                            },
                            {
                                "id": 12,
                                "name": "Drop/Add/Withdraw Classes",
                                "url": "https://pima.edu/academics-programs/register-for-classes/drop-add-withdraw.html"
                            },
                            {
                                "id": 114,
                                "name": "Time Management Tool",
                                "url": "https://pima.edu/academics-programs/pimaonline/time-management.html"
                            },
                            {
                                "id": 223,
                                "name": "Academic Support Services",
                                "url": "https://www.pima.edu/academics-programs/academic-support/index.html"
                            },
                            {
                                "id": 3,
                                "name": "IT Support",
                                "url": "https://pima.edu/student-resources/support-services/computing-resources/contact-us.html"
                            },
                            {
                                "id": 213,
                                "name": "Tutoring Services",
                                "url": "https://www.pima.edu/academics-programs/academic-support/tutoring/index.html"
                            },
                            {
                                "id": 145,
                                "name": "Tutoring Services",
                                "url": "https://pima.edu/academics-programs/academic-support/tutoring/index.html"
                            },
                            {
                                "id": 110,
                                "name": "Tutoring Services",
                                "url": "https://www.pima.edu/academics-programs/academic-support/tutoring/index.html?gad_source=1&gclid=Cj0KCQjws560BhCuARIsAHMqE0GatYerdPJ0pfHjC3ug2dREUVI2ycCuXbW05WZcNZLOYt3yKMhX8AUaAmwEEALw_wcB"
                            },
                            {
                                "id": 221,
                                "name": "Library Resources",
                                "url": "https://www.pima.edu/academics-programs/academic-support/library/index.html"
                            },
                            {
                                "id": 235,
                                "name": "Testing Centers",
                                "url": "https://www.pima.edu/academics-programs/academic-support/testing-centers/index.html"
                            },
                            {
                                "id": 173,
                                "name": "Support Services: Childcare",
                                "url": "https://pima.edu/news/stories/current/202311-29-childcare-for-students.html"
                            },
                            {
                                "id": 196,
                                "name": "Support Services",
                                "url": "https://pima.edu/news/stories/current/202310-10-trio.html"
                            },
                            {
                                "id": 158,
                                "name": "STEM Success Story",
                                "url": "https://pima.edu/news/stories/current/202206-23-samuel-phillips-stem.html"
                            },
                            {
                                "id": 179,
                                "name": "Success Stories",
                                "url": "https://pima.edu/news/stories/current/202210-19-suzanne-roy-aviation-tech.html"
                            },
                            {
                                "id": 134,
                                "name": "Events Calendar",
                                "url": "https://www.pima.edu/careerworkshops"
                            },
                            {
                                "id": 119,
                                "name": "2025 Announcements",
                                "url": "https://pima.edu/news/announcements/index.html"
                            },
                            {
                                "id": 168,
                                "name": "Find Your Niche in STEM",
                                "url": "https://pima.edu/news/stories/current/202307-13-genesis-benedith-uaz-stem.html"
                            },
                            {
                                "id": 238,
                                "name": "Co-curricular Learning",
                                "url": "https://www.pima.edu/academics-programs/academic-support/co-curricular/index.html"
                            },
                            {
                                "id": 208,
                                "name": "Student Success Stories",
                                "url": "https://pima.edu/news/stories/current/202305-22-alexis-rose-young-pima-grad.html"
                            },
                            {
                                "id": 174,
                                "name": "Alumni Stories",
                                "url": "https://pima.edu/news/stories/current/202211-07-luke-hunt-filming-native-stories.html"
                            },
                            {
                                "id": 129,
                                "name": "Campus Events",
                                "url": "https://events.pima.edu/?title=success&calendar%5B1%5D=1"
                            },
                            {
                                "id": 187,
                                "name": "Student Success Stories",
                                "url": "https://pima.edu/news/stories/current/202408-21-honors-student.html"
                            },
                            {
                                "id": 139,
                                "name": "Events Calendar",
                                "url": "https://pima.edu/aviationtechinfo"
                            },
                            {
                                "id": 172,
                                "name": "Mentorship Stories",
                                "url": "https://pima.edu/news/stories/current/202311-07-regina-santaniello.html"
                            },
                            {
                                "id": 247,
                                "name": "Employee Training",
                                "url": "https://pima.edu/business-industry/employer-training/index.html"
                            },
                            {
                                "id": 146,
                                "name": "Events Calendar",
                                "url": "https://events.pima.edu/?calendar%5B3%5D=3"
                            },
                            {
                                "id": 195,
                                "name": "Federal Work-Study Program",
                                "url": "https://pima.edu/news/stories/current/202207-29-lupita-vazquez-federal-work-stuy.html"
                            },
                            {
                                "id": 207,
                                "name": "Student Success Stories",
                                "url": "https://pima.edu/news/stories/current/20220531-liza-graybill.html"
                            },
                            {
                                "id": 162,
                                "name": "Student Success Stories",
                                "url": "https://pima.edu/news/stories/current/20220714-peter-keith-restarting-after-prison.html"
                            },
                            {
                                "id": 167,
                                "name": "Student Success Story",
                                "url": "https://pima.edu/news/stories/current/202209-21-tauty-sanchez-cybersecurity.html"
                            },
                            {
                                "id": 10,
                                "name": "Events Calendar",
                                "url": "https://events.pima.edu/?calId=9"
                            },
                            {
                                "id": 161,
                                "name": "Nursing Student Story",
                                "url": "https://pima.edu/news/stories/current/202305-08-fortune-dominic-nursing.html"
                            },
                            {
                                "id": 121,
                                "name": "Spring Festival Info",
                                "url": "https://pima.edu/news/announcements/202501-29-desert-vista-spring-festival.html"
                            },
                            {
                                "id": 183,
                                "name": "Engagement Stories",
                                "url": "https://pima.edu/news/stories/current/202302-21-caleb-bailey-bsu.html"
                            },
                            {
                                "id": 199,
                                "name": "Black History Month Q&A",
                                "url": "https://pima.edu/news/stories/current/202202-11-black-history-month-dr-allen.html"
                            },
                            {
                                "id": 135,
                                "name": "Events Calendar",
                                "url": "https://events.pima.edu/"
                            },
                            {
                                "id": 144,
                                "name": "Events Calendar",
                                "url": "https://www.pima.edu/fasttrackinfo"
                            },
                            {
                                "id": 206,
                                "name": "Celebrating Student Success",
                                "url": "https://pima.edu/news/stories/current/202305-22-maleah-manning-pima-grad.html"
                            },
                            {
                                "id": 209,
                                "name": "Culinary Success Story",
                                "url": "https://pima.edu/news/stories/current/202403-25-culinary-student-hannah-puckett.html"
                            },
                            {
                                "id": 132,
                                "name": "Scheduled Downtimes",
                                "url": "https://pima.edu/calendars/it-downtime/index.html"
                            },
                            {
                                "id": 138,
                                "name": "Events Calendar",
                                "url": "https://events.pima.edu/?calendar%5B2%5D=2"
                            },
                            {
                                "id": 170,
                                "name": "Success Stories",
                                "url": "https://pima.edu/news/stories/current/202411-26-pima-workforce-culinary-program-changing-lives.html"
                            }
                        ]
                    },
                    {
                        "id": 38,
                        "name": "Graduation Preparation",
                        "resources": [
                            {
                                "id": 99,
                                "name": "Graduation Information",
                                "url": "https://www.pima.edu/student-resources/graduation/index"
                            },
                            {
                                "id": 175,
                                "name": "Career Success Stories",
                                "url": "https://pima.edu/news/stories/current/202202-08-grow-your-career.html"
                            },
                            {
                                "id": 201,
                                "name": "Veteran Success Story",
                                "url": "https://pima.edu/news/stories/current/202211-21-aurora-sardina-veteran-transitioning-to-cybersecurity.html"
                            },
                            {
                                "id": 228,
                                "name": "Transfer Resources",
                                "url": "https://www.pima.edu/academics-programs/transfer-degrees-partners/index.html"
                            },
                            {
                                "id": 116,
                                "name": "Graduation Information",
                                "url": "https://www.pima.edu/student-resources/graduation/index.html"
                            }
                        ]
                    },
                    {
                        "id": 43,
                        "name": "Post-Graduation & Alumni",
                        "resources": [
                            {
                                "id": 156,
                                "name": "Graduate Success Story",
                                "url": "https://pima.edu/news/stories/current/202305-22-namrata-patel-pima-grad.html"
                            },
                            {
                                "id": 194,
                                "name": "Pima Stories",
                                "url": "https://pima.edu/news/stories/2021/index.html"
                            },
                            {
                                "id": 171,
                                "name": "My STEM Story",
                                "url": "https://pima.edu/news/stories/current/202203-08-my-stem-story.html"
                            },
                            {
                                "id": 174,
                                "name": "Alumni Stories",
                                "url": "https://pima.edu/news/stories/current/202211-07-luke-hunt-filming-native-stories.html"
                            },
                            {
                                "id": 154,
                                "name": "Alumni Stories",
                                "url": "https://pima.edu/news/stories/current/202301-30-barbea-williams-african-dance-culture.html"
                            },
                            {
                                "id": 153,
                                "name": "Commencement Highlights",
                                "url": "https://pima.edu/news/stories/current/202203-28-commencement-speaker.html"
                            },
                            {
                                "id": 201,
                                "name": "Veteran Success Story",
                                "url": "https://pima.edu/news/stories/current/202211-21-aurora-sardina-veteran-transitioning-to-cybersecurity.html"
                            },
                            {
                                "id": 172,
                                "name": "Mentorship Stories",
                                "url": "https://pima.edu/news/stories/current/202311-07-regina-santaniello.html"
                            },
                            {
                                "id": 210,
                                "name": "Career Success Stories",
                                "url": "https://pima.edu/news/stories/current/202411-06-high-tech-career-provides-financial-security.html"
                            },
                            {
                                "id": 231,
                                "name": "PimaFastTrack Programs",
                                "url": "https://ce.pima.edu/fasttrack/"
                            },
                            {
                                "id": 249,
                                "name": "Continuing Education",
                                "url": "https://ce.pima.edu/"
                            },
                            {
                                "id": 242,
                                "name": "Workforce Training",
                                "url": "https://ce.pima.edu/workforce-training/"
                            },
                            {
                                "id": 245,
                                "name": "Lifelong Learning",
                                "url": "https://ce.pima.edu/lifelong-learning/"
                            }
                        ]
                    }
                ]
            }
        }
      

        return response;

    }


}
