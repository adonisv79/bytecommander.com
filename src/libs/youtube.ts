// import util from 'util';
// import axios from 'axios';
// import xml2js from 'xml2js';

// const parseXML = util.promisify(xml2js.parseString);


// interface YoutubeAuthor {
//   name: string[];
//   uri: string[];
// }

// export interface YoutubeVideoEntry {
//   videoId: string;
//   title: string;
//   link: string;
//   author: string;
//   published: string;
//   media: YoutubeVideoEntryMediaInfo;
// }

// interface YoutubeVideoEntryMediaInfo {
//   title: string;
//   thumbnail: {
//     url: string;
//     width: number;
//     height: number;
//   };
//   description: string;
// }

// export interface YoutubeFeedResult {
//   channelId?: string;
//   title?: string;
//   author?: YoutubeAuthor;
//   entries?: YoutubeVideoEntry[];
//   error?: Error;
// }

// export async function fetchChannelVideos(channelId: string): Promise<YoutubeFeedResult> {
//   const result = await axios.get(
//     `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
//       headers: {
//         'Access-Control-Allow-Origin': 'https://www.youtube.com'
//       }
//     });
//     if (!result?.data) {
//       return {};
//     }
//   const xml: any = parseXML(result.data);
//   const retval: YoutubeFeedResult = {
//     channelId: xml.feed['yt:channelId'][0],
//     title: xml.feed.title[0],
//     author: xml.feed.author[0],
//   };
//   if (result.data) {
//     retval.entries = [];
//     for (let i = 0; i < (xml.feed.entry || []).length; i += 1) {
//       retval.entries.push({
//         videoId: xml.feed.entry[i]['yt:videoId'][0],
//         title: xml.feed.entry[i].title[0],
//         link: xml.feed.entry[i].link[0],
//         author: xml.feed.entry[i].author[0],
//         published: xml.feed.entry[i].published[0],
//         media: {
//           title: xml.feed.entry[i]['media:group'][0]['media:title'][0],
//           thumbnail: {
//             url: xml.feed.entry[i]['media:group'][0]['media:thumbnail'][0].$.url,
//             width: parseInt(xml.feed.entry[i]['media:group'][0]['media:thumbnail'][0].$.width || 480, 10),
//             height: parseInt(xml.feed.entry[i]['media:group'][0]['media:thumbnail'][0].$.height || 360, 10),
//           },
//           description: xml.feed.entry[i]['media:group'][0]['media:description'][0],
//         },
//       });
//     }
//   }
//   return retval;
// }
