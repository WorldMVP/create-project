import ejs from 'ejs';

const offlinePackage = `
{
  "//id": "离线包的 ID",
  "id": "<%= offlineId %>",

  "//name": "离线包的中文描述",
  "name": "<%= offlineName %>",

  "//appVersion": "需要依赖的安卓或者IOS APP 版本，可以是具体的版本，如 6.0.0.0，也可以是一个区间，如 0.0.0.0~9.9.9.9",
  "appVersion": {
    "ios": "6.0.0.0",
    "android": "6.0.0.0"
  }
}
`;
export default function generateOfflinePackage({ offlineId, offlineName }) {
  return ejs.render(offlinePackage, {
    offlineId,
    offlineName
  });
}
