import React from "react";  

const stylingObject = {
  div: {
    display: "flex",
    alignItems: 'center',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    margin:10
  },

  span: {

  },
}
export default function User ({user: { photoURL, displayName }}) {
  return (
    <div style={stylingObject.div}>
      <img style={stylingObject.img} src={photoURL} alt={displayName}/>
      <span style={stylingObject.span}>{displayName}</span>
    </div>
  )
}