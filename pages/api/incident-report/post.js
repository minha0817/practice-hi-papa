import query from "../../lib/db";


//It will receive req(submitted data)from a client.
export default async function handler(req, res) {

  const note = req.body.notes
  let message;

  const postIncidentReports = await query({
    query: "INSERT INTO INCIDENT_REPORTS (NOTE) VALUES (?);",
    values: [note],
  });


  if(postIncidentReports.insertId) {
    message = "success";
  } else {
    message = "error";
  }

  let incidentReport = {
    incidentReport_id: postIncidentReports.insertId,
    incidentReport_note: note,
  }
  //In return, it will send a response(res) as JSON
  //We can access to it http://localhost:3000/api/incident-report
  return res.status(200).json(incidentReport);
}

