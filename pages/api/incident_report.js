// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// child_id

// datetime

// description

// How to upload photo and videos?

// photo_url

// video_url

const temporaryIncidentReports = [
  {
    dateTime: "Fri Jun 17 2022 11:27:28 GMT+0100",
    description: "This child fell and bumped on the chair"
  },
  {
    dateTime: "Mon Jan 09 2023 11:27:28 GMT+0100",
    description: "This child got a scratch"  },
  {
    dateTime: "Tue Jan 10 2023 11:27:28 GMT+0100",
    description: "This child hit other friends"  },
];

export default function handler(req, res) {
  res.status(200).json(temporaryIncidentReports);
}
