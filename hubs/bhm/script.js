document.addEventListener("DOMContentLoaded", function() {
    updateImageSources();
});

function updateImageSources() {
    const currentDate = new Date();
    const date = currentDate.getDate();

    let cycleNumber;
    if (date >= 30 || date <= 4) {
        cycleNumber = 1;
    } else if (date >= 5 && date <= 10) {
        cycleNumber = 2;
    } else if (date >= 11 && date <= 17) {
        cycleNumber = 3;
    } else if (date >= 18 && date <= 24) {
        cycleNumber = 4;
    } else if (date >= 25 && date <= 29) {
        cycleNumber = 5;
    }

    const figure1Images = ['assets/week1/fig1.png', 'b.png', 'c.png', 'd.png', 'e.png'];
    const figure2Images = ['assets/week1/fig2.png', 'g.png', 'h.png', 'i.png', 'j.png'];
    const figure3Images = ['assets/week1/fig3.png', 'l.png', 'm.png', 'n.png', 'o.png'];
    const figure4Images = ['assets/week1/fig4.png', 'q.png', 'r.png', 's.png', 't.png'];
    
    const story1Images = ['assets/week1/story1.png', 'b.png', 'c.png', 'd.png', 'e.png'];
    const story2Images = ['assets/week1/story2.jpg', 'g.png', 'h.png', 'i.png', 'j.png'];

    const org1Images = ['assets/week1/org1.png', 'b.png', 'c.png', 'd.png', 'e.png'];
    const org2Images = ['assets/week1/org2.png', 'g.png', 'h.png', 'i.png', 'j.png'];

    const storyTitles = ["Freedom Summer", "Bloody Sunday", "Rainbow Coalition", "Kneel-Ins", "The Strike on Mine Mill"];
    const storyTexts = ["Freedom Summer was a significant campaign in the civil rights movement aimed at registering Black voters in Mississippi. A collaboration primarily between civil rights organizations like SNCC, CORE, and the NAACP, it brought hundreds of volunteers, predominantly white college students, to the South to aid in this effort. Freedom Summer also established Freedom Schools, which provided education and empowerment to Black youths in Mississippi, highlighting the integral role of education in the fight for civil rights.", "Bloody Sunday refers to the brutal police attack on peaceful civil rights demonstrators on March 7, 1965, as they attempted to march from Selma to Montgomery, Alabama, to protest voting rights discrimination. This event was pivotal in galvanizing national support for the civil rights movement and led to the passage of the Voting Rights Act of 1965. The televised coverage of the event brought the brutality of the Jim Crow South into living rooms across America, significantly swaying public opinion.", 
    "The Rainbow Coalition was an unprecedented alliance formed by Fred Hampton, leader of the Chicago chapter of the Black Panther Party. It included diverse groups like the Young Lords (a Puerto Rican organization) and the Young Patriots (of poor white Appalachians). This coalition transcended racial lines, uniting different communities to fight against economic injustice and police brutality. This coalition was one of the first of its kind to effectively bridge racial divides for a common cause in the United States.", 
    "Kneel-Ins were a form of protest used during the civil rights movement, where African Americans would attend predominantly white churches and kneel outside or in the pews to protest segregation within Christian congregations. These acts highlighted the hypocrisy of churches preaching love and inclusivity while practicing racial segregation. These protests not only challenged segregation in public spaces but also within religious institutions, playing a vital role in the broader struggle for integration", 
    "The strike on Mine Mill was a significant labor movement event, primarily involving African American workers at mining and milling companies. These workers protested against discriminatory labor practices and poor working conditions. The event is notable for highlighting the intersection of civil rights and labor rights, demonstrating the double burden of racial and economic exploitation faced by Black workers. It helped pave the way for greater union representation and rights for African American workers in the industry."];
    
    const orgTitles = ["The Okra Project", "Equal Justice Initiative", "Algorithmic Justice League", "15 Percent Pledge", "The Bail Project"];
    const orgTexts = ["The Okra Project is a collective that addresses the nutritional needs within the Black Trans community. Named after the African comfort food, the project provides meals to Black Trans people, particularly those experiencing food insecurity. The organization hires Black Trans chefs to cook and deliver healthy, home-cooked, and culturally relevant meals. This approach not only addresses immediate food needs but also affirms and uplifts the dignity of the Black Trans community, combining support with empowerment.", 
    "Founded by Bryan Stevenson, the Equal Justice Initiative is a non-profit organization based in Montgomery, Alabama. It's dedicated to providing legal representation to people who have been illegally convicted, unfairly sentenced, or abused in state jails and prisons. EJI also challenges the death penalty and excessive punishment and provides re-entry assistance to formerly incarcerated people. Furthermore, EJI is involved in broader educational and memorial projects to address historical injustices, including the creation of The National Memorial for Peace and Justice, which commemorates the victims of lynching in the United States.", 
    "The Algorithmic Justice League is an organization founded by Joy Buolamwini, which aims to challenge bias in decision-making software. AJL's work focuses on the social implications of artificial intelligence and algorithmic bias, particularly how these technologies can perpetuate racial and gender prejudices. By researching, raising awareness, and advocating for equitable and accountable AI, the AJL plays a crucial role in ensuring that technological advancements don't further marginalize the Black community and other underrepresented groups.", 
    "The 15 Percent Pledge is an economic equality initiative that urges major retailers to commit 15% of their shelf space to Black-owned businesses. The figure represents the approximate percentage of Black people in the United States. This pledge aims to create a more equitable market space and support Black-owned businesses, fostering economic empowerment within the Black community. By holding corporations accountable and advocating for structural changes in business practices, the pledge helps ensure more substantial and long-lasting economic opportunities for Black entrepreneurs.", 
    "The Bail Project is a national nonprofit organization that seeks to mitigate the impact of incarceration on low-income communities. It provides bail assistance to individuals in need, thereby preventing pretrial incarceration due to an inability to pay bail. The organization's work addresses the disproportionate impact of the bail system on Black communities and other marginalized groups. By helping people return home to their families and jobs while awaiting court dates, The Bail Project combats the injustices of the bail system and advocates for systemic change to end cash bail."];


    document.getElementById('figure1').src = figure1Images[cycleNumber - 1];
    document.getElementById('figure2').src = figure2Images[cycleNumber - 1];
    document.getElementById('figure3').src = figure3Images[cycleNumber - 1];
    document.getElementById('figure4').src = figure4Images[cycleNumber - 1];

    document.getElementById('story1').src = story1Images[cycleNumber - 1];
    document.getElementById('story2').src = story2Images[cycleNumber - 1];

    document.getElementById('org1').src = org1Images[cycleNumber - 1];
    document.getElementById('org2').src = org2Images[cycleNumber - 1];

    document.getElementById('storyTitle').innerText = storyTitles[cycleNumber - 1];
    document.getElementById('storyText').innerText = storyTexts[cycleNumber - 1];
    document.getElementById('orgTitle').innerText = orgTitles[cycleNumber - 1];
    document.getElementById('orgText').innerText = orgTexts[cycleNumber - 1];
}
