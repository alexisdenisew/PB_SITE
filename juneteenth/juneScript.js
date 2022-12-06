function func1(){	
  var input = document.getElementById('state');	
  var inputValue = input.value;	
  var y = document.getElementById('info');	
  var name1 = document.getElementById('name1');	
  var name2 = document.getElementById('name2');	
  var nameA = document.getElementById('nameA');	
  var nameB = document.getElementById('nameB');	
  var phoneAA = document.getElementById('phoneAA');	
  var phoneBB = document.getElementById('phoneBB');	
  y.innerHTML = "How the bill(s) that were passed in " + inputValue + " effect voting in that state:";	

  if (inputValue=="AL"){ 	
    name1.innerHTML = "Shorten window to apply for a mail ballot.";
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.msnbc.com/opinion/black-americans-have-worse-voting-rights-now-1965-n1270384";		
    phoneB.innerHTML = "Support Alabama Voting Rights Project";	
    phoneB.href = "https://www.alabamavotingrights.com/";	
  
  } if (inputValue=="AR"){ 	
    name1.innerHTML = "Shorten window to apply for a mail ballot, Shorten deadline to deliver mail ballot, Restrict assistance in returning a voter’s mail ballot and Tighten or impose voter ID requirements for in-person voting.";	
    phoneA.innerHTML = "Learn more";	
    phoneA.href = "https://www.arkansasonline.com/news/2021/may/09/session-rolls-out-array-of-vote-laws/";
    phoneB.innerHTML = "Support ACLU AR";	
    phoneB.href = "https://action.aclu.org/webform/ar-voter-protection";	

  } if (inputValue=="AZ"){ 	
    name1.innerHTML = "Make it harder to remain on absentee voting lists and Impose stricter signature requirements for mail ballots.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://19thnews.org/2021/04/the-fight-over-voting-rights-comes-to-arizona/";	
    phoneB.innerHTML = "Support the Arizona Advocacy Network";	
    phoneB.href = "https://azadvocacy.org/voting-rights/";	
  
  } if (inputValue=="FL"){	
    name1.innerHTML = "Make it harder to remain on absentee voting lists, Eliminate or limit sending mail ballots to voters who do not specifically request them, Restrict assistance in returning a voter’s mail ballot, Limit the number, location, or availability of mail ballot drop boxes, Tighten or impose voter ID requirements for mail voting, Expand voter purges or risk faulty voter purges and Ban snacks and water to voters waiting in line.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.thestar.com/news/world/us/2021/06/14/florida-gets-another-legal-challenge-to-new-elections-rules.html";	
    phoneB.innerHTML = "Support the Florida Rights Restoration Coalition";	
    phoneB.href = "https://floridarrc.com/";	

  } if (inputValue=="GA"){	
    name1.innerHTML = "Shorten window to apply for a mail ballot, Eliminate or limit sending mail ballot applications to voters who do not specifically request them, Limit the number, location, or availability of mail ballot drop boxes, Tighten or impose voter ID requirements for mail voting, Ban snacks and water to voters waiting in line and Limit early voting days or hours.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.reuters.com/world/us/democrats-battle-republican-led-voting-curbs-georgia-2021-06-14/";	
    phoneB.innerHTML = "Support Stacey Abram's Fair Fight";	
    phoneB.href = "https://fairfight.com/";	

  } if (inputValue=="IA"){ 	
    name1.innerHTML = "Shorten window to apply for a mail ballot, Eliminate or limit sending mail ballot applications to voters who do not specifically request them, Restrict assistance in returning a voter’s mail ballot, Limit the number, location, or availability of mail ballot drop boxes, Expand voter purges or risk faulty voter purges, Reduce polling place availability (locations or hours)and Limit early voting days or hours.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://apnews.com/article/politics-donald-trump-iowa-election-2020-voting-rights-10866daa27d6bec923c6d2d0a636b9d5";	
    phoneB.innerHTML = "Support ACLU IA";	
    phoneB.href = "https://www.aclu-ia.org/en/issues/voting-rights";

  } if (inputValue=="ID"){ 	
    name1.innerHTML = "Impose stricter signature requirements for mail ballots.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.ktvb.com/article/news/local/208/idaho-supreme-court-voter-initiative-bill-hearing/277-4fd65960-beaa-46c5-87a4-b67f0ec4d4aa";	
    phoneB.innerHTML = "Support League of Women Voters of Idaho";	
    phoneB.href = "https://my.lwv.org/idaho";	

  } if (inputValue=="KS"){ 	
    name1.innerHTML = "Eliminate or limit sending mail ballot applications to voters who do not specifically request them, Restrict assistance in returning a voter’s mail ballot and Impose stricter signature requirements for mail ballots.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.kansascity.com/news/politics-government/article251832298.html";	
    phoneB.innerHTML = "Support League of Women Voters of Kansas";	
    phoneB.href = "https://lwvk.org/";
  
  } if (inputValue=="KY"){	
    name1.innerHTML = "Shorten window to apply for a mail ballot and Restrict assistance in returning a voter’s mail ballot, Expand voter purges or risk faulty voter purges.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.nbcnews.com/politics/elections/hope-federal-voting-rights-rescue-dims-state-democrats-advocates-turn-n1270480";
    phoneB.innerHTML = "Support ACLU KY";	
    phoneB.href = "https://www.aclu-ky.org/en/vote";

  } if (inputValue=="MT"){	
    name1.innerHTML = "Restrict assistance in returning a voter’s mail ballot, Tighten or impose voter ID requirements for mail voting, Tighten or impose voter ID requirements for in-person voting, Eliminate Election Day registration and Reduce polling place availability (locations or hours).";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.npr.org/2021/05/25/999904063/advocates-fear-montanas-new-ballot-law-could-harm-voters-who-struggle-to-be-hear";
    phoneB.innerHTML = "Support ACLU MT";	
    phoneB.href = "https://www.aclumontana.org/en/issues/voting-rights";		
    	
  } if (inputValue=="OK"){ 	
    name1.innerHTML = "Shorten window to apply for a mail ballot.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.reuters.com/world/us/vermont-kentucky-some-republicans-expand-voting-access-2021-2021-06-07/";
    phoneB.innerHTML = "Support Let Oklahoma Vote";	
    phoneB.href = "https://actionnetwork.org/groups/lpvok";		

  } if (inputValue=="IN"){ 	
    name1.innerHTML = "Limit the number, location, or availability of mail ballot drop boxes.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.theindianalawyer.com/articles/justice-department-will-review-gop-voting-laws";
    phoneB.innerHTML = "Support ACLU IN";	
    phoneB.href = "https://www.aclu-in.org/en/campaigns/yes-you-can-vote";		

  } if (inputValue=="UT"){ 	
    name1.innerHTML = "Expand voter purges or risk faulty voter purges.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.sltrib.com/news/politics/2021/05/17/democrats-are-pushing-big/";
    phoneB.innerHTML = "Support League of Women Voters of Utah";	
    phoneB.href = "https://www.lwvutah.org/";		

  } if (inputValue=="WY"){ 	
    name1.innerHTML = "Tighten or impose voter ID requirements for in-person voting.";	
    phoneA.innerHTML = "Learn More";	
    phoneA.href = "https://www.washingtonpost.com/politics/2021/06/02/state-voting-restrictions/";
    phoneB.innerHTML = "Support ACLU WY";	
    phoneB.href = "https://www.aclu-wy.org/en/issues/voting-rights";		

  } if (inputValue!=  "MT"&& inputValue!="ID"&&inputValue!="WY"&&inputValue!="UT"&&inputValue!="AZ"&&inputValue!="KS"&&inputValue!="OK"&&inputValue!="IA"&&inputValue!="AR"&&inputValue!="KY"&&inputValue!="AL"&&inputValue!="GA"&&inputValue!="FL"&&inputValue!="IN"){ 	
    name1.innerHTML = "Your state has not passed any bills since the 2020 election that further restrict voting rights, but that does not mean law makers aren't working hard to get them passed.";	
    phoneA.innerHTML = "Find out if your state is trying to pass restrictive voting laws.";	
    phoneA.href = "https://www.brennancenter.org/our-work/research-reports/voting-laws-roundup-may-2021#footnote15_50phgdt";	
    phoneB.innerHTML = "Support the ACLU";	
    phoneB.href = "https://www.aclu.org/issues/voting-rights";	
  }	
  if (inputValue=="AL"){ 	
    nameA.innerHTML = "Shelby, Richard C.";	
    phoneAA.innerHTML = "(202) 224-5744";	
    phoneAA.href = "tel:2022245744";	
    nameB.innerHTML = "Tuberville, Tommy";	
    phoneBB.innerHTML = "(202) 224-4124";	
    phoneBB.href = "tel:2022244124";	
  	
  } if (inputValue=="AK"){ 	
    nameA.innerHTML = "Murkowski, Lisa";	
    phoneAA.innerHTML = "(202) 224-6665";	
    phoneAA.href = "tel:2022246665";	
    nameB.innerHTML = "Sullivan, Dan";	
    phoneBB.innerHTML = "(202) 224-3004";	
    phoneBB.href = "tel:2022243004";	

  }if (inputValue=="AZ"){ 	
    nameA.innerHTML = "Kelly, Mark";	
    phoneAA.innerHTML = "(202) 224-2235";	
    phoneAA.href = "tel:2022242235";	
    nameB.innerHTML = "Sinema, Kyrsten";	
    phoneBB.innerHTML = "(202) 224-4521";	
    phoneBB.href = "tel:2022244521";	
  
  }if (inputValue=="AR"){	
    nameA.innerHTML = "Boozman, John";	
    phoneAA.innerHTML = "(202) 224-4843";	
    phoneAA.href = "tel:2022244843";	
    nameB.innerHTML = "Cotton, Tom";	
    phoneBB.innerHTML = "(202) 224-2353";	
    phoneBB.href = "tel:2022242353";

  } if (inputValue=="CA"){	
    nameA.innerHTML = "Feinstein, Dianne";	
    phoneAA.innerHTML = "(202) 224-3841";	
    phoneAA.href = "tel:2022243841";	
    nameB.innerHTML = "Padilla, Alex";	
    phoneBB.innerHTML = "(202) 224-3553";	
    phoneBB.href = "tel:2022243553";	
    
  } if (inputValue=="CO"){ 	
    nameA.innerHTML = "Bennet, Michael F.";	
    phoneAA.innerHTML = "(202) 224-5852";	
    phoneAA.href = "tel:2022245852";	
    nameB.innerHTML = "Hickenlooper, John W.";	
    phoneBB.innerHTML = "(202) 224-5941";	
    phoneBB.href = "tel:2022245941";

 }if (inputValue=="CT"){ 	
    nameA.innerHTML = "Blumenthal, Richard";	
    phoneAA.innerHTML = "(202) 224-2823";	
    phoneAA.href = "tel:2022242823";	
    nameB.innerHTML = "Murphy, Christopher";	
    phoneBB.innerHTML = "(202) 224-4041";	
    phoneBB.href = "tel:2022244041";	

  } if (inputValue=="DE"){ 	
    nameA.innerHTML = "Carper, Thomas R.";	
    phoneAA.innerHTML = "(202) 224-2441";	
    phoneAA.href = "tel:2022242441";	
    nameB.innerHTML = "Coons, Christopher A.";	
    phoneBB.innerHTML = "(202) 224-5042";	
    phoneBB.href = "tel:2022245042";	
  
   } if (inputValue=="FL"){	
    nameA.innerHTML = "Rubio, Marco";	
    phoneAA.innerHTML = "(202) 224-3041";	
    phoneAA.href = "tel:2022243041";	
    nameB.innerHTML = "Scott, Rick";	
    phoneBB.innerHTML = "(202) 224-5274";	
    phoneBB.href = "tel:2022245274";	

  } if (inputValue=="GA"){	
    nameA.innerHTML = "Ossoff, Jon";	
    phoneAA.innerHTML = "(202) 224-3521";	
    phoneAA.href = "tel:2022243521";	
    nameB.innerHTML = "Warnock, Raphael G.";	
    phoneBB.innerHTML = "(202) 224-3643"; 	
    phoneBB.href = "tel:2022243643";	
    	
  } if (inputValue=="HI"){ 	
    nameA.innerHTML = "Hirono, Mazie K.";	
    phoneAA.innerHTML = "(202) 224-6361";	
    phoneAA.href = "tel:2022246361";	
    nameB.innerHTML = "Schatz, Brian";	
    phoneBB.innerHTML = "(202) 224-3934";	
    phoneBB.href = "tel:2022243934";

  } if (inputValue=="ID"){ 	
    nameA.innerHTML = "Crapo, Mike";	
    phoneAA.innerHTML = "(202) 224-6142";	
    phoneAA.href = "tel:2022246142";	
    nameB.innerHTML = "Risch, James E.";	
    phoneBB.innerHTML = "(202) 224-2752";	
    phoneBB.href = "tel:2022242752";	

  } if (inputValue=="IL"){ 	
    nameA.innerHTML = "Duckworth, Tammy";	
    phoneAA.innerHTML = "(202) 224-2854";	
    phoneAA.href = "tel:2022242854";	
    nameB.innerHTML = "Durbin, Richard J.";	
    phoneBB.innerHTML = "(202) 224-2152";	
    phoneBB.href = "tel:2022242152";	

  } if (inputValue=="IN"){ 	
    nameA.innerHTML = "Braun, Mike";	
    phoneAA.innerHTML = "(202) 224-4814";	
    phoneAA.href = "tel:2022244814";	
    nameB.innerHTML = "Young, Todd";	
    phoneBB.innerHTML = "(202) 224-5623";	
    phoneBB.href = "tel:2022245623";	

  } if (inputValue=="IA"){ 	
    nameA.innerHTML = "Ernst, Joni";	
    phoneA.innerHTML = "(202) 224-3254";	
    phoneAA.href = "tel:2022243254";	
    nameB.innerHTML = "Grassley, Chuck";	
    phoneBB.innerHTML = "(202) 224-3744";	
    phoneBB.href = "tel:2022243744";	

  } if (inputValue=="KS"){ 	
    nameA.innerHTML = "Marshall, Roger";	
    phoneAA.innerHTML = "(202) 224-4774";	
    phoneAA.href = "tel:2022244774";	
    nameB.innerHTML = "Moran, Jerry";	
    phoneBB.innerHTML = "(202) 224-6521";	
    phoneBB.href = "tel:2022246521";	

  } if (inputValue=="KY"){ 	
    nameA.innerHTML = "McConnell, Mitch";	
    phoneAA.innerHTML = "(202) 224-2541";	
    phoneAA.href = "tel:2022242541";	
    nameB.innerHTML = "Paul, Rand";	
    phoneBB.innerHTML = "(202) 224-4343";	
    phoneBB.href = "tel:2022244343";	

  } if (inputValue=="LA"){ 	
    nameA.innerHTML = "Cassidy, Bill";	
    phoneAA.innerHTML = "(202) 224-5824";	
    phoneAA.href = "tel:2022245824";	
    nameB.innerHTML = "Kennedy, John";	
    phoneBB.innerHTML = "(202) 224-4623";	
    phoneBB.href = "tel:2022244623";	

  } if (inputValue=="ME"){ 	
    nameA.innerHTML = "Collins, Susan M.";	
    phoneAA.innerHTML = "(202) 224-2523";	
    phoneAA.href = "tel:2022242523";	
    nameB.innerHTML = "King, Angus S., Jr.";	
    phoneBB.innerHTML = "(202) 224-5344";	
    phoneBB.href = "2022245344";		

  } if (inputValue=="MD"){	
    nameA.innerHTML = "Cardin, Benjamin L.";	
    phoneAA.innerHTML = "(202) 224-4524";	
    phoneAA.href = "tel:2022244524";	
    nameB.innerHTML = "Van Hollen, Chris";	
    phoneBB.innerHTML = "(202) 224-4654";	
    phoneBB.href = "tel:2022244654";	
  
  } if (inputValue=="MA"){	
    nameA.innerHTML = "Markey, Edward J.";	
    phoneAA.innerHTML = "(202) 224-2742";	
    phoneAA.href = "tel:2022242742";	
    nameB.innerHTML = "Warren, Elizabeth";	
    phoneBB.innerHTML = "(202) 224-4543";	
    phoneBB.href = "tel:2022244543";	
  
  } if (inputValue=="MI"){ 	
    nameA.innerHTML = "Peters, Gary C.";	
    phoneAA.innerHTML = "(202) 224-6221";	
    phoneAA.href = "tel:2022246221";	
    nameB.innerHTML = "Stabenow, Debbie";	
    phoneBB.innerHTML = "(202) 224-4822";	
    phoneBB.href = "tel:2022244822";	
  
  } if (inputValue=="MN"){ 	
    nameA.innerHTML = "Klobuchar, Amy";	
    phoneAA.innerHTML = "(202) 224-3244";	
    phoneAA.href = "tel:2022243244";	
    nameB.innerHTML = "Smith, Tina";	
    phoneBB.innerHTML = "(202) 224-5641";	
    phoneBB.href = "tel:2022245641";	
  
  } if (inputValue=="MS"){ 	
    nameA.innerHTML = "Hyde-Smith, Cindy";	
    phoneAA.innerHTML = "(202) 224-5054";	
    phoneAA.href = "tel:2022245054";	
    nameB.innerHTML = "Wicker, Roger F.";	
    phoneBB.innerHTML = "(202) 224-6253";	
    phoneBB.href = "tel:2022246253";	
  
  } if (inputValue=="MO"){ 	
    nameA.innerHTML = "Blunt, Roy";	
    phoneAA.innerHTML = "(202) 224-5721";	
    phoneAA.href = "tel:2022245721";	
    nameB.innerHTML = "Hawley, Josh";	
    phoneBB.innerHTML = "(202) 224-6154";	
    phoneBB.href = "tel:2022246154";	

  } if (inputValue=="MT"){ 	
    nameA.innerHTML = "Daines, Steve";	
    phoneAA.innerHTML = "(202) 224-2651";	
    phoneAA.href = "tel:2022242651";	
    nameB.innerHTML = "Tester, Jon";	
    phoneBB.innerHTML = "(202) 224-2644";	
    phoneBB.href = "tel:2022242644";	

  } if (inputValue=="NE"){	
    nameA.innerHTML = "Fischer, Deb";	
    phoneAA.innerHTML = "(202) 224-6551";	
    phoneAA.href = "tel:2022246551";	
    nameB.innerHTML = "Sasse, Ben";	
    phoneBB.innerHTML = "(202) 224-4224";	
    phoneBB.href = "tel:2022244224";	
  
  } if (inputValue=="NV"){ 	
    nameA.innerHTML = "Cortez Masto, Catherine";	
    phoneAA.innerHTML = "(202) 224-3542";	
    phoneAA.href = "tel:2022243542";	
    nameB.innerHTML = "Rosen, Jacky";	
    phoneBB.innerHTML = "(202) 224-6244";	
    phoneBB.href = "tel:2022246244";	

  } if (inputValue=="NH"){ 	
    nameA.innerHTML = "Hassan, Margaret Wood";	
    phoneAA.innerHTML = "(202) 224-3324";	
    phoneAA.href = "tel:2022243324";	
    nameB.innerHTML = "Shaheen, Jeanne";	
    phoneBB.innerHTML = "(202) 224-2841";	
    phoneBB.href = "tel:2022242841";	

  } if (inputValue=="NJ"){ 	
    nameA.innerHTML = "Booker, Cory A.";	
    phoneAA.innerHTML = "(202) 224-3224";	
    phoneAA.href = "tel:2022243224";	
    nameB.innerHTML = "Menendez, Robert";	
    phoneBB.innerHTML = "(202) 224-4744";	
    phoneBB.href = "tel:2022244744";	
  
  } if (inputValue=="NM"){ 	
    nameA.innerHTML = "Heinrich, Martin";	
    phoneAA.innerHTML = "(202) 224-5521";	
    phoneAA.href = "tel:2022245521";	
    nameB.innerHTML = "Luján, Ben Ray";	
    phoneBB.innerHTML = "(202) 224-6621";	
    phoneBB.href = "tel:2022246621";	

  } if (inputValue=="NY"){ 	
    nameA.innerHTML = "Gillibrand, Kirsten E.";	
    phoneAA.innerHTML = "(202) 224-4451";	
    phoneAA.href = "tel:2022244451";	
    nameB.innerHTML = "Schumer, Charles E.";	
    phoneBB.innerHTML = "(202) 224-6542";	
    phoneBB.href = "tel:2022246542";	

  } if (inputValue=="NC"){ 	
    nameA.innerHTML = "Burr, Richard";	
    phoneAA.innerHTML = "(202) 224-3154";	
    phoneAA.href = "tel:2022243154";	
    nameB.innerHTML = "Tillis, Thom";	
    phoneBB.innerHTML = "(202) 224-6342";	
    phoneBB.href = "tel:2022246342";	

  } if (inputValue=="ND"){ 	
    nameA.innerHTML = "Cramer, Kevin";	
    phoneAA.innerHTML = "(202) 224-2043";	
    phoneAA.href = "tel:2022242043";	
    nameB.innerHTML = "Hoeven, John";	
    phoneBB.innerHTML = "(202) 224-2551";	
    phoneBB.href = "tel:2022242551";	
  
  } if (inputValue=="OH"){ 	
    nameA.innerHTML = "Brown, Sherrod";	
    phoneAA.innerHTML = "(202) 224-2315";	
    phoneAA.href = "tel:2022242315";	
    nameB.innerHTML = "Portman, Rob";	
    phoneBB.innerHTML = "(202) 224-3353";	
    phoneBB.href = "tel:2022243353";		

  } if (inputValue=="OK"){ 	
    nameA.innerHTML = "Inhofe, James M.";	
    phoneAA.innerHTML = "(202) 224-4721";	
    phoneAA.href = "tel:2022244721";	
    nameB.innerHTML = "Lankford, James";	
    phoneBB.innerHTML = "(202) 224-5754";	
    phoneBB.href = "tel:2022245754";	

  } if (inputValue=="OR"){ 	
    nameA.innerHTML = "Merkley, Jeff";	
    phoneAA.innerHTML = "(202) 224-3753";	
    phoneAA.href = "tel:2022243753";	
    nameB.innerHTML = "Wyden, Ron";	
    phoneBB.innerHTML = "(202) 224-5244";	
    phoneBB.href = "tel:2022245244";		

  } if (inputValue=="PA"){ 	
    nameA.innerHTML = "Casey, Robert P., Jr.";	
    phoneAA.innerHTML = "(202) 224-6324";	
    phoneAA.href = "tel:2022246324";	
    nameB.innerHTML = "Toomey, Patrick J.";	
    phoneBB.innerHTML = "(202) 224-4254";	
    phoneBB.href = "tel:2022244254";		
  
  } if (inputValue=="RI"){ 	
    nameA.innerHTML = "Reed, Jack";	
    phoneAA.innerHTML = "(202) 224-4642";	
    phoneAA.href = "tel:2022244642";	
    nameB.innerHTML = "Whitehouse, Sheldon";	
    phoneBB.innerHTML = "(202) 224-2921";	
    phoneBB.href = "tel:2022242921";		

  } if (inputValue=="SC"){ 	
    nameA.innerHTML = "Graham, Lindsey";	
    phoneAA.innerHTML = "(202) 224-5972";	
    phoneAA.href = "tel:2022245972";	
    nameB.innerHTML = "Scott, Tim";	
    phoneBB.innerHTML = "(202) 224-6121";	
    phoneBB.href = "tel:2022246121";	

  } if (inputValue=="SD"){ 	
    nameA.innerHTML = "Rounds, Mike";	
    phoneAA.innerHTML = "(202) 224-5842";	
    phoneAA.href = "tel:2022245842";	
    nameB.innerHTML = "Thune, John";	
    phoneBB.innerHTML = "(202) 224-2321";	
    phoneBB.href = "tel:2022242321";	

  } if (inputValue=="TN"){ 	
    nameA.innerHTML = "Blackburn, Marsha";	
    phoneAA.innerHTML = "(202) 224-3344";	
    phoneAA.href = "tel:2022243344";	
    nameB.innerHTML = "Hagerty, Bill";	
    phoneBB.innerHTML = "(202) 224-4944";	
    phoneBB.href = "tel:2022244944";	
  } if (inputValue=="TX"){ 	
    nameA.innerHTML = "Cornyn, John";	
    phoneAA.innerHTML = "(202) 224-2934";	
    phoneAA.href = "tel:2022242934";	
    nameB.innerHTML = "Cruz, Ted";	
    phoneBB.innerHTML = "(202) 224-5922";	
    phoneBB.href = "tel:2022245922";	

  } if (inputValue=="UT"){ 	
    nameA.innerHTML = "Lee, Mike";	
    phoneAA.innerHTML = "(202) 224-5444";	
    phoneAA.href = "tel:2022245444";	
    nameB.innerHTML = "Romney, Mitt";	
    phoneBB.innerHTML = "(202) 224-5251";	
    phoneBB.href = "tel:2022245251";	
  
  } if (inputValue=="VT"){ 	
    nameA.innerHTML = "Leahy, Patrick J.";	
    phoneAA.innerHTML = "(202) 224-4242";	
    phoneAA.href = "tel:2022244242";	
    nameB.innerHTML = "Sanders, Bernard";	
    phoneBB.innerHTML = "(202) 224-5141";	
    phoneBB.href = "tel:2022245141";		

  } if (inputValue=="VA"){ 	
    nameA.innerHTML = "Kaine, Tim";	
    phoneAA.innerHTML = "(202) 224-4024";	
    phoneAA.href = "tel:2022244024";	
    nameB.innerHTML = "Warner, Mark R.";	
    phoneBB.innerHTML = "(202) 224-2023";	
    phoneBB.href = "tel:2022242023";	

  } if (inputValue=="WA"){ 	
    nameA.innerHTML = "Cantwell, Maria";	
    phoneAA.innerHTML = "(202) 224-3441";	
    phoneAA.href = "tel:2022243441";	
    nameB.innerHTML = "Murray, Patty";	
    phoneBB.innerHTML = "(202) 224-2621";	
    phoneBB.href = "tel:2022242621";	

  } if (inputValue=="WV"){ 	
    nameA.innerHTML = "Capito, Shelley Moore";	
    phoneAA.innerHTML = "(202) 224-6472";	
    phoneAA.href = "tel:2022246472";	
    nameB.innerHTML = "Manchin, Joe, III";	
    phoneBB.innerHTML = "(202) 224-3954";	
    phoneBB.href = "tel:2022243954";	

  } if (inputValue=="WI"){ 	
    nameA.innerHTML = "Baldwin, Tammy";	
    phoneAA.innerHTML = "(202) 224-5653";	
    phoneAA.href = "tel:2022245653";	
    nameB.innerHTML = "Johnson, Ron";	
    phoneBB.innerHTML = "(202) 224-5323";	
    phoneBB.href = "tel:2022245323";	

  }	
  if (inputValue=="WY"){ 	
    nameA.innerHTML = "Barrasso, John";	
    phoneAA.innerHTML = "(202) 224-6441";	
    phoneAA.href = "tel:2022246441";	
    nameB.innerHTML = "Lummis, Cynthia M.";	
    phoneBB.innerHTML = "(202) 224-3424";	
    phoneBB.href = "tel:2022243424";	

  }	
}


    
  	
// }