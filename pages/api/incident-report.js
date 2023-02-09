// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// child_id

// datetime

// description

// How to upload photo and videos?

// photo_url

// video_url

const temporaryIncidentReports = [
  {
    // dateTime: "Fri Jun 17 2022 11:27:28 GMT+0100",
    notes: "This child fell and bumped on the chair"
  },
  {
    // dateTime: "Mon Jan 09 2023 11:27:28 GMT+0100",
    notes: "This child got a scratch"  },
  {
    // dateTime: "Tue Jan 10 2023 11:27:28 GMT+0100",
    notes: "This child hit other friends"  },
]

//It will receive req(submitted data)from a client.
export default function handler(req, res) {
  const notes = req.body.notes

  if(!notes) {
    return res.status(400).json("Incidents reports are not found")
  }

  if(notes) {
    return temporaryIncidentReports.push({notes})
  }

  //In return, it will send a response(res) as JSON
  //We can access to it http://localhost:3000/api/incident-report
  res.status(200).json(temporaryIncidentReports);
}
