pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const zones = {
  flowood: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogerdelta?locale=en&access_token=84b48ccb5d110b4d014a2f44d703d1d4&show_storefronts=true&store_code=00479",
    path: "ms/flowood",
  },
  dallas: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogerdallas?locale=en&access_token=dd4e54332cf80812e593f778d1a13868&show_storefronts=true&store_code=00526",
    path: "tx/richardson",
  },
  houston: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogersouthwest?locale=en&access_token=b30b14f19e822da7cc69bb7f5c249496&store_code=00150",
    path: "tx/houston",
  },
  kentucky: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogerlouisville?locale=en&access_token=b7f204beebb1666d4cad64adf5ab37a6&store_code=00774",
    path: "ky/louisville",
  },
  cincinnati: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogercincinnati?locale=en&access_token=4ebbe912b7d842dfcb6eee6417022d95&store_code=00390",
    path: "oh/cincinnati",
  },
  columbus: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogercolumbus?locale=en&access_token=48040ffa24e47d306ef94a71b0b208b7&show_storefronts=true&postal_code=75080&store_code=00942",
    path: "oh/columbus",
  },
  nashville: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogernashville?locale=en&access_token=5434b5ec885c1c3b2fe49a0260f84744&show_storefronts=true&postal_code=61614&store_code=00854",
    path: "tn/nashville",
  },
  virginia: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogermidatlantic?locale=en&access_token=37ef85f7add115eb1f7b9c870b5138f1&store_code=00504",
    path: "va/richmond",
  },
  atlanta: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogeratlanta?locale=en&access_token=8d4b50dbbfa6007e85b77ddeac867961&store_code=00636",
    path: "ga/atlanta",
  },
  michigan: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogermichigan?locale=en&access_token=90b70ec611f215b9db61a2a77fa938dd&show_storefronts=true&postal_code=48603&store_code=00738",
    path: "mi/saginaw",
  },
  illinois: {
    url: "https://dam.flippenterprise.net/flyerkit/publications/krogercentral?locale=en&access_token=b4fd9ba48a54993887670929ec0c5ece&show_storefronts=true&postal_code=61614&store_code=00917",
    path: "il/peoria",
  },
  tomthumb: {
    url: "https://api.flipp.com/flyerkit/v4.0/publications/tomthumb?access_token=f56887ada4be460fb13e028bf5de43f2&locale=en-US&postal_code=75080&store_code=2526",
    path: "https://coupons.tomthumb.com/weeklyad?cmpid=lp_tth_wkad_ylp",
  },
  // arizonaSmith: {
  //   url: "https://dam.flippenterprise.net/flyerkit/publications/smithsfoodanddrug?source=hosted2&locale=en&access_token=08afb47dca88689334e60150188b9b2e&show_storefronts=true&postal_code=84037&store_code=00277",
  //   path: "az/bullhead-city",
  // },
  // idahoSmith: {
  //   url: "https://dam.flippenterprise.net/flyerkit/publications/smithsfoodanddrug?source=hosted2&locale=en&access_token=08afb47dca88689334e60150188b9b2e&show_storefronts=true&postal_code=83318&store_code=00123",
  //   path: "id/burley",
  // },
  // montanaSmith: {
  //   url: "https://dam.flippenterprise.net/flyerkit/publications/smithsfoodanddrug?source=hosted2&locale=en&access_token=08afb47dca88689334e60150188b9b2e&show_storefronts=true&postal_code=59718&store_code=00170",
  //   path: "mt/bozeman",
  // },
  // newMexicoSmith: {
  //   url: "https://dam.flippenterprise.net/flyerkit/publications/krogercentral?locale=en&access_token=b4fd9ba48a54993887670929ec0c5ece&show_storefronts=true&postal_code=61614&store_code=00917",
  //   path: "nm/albuquerque",
  // },
  // vegasSmith: {
  //   url: "https://dam.flippenterprise.net/flyerkit/publications/smithsfoodanddrug?source=hosted2&locale=en&access_token=08afb47dca88689334e60150188b9b2e&show_storefronts=true&postal_code=89106&store_code=00377",
  //   path: "nv/las-vegas",
  // },
  // mormonSmith: {
  //   url: "https://dam.flippenterprise.net/flyerkit/publications/smithsfoodanddrug?source=hosted2&locale=en&access_token=08afb47dca88689334e60150188b9b2e&show_storefronts=true&postal_code=89106&store_code=00277",
  //   path: "ut/kaysville",
  // },
  // wyomingSmith: {
  //   url: "https://dam.flippenterprise.net/flyerkit/publications/smithsfoodanddrug?source=hosted2&locale=en&access_token=08afb47dca88689334e60150188b9b2e&show_storefronts=true&postal_code=82604&store_code=00185",
  //   path: "wy/casper",
  // },
};

