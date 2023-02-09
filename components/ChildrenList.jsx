import React, {useState, useEffect} from "react";

const stylingObject = {
  outerDiv: {
    display: "flex",
    margin: 20,
  },
  innerDiv: {
    margin: 10
  },
  img: {
    width: 70, 
    height: 70, 
    borderRadius: "50%"
  }
}

export default function ChildrenList () {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('/api/children')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if(isLoading) return <p>Loading...</p>
  if(!data) return <p>No Children data</p>

  return (
    <div style={stylingObject.outerDiv}>
      {data && 
        data.map((item, index) => {
          return (
            <ul key={index} style={stylingObject.innerDiv}>
              <img src={item.url} style={stylingObject.img}></img>
              <p>{item.name}</p>
            </ul>
          )
        })
      }
    </div>
  )
}