import React from 'react'

const stylingObject = {
  form: {
    display: "flex",
    flexDirection: "column"
  }
}



export default function IncidentForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  //Example of POST form.
  // const form = e.target;
  // const formData = new FormData(form);

  // fetch('/some-api', { method: form.method, body: formData });



  return (
    <>
      <form style={stylingObject.form} method="post" onSubmit={handleSubmit}>
        <label>
          Time:
          <input type="text" name="time" />
        </label>
        <label>
          Notes:
          <textarea name="postContent" rows={10} cols={40} />
        </label>
        <label>
          Photo or Videos
          <button type='button'>Photos</button>
          <button type='button'>Videos</button>
        </label>
        <input type="submit" value="Submit" />
        <input type="submit" value="Save" />
        <input type="reset" value="Cancel" />
      </form>
    </>
  )
}
