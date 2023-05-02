import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styles from "./ChildrenList.module.css";

export default function ChildrenList({ setChosenChildId }) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    getChildren()
  }, [])

  const getChildren = () => {
    setLoading(true)
    fetch('/api/children/get')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }

  const handleClickChildren = (childId) => {
    setChosenChildId(childId)
  }

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Children data</p>

  return (
    <Stack direction="row" spacing={2} className={styles.childrenlist}>
      <ul>
      {data &&
        data.map((item) => {
          return (
            <div key={item.CHILDREN_ID}>
              <button
                className={styles.childrenlist_button}
                onClick={() => {
                  handleClickChildren(item.CHILDREN_ID)
                }}
              >
                <Avatar
                  alt={item.CHILDREN_FIRST_NAME}
                  src={item.CHILDREN_PICTURE}
                  sx={{ width: 56, height: 56 }}
                />
              </button>
              <p className={styles.name}>{item.CHILDREN_FIRST_NAME}</p>
            </div>
          )
        })}
        </ul>
    </Stack>
  )
}
