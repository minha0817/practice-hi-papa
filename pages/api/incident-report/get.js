import query from "../../lib/db";

export default async function handler(req, res) {

  const incidentReports = await query({
    query: "SELECT * FROM INCIDENT_REPORTS;",
    values: []
  });

  //In return, it will send a response(res) as JSON
  //We can access to it http://localhost:3000/api/incident-report
  return res.status(200).json(incidentReports);
}


