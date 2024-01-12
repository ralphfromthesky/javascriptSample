var BetHistType = [
    {
      id: "sport",
      title: "SPORT BETTING ORDER",
      API: "/userCenter/third/sportRecord.do",
      tabs: [
        { cn717: "Platform / Order NO" },
        { cn709: "Betting time" },
        { cn393: "Account" },
        { cn710: "Odds" },
        { cn351: "Bet amount" },
        { cn532: "Betting amount" },
        { cn711: "Amount won or lost" },
        { cn712: "Acquisition time" },
        { cn309: "Status" },
        { cn713: "Betting content" },
      ],
    },
    {
      id: "egame",
      title: "Electronic betting order",
      API: "/userCenter/third/egameRecord.do",
      tabs: [
        { cn714: "Platform type" },
        { cn715: "Game type" },
        { cn716: "Betting Order No" },
        { cn304: "Account" },
        { cn718: "Round No" },
        { cn351: "Bet amount" },
        { cn532: "Betting amount" },
        { cn711: "Amount won or lost" },
        { cn712: "Acquisition time" },
      ],
    },
    {
      id: "prRecord",
      title: "PT electronic betting order",
      API: "/userCenter/third/ptRecord.do",
      tabs: [
        { cn715: "Game type" },
        { cn716: "Betting Order No" },
        { cn393: "Account" },
        { cn718: "Round No" },
        { cn351: "Bet amount" },
        { cn711: "Amount won or lost" },
        { cn712: "Acquisition time" },
      ],
    },
    {
      id: "live",
      title: "Live casino betting order",
      API: "/userCenter/third/liveRecord.do",
      tabs: [
        { cn714: "Platform type" },
        { cn715: "Game type" },
        { cn716: "Betting Order No" },
        { cn393: "Account" },
        { cn718: "Round No" },
        { cn351: "Bet amount" },
        { cn532: "Betting amount" },
        { cn711: "Amount won or lost" },
        { cn712: "Acquisition time" },
        { cn721: "Betting Content" },
      ],
    },
    {
      id: "chess",
      title: "Chess betting order",
      API: "/userCenter/third/chessRecord.do",
      tabs: [
        { cn714: "Platform type" },
        { cn715: "Game type" },
        { cn716: "Betting Order No" },
        { cn393: "Account" },
        { cn718: "Round No" },
        { cn351: "Bet amount" },
        { cn532: "Betting amount" },
        { cn711: "Amount won or lost" },
        { cn712: "Acquisition time" },
        { cn721: "Betting Content" },
      ],
    },
    {
      id: "esport",
      title: "E-sports betting order",
      API: "/userCenter/third/esportRecord.do",
      tabs: [
        { cn717: "Platform type/Order No" },
        { cn715: "Game type" },
        { cn709: "Betting time" },
        { cn393: "Account" },
        { cn722: "Play Method" },
        { cn710: "Odds" },
        { cn351: "Bet amount" },
        { cn532: "Betting amount" },
        { cn711: "Amount won or lost" },
        { cn721: "Betting content" },
      ],
    },
    {
      id: "fish",
      title: "Fishing betting order",
      API: "/userCenter/third/fishRecord.do",
      tabs: [
        { cn717: "Platform type/Order No" },
        { cn709: "Betting time" },
        { cn393: "Account" },
        { cn723: "Game name / Game type" },
        { cn718: "Round No" },
        { cn351: "Bet amount" },
        { cn532: "Betting amount" },
        { cn711: "Amount won or lost" },
      ],
    },
    {
      id: "lottery",
      title: "Lottery betting",
      API: "/userCenter/third/lotRecord.do",
      tabs: [
        { cn717: "Platform type/Order No" },
        { cn709: "Betting time" },
        { cn393: "Account" },
        { cn724: "Lottery name / Period number" },
        { cn725: "Play method" },
        { cn351: "Bet amount" },
        { cn532: "Betting amount" },
        { cn711: "Amount won or lost" },
        { cn309: "Status" },
        { cn721: "Betting Content" },
      ],
    },
  ];

  const prod = document.querySelector('.main');

for (let i = 0; i < BetHistType.length; i++) {
  const bet = BetHistType[i];

  const child1 = document.createElement('div');
  const child2 = document.createElement('div');
  const child3 = document.createElement('div');
  const child4 = document.createElement('div');

  child3.textContent = `title: ${bet.title}`;
  child2.innerHTML = `<h6>AI: ${bet.API}</h6>`;
  child1.innerText = `id: ${i + 1} - ${bet.id}`;
  child1.classList.add('firstChild');

  for (let j = 0; j < bet.tabs.length; j++) {
    const tab = bet.tabs[j];
    const tabElement = document.createElement('p');
    const tabContent = Object.values(tab)[0];
    const tabLabel = Object.keys(tab)[0];
    tabElement.textContent = `${tabLabel}: ${tabContent}`;
    child4.appendChild(tabElement);
  }

  prod.append(child1, child3, child2, child4);
}
