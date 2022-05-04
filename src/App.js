import React, { useState } from "react";
import VideoPlayer from "./Components/VIdeoPlayer/VideoPlayer";
import YTSearch from "./Components/Search/YTSearch";
import CreateComment from "./Components/CreateComment/CreateComment";
import CommentList from "./Components/CommentList/CommentList";

function App() {
  //  Establish state variables
  const [allComments, setAllComments] = useState([]);
  const [currentVideoID, setCurrentVideoIDComents] = useState("");
  const [YTresults, setYTResults] = useState([]);

  console.log(YTresults);

  //  Test API data
  const fakeSearchResults = () => {
    setYTResults([
      {
        kind: "youtube#searchResult",
        etag: "flCVxSU8rcZmWN3RpU-GGrOq-wA",
        id: {
          kind: "youtube#playlist",
          playlistId: "PLRsqIMOD4laVjkXBcFJjLVjW5upDU8LdB",
        },
        snippet: {
          publishedAt: "2019-07-21T17:29:34Z",
          channelId: "UCA63u-pH9UnGe5Jbi40Mkew",
          title: "Vinland Saga",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/L3O_-g2XsI0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/L3O_-g2XsI0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/L3O_-g2XsI0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Aleks",
          liveBroadcastContent: "none",
          publishTime: "2019-07-21T17:29:34Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "z_xXKhlPGla6xKXH9XU6_WLeqxs",
        id: {
          kind: "youtube#video",
          videoId: "HNkOso0PElE",
        },
        snippet: {
          publishedAt: "2022-03-03T09:00:14Z",
          channelId: "UCTspeLzWN-8Er715fFJL5rA",
          title: "Vinland Saga Episodes 1-12 | Full Screen English Dub",
          description:
            "Vinland Saga Episodes 1-12 | Full Screen English Dub . CASH DONATIONS VIA PAYPAL: https://www.paypal.me/itachithebeast .",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/HNkOso0PElE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/HNkOso0PElE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/HNkOso0PElE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "itachi the red flash",
          liveBroadcastContent: "none",
          publishTime: "2022-03-03T09:00:14Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "_-Mr6n0aW6BVaJjcx7M3L2J2LsQ",
        id: {
          kind: "youtube#video",
          videoId: "Kg2D1SrUw48",
        },
        snippet: {
          publishedAt: "2019-09-21T16:16:13Z",
          channelId: "UC93RWy6YfZIM2GKUpRn3SdA",
          title: "Thorfinn vs Thorkell (Vinland Saga)",
          description: "Episode 9.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Kg2D1SrUw48/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Kg2D1SrUw48/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Kg2D1SrUw48/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "POCKETSANDX",
          liveBroadcastContent: "none",
          publishTime: "2019-09-21T16:16:13Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "2vAOPkRe6XfJj9ibrGJDPVc98Oo",
        id: {
          kind: "youtube#video",
          videoId: "kDaC3RNurvA",
        },
        snippet: {
          publishedAt: "2021-07-07T18:08:23Z",
          channelId: "UCDYDdPJKBUfKXcZBw9qwMdw",
          title:
            "Vinland Saga Season 2 - Official Trailer Announcement | English Sub",
          description:
            '"Vinland Saga Season 2", the highly anticipated sequel by anime fans is finally here! Based on the original manga series, ...',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/kDaC3RNurvA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/kDaC3RNurvA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/kDaC3RNurvA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "JP Anime",
          liveBroadcastContent: "none",
          publishTime: "2021-07-07T18:08:23Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "oQflpNtJ5zstU37c25o0uqE9Kr8",
        id: {
          kind: "youtube#video",
          videoId: "lQVTFbE1NuM",
        },
        snippet: {
          publishedAt: "2021-09-01T07:26:46Z",
          channelId: "UCN_Sy8oB1pRbXY4EocadhiA",
          title:
            "Mercenary Episode 13   24 English Dub   Anime All Episode 1 English Dub   Full Screen HD mp4",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/lQVTFbE1NuM/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/lQVTFbE1NuM/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/lQVTFbE1NuM/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Anime Creeps 2",
          liveBroadcastContent: "none",
          publishTime: "2021-09-01T07:26:46Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "FvT3BnLgox0mNNfalHamJA-Wb5s",
        id: {
          kind: "youtube#video",
          videoId: "p_R5HgVZFcY",
        },
        snippet: {
          publishedAt: "2020-06-07T07:50:14Z",
          channelId: "UCYs2c9ceM_jaGwpyaajp30A",
          title: "Thorfinn vs thorkell 2nd duel - English sub (Vinland saga",
          description: "Like and subscribe for more anime uploads.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/p_R5HgVZFcY/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/p_R5HgVZFcY/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/p_R5HgVZFcY/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Anime Kishi",
          liveBroadcastContent: "none",
          publishTime: "2020-06-07T07:50:14Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "zBS4m2e5EgT4BMcZ3o0EOtoeEHo",
        id: {
          kind: "youtube#video",
          videoId: "1qk1BoGRM7c",
        },
        snippet: {
          publishedAt: "2019-09-18T22:06:00Z",
          channelId: "UC7dF9qfBMXrSlaaFFDvV_Yg",
          title: "Stop Sleeping on Vinland Saga.",
          description:
            "Read Vinland Saga today: https://global.bookwalker.jp/select/55/ Use Coupon Code Gigguk for $5 off! Now that one of my ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/1qk1BoGRM7c/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/1qk1BoGRM7c/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/1qk1BoGRM7c/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Gigguk",
          liveBroadcastContent: "none",
          publishTime: "2019-09-18T22:06:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "r2kvkgo5ic3ZU6Nx0YbRxGyS6f8",
        id: {
          kind: "youtube#video",
          videoId: "b5PrdAieeEY",
        },
        snippet: {
          publishedAt: "2019-12-08T23:20:12Z",
          channelId: "UCH1cRk-aF95q59VqiK_aeAA",
          title:
            "Vinland Saga | THORFINN AND LEIF REUNITE AFTER 10 YEARS (1080p)",
          description:
            "Vinland Saga Ep.21 Thorfinn and Leif reunite after 10 years only for Thorfinn to be a whiny little bitch :(",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/b5PrdAieeEY/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/b5PrdAieeEY/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/b5PrdAieeEY/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "mar zelle",
          liveBroadcastContent: "none",
          publishTime: "2019-12-08T23:20:12Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "csz0KJqQTOCRQmSUtwV-Ib8wyKg",
        id: {
          kind: "youtube#video",
          videoId: "zlupDnfDXtQ",
        },
        snippet: {
          publishedAt: "2020-02-25T14:39:08Z",
          channelId: "UCdjfcUw0LFDjGeCbyUx5cww",
          title:
            "[Vinland Saga] Thorfinn brings the captain&#39;s head to Askeladd",
          description:
            "Like rowing a boat, we enter the future backwards. All we see are the scenes of the past, and no one cannot see the views of ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/zlupDnfDXtQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/zlupDnfDXtQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/zlupDnfDXtQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Anime Saga",
          liveBroadcastContent: "none",
          publishTime: "2020-02-25T14:39:08Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "PtLgRu0q_MXIyEb0fY5hWx7ojVU",
        id: {
          kind: "youtube#video",
          videoId: "-OXPAi2FDVk",
        },
        snippet: {
          publishedAt: "2020-01-07T20:37:11Z",
          channelId: "UChk63g8OMInek7MSFZbLwyA",
          title: "Top 5 Fights of Thorfinn - Vinland Saga",
          description:
            "I do not own any of these clips! Thorfinn fighting scenes in Vinland Saga season 1. Thorfinn vs. Soldiers Thorfinn vs. Captain ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/-OXPAi2FDVk/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/-OXPAi2FDVk/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/-OXPAi2FDVk/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Void Ackerman",
          liveBroadcastContent: "none",
          publishTime: "2020-01-07T20:37:11Z",
        },
      },
    ]);
    console.log(setYTResults);
  };

  // A function to add comments
  function AddNewComment(comments) {
    // updating the Allcomments state variable
    setAllComments(comments);
    // console.log(comments);
  }

  return (
    <div>
      <button onClick={() => fakeSearchResults()}>Test Button</button>
      <YTSearch handleYTSearch={setYTResults} YTresults={YTresults} />
      <VideoPlayer />
      <CreateComment AddNewComment={AddNewComment} />
      <CommentList AllComments={allComments} />
    </div>
  );
}

export default App;
