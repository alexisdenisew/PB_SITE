
    // Hard-coded organizations
    const organizations = {
      construction: [
        {
          name: "United Brotherhood of Carpenters (UBC)",
          url: "https://techorg1.com",
          description: "One of the oldest and largest trade unions in North America, representing carpenters, framers, and related trades."
        },
        {
          name: "International Brotherhood of Electrical Workers (IBEW)",
          url: "https://techorg2.com",
          description: "Represents electricians and electrical workers in construction, offering training, apprenticeship programs, and workplace advocacy."
        },{
            name: "International Union of Bricklayers and Allied Craftworkers (BAC)",
            url: "",
            description: "Focuses on representing bricklayers, stone masons, tile setters, and other craftworkers."
          },{
            name: "Laborers’ International Union of North America (LIUNA)",
            url: "",
            description: "Represents construction laborers, promoting safe working conditions and fair wages."
          },{
            name: "Sheet Metal Workers' International Association (SMART)",
            url: "",
            description: "Represents sheet metal workers, focusing on fair wages, benefits, and safety in construction projects."
          },{
            name: "International Association of Bridge, Structural, Ornamental, and Reinforcing Iron Workers (Ironworkers)",
            url: "",
            description: "Represents iron and steelworkers, advocating for safety standards and fair labor practices."
          },{
            name: "Operative Plasterers' and Cement Masons' International Association (OPCMIA)",
            url: "",
            description: "Represents plasterers, cement masons, and similar trades in the construction sector."
          },{
            name: "International Association of Heat and Frost Insulators and Allied Workers (HFIAW)",
            url: "",
            description: "Advocates for insulation workers in the construction and industrial sectors."
          },{
            name: "Painters and Allied Trades (IUPAT)",
            url: "",
            description: "Represents painters, drywall finishers, glaziers, and other allied trades in the construction industry."
          },{
            name: "Roofers and Waterproofers Union (United Union of Roofers)",
            url: "",
            description: "Represents roofing and waterproofing professionals, focusing on training, safety, and fair wages."
          },{
            name: "",
            url: "",
            description: ""
          },
      ],
      healthcare: [
        {
          name: "National Nurses United (NNU)",
          url: "https://healthorg1.com",
          description: "The largest union of registered nurses in the U.S., advocating for patient safety, healthcare reform, and fair labor practices for nurses."
        },
        {
            name: "American Federation of Teachers (AFT) – Healthcare Division",
            url: "",
            description: "Supports healthcare professionals such as nurses and technicians, offering resources and advocacy for professional development and workplace rights."
          },
          {
            name: "United Food and Commercial Workers International Union (UFCW)",
            url: "",
            description: "Includes healthcare workers in clinics and pharmacies, fighting for better wages, working conditions, and benefits."
          },{
            name: "California Nurses Association (CNA)",
            url: "",
            description: "A branch of NNU, CNA represents nurses in California, promoting patient advocacy and safe staffing laws."
          },{
            name: "Health Professionals and Allied Employees (HPAE)",
            url: "",
            description: "New Jersey’s largest union of healthcare professionals, representing nurses, therapists, and lab technicians."
          },{
            name: "National Union of Healthcare Workers (NUHW)",
            url: "",
            description: "A progressive union in California advocating for mental health workers, therapists, and other healthcare staff."
          },{
            name: "American Nurses Association (ANA)",
            url: "",
            description: "While not a traditional union, ANA offers collective representation for nurses through professional advocacy and labor organizing efforts."
          },{
            name: "United Healthcare Workers West (UHW)",
            url: "",
            description: "Part of SEIU, this union focuses on empowering healthcare workers in California to advocate for patient care and workplace improvements."
          },{
            name: "Massachusetts Nurses Association (MNA)",
            url: "",
            description: "Represents nurses and healthcare professionals in Massachusetts, focusing on collective bargaining and legislative advocacy for health workers."
          }
      ],
      education: [
        {
          name: "National Education Association (NEA)",
          url: "https://eduorg1.com",
          description: "The largest teacher union in the U.S., representing public school teachers, support staff, and higher education faculty."
        },
        {
          name: "American Federation of Teachers (AFT)",
          url: "https://eduorg2.com",
          description: "Represents educators at all levels, including K-12 teachers, higher education faculty, and school support staff."
        }
        ,{
            name: "United Federation of Teachers (UFT)",
            url: "",
            description: "A New York City-based union representing teachers, paraprofessionals, and school administrators."
          },{
            name: "California Teachers Association (CTA)",
            url: "",
            description: "Represents public school teachers in California, advocating for quality education and teacher rights."
          },{
            name: "Chicago Teachers Union (CTU)",
            url: "",
            description: "Advocates for educators in Chicago Public Schools, focusing on wages, working conditions, and equitable student funding."
          },{
            name: "Oregon Education Association (OEA)",
            url: "",
            description: "Represents teachers and support staff in Oregon, promoting professional rights and public education improvement."
          },{
            name: "United University Professions (UUP)",
            url: "",
            description: "Represents faculty and staff at the State University of New York (SUNY) system, focusing on labor contracts and workplace advocacy."
          },{
            name: "Boston Teachers Union (BTU)",
            url: "",
            description: "Represents educators in Boston Public Schools, advocating for fair wages and equitable education policies."
          },{
            name: "Service Employees International Union (SEIU) – Education Workers",
            url: "",
            description: "Advocates for school custodians, cafeteria workers, and other non-teaching school staff, focusing on workplace equity and benefits."
          }
      ]
    };

    function showOrganizations() {
      const sector = document.getElementById("job-sector").value;
      const listContainer = document.getElementById("organization-list");
      listContainer.innerHTML = ""; // Clear existing content

      if (sector && organizations[sector]) {
        organizations[sector].forEach(org => {
          const orgDiv = document.createElement("div");
          orgDiv.className = "organization";

          const orgTitle = document.createElement("h1");
          orgTitle.className = "org-title";
          const orgLink = document.createElement("a");
          orgLink.className = "org-link";
          orgLink.href = org.url;
          orgLink.textContent = org.name;
          orgLink.target = "_blank";
          orgTitle.appendChild(orgLink);

          const orgDescription = document.createElement("p");
          orgDescription.className = "org-description";
          orgDescription.textContent = org.description;

          orgDiv.appendChild(orgTitle);
          orgDiv.appendChild(orgDescription);
          listContainer.appendChild(orgDiv);
        });
      }
    }

        // Hard-coded organizations for each state
        const stateOrganizations = {
            alabama: [
              {
                name: "Alabama Education Association (AEA)",
                url: "https://myaea.org/",
                description: "Represents teachers and education professionals, advocating for better pay, benefits, and public education funding in Alabama."
              },
              {
                name: "United Mine Workers of America (UMWA)",
                url: "https://umwa.org/news-media/journal/alabama-coal/",
                description: "Represents coal miners and workers in related industries, advocating for safety, fair wages, and benefits."
              },{
                name: "United Steelworkers (USW)",
                url: "https://m.usw.org/districts/9",
                description: "Advocates for workers in steel, manufacturing, and chemical industries, with a strong presence in industrial regions of Alabama."
              }
            ],
            alaska: [
              {
                name: "Alaska Public Employees Association (APEA/AFT)",
                url: "https://www.apea-aft.org/",
                description: "Represents public employees, including state and municipal workers, focusing on fair wages, benefits, and working conditions."
              },
              {
                name: "International Brotherhood of Teamsters (IBT)",
                url: "https://akteamsters.com/",
                description: "Strong in Alaska's transportation, logistics, and construction sectors, advocating for workers' rights and union protections."
              },{
                name: "United Food and Commercial Workers (UFCW)",
                url: "https://www.akufcwtrust.com/",
                description: "Represents grocery, retail, and cannery workers, focusing on fair pay and safe working conditions."
              }
            ],
            arizona: [
              {
                name: "Arizona Education Association (AEA)",
                url: "https://www.arizonaea.org/",
                description: "Advocates for public school educators, focusing on improved funding, salaries, and educational policies."
              },
              {
                name: "United Food and Commercial Workers (UFCW)",
                url: "https://ufcw99.com/",
                description: "Represents grocery, retail, and food processing workers, ensuring fair wages and benefits in Arizona."
              },{
                name: "Service Employees International Union (SEIU)",
                url: "https://www.idealist.org/en/nonprofit/f97c8074411646e39f63bbddcc51b857-seiu-local-5-arizona-phoenix",
                description: "Focuses on healthcare workers, janitorial staff, and public service employees, advocating for improved wages and working conditions."
              }
            ],
            arkansas: [
              {
                name: "Arkansas Education Association (AEA)",
                url: "https://www.aeaonline.org/",
                description: "Represents educators and school staff, advocating for fair wages, benefits, and better education funding."
              },
              {
                name: "United Steelworkers (USW)",
                url: "https://m.usw.org/districts/13",
                description: "Serves workers in steel, manufacturing, and paper industries, protecting wages and workplace safety."
              },{
                name: "United Food and Commercial Workers (UFCW)",
                url: "https://www.ufcw.org/members/find-your-local/",
                description: "Advocates for retail and food processing workers, ensuring equitable pay and conditions in Arkansas."
              }
            ],
            california: [
              {
                name: "California Teachers Association (CTA)",
                url: "https://www.cta.org/",
                description: "Represents over 300,000 educators, advocating for public education improvements, fair pay, and benefits."
              },
              {
                name: "Service Employees International Union (SEIU) California",
                url: "https://seiuca.org/",
                description: "Focuses on healthcare, public sector, and janitorial workers, working for better wages, benefits, and workplace protections."
              },{
                name: "California Nurses Association/National Nurses United (CNA/NNU)",
                url: "https://www.nationalnursesunited.org/california-nurses-association",
                description: "Advocates for registered nurses, ensuring safe staffing ratios, patient care standards, and nurses' rights."
              }
            ],
            colorado: [
              {
                name: "Colorado Education Association (CEA)",
                url: "https://coloradoea.org/",
                description: "Represents educators and school staff, advocating for fair pay, funding, and public education improvements."
              },
              {
                name: "United Food and Commercial Workers (UFCW) Local 7",
                url: "https://www.ufcw7.org/",
                description: "Represents grocery, meatpacking, and healthcare workers, ensuring worker rights and safety."
              },{
                name: "Service Employees International Union (SEIU) Colorado",
                url: "https://www.seiu105.org/",
                description: "Advocates for healthcare workers, janitors, and public sector employees, focusing on better wages and working conditions."
              }
            ],
            connecticut: [
              {
                name: "Connecticut Education Association (CEA)",
                url: "https://cea.org/",
                description: "Represents teachers and education professionals, working for improved salaries and school funding."
              },
              {
                name: "American Federation of State, County, and Municipal Employees (AFSCME) Council 4",
                url: "https://www.council4.org/",
                description: "Advocates for public sector employees, including municipal and state workers, focusing on fair pay and benefits."
              },{
                name: "United Auto Workers (UAW) Region 9A",
                url: "https://region9a.uaw.org/",
                description: "Represents workers in manufacturing, technical, and service industries, including university employees."
              }
            ],
            delaware: [
              {
                name: "Delaware State Education Association (DSEA)",
                url: "https://www.dsea.org/",
                description: "Represents educators and school personnel, advocating for quality education and fair compensation."
              },
              {
                name: "United Food and Commercial Workers (UFCW) Local 27",
                url: "https://www.ufcw27.org/",
                description: "Focuses on grocery, retail, and healthcare workers, ensuring fair pay and safe working conditions."
              },{
                name: "American Federation of State, County, and Municipal Employees (AFSCME) Council 81",
                url: "https://www.afscme.org/local/delaware",
                description: "Represents state and municipal workers, advocating for public sector benefits and workplace protections."
              }
            ],
            florida: [
              {
                name: "Florida Education Association (FEA)",
                url: "https://feaweb.org/",
                description: "Represents public school teachers and education professionals, focusing on better wages, benefits, and education policies."
              },
              {
                name: "Service Employees International Union (SEIU) Florida",
                url: "https://seiufl.org/",
                description: "Advocates for healthcare, janitorial, and public service workers, ensuring fair pay and job protections."
              },{
                name: "International Brotherhood of Teamsters (IBT) Florida",
                url: "https://teamster.org/careercenter/florida/",
                description: "Represents workers in logistics, transportation, and warehousing, focusing on collective bargaining and workplace rights."
              }
            ],
            georgia: [
              {
                name: "Georgia Association of Educators (GAE)",
                url: "https://gae.org/",
                description: "Advocates for public school teachers and staff, ensuring fair pay and improved education policies."
              },
              {
                name: "International Brotherhood of Teamsters (IBT) Georgia",
                url: "https://teamster.org/careercenter/georgia/",
                description: "Represents workers in transportation, logistics, and warehousing, advocating for workers’ rights and safety."
              },{
                name: "United Food and Commercial Workers (UFCW) Local 1996",
                url: "https://ufcw1996.org/",
                description: "Represents grocery, retail, and healthcare workers, focusing on better wages and conditions."
              }
        ], hawaii: [
                {
                name: "Hawaii State Teachers Association (HSTA)",
                url: "https://www.hsta.org/",
                description: "Represents public school teachers, advocating for quality education and fair compensation."
                },
                {
                name: "International Longshore and Warehouse Union (ILWU) Local 142",
                url: "https://www.ilwulocal142.org/",
                description: "Represents workers in various industries, including longshore, tourism, and agriculture, focusing on workers' rights and benefits."
                },
                {
                name: "United Public Workers (UPW) AFSCME Local 646",
                url: "https://www.upwhawaii.org/",
                description: "Represents public sector workers, including blue-collar and non-professional white-collar employees, advocating for fair labor practices.."
                }
            ],
            idaho: [
                {
                name: "Idaho Education Association (IEA)",
                url: "https://idahoea.org/",
                description: "Represents educators and education support professionals, advocating for public education improvements and fair compensation."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 291",
                url: "https://www.ibew291.org/",
                description: "Represents electrical workers, focusing on fair wages, training, and safe working conditions."
                },
                {
                name: "United Association of Plumbers and Pipefitters Local 296",
                url: "https://www.ualocal296.org/",
                description: "Represents plumbers, pipefitters, and HVAC technicians, ensuring quality training and fair labor standards."
                }
            ],
            illinois: [
                {
                name: "Illinois Education Association (IEA-NEA)",
                url: "https://ieanea.org/",
                description: "Represents public school educators outside the city of Chicago, advocating for quality education and professional rights."
                },
                {
                name: "Chicago Teachers Union (CTU) Local 1",
                url: "https://www.ctulocal1.org/",
                description: "Represents educators in Chicago Public Schools, focusing on fair contracts and educational reforms."
                },
                {
                name: "Service Employees International Union (SEIU) Healthcare Illinois & Indiana",
                url: "https://seiuhcilin.org/",
                description: "Represents healthcare and child care workers, advocating for better wages and working conditions."
                }
            ],
            indiana: [
                {
                name: "Indiana State Teachers Association (ISTA)",
                url: "https://www.ista-in.org/",
                description: "Represents educators and education support professionals, advocating for public education and fair labor practices."
                },
                {
                name: "United Auto Workers (UAW) Local 933",
                url: "https://local933.com/",
                description: "Represents workers in the automotive and aerospace industries, focusing on fair wages and safe working conditions."
                },
                {
                name: "Indiana AFL-CIO",
                url: "https://www.inaflcio.org/",
                description: "A state federation of labor unions representing various industries, advocating for workers' rights and labor-friendly policies."
                }
            ],
            iowa: [
                {
                name: "Iowa State Education Association (ISEA)",
                url: "https://isea.org/",
                description: "Represents educators and education support professionals, advocating for quality public education and fair compensation."
                },
                {
                name: "American Federation of State, County, and Municipal Employees (AFSCME) Iowa Council 61",
                url: "https://www.afscmeiowa.org/",
                description: "Represents public employees, focusing on workers' rights, fair wages, and safe working conditions."
                },
                {
                name: "United Auto Workers (UAW) Local 838",
                url: "https://region4.uaw.org/uaw-local-838",
                description: "Represents workers in manufacturing, particularly in the automotive sector, advocating for fair labor standards and benefits."
                }
            ],
            kansas: [
                {
                name: "Kansas National Education Association (KNEA)",
                url: "https://www.kneaweb.org/",
                description: "Represents educators and education professionals, advocating for quality public education and fair working conditions."
                },
                {
                name: "United Auto Workers (UAW) Local 31",
                url: "https://uawlocal31.org/",
                description: "Represents workers in the automotive industry, particularly those at the General Motors Fairfax Assembly Plant, focusing on fair wages and safe working conditions."
                },
                {
                name: "International Brotherhood of Teamsters (IBT) Local 696",
                url: "https://www.teamsters696.com/",
                description: "Represents a diverse group of workers in transportation, logistics, and other industries, advocating for workers' rights and benefits."
                }
            ],
            kentucky: [
                {
                name: "Kentucky Education Association (KEA)",
                url: "https://www.kea.org/",
                description: "Represents public school educators and support staff, advocating for quality education and professional rights."
                },
                {
                name: "United Auto Workers (UAW) Local 862",
                url: "https://uaw862.org/",
                description: "Represents workers at the Ford Motor Company plants in Louisville, focusing on fair labor practices and benefits."
                },
                {
                name: "United Steelworkers (USW) Local 1865",
                url: "https://uswlocal1865.org/",
                description: "Represents steelworkers in Kentucky, advocating for safe working conditions and fair compensation."
                }
            ],
            louisiana: [
                {
                name: "Louisiana Federation of Teachers (LFT)",
                url: "https://la.aft.org/home",
                description: "Represents educators and school employees, advocating for improved public education and professional standards."
                },
                {
                name: "United Steelworkers (USW) Local 13-12",
                url: "https://www.usw1312.org/",
                description: "Represents workers in the oil and chemical industries, focusing on safety standards and fair labor practices."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 130",
                url: "https://www.ibewlu130.com/",
                description: "Represents electrical workers in various sectors, advocating for training, safety, and fair wages."
                }
            ],
            maine: [
                {
                name: "Maine Education Association (MEA)",
                url: "https://maineea.org/",
                description: "Represents educators and support professionals, advocating for quality public education and fair working conditions."
                },
                {
                name: "Maine AFL-CIO",
                url: "https://maineaflcio.org/",
                description: "A federation of labor unions representing various industries, working to improve the lives of working families in Maine."
                },
                {
                name: "International Association of Machinists and Aerospace Workers (IAMAW) Local S6",
                url: "https://www.locals6.org/",
                description: "Represents shipbuilders at Bath Iron Works, focusing on fair wages, benefits, and workplace safety."
                }
            ],
            maryland: [
                {
                name: "Maryland State Education Association (MSEA)",
                url: "https://marylandeducators.org/",
                description: "Represents educators and school employees, advocating for quality public education and professional rights"
                },
                {
                name: "American Federation of State, County, and Municipal Employees (AFSCME) Maryland Council 3",
                url: "https://www.afscmemd.org/",
                description: "Represents public sector workers, focusing on fair wages, benefits, and working conditions."
                },
                {
                name: "Service Employees International Union (SEIU) Local 500",
                url: "https://www.seiu500.org/",
                description: "Represents workers in education, public service, and nonprofit sectors, advocating for fair labor practices and benefits."
                }
            ], 
            massachusetts: [
                {
                name: "Massachusetts Teachers Association (MTA)",
                url: "https://massteacher.org/",
                description: "Represents educators and school professionals, advocating for quality public education and fair labor practices."
                },
                {
                name: "1199SEIU United Healthcare Workers East - Massachusetts Division",
                url: "https://www.1199seiu.org/massachusetts",
                description: "Represents healthcare workers, focusing on improving wages, benefits, and working conditions in the healthcare sector."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 103",
                url: "https://www.the103advantage.com/",
                description: "Represents electrical workers, advocating for fair wages, training, and safety standards in the electrical industry."
                }
            ],
            michigan: [
                {
                name: "United Auto Workers (UAW) Local 600",
                url: "https://uawlocal600.org/",
                description: "Represents automotive workers, particularly those at Ford Motor Company, advocating for fair labor practices and benefits."
                },
                {
                name: "Michigan Education Association (MEA)",
                url: "https://mea.org/",
                description: "Represents educators and support staff, focusing on quality public education and professional rights."
                },
                {
                name: "Service Employees International Union (SEIU) Healthcare Michigan",
                url: "https://www.seiuhealthcaremi.org/",
                description: "Represents healthcare workers, advocating for improved wages, benefits, and working conditions in the healthcare sector."
                }
            ],
            minnesota: [
                {
                name: "Education Minnesota",
                url: "https://www.educationminnesota.org/",
                description: "Represents educators and school staff, advocating for quality public education and professional rights."
                },
                {
                name: "SEIU Healthcare Minnesota",
                url: "https://www.seiuhealthcaremn.org/",
                description: "Represents healthcare workers, focusing on better wages, benefits, and working conditions in the healthcare industry."
                },
                {
                name: "AFSCME Council 5",
                url: "https://www.afscmemn.org/",
                description: "Represents public sector employees, advocating for fair labor practices and benefits for state and local government workers."
                }
            ],
            mississippi: [
                {
                name: "Mississippi Alliance of State Employees (MASE) - Communications Workers of America (CWA) Local 3570",
                url: "https://www.masecwa.org/",
                description: "Represents state employees, advocating for fair wages, benefits, and working conditions."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 480",
                url: "https://www.ibew480.org/",
                description: "Represents electrical workers, focusing on fair wages, training, and safety standards in the electrical industry."
                },
                {
                name: "United Food and Commercial Workers (UFCW) Local 1529",
                url: "https://www.ufcw1529.org/",
                description: "Represents workers in the retail and food industries, advocating for better wages, benefits, and working conditions."
                }
            ],
            missouri: [
                {
                name: "Missouri National Education Association (MNEA)",
                url: "https://www.mnea.org/",
                description: "Represents educators and school staff, advocating for quality public education and professional rights."
                },
                {
                name: "United Auto Workers (UAW) Local 2250",
                url: "https://uawlocal2250.net/",
                description: "Represents automotive workers, particularly those at the General Motors Wentzville Assembly Plant, focusing on fair labor practices and benefits."
                },
                {
                name: "Service Employees International Union (SEIU) Missouri/Kansas State Council",
                url: "https://seiustatecouncil.org/",
                description: "Represents workers in various sectors, including healthcare and public services, advocating for improved wages and working conditions."
                }
            ],
            montana: [
                {
                name: "Montana Federation of Public Employees (MFPE)",
                url: "https://www.mfpe.org/",
                description: "Represents public employees, including educators and state workers, advocating for fair wages and working conditions."
                },
                {
                name: "Montana AFL-CIO",
                url: "https://www.mtaflcio.org/",
                description: "A state federation of labor unions representing various industries, working to improve the lives of working families in Montana."
                },
                {
                name: "United Association of Plumbers and Pipefitters Local 41",
                url: "https://ualocal41.org/",
                description: "Represents plumbers, pipefitters, and HVAC technicians, ensuring quality training and fair labor standards."
                }
            ],
            nebraska: [
                {
                name: "Nebraska State Education Association (NSEA)",
                url: "https://www.nsea.org/",
                description: "Represents educators and education support professionals, advocating for quality public education and fair compensation."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 265",
                url: "https://www.ibew265.org/",
                description: "Represents electrical workers, focusing on fair wages, training, and safe working conditions."
                },
                {
                name: "United Association of Plumbers and Pipefitters Local 464",
                url: "https://www.ualocal464.org/",
                description: "Represents plumbers, pipefitters, and service technicians, ensuring quality training and fair labor standards."
                }
            ],
            nevada: [
                {
                name: "Culinary Workers Union Local 226",
                url: "https://www.culinaryunion226.org/",
                description: "Represents hospitality workers in Las Vegas and Reno, advocating for fair wages, benefits, and working conditions."
                },
                {
                name: "Nevada State Education Association (NSEA)",
                url: "https://www.nsea-nv.org/",
                description: "Represents educators and education support professionals, advocating for quality public education and fair compensation."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 357",
                url: "https://www.ibew357.net/",
                description: "Represents electrical workers in southern Nevada, focusing on fair wages, training, and safe working conditions."
                }
            ],
            new_hampshire: [
                {
                name: "New Hampshire Education Association (NEA-NH)",
                url: "https://neanh.org/",
                description: "Represents educators and school staff, advocating for quality public education and professional rights."
                },
                {
                name: "American Federation of State, County, and Municipal Employees (AFSCME) Council 93",
                url: "https://www.afscme93.org/",
                description: "Represents public sector employees, focusing on fair wages, benefits, and working conditions."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 490",
                url: "https://newhampshireorg2.com",
                description: "Represents electrical workers, advocating for fair wages, training, and safety standards in the electrical industry."
                }
            ],
            new_jersey: [
                {
                name: "New Jersey Education Association (NJEA)",
                url: "https://www.njea.org/",
                description: "Represents educators and school employees, advocating for quality public education and professional rights."
                },
                {
                name: "Communication Workers of America (CWA) Local 1036",
                url: "https://www.cwa1036.org/",
                description: "Represents public and private sector workers, focusing on fair wages, benefits, and working conditions."
                },
                {
                name: "International Brotherhood of Teamsters Local 469",
                url: "https://www.teamsters469.com/",
                description: "Represents a diverse group of workers in transportation, logistics, and other industries, advocating for workers' rights and benefits."
                }
            ], 
            new_mexico: [
                {
                name: "New Mexico Federation of Labor, AFL-CIO",
                url: "https://nmaflcio.org/",
                description: "Represents a coalition of unions across industries, advocating for workers' rights and improved labor conditions in the state."
                },
                {
                name: "American Federation of State, County, and Municipal Employees (AFSCME) Council 18",
                url: "https://www.afscme18.org/",
                description: "Represents public employees, focusing on fair wages, benefits, and safe working environments."
                },
                {
                name: "New Mexico Education Association (NEA-NM)",
                url: "https://www.nea-nm.org/",
                description: "Advocates for educators and school staff, focusing on quality public education and professional support."
                }
            ],
            new_york: [
                {
                name: "New York State United Teachers (NYSUT)",
                url: "https://www.nysut.org/",
                description: "Represents educators and school-related professionals, advocating for quality education and fair compensation."
                },
                {
                name: "1199SEIU United Healthcare Workers East",
                url: "https://www.1199seiu.org/",
                description: "Represents healthcare workers, advocating for improved wages, benefits, and working conditions in the healthcare industry."
                },
                {
                name: "Transport Workers Union (TWU) Local 100",
                url: "https://www.twulocal100.org/",
                description: "Represents transportation workers in New York City, focusing on fair wages, safety, and improved working conditions."
                }
            ],
            north_carolina: [
                {
                name: "North Carolina Association of Educators (NCAE)",
                url: "https://www.ncae.org/",
                description: "Represents public school educators and staff, advocating for better pay, benefits, and education policies."
                },
                {
                name: "International Brotherhood of Teamsters (IBT) Local 391",
                url: "https://www.teamsterslocal391.org/",
                description: "Represents workers in various industries, including transportation and logistics, advocating for fair labor practices."
                },
                {
                name: "United Electrical, Radio, and Machine Workers of America (UE) Local 150",
                url: "https://ue150.org/",
                description: "Represents public sector workers and employees in various industries, focusing on workplace democracy and fair labor standards."
                }
            ],
            north_dakota: [
                {
                name: "North Dakota United (NDU)",
                url: "https://ndunited.org/",
                description: "Represents educators and public employees, advocating for quality education and fair compensation."
                },
                {
                name: "American Federation of State, County, and Municipal Employees (AFSCME) Council 65",
                url: "https://www.afscme65.org/",
                description: "Represents public employees, focusing on better wages, benefits, and job protections."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 714",
                url: "https://ibew714.com/",
                description: "Represents electrical workers, ensuring training, safety, and fair labor practices in the region."
                }
            ],
            ohio: [
                {
                name: "Ohio Education Association (OEA)",
                url: "https://www.ohea.org/",
                description: "Represents educators and school professionals, advocating for quality public education and fair labor practices."
                },
                {
                name: "United Auto Workers (UAW) Region 2B",
                url: "https://region2b.uaw.org/",
                description: "Represents workers in the automotive and manufacturing industries, advocating for fair wages and workplace safety."
                },
                {
                name: "Service Employees International Union (SEIU) District 1199",
                url: "https://www.seiu1199.org/",
                description: "Represents healthcare and public sector workers, focusing on better wages and improved working conditions."
                }
            ],
            oklahoma: [
                {
                name: "Oklahoma Education Association (OEA)",
                url: "https://okea.org/",
                description: "Represents educators and school staff, advocating for better pay, benefits, and public education funding."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 1141",
                url: "https://ibew1141.org/",
                description: "Represents electrical workers, focusing on fair wages, training, and workplace safety."
                },
                {
                name: "United Auto Workers (UAW) Local 286",
                url: "https://www.unionfacts.com/lu/21874/UAW/286/",
                description: "Represents manufacturing and automotive workers in Oklahoma, advocating for fair labor practices and benefits."
                }
            ],
            oregon: [
                {
                name: "Oregon Education Association (OEA)",
                url: "https://www.oregoned.org/",
                description: "Represents educators and school staff, advocating for quality education and fair labor practices."
                },
                {
                name: "Service Employees International Union (SEIU) Local 503",
                url: "https://seiu503.org/",
                description: "Represents public service workers and care providers, focusing on better wages and working conditions."
                },
                {
                name: "United Food and Commercial Workers (UFCW) Local 555",
                url: "https://www.ufcw555.org/",
                description: "Represents grocery, retail, and food industry workers, advocating for improved pay and safe working conditions."
                }
            ],
            pennsylvania: [
                {
                name: "Pennsylvania State Education Association (PSEA)",
                url: "https://www.psea.org/",
                description: "Represents educators and school staff, advocating for quality public education and fair labor practices."
                },
                {
                name: "United Steelworkers (USW) International Headquarters",
                url: "https://www.usw.org/",
                description: "Based in Pittsburgh, the USW represents workers in steel, manufacturing, and other industries, focusing on workplace safety and fair compensation."
                },
                {
                name: "International Brotherhood of Teamsters Local 249",
                url: "https://www.teamsterslocal249.org/",
                description: "Represents workers in transportation and logistics, advocating for fair wages and job protections."
                }
            ],
            rhode_island: [
                {
                name: "Rhode Island Federation of Teachers and Health Professionals (RIFTHP)",
                url: "https://www.rifthp.org/",
                description: "Represents educators and healthcare professionals, advocating for quality education and healthcare services."
                },
                {
                name: "United Nurses and Allied Professionals (UNAP) Local 5098",
                url: "https://www.unap.org/",
                description: "Represents healthcare workers, focusing on better wages, benefits, and patient care standards."
                },
                {
                name: "Service Employees International Union (SEIU) 1199 New England",
                url: "https://www.seiu1199ne.org/",
                description: "Represents healthcare workers, advocating for fair wages and improved working conditions in Rhode Island."
                }
            ],
            south_carolina: [
                {
                name: "South Carolina Education Association (SCEA)",
                url: "https://www.thescea.org/",
                description: "Represents educators and school staff, advocating for better pay and public education funding."
                },
                {
                name: "International Longshoremen's Association (ILA) Local 1422",
                url: "https://ila1422.org/",
                description: "Represents dockworkers in Charleston, focusing on fair wages and safe working conditions."
                },
                {
                name: "United Steelworkers (USW) Local 7898",
                url: "https://usw.org/",
                description: "Represents workers in the steel and manufacturing industries, advocating for fair labor practices and benefits."
                }
            ],
            
            south_dakota: [
                {
                name: "South Dakota Education Association (SDEA)",
                url: "https://www.sdea.org/",
                description: "Represents educators and school employees, advocating for better pay, benefits, and public education policies."
                },
                {
                name: "American Federation of State, County, and Municipal Employees (AFSCME) Council 65",
                url: "https://www.afscme65.org/",
                description: "Represents public employees, focusing on fair wages, benefits, and safe working conditions."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 426",
                url: "https://www.ibew426.com/",
                description: "Represents electrical workers, ensuring quality training, fair wages, and safe working conditions."
                }
            ],
            tennessee: [
                {
                name: "Tennessee Education Association (TEA)x",
                url: "https://www.teateachers.org/",
                description: "Represents educators and school staff, advocating for quality public education and fair labor practices."
                },
                {
                name: "United Steelworkers (USW) Local 1155L",
                url: "https://usw1155l.org/",
                description: "Represents workers in the tire manufacturing industry, advocating for safe working conditions and fair pay."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 429",
                url: "https://www.ibew429.org/",
                description: "Represents electrical workers in Tennessee, focusing on fair wages, training, and workplace safety.."
                }
            ],
            texas: [
                {
                name: "Texas State Teachers Association (TSTA)",
                url: "https://tsta.org/",
                description: "Represents educators and school employees, advocating for quality public education and professional rights."
                },
                {
                name: "Service Employees International Union (SEIU) Texas",
                url: "https://seiutx.org/",
                description: "Represents healthcare workers, janitors, and public employees, focusing on better wages and working conditions."
                },
                {
                name: "International Brotherhood of Teamsters Local 988",
                url: "https://www.teamsters988.org/",
                description: "Represents workers in transportation, logistics, and warehousing, advocating for workers' rights and fair wages."
                }
            ],
            utah: [
                {
                name: "Utah Education Association (UEA)",
                url: "https://www.myuea.org/",
                description: "Represents educators and school staff, advocating for better pay, benefits, and public education policies."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 354",
                url: "https://www.ibew354.org/",
                description: "Represents electrical workers, focusing on training, safety, and fair labor practices."
                },
                {
                name: "United Association of Plumbers and Pipefitters Local 140",
                url: "https://www.ua140.com/",
                description: "Represents plumbers, pipefitters, and HVAC technicians, ensuring quality training and fair labor standards."
                }
            ],
            vermont: [
                {
                name: "Vermont-NEA",
                url: "https://www.vtnea.org/",
                description: "Represents educators and school staff, advocating for better pay, benefits, and public education policies."
                },
                {
                name: "Vermont State Employees Association (VSEA)",
                url: "https://www.vsea.org/",
                description: "Represents state employees, focusing on fair wages, benefits, and workplace protections."
                },
                {
                name: "United Brotherhood of Carpenters and Joiners of America Local 1996",
                url: "https://www.carpenters.org/",
                description: "Represents carpenters and joiners, advocating for fair labor practices and quality training."
                }
            ],
            virginia: [
                {
                name: "Virginia Education Association (VEA)",
                url: "https://www.veanea.org/",
                description: "Represents educators and school staff, advocating for better pay, benefits, and public education policies."
                },
                {
                name: "VAmerican Federation of Government Employees (AFGE) Local 1923",
                url: "https://www.afge.org/",
                description: "Represents federal employees, focusing on fair wages, benefits, and workplace protections."
                },
                {
                name: "International Brotherhood of Teamsters Local 592",
                url: "https://www.teamsters592.org/",
                description: "Represents workers in transportation, warehousing, and logistics, advocating for workers' rights and fair wages."
                }
            ],
            washington: [
                {
                name: "Washington Education Association (WEA)",
                url: "https://www.washingtonea.org/",
                description: "Represents educators and school employees, advocating for public education improvements and professional rights."
                },
                {
                name: "United Food and Commercial Workers (UFCW) Local 21",
                url: "https://www.ufcw21.org/",
                description: "Represents grocery and healthcare workers, advocating for better wages, benefits, and working conditions."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 46",
                url: "https://www.ibew46.com/",
                description: "Represents electrical workers in Washington, focusing on fair wages, training, and safety standards."
                }
            ],
            west_virginia: [
                {
                name: "West Virginia Education Association (WVEA)",
                url: "https://www.wvea.org/",
                description: "Represents educators and school staff, advocating for quality public education and fair compensation."
                },
                {
                name: "United Mine Workers of America (UMWA) District 17",
                url: "https://umwa.org/",
                description: "Represents coal miners, advocating for safety, fair wages, and worker benefits."
                },
                {
                name: "Service Employees International Union (SEIU) Local 1199",
                url: "https://www.seiu1199.org/",
                description: "Represents healthcare workers, advocating for better pay and workplace protections."
                }
            ],
            wisconsin: [
                {
                name: "WWisconsin Education Association Council (WEAC)",
                url: "https://weac.org/",
                description: "Represents educators and school staff, advocating for better pay, benefits, and public education policies."
                },
                {
                name: "United Auto Workers (UAW) Local 75",
                url: "https://wisconsinorg2.com",
                description: "Represents workers in manufacturing and other industries, focusing on fair labor practices and benefits."
                },
                {
                name: "American Federation of State, County, and Municipal Employees (AFSCME) Council 32",
                url: "https://www.afscme32.org/",
                description: "Represents public employees, focusing on workplace protections, fair wages, and benefits.."
                }
            ],
            wyoming: [
                {
                name: "Wyoming Education Association (WEA)",
                url: "https://wyoea.org/",
                description: "Represents educators and school staff, advocating for better pay, benefits, and public education policies."
                },
                {
                name: "International Brotherhood of Electrical Workers (IBEW) Local 322",
                url: "https://www.ibew322.org/",
                description: "Represents electrical workers, focusing on training, safety, and fair labor practices."
                },
                {
                name: "United Brotherhood of Carpenters and Joiners of America (UBC) Local 1564",
                url: "https://www.carpenters.org/",
                description: "Represents carpenters and joiners, advocating for fair wages and quality training."
                }
            ]
       
        };
          
    
        function showStateOrganizations() {
          const state = document.getElementById("state-dropdown").value;
          const listContainer = document.getElementById("state-organization-list");
          listContainer.innerHTML = ""; // Clear existing content
    
          if (state && stateOrganizations[state]) {
            stateOrganizations[state].forEach(org => {
              const orgDiv = document.createElement("div");
              orgDiv.className = "state-organization";
    
              // Create h1 element with a class
              const orgTitle = document.createElement("h1");
              orgTitle.className = "state-org-title";
              const orgLink = document.createElement("a");
              orgTitle.className = "state-org-link";
              orgLink.href = org.url;
              orgLink.textContent = org.name;
              orgLink.target = "_blank";
              orgLink.style.color = "white";
              orgTitle.appendChild(orgLink);
    
              // Create p element with a class
              const orgDescription = document.createElement("p");
              orgDescription.className = "state-org-description";
              orgDescription.textContent = org.description;
    
              orgDiv.appendChild(orgTitle);
              orgDiv.appendChild(orgDescription);
              listContainer.appendChild(orgDiv);
            });
          }
        }