const adsContainer = document.getElementById("ads");
const jumpMenu = document.getElementById("jump-menu");
const jumpMenuDesktop = document.getElementById("jump-menu-desktop");

const whitelist = ["flowood", "dallas"];

const renderAds = async (old = false) => {
  const promises = Object.keys(zones).map(async (zone) => {
    const response = await fetch(zones[zone].url).then((res) => res.json());
    const weeklyAds = response
      .filter((ad) => ad.flyer_type === "weekly" || ad.name === "Weekly Ad")
      .sort((a, b) => new Date(a.valid_to) - new Date(b.valid_to));
    console.log(`ads for ${zone}`, weeklyAds);
    const getBaseUrl = (z) => {
      if (z.includes("Smith")) {
        return "https://www.smithsfoodanddrug.com/stores/grocery/";
      }
      return "https://www.kroger.com/stores/grocery/";
    };

    const ad = !old ? weeklyAds.at(-1) : weeklyAds.at(0);

    const pdfUrl = ad.pdf_url;
    const start = formatDate(ad.valid_from);
    const end = formatDate(ad.valid_to);

    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    const pdfDocument = await loadingTask.promise;

    const zoneSection = document.createElement("div");
    zoneSection.id = zone;
    const zoneHeader = document.createElement("h1");
    zoneHeader.className = "text-2xl my-3";
    const zoneLink = document.createElement("a");
    zoneLink.className =
      "text-blue-500 underline hover:text-blue-700 transition font-semibold";
    zoneLink.href = getBaseUrl(zone) + zones[zone].path;
    zoneLink.target = "_blank";
    zoneLink.innerText = `${capitalize(zone)} ${start}-${end}`;
    zoneHeader.appendChild(zoneLink);
    zoneSection.appendChild(zoneHeader);

    const startPage = whitelist.includes(zone) ? 1 : 2;
    for (let pageNum = startPage; pageNum <= 4; pageNum++) {
      const page = await pdfDocument.getPage(pageNum);
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d", {
        willReadFrequently: true,
      });

      let viewport = page.getViewport({ scale: 1 });
      if (window.innerWidth < 768) {
        console.log("adjusting scale for window width", window.innerWidth);
        const scale = getScaleFromProps(
          viewport.width,
          viewport.height,
          pageNum
        );
        viewport = page.getViewport({ scale });
      }

      canvas.height = viewport.height;
      canvas.width = Math.min(viewport.width, window.innerWidth);
      canvas.pageNum = pageNum;

      if (canvas.width / canvas.height > 3) {
        //bullshit page
        continue;
      }

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      zoneSection.appendChild(canvas);
      adsContainer.appendChild(zoneSection);
      await page.render(renderContext).promise;
    }
    const li = document.createElement("li");
    li.className = "mb-2";
    const button = document.createElement("button");
    button.className = "text-blue-500";
    button.innerText = zone;
    button.onclick = () => handleJumpClick(zone);
    li.appendChild(button);
    jumpMenuDesktop.appendChild(li);
    const option = document.createElement("option");
    option.value = zone;
    option.innerText = zone;
    jumpMenu.appendChild(option);
  });

  await Promise.all(promises);

  // const iframeSrcs = [
  //   // "https://www.aldi.us/en/weekly-specials/our-weekly-ads/",
  //   "https://elranchoinc.com/weekly-ads-dallas/",
  //   "https://zionmarket.com/weeklysale?state=tx",
  // ];

  // iframeSrcs.forEach((src) => {
  //   const iframe = document.createElement("iframe");
  //   iframe.src = src;
  //   iframe.className = "w-full aspect-video";
  //   iframe.height = "900px";
  //   adsContainer.appendChild(iframe);
  // });
};

renderAds();

const formatDate = (d) => {
  const YYYYMMdd = d.split("T")[0].split("-");
  const month = YYYYMMdd[1];
  const day = YYYYMMdd[2];
  return `${month}/${day}`;
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const handleJumpClick = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const getScaleFromProps = (width, height, pageNum) => {
  if (pageNum === 1) return 0.6;
  return width > height ? 0.62 : 0.8;
};
