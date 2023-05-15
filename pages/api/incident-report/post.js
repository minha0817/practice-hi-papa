import query from "../../lib/db";


//It will receive req(submitted data)from a client.
export default async function handler(req, res) {

  const note = req.body.notes
  const chosenChildId = req.body.chosenChildId

  const postIncidentReports = await query({
    query: "INSERT INTO INCIDENT_REPORTS (NOTE, CHILD_ID) VALUES (?, ?)",
    values: [note, chosenChildId],
  });

  // const message = Boolean(postIncidentReports.insertId) ? "success" : "error";

  let incidentReport = {
    incidentReport_id: postIncidentReports.insertId,
    incidentReport_note: note,
  }
  //In return, it will send a response(res) as JSON
  //We can access to it http://localhost:3000/api/incident-report
  return res.status(200).json(incidentReport);
}

