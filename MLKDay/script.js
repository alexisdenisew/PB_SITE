function func1(){	
  var input = document.getElementById('state');	
  var inputValue = input.value;	
  var y = document.getElementById('info');	
  var name1 = document.getElementById('name1');	
  var name2 = document.getElementById('name2');	
  var phone1 = document.getElementById('phone1');	
  var phone2 = document.getElementById('phone2');	
  y.innerHTML = inputValue;	

  if (inputValue=="Alabama"){ 	
    name1.innerHTML = "Shelby, Richard C.";
    name1.href = "https://www.shelby.senate.gov/public/index.cfm/e-mail-senator-shelby-landing";	
    phone1.innerHTML = "(202) 224-5744";	
    phone1.href = "tel:2022245744";	
    name2.innerHTML = "Tuberville, Tommy";
    name2.href = "https://www.tuberville.senate.gov/contact/contact-form/";	
    phone2.innerHTML = "(202) 224-4124";	
    phone2.href = "2022244124";	
    document.getElementById("img1").src = "assets/senators/ALR.jpg";	
    document.getElementById("img2").src = "assets/senators/ALT.jpg";
  
  } if (inputValue=="Alaska"){ 	
    name1.innerHTML = "Murkowski, Lisa";
    name1.href = "https://www.murkowski.senate.gov/contact/email";		
    phone1.innerHTML = "(202) 224-6665";	
    phone1.href = "tel:2022246665";	
    name2.innerHTML = "Sullivan, Dan";
    name2.href = "https://www.sullivan.senate.gov/contact/email";	
    phone2.innerHTML = "(202) 224-3004";	
    phone2.href = "tel:2022243004";	
    document.getElementById("img1").src = "assets/senators/AKL.jpg";	
    document.getElementById("img2").src = "assets/senators/AKD.jpg";

  } if (inputValue=="Arizona"){ 	
    name1.innerHTML = "Kelly, Mark";	
    name1.href = "https://www.kelly.senate.gov/";	
    phone1.innerHTML = "(202) 224-2235";	
    phone1.href = "tel:2022242235";	
    name2.innerHTML = "Sinema, Kyrsten";
    name2.href = "https://www.sinema.senate.gov/contact-kyrsten";	
    phone2.innerHTML = "(202) 224-4521";	
    phone2.href = "tel:2022244521";	
    document.getElementById("img1").src = "assets/senators/AZM.jpg";	
    document.getElementById("img2").src = "assets/senators/AZK.jpg";
  
  } if (inputValue=="Arkansas"){	
    name1.innerHTML = "Boozman, John";	
    name1.href = "https://www.boozman.senate.gov/public/index.cfm/contact";	
    phone1.innerHTML = "(202) 224-4843";	
    phone1.href = "tel:2022244843";	
    name2.innerHTML = "Cotton, Tom";
    name2.href = "https://www.cotton.senate.gov/contact/contact-tom";	
    phone2.innerHTML = "(202) 224-2353";	
    phone2.href = "tel:2022242353";	
    document.getElementById("img1").src = "assets/senators/AKJ.jpg";	
    document.getElementById("img2").src = "assets/senators/AKT.jpg";	

  } if (inputValue=="California"){	
    name1.innerHTML = "Feinstein, Dianne";
    name1.href = "https://www.feinstein.senate.gov/public/index.cfm/e-mail-me";		
    phone1.innerHTML = "(202) 224-3841";	
    phone1.href = "tel:2022243841";	
    name2.innerHTML = "Padilla, Alex";
    name2.href = "https://www.padilla.senate.gov/contact/contact-form/";	
    phone2.innerHTML = "(202) 224-3553";	
    phone2.href = "tel:2022243553";	
    document.getElementById("img1").src = "assets/senators/CAD.jpg";	
    document.getElementById("img2").src = "assets/senators/CAA.jpg";

  } if (inputValue=="Colorado"){ 	
    name1.innerHTML = "Bennet, Michael F.";
    name1.href = "https://www.bennet.senate.gov/public/index.cfm/contact";		
    phone1.innerHTML = "(202) 224-5852";	
    phone1.href = "tel:2022245852";	
    name2.innerHTML = "Hickenlooper, John W.";
    name2.href = "https://www.hickenlooper.senate.gov/";	
    phone2.innerHTML = "(202) 224-5941";	
    phone2.href = "tel:2022245941";	
    document.getElementById("img1").src = "assets/senators/COM.jpg";	
    document.getElementById("img2").src = "assets/senators/COJ.jpg";	

  } if (inputValue=="Connecticut"){ 	
    name1.innerHTML = "Blumenthal, Richard";
    name1.href = "https://www.blumenthal.senate.gov/contact/";		
    phone1.innerHTML = "(202) 224-2823";	
    phone1.href = "tel:2022242823";	
    name2.innerHTML = "Murphy, Christopher";
    name2.href = "http://www.murphy.senate.gov/contact";	
    phone2.innerHTML = "(202) 224-4041";	
    phone2.href = "tel:2022244041";	
    document.getElementById("img1").src = "assets/senators/CNR.jpg";	
    document.getElementById("img2").src = "assets/senators/CNC.jpg";	

  } if (inputValue=="Delaware"){ 	
    name1.innerHTML = "Carper, Thomas R.";
    name1.href = "http://www.carper.senate.gov/public/index.cfm/email-senator-carper";		
    phone1.innerHTML = "(202) 224-2441";	
    phone1.href = "tel:2022242441";	
    name2.innerHTML = "Coons, Christopher A.";	
    name2.href = "https://www.coons.senate.gov/contact";
    phone2.innerHTML = "(202) 224-5042";	
    phone2.href = "tel:2022245042";	
    document.getElementById("img1").src = "assets/senators/DET.jpg";	
    document.getElementById("img2").src = "assets/senators/DEC.jpg";
  
  } if (inputValue=="Florida"){	
    name1.innerHTML = "Rubio, Marco";	
    name1.href = "http://www.rubio.senate.gov/public/index.cfm/contact";	
    phone1.innerHTML = "(202) 224-3041";	
    phone1.href = "tel:2022243041";	
    name2.innerHTML = "Scott, Rick";
    name2.href = "https://www.rickscott.senate.gov/contact_rick";	
    phone2.innerHTML = "(202) 224-5274";	
    phone2.href = "tel:2022245274";	
    document.getElementById("img1").src = "assets/senators/FLM.jpg";	
    document.getElementById("img2").src = "assets/senators/FLR.jpg";

  } if (inputValue=="Georgia"){	
    name1.innerHTML = "Ossoff, Jon";	
    name1.href = "https://www.ossoff.senate.gov/contact-us/";	
    phone1.innerHTML = "(202) 224-3521";	
    phone1.href = "tel:2022243521";	
    name2.innerHTML = "Warnock, Raphael G.";	
    name2.href = "https://www.warnock.senate.gov/";
    phone2.innerHTML = "(202) 224-3643"; 	
    phone2.href = "tel:2022243643";	
    document.getElementById("img1").src = "assets/senators/GAJ.jpg";	
    document.getElementById("img2").src = "assets/senators/GAR.jpg";
    	
  } if (inputValue=="Hawaii"){ 	
    name1.innerHTML = "Hirono, Mazie K.";
    name1.href = "https://www.hirono.senate.gov/contact";		
    phone1.innerHTML = "(202) 224-6361";	
    phone1.href = "tel:2022246361";	
    name2.innerHTML = "Schatz, Brian";
    name2.href = "https://www.schatz.senate.gov/contact";	
    phone2.innerHTML = "(202) 224-3934";	
    phone2.href = "tel:2022243934";	
    document.getElementById("img1").src = "assets/senators/HIM.jpg";	
    document.getElementById("img2").src = "assets/senators/HIB.jpg";	

  } if (inputValue=="Idaho"){ 	
    name1.innerHTML = "Crapo, Mike";	
    name1.href = "https://www.crapo.senate.gov/contact";	
    phone1.innerHTML = "(202) 224-6142";	
    phone1.href = "tel:2022246142";	
    name2.innerHTML = "Risch, James E.";	
    name2.href = "http://www.risch.senate.gov/public/index.cfm?p=Email";
    phone2.innerHTML = "(202) 224-2752";	
    phone2.href = "tel:2022242752";	
    document.getElementById("img1").src = "assets/senators/IDM.jpg";	
    document.getElementById("img2").src = "assets/senators/IDJ.jpg";	

  } if (inputValue=="Illinois"){ 	
    name1.innerHTML = "Duckworth, Tammy";
    name1.href = "https://www.duckworth.senate.gov/content/contact-senator";		
    phone1.innerHTML = "(202) 224-2854";	
    phone1.href = "tel:2022242854";	
    name2.innerHTML = "Durbin, Richard J.";	
    name2.href = "https://www.durbin.senate.gov/contact/";
    phone2.innerHTML = "(202) 224-2152";	
    phone2.href = "tel:2022242152";	
    document.getElementById("img1").src = "assets/senators/ILT.jpg";	
    document.getElementById("img2").src = "assets/senators/ILR.jpg";

  } if (inputValue=="Indiana"){ 	
    name1.innerHTML = "Braun, Mike";	
    name1.href = "http://www.braun.senate.gov/contact-mike";	
    phone1.innerHTML = "(202) 224-4814";	
    phone1.href = "tel:2022244814";	
    name2.innerHTML = "Young, Todd";	
    name2.href = "https://www.young.senate.gov/contact";
    phone2.innerHTML = "(202) 224-5623";	
    phone2.href = "tel:2022245623";	
    document.getElementById("img1").src = "assets/senators/INM.jpg";	
    document.getElementById("img2").src = "assets/senators/INT.jpg";

  } if (inputValue=="Iowa"){ 	
    name1.innerHTML = "Ernst, Joni";	
    name1.href = "https://www.ernst.senate.gov/public/index.cfm/contact";	
    phone1.innerHTML = "(202) 224-3254";	
    phone1.href = "tel:2022243254";	
    name2.innerHTML = "Grassley, Chuck";
    name2.href = "http://www.grassley.senate.gov/contact";	
    phone2.innerHTML = "(202) 224-3744";	
    phone2.href = "tel:2022243744";	
    document.getElementById("img1").src = "assets/senators/IAJ.jpg";	
    document.getElementById("img2").src = "assets/senators/IAC.jpg";	

  } if (inputValue=="Kansas"){ 	
    name1.innerHTML = "Marshall, Roger";
    name1.href = "https://www.marshall.senate.gov/contact/contact-form/";		
    phone1.innerHTML = "(202) 224-4774";	
    phone1.href = "tel:2022244774";	
    name2.innerHTML = "Moran, Jerry";
    name2.href = "https://www.moran.senate.gov/public/index.cfm/e-mail-jerry";	
    phone2.innerHTML = "(202) 224-6521";	
    phone2.href = "tel:2022246521";	
    document.getElementById("img1").src = "assets/senators/KSR.jpg";	
    document.getElementById("img2").src = "assets/senators/KSJ.jpg";

  } if (inputValue=="Kentucky"){ 	
    name1.innerHTML = "McConnell, Mitch";	
    name1.href = "http://www.mcconnell.senate.gov/public/index.cfm?p=contact";	
    phone1.innerHTML = "(202) 224-2541";	
    phone1.href = "tel:2022242541";	
    name2.innerHTML = "Paul, Rand";	
    name2.href = "https://www.paul.senate.gov/connect/email-rand";
    phone2.innerHTML = "(202) 224-4343";	
    phone2.href = "tel:2022244343";	
    document.getElementById("img1").src = "assets/senators/KTM.jpg";	
    document.getElementById("img2").src = "assets/senators/KTR.jpg";

  } if (inputValue=="Louisiana"){ 	
    name1.innerHTML = "Cassidy, Bill";
    name1.href = "https://www.cassidy.senate.gov/contact";		
    phone1.innerHTML = "(202) 224-5824";	
    phone1.href = "tel:2022245824";	
    name2.innerHTML = "Kennedy, John";	
    name2.href = "https://www.kennedy.senate.gov/public/email-me";
    phone2.innerHTML = "(202) 224-4623";	
    phone2.href = "tel:2022244623";	
    document.getElementById("img1").src = "assets/senators/LAB.jpg";	
    document.getElementById("img2").src = "assets/senators/LAJ.jpg";

  } if (inputValue=="Maine"){ 	
    name1.innerHTML = "Collins, Susan M.";	
    name1.href = "http://www.collins.senate.gov/contact";	
    phone1.innerHTML = "(202) 224-2523";	
    phone1.href = "tel:2022242523";	
    name2.innerHTML = "King, Angus S., Jr.";
    name2.href = "https://www.king.senate.gov/contact";	
    phone2.innerHTML = "(202) 224-5344";	
    phone2.href = "2022245344";	
    document.getElementById("img1").src = "assets/senators/MES.jpg";	
    document.getElementById("img2").src = "assets/senators/MEA.jpg";	

  } if (inputValue=="Maryland"){	
    name1.innerHTML = "Cardin, Benjamin L.";	
    name1.href = "http://www.cardin.senate.gov/contact/";	
    phone1.innerHTML = "(202) 224-4524";	
    phone1.href = "tel:2022244524";	
    name2.innerHTML = "Van Hollen, Chris";
    name2.href = "http://www.vanhollen.senate.gov/contact/email";	
    phone2.innerHTML = "(202) 224-4654";	
    phone2.href = "tel:2022244654";	
    document.getElementById("img1").src = "assets/senators/MDB.jpg";	
    document.getElementById("img2").src = "assets/senators/MDC.jpg"; 
  
  } if (inputValue=="Massachusetts"){	
    name1.innerHTML = "Markey, Edward J.";
    name1.href = "https://www.markey.senate.gov/contact";		
    phone1.innerHTML = "(202) 224-2742";	
    phone1.href = "tel:2022242742";	
    name2.innerHTML = "Warren, Elizabeth";	
    name2.href = "https://www.warren.senate.gov/?p=email_senator";
    phone2.innerHTML = "(202) 224-4543";	
    phone2.href = "tel:2022244543";	
    document.getElementById("img1").src = "assets/senators/MAM.jpg";	
    document.getElementById("img2").src = "assets/senators/MAE.jpg";
  
  } if (inputValue=="Michigan"){ 	
    name1.innerHTML = "Peters, Gary C.";
    name1.href = "https://www.peters.senate.gov/contact/email-gary";		
    phone1.innerHTML = "(202) 224-6221";	
    phone1.href = "tel:2022246221";	
    name2.innerHTML = "Stabenow, Debbie";	
    name2.href = "https://www.stabenow.senate.gov/contact";
    phone2.innerHTML = "(202) 224-4822";	
    phone2.href = "tel:2022244822";	
    document.getElementById("img1").src = "assets/senators/MIG.jpg";	
    document.getElementById("img2").src = "assets/senators/MID.jpg";
  
  } if (inputValue=="Minnesota"){ 	
    name1.innerHTML = "Klobuchar, Amy";	
    name1.href = "http://www.klobuchar.senate.gov/public/index.cfm/contact";	
    phone1.innerHTML = "(202) 224-3244";	
    phone1.href = "tel:2022243244";	
    name2.innerHTML = "Smith, Tina";
    name2.href = "https://www.smith.senate.gov/contact-tina";	
    phone2.innerHTML = "(202) 224-5641";	
    phone2.href = "tel:2022245641";	
    document.getElementById("img1").src = "assets/senators/MNA.jpg";	
    document.getElementById("img2").src = "assets/senators/MNT.jpg";
  
  } if (inputValue=="Mississippi"){ 	
    name1.innerHTML = "Hyde-Smith, Cindy";
    name1.href = "https://www.hydesmith.senate.gov/content/contact-senator";		
    phone1.innerHTML = "(202) 224-5054";	
    phone1.href = "tel:2022245054";	
    name2.innerHTML = "Wicker, Roger F.";
    name2.href = "https://www.wicker.senate.gov/public/index.cfm/contact";	
    phone2.innerHTML = "(202) 224-6253";	
    phone2.href = "tel:2022246253";	
    document.getElementById("img1").src = "assets/senators/MSC.jpg";	
    document.getElementById("img2").src = "assets/senators/MSR.jpg";
  
  } if (inputValue=="Missouri"){ 	
    name1.innerHTML = "Blunt, Roy";	
    name1.href = "https://www.blunt.senate.gov/public/index.cfm/contact-roy";	
    phone1.innerHTML = "(202) 224-5721";	
    phone1.href = "tel:2022245721";	
    name2.innerHTML = "Hawley, Josh";
    name2.href = "https://www.hawley.senate.gov/contact-senator-hawley";	
    phone2.innerHTML = "(202) 224-6154";	
    phone2.href = "tel:2022246154";	
    document.getElementById("img1").src = "assets/senators/MOR.jpg";	
    document.getElementById("img2").src = "assets/senators/MOJ.jpg";

  } if (inputValue=="Montana"){ 	
    name1.innerHTML = "Daines, Steve";	
    name1.href = "https://www.daines.senate.gov/connect/email-steve";	
    phone1.innerHTML = "(202) 224-2651";	
    phone1.href = "tel:2022242651";	
    name2.innerHTML = "Tester, Jon";	
    name2.href = "https://www.tester.senate.gov/?p=email_senator";
    phone2.innerHTML = "(202) 224-2644";	
    phone2.href = "tel:2022242644";	
    document.getElementById("img1").src = "assets/senators/MTS.jpg";	
    document.getElementById("img2").src = "assets/senators/MTJ.jpg";

  } if (inputValue=="Nebraska"){	
    name1.innerHTML = "Fischer, Deb";	
    name1.href = "http://www.fischer.senate.gov/public/index.cfm/contact";	
    phone1.innerHTML = "(202) 224-6551";	
    phone1.href = "tel:2022246551";	
    name2.innerHTML = "Sasse, Ben";
    name2.href = "http://www.sasse.senate.gov/public/index.cfm/email-ben";	
    phone2.innerHTML = "(202) 224-4224";	
    phone2.href = "tel:2022244224";	
    document.getElementById("img1").src = "assets/senators/NED.jpg";	
    document.getElementById("img2").src = "assets/senators/NEB.jpg"; 
  
  } if (inputValue=="Nevada"){ 	
    name1.innerHTML = "Cortez Masto, Catherine";
    name1.href = "https://www.cortezmasto.senate.gov/contact";		
    phone1.innerHTML = "(202) 224-3542";	
    phone1.href = "tel:2022243542";	
    name2.innerHTML = "Rosen, Jacky";
    name2.href = "https://www.rosen.senate.gov/contact_jacky";
    phone2.innerHTML = "(202) 224-6244";	
    phone2.href = "tel:2022246244";	
    document.getElementById("img1").src = "assets/senators/NVC.jpg";	
    document.getElementById("img2").src = "assets/senators/NVJ.jpg";

  } if (inputValue=="New Hampshire"){ 	
    name1.innerHTML = "Hassan, Margaret Wood";
    name1.href = "https://www.hassan.senate.gov/content/contact-senator";		
    phone1.innerHTML = "(202) 224-3324";	
    phone1.href = "tel:2022243324";	
    name2.innerHTML = "Shaheen, Jeanne";
    name2.href = "https://www.shaheen.senate.gov/contact/contact-jeanne";	
    phone2.innerHTML = "(202) 224-2841";	
    phone2.href = "tel:2022242841";	
    document.getElementById("img1").src = "assets/senators/NHM.jpg";	
    document.getElementById("img2").src = "assets/senators/NHJ.jpg";

  } if (inputValue=="New Jersey"){ 	
    name1.innerHTML = "Booker, Cory A.";	
    name1.href = "https://www.booker.senate.gov/?p=contact";	
    phone1.innerHTML = "(202) 224-3224";	
    phone1.href = "tel:2022243224";	
    name2.innerHTML = "Menendez, Robert";
    name2.href = "https://www.menendez.senate.gov/contact";	
    phone2.innerHTML = "(202) 224-4744";	
    phone2.href = "tel:2022244744";	
    document.getElementById("img1").src = "assets/senators/NJC.jpg";	
    document.getElementById("img2").src = "assets/senators/NJR.jpg";
  
  } if (inputValue=="New Mexico"){ 	
    name1.innerHTML = "Heinrich, Martin";	
    name1.href = "http://www.heinrich.senate.gov/contact";	
    phone1.innerHTML = "(202) 224-5521";	
    phone1.href = "tel:2022245521";	
    name2.innerHTML = "Luján, Ben Ray";	
    name2.href = "https://www.lujan.senate.gov/contact/";
    phone2.innerHTML = "(202) 224-6621";	
    phone2.href = "tel:2022246621";	
    document.getElementById("img1").src = "assets/senators/NMM.jpg";	
    document.getElementById("img2").src = "assets/senators/NMB.jpg";

  } if (inputValue=="New York"){ 	
    name1.innerHTML = "Gillibrand, Kirsten E.";	
    name1.href = "https://www.gillibrand.senate.gov/contact/email-me";	
    phone1.innerHTML = "(202) 224-4451";	
    phone1.href = "tel:2022244451";	
    name2.innerHTML = "Schumer, Charles E.";
    name2.href = "https://www.schumer.senate.gov/contact/email-chuck";	
    phone2.innerHTML = "(202) 224-6542";	
    phone2.href = "tel:2022246542";	
    document.getElementById("img1").src = "assets/senators/NYK.jpg";	
    document.getElementById("img2").src = "assets/senators/NYC.jpg";

  } if (inputValue=="North Carolina"){ 	
    name1.innerHTML = "Burr, Richard";
    name1.href = "https://www.burr.senate.gov/contact/email";		
    phone1.innerHTML = "(202) 224-3154";	
    phone1.href = "tel:2022243154";	
    name2.innerHTML = "Tillis, Thom";	
    name2.href = "https://www.tillis.senate.gov/public/index.cfm/email-me";
    phone2.innerHTML = "(202) 224-6342";	
    phone2.href = "tel:2022246342";	
    document.getElementById("img1").src = "assets/senators/NCR.jpg";	
    document.getElementById("img2").src = "assets/senators/NCT.jpg";

  } if (inputValue=="North Dakota"){ 	
    name1.innerHTML = "Cramer, Kevin";
    name1.href = "https://www.cramer.senate.gov/contact/contact-kevin";		
    phone1.innerHTML = "(202) 224-2043";	
    phone1.href = "tel:2022242043";	
    name2.innerHTML = "Hoeven, John";
    name2.href = "http://www.hoeven.senate.gov/public/index.cfm/email-the-senator";	
    phone2.innerHTML = "(202) 224-2551";	
    phone2.href = "tel:2022242551";	
    document.getElementById("img1").src = "assets/senators/NDK.jpg";	
    document.getElementById("img2").src = "assets/senators/NDJ.jpg";	
  
  } if (inputValue=="Ohio"){ 	
    name1.innerHTML = "Brown, Sherrod";	
    name1.href = "http://www.brown.senate.gov/contact/";	
    phone1.innerHTML = "(202) 224-2315";	
    phone1.href = "tel:2022242315";	
    name2.innerHTML = "Portman, Rob";
    name2.href = "https://www.portman.senate.gov/public/index.cfm/contact?p=contact-form";	
    phone2.innerHTML = "(202) 224-3353";	
    phone2.href = "tel:2022243353";	
    document.getElementById("img1").src = "assets/senators/OHS.jpg";	
    document.getElementById("img2").src = "assets/senators/OHR.jpg";	

  } if (inputValue=="Oklahoma"){ 	
    name1.innerHTML = "Inhofe, James M.";	
    name1.href = "https://www.inhofe.senate.gov/contact";	
    phone1.innerHTML = "(202) 224-4721";	
    phone1.href = "tel:2022244721";	
    name2.innerHTML = "Lankford, James";
    name2.href = "http://www.lankford.senate.gov/contact/email";	
    phone2.innerHTML = "(202) 224-5754";	
    phone2.href = "tel:2022245754";	
    document.getElementById("img1").src = "assets/senators/OKJ.jpg";	
    document.getElementById("img2").src = "assets/senators/OKJL.jpg";	

  } if (inputValue=="Oregon"){ 	
    name1.innerHTML = "Merkley, Jeff";	
    name1.href = "http://www.merkley.senate.gov/contact/";	
    phone1.innerHTML = "(202) 224-3753";	
    phone1.href = "tel:2022243753";	
    name2.innerHTML = "Wyden, Ron";	
    name2.href = "https://www.wyden.senate.gov/contact/";
    phone2.innerHTML = "(202) 224-5244";	
    phone2.href = "tel:2022245244";	
    document.getElementById("img1").src = "assets/senators/ORJ.jpg";	
    document.getElementById("img2").src = "assets/senators/ORR.jpg";	

  } if (inputValue=="Pennsylvania"){ 	
    name1.innerHTML = "Casey, Robert P., Jr.";	
    name1.href = "https://www.casey.senate.gov/contact";	
    phone1.innerHTML = "(202) 224-6324";	
    phone1.href = "tel:2022246324";	
    name2.innerHTML = "Toomey, Patrick J.";
    name2.href = "https://www.toomey.senate.gov/?p=contact";	
    phone2.innerHTML = "(202) 224-4254";	
    phone2.href = "tel:2022244254";	
    document.getElementById("img1").src = "assets/senators/PAR.jpg";	
    document.getElementById("img2").src = "assets/senators/PAP.jpg";	
  
  } if (inputValue=="Rhode Island"){ 	
    name1.innerHTML = "Reed, Jack";	
    name1.href = "https://www.reed.senate.gov/contact/";	
    phone1.innerHTML = "(202) 224-4642";	
    phone1.href = "tel:2022244642";	
    name2.innerHTML = "Whitehouse, Sheldon";
    name2.href = "https://www.whitehouse.senate.gov/contact/email-sheldon";	
    phone2.innerHTML = "(202) 224-2921";	
    phone2.href = "tel:2022242921";	
    document.getElementById("img1").src = "assets/senators/RIJ.jpg";	
    document.getElementById("img2").src = "assets/senators/RIS.jpg";	

  } if (inputValue=="South Carolina"){ 	
    name1.innerHTML = "Graham, Lindsey";	
    name1.href = "https://www.lgraham.senate.gov/public/index.cfm/e-mail-senator-graham";	
    phone1.innerHTML = "(202) 224-5972";	
    phone1.href = "tel:2022245972";	
    name2.innerHTML = "Scott, Tim";	
    name2.href = "https://www.scott.senate.gov/contact/email-me";
    phone2.innerHTML = "(202) 224-6121";	
    phone2.href = "tel:2022246121";	
    document.getElementById("img1").src = "assets/senators/SCL.jpg";	
    document.getElementById("img2").src = "assets/senators/SCT.jpg";	

  } if (inputValue=="South Dakota"){ 	
    name1.innerHTML = "Rounds, Mike";	
    name1.href = "https://www.rounds.senate.gov/contact/email-mike";	
    phone1.innerHTML = "(202) 224-5842";	
    phone1.href = "tel:2022245842";	
    name2.innerHTML = "Thune, John";
    name2.href = "http://www.thune.senate.gov/public/index.cfm/contact";	
    phone2.innerHTML = "(202) 224-2321";	
    phone2.href = "tel:2022242321";	
    document.getElementById("img1").src = "assets/senators/SDM.jpg";	
    document.getElementById("img2").src = "assets/senators/SDJ.jpg";	

  } if (inputValue=="Tennessee"){ 	
    name1.innerHTML = "Blackburn, Marsha";	
    name1.href = "https://www.blackburn.senate.gov/email-me";	
    phone1.innerHTML = "(202) 224-3344";	
    phone1.href = "tel:2022243344";	
    name2.innerHTML = "Hagerty, Bill";
    name2.href = "https://www.hagerty.senate.gov/email-me/";	
    phone2.innerHTML = "(202) 224-4944";	
    phone2.href = "tel:2022244944";	
    document.getElementById("img1").src = "assets/senators/TNM.jpg";	
    document.getElementById("img2").src = "assets/senators/TNB.jpg";	

  } if (inputValue=="Texas"){ 	
    name1.innerHTML = "Cornyn, John";	
    name1.href = "https://www.cornyn.senate.gov/contact";	
    phone1.innerHTML = "(202) 224-2934";	
    phone1.href = "tel:2022242934";	
    name2.innerHTML = "Cruz, Ted";
    name2.href = "https://www.cruz.senate.gov/?p=form&id=16";	
    phone2.innerHTML = "(202) 224-5922";	
    phone2.href = "tel:2022245922";	
    document.getElementById("img1").src = "assets/senators/TXJ.jpg";	
    document.getElementById("img2").src = "assets/senators/TXT.jpg";

  } if (inputValue=="Utah"){ 	
    name1.innerHTML = "Lee, Mike";	
    name1.href = "https://www.lee.senate.gov/public/index.cfm/contact";	
    phone1.innerHTML = "(202) 224-5444";	
    phone1.href = "tel:2022245444";	
    name2.innerHTML = "Romney, Mitt";
    name2.href = "https://www.romney.senate.gov/contact-senator-romney";	
    phone2.innerHTML = "(202) 224-5251";	
    phone2.href = "tel:2022245251";	
    document.getElementById("img1").src = "assets/senators/UTM.jpg";	
    document.getElementById("img2").src = "assets/senators/UTMR.jpg";	
  
  } if (inputValue=="Vermont"){ 	
    name1.innerHTML = "Leahy, Patrick J.";
    name1.href = "https://www.leahy.senate.gov/contact/";		
    phone1.innerHTML = "(202) 224-4242";	
    phone1.href = "tel:2022244242";	
    name2.innerHTML = "Sanders, Bernard";
    name2.href = "http://www.sanders.senate.gov/contact/";	
    phone2.innerHTML = "(202) 224-5141";	
    phone2.href = "tel:2022245141";	
    document.getElementById("img1").src = "assets/senators/VTP.jpg";	
    document.getElementById("img2").src = "assets/senators/VTB.jpg";	

  } if (inputValue=="Virginia"){ 	
    name1.innerHTML = "Kaine, Tim";	
    name1.href = "https://www.kaine.senate.gov/contact";	
    phone1.innerHTML = "(202) 224-4024";	
    phone1.href = "tel:2022244024";	
    name2.innerHTML = "Warner, Mark R.";
    name2.href = "http://www.warner.senate.gov/public/index.cfm?p=Contact";	
    phone2.innerHTML = "(202) 224-2023";	
    phone2.href = "tel:2022242023";	
    document.getElementById("img1").src = "assets/senators/VAT.jpg";	
    document.getElementById("img2").src = "assets/senators/VAM.jpg";

  } if (inputValue=="Washington"){ 	
    name1.innerHTML = "Cantwell, Maria";
    name1.href = "http://www.cantwell.senate.gov/public/index.cfm/email-maria";		
    phone1.innerHTML = "(202) 224-3441";	
    phone1.href = "tel:2022243441";	
    name2.innerHTML = "Murray, Patty";	
    name2.href = "http://www.murray.senate.gov/public/index.cfm/contactme";
    phone2.innerHTML = "(202) 224-2621";	
    phone2.href = "tel:2022242621";	
    document.getElementById("img1").src = "assets/senators/WAM.jpg";	
    document.getElementById("img2").src = "assets/senators/WAP.jpg";	

  } if (inputValue=="West Virginia"){ 	
    name1.innerHTML = "Capito, Shelley Moore";
    name1.href = "https://www.capito.senate.gov/contact/contact-shelley";		
    phone1.innerHTML = "(202) 224-6472";	
    phone1.href = "tel:2022246472";	
    name2.innerHTML = "Manchin, Joe, III";
    name2.href = "http://www.manchin.senate.gov/public/index.cfm/contact-form";	
    phone2.innerHTML = "(202) 224-3954";	
    phone2.href = "tel:2022243954";	
    document.getElementById("img1").src = "assets/senators/WVS.jpg";	
    document.getElementById("img2").src = "assets/senators/WVJ.jpg";	

  } if (inputValue=="Wisconsin"){ 	
    name1.innerHTML = "Baldwin, Tammy";	
    name1.href = "https://www.baldwin.senate.gov/feedback";	
    phone1.innerHTML = "(202) 224-5653";	
    phone1.href = "tel:2022245653";	
    name2.innerHTML = "Johnson, Ron";
    name2.href = "https://www.ronjohnson.senate.gov/public/index.cfm/email-the-senator";	
    phone2.innerHTML = "(202) 224-5323";	
    phone2.href = "tel:2022245323";	
    document.getElementById("img1").src = "assets/senators/WIT.jpg";	
    document.getElementById("img2").src = "assets/senators/WIR.jpg";	

  }	
  if (inputValue=="Wyoming"){ 	
    name1.innerHTML = "Barrasso, John";	
    name1.href = "https://www.barrasso.senate.gov/public/index.cfm/contact-form";	
    phone1.innerHTML = "(202) 224-6441";	
    phone1.href = "tel:2022246441";	
    name2.innerHTML = "Lummis, Cynthia M.";
    name2.href = "https://www.lummis.senate.gov/";	
    phone2.innerHTML = "(202) 224-3424";	
    phone2.href = "tel:2022243424";	
    document.getElementById("img1").src = "assets/senators/WYJ.jpg";	
    document.getElementById("img2").src = "assets/senators/WYC.jpg";	

  }	
  	
}